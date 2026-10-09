# Unicornio Tango Weekend

A lightweight, multilingual event landing page for October 23–25, 2026 in Riga.

## Stack

- Static HTML
- CSS
- Vanilla JavaScript
- GitHub Pages

There are no dependencies or build tools. Each language is published as a static page at `/lv/`, `/ru/` and `/en/`.

## Local preview

On Windows, double-click `preview.cmd` in the project directory, or run it from PowerShell:

```powershell
.\preview.cmd
```

The launcher finds Node.js on `PATH`, in the Codex bundled runtime, or in the standard Windows installation directory. Double-clicking the launcher uses Command Prompt, so it does not load a PowerShell profile or require changing the PowerShell execution policy.

With Node.js 18.3 or later available on `PATH`, you can also run:

```sh
node scripts/serve.mjs
```

Open `http://localhost:8080/ru/` in your browser. The English and Latvian pages are at `/en/` and `/lv/`. Refresh the browser after editing files; stop the server with `Ctrl+C`.

If the server runs on a Raspberry Pi, allow access from another computer on the same network:

```sh
node scripts/serve.mjs --host 0.0.0.0
```

Open `http://<PI_IP>:8080/ru/` on that other computer. Do not launch a browser on the Pi. Use `--port 8081` if port 8080 is already in use.

## Update the site

Content and translations are stored in `script.js`. After editing them, regenerate the static HTML pages:

```sh
node scripts/generate-pages.mjs
```

The generated pages are committed to the repository and served directly by GitHub Pages. `runtime.js` controls the back-to-top button and a decorative unicorn that runs right when scrolling down and turns to run left when scrolling up. The animation stops when scrolling stops and is disabled with the system's reduced-motion setting. Its SVG is stored in `assets/unicorn-runner.svg` and included in all language pages by the generator.
