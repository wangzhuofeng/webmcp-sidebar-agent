# WebMCP Sidebar Agent（Chrome 扩展）

[English README](./README.md)

一个 Chrome 侧边栏扩展，用于在当前页面发现并调用 WebMCP functions（通过大模型 tool-calling）。

## 浏览器要求

截至 **2026 年 2 月 15 日**，本扩展依赖的 WebMCP 相关 API 建议在 **Chrome Canary** 中使用。

## 功能

- 发现当前标签页的 WebMCP functions
- 多轮 tool-calling 对话调用
- 支持 SiliconFlow（用户自填 API Key）
- 支持中英切换（`EN` / `中`）
- 支持卡片折叠布局
- 对话状态区可显示 token 用量（若模型返回 usage）

## 安装（Unpacked）

1. 打开 `chrome://extensions`
2. 开启 **开发者模式**
3. 点击 **加载已解压的扩展程序**
4. 选择目录：
   `/Users/mark/文稿 - Local/编程 Programming/webmcp-agent/chrome-webmcp-sidebar`

## 使用

1. 点击扩展图标打开 Sidebar
2. 填写 API Key，拉取并选择模型
3. 打开支持 WebMCP 的页面
4. 点击 **刷新 Functions**
5. 在对话框输入任务

## 服务商

- SiliconFlow（`https://api.siliconflow.cn/v1`）
  - `GET /models`
  - `POST /chat/completions`

## 说明

- API Key 存储在本机扩展本地存储
- 请勿将密钥提交到 Git
- 项目采用 MIT 协议
