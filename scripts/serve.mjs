import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { realpath, stat } from "node:fs/promises";
import { extname, isAbsolute, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

const { values } = parseArgs({
  options: {
    host: { type: "string", default: "127.0.0.1" },
    port: { type: "string", default: "8080" },
  },
});
const port = Number(values.port);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("Port must be an integer from 1 to 65535.");
}

const root = await realpath(fileURLToPath(new URL("../", import.meta.url)));
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

function isPublicPath(path) {
  const local = relative(root, path);
  return !isAbsolute(local) && !local.split(sep).some((part) => part.startsWith("."));
}

const server = createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end();
    return;
  }

  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    let path = resolve(root, `.${pathname}`);
    if (!isPublicPath(path)) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    let info = await stat(path);
    if (info.isDirectory()) {
      if (!pathname.endsWith("/")) {
        const url = new URL(request.url, "http://localhost");
        response.writeHead(301, { Location: `${url.pathname}/${url.search}` });
        response.end();
        return;
      }
      path = resolve(path, "index.html");
      info = await stat(path);
    }

    path = await realpath(path);
    if (!info.isFile() || !isPublicPath(path) || !contentTypes[extname(path)]) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": contentTypes[extname(path)],
      "Content-Length": info.size,
      "Cache-Control": "no-store",
    });
    if (request.method === "HEAD") {
      response.end();
      return;
    }
    const stream = createReadStream(path);
    stream.on("error", () => response.destroy());
    response.on("close", () => stream.destroy());
    stream.pipe(response);
  } catch (error) {
    response.writeHead(error instanceof URIError || error instanceof TypeError ? 400 : 404);
    response.end("Page unavailable");
  }
});

server.on("error", (error) => {
  console.error(`Cannot start preview: ${error.message}`);
  process.exitCode = 1;
});
server.listen(port, values.host, () => {
  console.log(`Preview: http://${values.host}:${port}/ru/`);
  console.log("Press Ctrl+C to stop. Refresh the browser after editing files.");
});
