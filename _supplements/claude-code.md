---
layout: supplement
title: "Claude Code：AI 直接操作你的電腦"
icon: "💻"
tag: "工具 · 開發"
tagline: "不只是聊天，而是讓 AI 成為你的開發夥伴"
description: "Claude Code 是 Anthropic 推出的 terminal-based AI 開發工具，能直接讀寫檔案、執行指令、操作 Git，理解你的完整程式碼脈絡。"
related_level: L2
---

## 什麼是 Claude Code？

**Claude Code** 是 Anthropic 推出的 agentic coding 工具，在你的終端機（Terminal）裡直接運行。

它不是「問 AI 然後自己複製貼上」，而是 **AI 直接在你的工作環境裡行動**：

- 讀取你的程式碼檔案
- 修改、新增、刪除檔案
- 執行 shell 指令
- 操作 Git（commit、push、branch）
- 理解整個 codebase 的脈絡

> 過去：你問 AI → AI 給你答案 → 你自己動手
> 現在：你說需求 → Claude Code 直接幫你做完

---

## 與一般 AI 聊天工具的差異

| | ChatGPT / Claude.ai | Claude Code |
|---|---|---|
| **執行環境** | 瀏覽器對話框 | 你的終端機 |
| **能讀取檔案** | 需要手動上傳 | 直接讀整個專案 |
| **能修改檔案** | ❌ | ✅ |
| **能執行程式** | ❌ | ✅ |
| **理解 codebase** | 片段理解 | 全域理解 |
| **操作 Git** | ❌ | ✅ |

---

## 核心概念

### CLAUDE.md — AI 的工作說明書
在專案根目錄放一個 `CLAUDE.md`，告訴 Claude Code：
- 這個專案是做什麼的
- 使用哪些技術、框架
- 你的 coding 規範與偏好
- 不能碰哪些檔案

Claude Code 每次啟動都會先讀這份說明書。

### MCP（Model Context Protocol）
MCP 是讓 Claude Code 連接外部工具的標準協定，例如：
- 查詢資料庫
- 呼叫 API
- 操作瀏覽器
- 讀取 Slack / Notion

### Agentic Mode
Claude Code 的自主執行模式：給它一個任務目標，它會自行規劃步驟、執行、驗證結果，不需要你逐步指示。

---

## 適合哪些場景？

- **重複性操作**：批量重新命名、格式轉換、資料整理
- **快速原型**：「幫我做一個能做 X 的工具」，10 分鐘出來
- **程式碼理解**：接手別人的舊專案，快速理解架構
- **自動化腳本**：把 15 分鐘手動流程壓縮到 30 秒

---

## 相關專有名詞

`Claude Code` `Anthropic` `agentic coding` `CLAUDE.md` `MCP` `Model Context Protocol`
`terminal AI` `CLI AI` `codebase context` `tool use` `function calling`
`autonomous agent` `code generation` `refactoring`

> L2「Coding AI 與 API 串接」課程中，我們會實際安裝 Claude Code、設定 CLAUDE.md，並完成第一個自動化任務。
