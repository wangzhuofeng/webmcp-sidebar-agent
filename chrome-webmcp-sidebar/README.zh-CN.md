# WebMCP Sidebar Agent（Chrome 扩展）

[English README](./README.md)

一个 Chrome 侧边栏扩展，用于在当前页面发现并调用 WebMCP functions（通过大模型 tool-calling）。

## 浏览器要求

截至 **2026 年 2 月 15 日**，本扩展依赖的 WebMCP 相关 API 建议在 **Chrome Canary** 中使用。

## 功能

- 发现当前标签页的 WebMCP functions
- 多轮 tool-calling 对话调用
- 模型服务商系统：
  - 内置硅基流动
  - 支持添加 OpenAI 兼容自定义服务商（自定义名称 + Base URL）
- 支持中英切换（`EN` / `中`）
- 支持卡片折叠布局
- 对话状态区可显示 token 用量（若模型返回 usage）

## 安装（Unpacked）

1. 打开 `chrome://extensions`
2. 开启 **开发者模式**
3. 点击 **加载已解压的扩展程序**
4. 选择当前项目中的 `chrome-webmcp-sidebar` 目录

## 使用

1. 点击扩展图标打开 Sidebar
2. 选择服务商（可在下拉中新增）
3. 填写 API Key，拉取并选择模型
4. 打开支持 WebMCP 的页面
5. 点击 **刷新 Functions**
6. 在对话框输入任务

## 模型服务商说明

- 内置服务商：
  - 硅基流动（`https://api.siliconflow.cn/v1`）
- 自定义服务商：
  - 任意 OpenAI 兼容 Base URL（例如 `https://api.openai.com/v1`）
  - 按服务商独立保存 API Key 和已选模型

## 说明

- API Key 存储在本机扩展本地存储
- 请勿将密钥提交到 Git
- 项目采用 MIT 协议
