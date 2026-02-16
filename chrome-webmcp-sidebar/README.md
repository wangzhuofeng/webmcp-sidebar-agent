# WebMCP Sidebar Agent (Chrome Extension)

[中文说明](./README.zh-CN.md)

A Chrome Sidebar extension for discovering and invoking WebMCP functions on the current page via LLM tool-calling.

## Browser Requirement

As of **February 15, 2026**, run this extension in **Chrome Canary** for WebMCP-related APIs used by this project.

## Features

- WebMCP function discovery from current tab
- Tool-calling chat loop (OpenAI-compatible API format)
- Provider system:
  - Built-in SiliconFlow
  - User-defined OpenAI-compatible providers (custom name + base URL)
- Chinese/English UI switch (`EN` / `中`)
- Collapsible sections for clean sidebar layout
- Chat status display with optional token usage summary

## Install (Unpacked)

1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the `chrome-webmcp-sidebar` folder in this project

## Usage

1. Open sidebar from extension icon
2. Choose provider (or add one in provider dropdown)
3. Enter API key and load/select model
4. Open a WebMCP-enabled page
5. Click **Refresh Functions**
6. Chat to call tools

## Model Providers

- Built-in:
  - SiliconFlow (`https://api.siliconflow.cn/v1`)
- Custom:
  - Any OpenAI-compatible base URL (for example `https://api.openai.com/v1`)
  - Per-provider API key and model are stored independently

## Notes

- API key is stored in extension local storage on your machine
- Do not commit secrets to Git
- This project is provided as-is under MIT License
