---
layout: supplement
title: "Agent 方案解析：gstack 模組架構"
icon: "🤖"
tag: "架構 · 進階"
tagline: "一個完整 Agent 方案的模組化解析"
description: "用 gstack 模組架構拆解一個可落地的 AI Agent 系統，理解每個模組的角色與邊界。大家都在瘋 Agent，但只有理解架構才能判斷何時該用、怎麼設計、為什麼會失敗。"
related_level: L3
---

## 為什麼要理解 Agent 架構？

市場上充斥著「AI Agent 教學」，但大多數都在教：
- 如何呼叫 API
- 如何寫 prompt
- 如何用某個框架的 demo

**沒有人教的是**：一個真正可以上線的 Agent 系統，背後有哪些模組？每個模組的邊界在哪？什麼情況會出問題？

> 「40% 的 Agentic AI 專案被放棄，原因是架構設計不良、成本失控、缺乏治理。」— Deloitte Tech Trends 2026

理解架構，才能在設計時做出正確的判斷。

---

## 什麼是 gstack？

**gstack**（Governance Stack）是一個用來描述 AI Agent 系統架構的模組化框架，由課程設計團隊基於 Agentic AI 系統實作經驗提煉整理，參考 Deloitte Tech Trends 2026 的治理框架分類與 IBM AI Agents 2025 的生產部署架構研究。

它把一個完整的 Agent 系統拆解成 5 個層次，每個層次有清楚的職責邊界：

```
┌─────────────────────────────────┐
│  G5  Governance & Audit        │  ← 治理層：誰負責？出錯怎麼辦？
├─────────────────────────────────┤
│  G4  Orchestration             │  ← 協調層：任務怎麼拆分、分配？
├─────────────────────────────────┤
│  G3  Tool & Memory             │  ← 工具層：Agent 能呼叫什麼？記得什麼？
├─────────────────────────────────┤
│  G2  Model & Reasoning         │  ← 模型層：用哪個 LLM？怎麼推理？
├─────────────────────────────────┤
│  G1  Input / Output Interface  │  ← 介面層：人怎麼跟 Agent 說話？
└─────────────────────────────────┘
```

---

## 五個模組詳解

### G1 — 介面層（Input/Output Interface）

**職責**：使用者與 Agent 的溝通界面

包含：
- 文字輸入（chat、命令列）
- 結構化輸入（表單、API 請求）
- 輸出格式（純文字、JSON、Markdown、程式碼）

**常見問題**：
- 輸入描述不清楚 → Agent 誤解任務
- 輸出格式不定 → 下游系統無法處理

---

### G2 — 模型層（Model & Reasoning）

**職責**：選用哪個語言模型、如何推理

核心決策：
- 模型選擇：Claude / GPT-4 / Gemini / 開源模型
- 推理策略：Chain-of-Thought、ReAct（Reason + Act）、Tree-of-Thought
- Context 管理：輸入 token 限制、上下文窗口策略

**2026 新趨勢**：Context Engineering — 不只是寫 prompt，而是設計整個 LLM 的資訊環境。

---

### G3 — 工具與記憶層（Tool & Memory）

**職責**：Agent 能用什麼工具、能記住什麼

工具類型：
| 工具類別 | 例子 |
|---------|------|
| 資料讀取 | 搜尋網頁、讀 PDF、查資料庫 |
| 資料寫入 | 寫入檔案、更新試算表、發 email |
| 程式執行 | 跑 Python、呼叫 API、git 操作 |
| 外部服務 | Slack、Notion、GitHub、Zapier |

記憶類型：
- **短期記憶**：當前對話上下文
- **長期記憶**：向量資料庫（RAG）
- **工作記憶**：任務執行過程中的暫存狀態

---

### G4 — 協調層（Orchestration）

**職責**：多個 Agent 或多個步驟的任務協調

設計模式：
- **Sequential**：A 做完交給 B
- **Parallel**：A、B 同時執行，C 整合結果
- **Supervisor**：主 Agent 分配子 Agent
- **Feedback Loop**：執行 → 評估 → 修正 → 再執行

**MCP（Model Context Protocol）** 在此層扮演關鍵角色：統一 Agent 與外部工具的溝通協定，讓工具的接入標準化。

---

### G5 — 治理層（Governance & Audit）

**職責**：確保 Agent 的行為可監控、可審計、可控制

包含：
- **授權控制**：Agent 被允許做什麼、不被允許做什麼
- **操作日誌**：每個動作記錄，可追溯
- **費用控管**：API 呼叫成本監控
- **安全閘道**：敏感操作需要人工確認
- **錯誤處理**：失敗時如何降級、如何通知

> 40% 的 Agent 專案失敗，大多在這一層出問題：沒有治理 = 沒有控制 = 無法信任。

---

## 一個完整例子：AI 新聞 Pipeline

用 gstack 解析一個真實的 Agent 系統（每日自動生成 AI 新聞摘要）：

| 層次 | 在此系統中 |
|------|-----------|
| **G1 介面** | cron 排程觸發，輸出 Markdown 格式文章 |
| **G2 模型** | Claude Sonnet（摘要）+ Gemini（配圖描述） |
| **G3 工具** | 網頁爬取、RSS 解析、Gemini 圖片生成 API、git commit |
| **G4 協調** | Sequential：抓取 → 摘要 → 生圖 → 發布 |
| **G5 治理** | 失敗重試（最多3次）、錯誤 Telegram 通知、503 區分 |

---

## 你的 Agent 卡在哪一層？

| 症狀 | 問題層 |
|------|--------|
| Agent 誤解任務需求 | G1 介面設計不清 |
| 推理過程跑偏 | G2 推理策略錯誤 |
| 找不到資料 / 記不住 | G3 記憶設計不足 |
| 多步驟任務中途卡住 | G4 協調邏輯缺失 |
| 出錯沒有告警 / 費用暴衝 | G5 治理缺失 |

---

## 下一步

理解了這個架構，你就能：

1. **評估**任何 Agent 工具（它解決了哪幾層的問題？）
2. **設計**自己的 Agent 系統（每層用什麼？）
3. **診斷**現有系統的問題（哪一層出了問題？）

> L3「Agent 框架深度實戰」課程中，我們會用 gstack 框架設計並實作一個完整的 Agent 方案，包含 MCP 工具整合、CLAUDE.md 設計、以及 Agent 框架的 G4/G5 層實作。
