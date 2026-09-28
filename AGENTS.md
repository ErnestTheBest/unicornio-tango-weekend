# Project instructions

## Raspberry Pi resource limits

This workspace runs on a resource-constrained Raspberry Pi.

- Do not launch Chromium, Chrome, or other local browsers, including headless mode.
- Do not run Playwright, Puppeteer, or other checks that launch a local browser.
- Use lightweight checks: source review, `node --check script.js`, `git diff --check`, and targeted translation/data consistency checks.
- If visual verification is needed, use a browser on another machine. Do not start one on this Pi.
