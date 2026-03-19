---
layout: supplement
title: "AI Agent 工作流：讓 AI 自主完成多步驟任務"
icon: "🔄"
tag: "架構 · Agent"
tagline: "從單次問答到自主執行，AI 的下一個階段"
description: "AI Agent 是能夠自主規劃、使用工具、執行多步驟任務的 AI 系統。理解 ReAct 框架、Orchestrator-Worker 架構、工具呼叫機制，設計你的第一個 Agent 工作流。"
related_level: L2
---

## 從聊天到 Agent：差在哪裡？

**一般 AI 對話**：你問一個問題，AI 給一個答案。每次對話是獨立的。

**AI Agent**：你給一個目標，AI 自行規劃步驟、使用工具、執行任務、根據結果調整，直到完成目標。

> 對話是一問一答，Agent 是自主執行。

---

## Agent 的四個核心元素

### 1. 感知（Perception）
Agent 能接收的輸入：
- 文字、圖片、文件
- 工具執行的結果
- 環境回饋（成功 / 失敗 / 錯誤訊息）

### 2. 規劃（Planning）
Agent 如何分解任務：
- **ReAct 框架**：Reasoning（推理）+ Acting（行動），交替進行思考與執行
- **Chain of Thought**：把複雜問題拆成步驟逐步推理
- **Task Decomposition**：把大任務分解成可執行的子任務

### 3. 工具使用（Tool Use）
Agent 能呼叫的外部能力：
- 搜尋網路（Web Search）
- 執行程式碼（Code Execution）
- 讀寫檔案（File System）
- 呼叫 API（External Services）
- 操作瀏覽器（Browser Automation）

### 4. 記憶（Memory）
- **短期記憶**：當前對話的 context window
- **長期記憶**：向量資料庫（Vector DB）儲存的知識
- **工作記憶**：任務執行過程中的中間結果

---

## Orchestrator-Worker 架構

複雜任務通常用多個 Agent 協作：

```
Orchestrator（總協調）
├── Worker Agent A（負責研究）
├── Worker Agent B（負責撰寫）
└── Worker Agent C（負責審查）
```

**Orchestrator** 負責任務分配與結果整合，**Worker** 各自專注特定能力。

---

## 主流 Agent 框架

| 框架 | 特點 | 適合場景 |
|------|------|---------|
| **LangChain** | 最多社群資源、模組最豐富 | 快速原型、學習 |
| **LangGraph** | 有狀態的 Agent 圖形流程 | 複雜多步驟工作流 |
| **CrewAI** | 角色扮演式多 Agent 協作 | 模擬團隊協作 |
| **AutoGen** | Microsoft 出品，多 Agent 對話 | 企業場景 |
| **Claude Code** | Anthropic 出品，操作本地環境 | 開發自動化 |

---

## Human-in-the-Loop

Agent 不是完全自主，良好的設計會在關鍵節點等待人類確認：
- 執行危險操作前（刪除資料、發送郵件）
- 結果不確定時
- 需要創意判斷時

**Hitl（Human-in-the-Loop）** 是讓 Agent 可信賴、可落地的關鍵設計原則。

---

## 相關專有名詞

`AI Agent` `Autonomous Agent` `ReAct` `Chain of Thought` `Task Decomposition`
`Tool Use` `Function Calling` `Orchestrator` `Worker Agent` `Multi-Agent`
`LangChain` `LangGraph` `CrewAI` `AutoGen` `Vector DB`
`Human-in-the-Loop` `Agentic AI` `Context Window` `Memory`

> L2「Agent 工作流」課程中，我們會設計一個完整的 Orchestrator-Worker 架構，讓 AI 自主完成一個五步驟的工作任務。
