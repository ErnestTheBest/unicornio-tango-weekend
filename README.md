# Unicornio Tango Weekend

A lightweight, multilingual event landing page for October 23–25, 2026 in Riga.

## Stack

- Static HTML
- CSS
- Vanilla JavaScript
- GitHub Pages

There are no dependencies, build tools or server processes. Each language is published as a static page at `/lv/`, `/ru/` and `/en/`.

## Update the site

Content and translations are stored in `script.js`. After editing them, regenerate the static HTML pages:

```sh
node scripts/generate-pages.mjs
```

The generated pages are committed to the repository and served directly by GitHub Pages. `runtime.js` only controls the back-to-top button in the browser.
