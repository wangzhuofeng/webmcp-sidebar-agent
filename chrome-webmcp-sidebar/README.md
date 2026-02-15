# WebMCP Sidebar Agent (Chrome Extension)

A Chrome Sidebar extension for discovering and invoking WebMCP functions on the current page via LLM tool-calling.

## Features

- WebMCP function discovery from current tab
- Tool-calling chat loop (OpenAI-compatible API format)
- SiliconFlow provider support (user-provided API key)
- Chinese/English UI switch (`EN` / `中`)
- Collapsible sections for clean sidebar layout
- Chat status display with optional token usage summary

## Install (Unpacked)

1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select this folder:
   `/Users/mark/文稿 - Local/编程 Programming/webmcp-agent/chrome-webmcp-sidebar`

## Usage

1. Open sidebar from extension icon
2. Enter API key and load/select model
3. Open a WebMCP-enabled page
4. Click **Refresh Functions**
5. Chat to call tools

## Provider

- SiliconFlow (`https://api.siliconflow.cn/v1`)
  - `GET /models`
  - `POST /chat/completions`

## Notes

- API key is stored in extension local storage on your machine
- Do not commit secrets to Git
- This project is provided as-is under MIT License
