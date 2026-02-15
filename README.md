# WebMCP Sidebar Agent

Open-source Chrome Extension (Manifest V3) that provides a sidebar chat UI to discover and call page WebMCP functions.

## What It Does

- Displays available WebMCP functions from the current tab
- Connects to LLM provider APIs (currently SiliconFlow)
- Runs multi-turn tool-calling chat against page functions
- Supports Chinese/English UI switch (`EN` / `中`)
- Supports collapsible sidebar sections and compact chat status display

## Project Structure

- `chrome-webmcp-sidebar/` Chrome extension source
- `chrome-webmcp-sidebar/manifest.json` extension manifest
- `chrome-webmcp-sidebar/sidepanel.*` sidebar UI and logic
- `chrome-webmcp-sidebar/content.js` bridge script
- `chrome-webmcp-sidebar/injected.js` page-side WebMCP adapter

## Quick Start (Local)

1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select:
   `/Users/mark/文稿 - Local/编程 Programming/webmcp-agent/chrome-webmcp-sidebar`

## Publish to GitHub

See steps in `CONTRIBUTING.md` section: **Repository Setup & Publish**.

## License

MIT. See `LICENSE`.
