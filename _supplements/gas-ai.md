---
layout: supplement
title: "GAS × AI API：讓 Google 試算表直接呼叫 AI"
icon: "⚙️"
tag: "工具 · 自動化"
tagline: "在儲存格裡輸入 =ASK_AI()，AI 幫你填答案"
description: "Google Apps Script（GAS）串接 AI API，讓 Google Sheets、Gmail、Calendar 直接呼叫 Claude 或 OpenAI，零成本自動化你的 Google 工作區。"
related_level: L2
---

## 什麼是 GAS × AI？

**Google Apps Script（GAS）** 是 Google 內建的自動化腳本工具，不需要架設伺服器，直接在瀏覽器裡寫 JavaScript，就能操作所有 Google 服務。

當 GAS 串接 **AI API**（Claude API / OpenAI API / Gemini API），你的 Google 工作區就有了 AI 能力：

- Google Sheets 儲存格裡直接呼叫 AI
- Gmail 自動分類、摘要、草稿回信
- Google Calendar 自動安排行程
- Google Docs 批量潤稿

> 不需要寫後端，不需要部署伺服器，用你已經有的 Google 帳號就能跑。

---

## 核心場景

### 試算表 AI 函式
自訂一個 `=ASK_AI("問題")` 函式，在任何儲存格呼叫 AI：

- `=ASK_AI("幫我把這段文字翻譯成英文: " & A1)`
- `=ASK_AI("判斷這則評論的情緒（正面/負面/中性）: " & B2)`
- `=SUMMARIZE(C1:C100)` — 批量摘要 100 筆資料

### 自動化工作流
- 每天早上 9 點自動抓新聞摘要發到 Gmail
- 客戶填表單 → AI 自動分類 → 寫回 Sheets → 發通知信
- 會議記錄貼進 Docs → AI 自動整理行動項目

---

## 技術概念

### API 呼叫
GAS 透過 `UrlFetchApp` 呼叫外部 API，支援：
- **Anthropic API**（Claude 系列）
- **OpenAI API**（GPT 系列）
- **Google Gemini API**（免費額度最高）

### clasp（本地開發工具）
**clasp** 是 Google 官方的 GAS 本地開發工具，讓你用 VS Code 寫 GAS，再同步到雲端，搭配 Claude Code 使用效果最佳。

### Trigger（觸發器）
GAS 的排程執行機制：
- 時間觸發：每小時、每天、每週
- 事件觸發：表單送出、試算表編輯
- HTTP 觸發：當成 webhook 使用

---

## 與其他自動化工具的定位

| 工具 | 適合場景 | 技術門檻 |
|------|---------|---------|
| **GAS** | Google 工作區深度整合 | 低（JavaScript） |
| **Zapier / Make** | 跨平台 SaaS 串接 | 最低（無程式碼） |
| **Python 腳本** | 資料處理、批量作業 | 中 |
| **n8n** | 自建自動化平台 | 中高 |

---

## 相關專有名詞

`Google Apps Script` `GAS` `clasp` `UrlFetchApp` `Trigger`
`Anthropic API` `OpenAI API` `Gemini API` `Google Sheets AI`
`自動化工作流` `webhook` `Spreadsheet function` `Apps Script IDE`

> L2「Coding AI 與 API 串接」課程中，我們會從零建立 GAS AI 函式，直接在 Google Sheets 裡呼叫 Claude API。
