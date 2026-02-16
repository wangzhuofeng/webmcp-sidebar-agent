# WebMCP Sidebar Agent

[English README](./README.md)

一个开源的 Chrome 扩展（Manifest V3），在侧边栏中提供对话界面，用于发现并调用当前网页的 WebMCP functions。

## 浏览器要求

截至 **2026 年 2 月 15 日**，本项目依赖的部分 WebMCP 相关 API/行为需要在 **Chrome Canary** 中使用。

## 功能

- 展示当前标签页可用的 WebMCP functions
- 连接大模型服务商 API（内置 SiliconFlow + 可自定义 OpenAI 兼容服务商）
- 通过多轮 tool-calling 对话调用页面函数
- 支持中英双语界面切换（`EN` / `中`）
- 支持卡片折叠布局与紧凑状态展示

## 项目结构

- `chrome-webmcp-sidebar/` 扩展源码
- `chrome-webmcp-sidebar/manifest.json` 扩展清单
- `chrome-webmcp-sidebar/sidepanel.*` 侧边栏 UI 与逻辑
- `chrome-webmcp-sidebar/content.js` 桥接脚本
- `chrome-webmcp-sidebar/injected.js` 页面侧 WebMCP 适配脚本

## 本地安装（Unpacked）

1. 打开 `chrome://extensions`
2. 开启 **开发者模式**
3. 点击 **加载已解压的扩展程序**
4. 选择当前项目中的 `chrome-webmcp-sidebar` 目录

## 发布到 GitHub

请参考 `CONTRIBUTING.md` 中的 **Repository Setup & Publish** 章节。

## 许可证

MIT，见 `LICENSE`。
