---
layout: supplement
title: "開發工作流三層架構"
icon: "🏗️"
tag: "架構 · 進階"
tagline: "Skills + Agents + Commands — 日常對話自動觸發，不用記指令"
description: "14 個 Agent、10 個 Command、16 條自動觸發規則，開發與研究雙軌統一工作流架構解析。"
related_level: L3
---

## 為什麼需要三層架構？

多數人用 AI 的方式是：**想到什麼問什麼，每次都要重新描述脈絡。**

三層架構解決的是另一個問題：**讓 AI 系統知道你在做什麼，在對的時機自動呼叫對的專家。**

> 日常對話 → 自動觸發對應 Agent（不用打指令）
> `/指令` → 串接多個 Agent 的完整工作流
> `agents.md` → 一個檔案控制所有觸發規則

---

## 三層全景

```
Layer 1 — Skills
  └ 可被呼叫的能力單元（如 pptx-design、code-reviewer 技能包）

Layer 2 — Agents（14 個專家）
  ├ 開發面：6 個 Agent（dev-orchestrator、code-reviewer、security-auditor...）
  └ 研究面：8 個 Agent（research-orchestrator、literature-researcher、paper-writer...）

Layer 3 — Commands（10 個一鍵指令）
  ├ 開發面：/dev-review、/ship-release、/qa-check、/security-scan、/plan-feature
  └ 研究面：/review-paper、/analyze-literature、/analyze-experiment、/prepare-submission、/respond-reviewers
```

---

## Layer 2：14 個專家 Agent

### 開發面（6 個）

| Agent | 職責 |
|-------|------|
| `dev-orchestrator` | 總協調員：分析任務，選擇工作流模式 |
| `code-reviewer` | 兩階段審查：CRITICAL + INFORMATIONAL |
| `security-auditor` | 安全掃描、漏洞偵測、secret 偵測 |
| `qa-tester` | QA 測試、健康度評分（8 維度） |
| `release-engineer` | 發布流程、版本管理、PR 建立 |
| `planner` | 功能規劃、實作分解、依賴分析 |

### 研究面（8 個）

| Agent | 職責 |
|-------|------|
| `research-orchestrator` | 協調研究任務，分配研究專家 |
| `literature-researcher` | 文獻分析、Research Gap 識別 |
| `paper-writer` | 論文撰寫、潤稿、學術英文 |
| `citation-checker` | 引用驗證、BibTeX 健檢 |
| `paper-reviewer` | 論文審查、七維度評分 |
| `data-validator` | 數據品質、結果一致性驗證 |
| `stats-validator` | 統計檢驗、p-value、效果量 |
| `submission-helper` | 投稿準備、Cover Letter、審稿回覆 |

---

## 自動觸發規則（16 條）

不需要打指令，系統根據你說的話自動比對觸發：

### 開發情境

| 你說了什麼 | 自動呼叫 | 執行動作 |
|-----------|---------|---------|
| 寫完或修改程式碼 | `code-reviewer` | 兩階段審查（CRITICAL + INFO） |
| 複雜功能需求 | `planner` | 規劃實作方案 |
| 架構決策 | `architect` | 系統設計分析 |
| 新功能或 bug fix | `tdd-guide` | TDD 流程引導 |
| 提到「發布」「push」「PR」 | `release-engineer` | 發布流程 |
| 提到「安全」「掃描」 | `security-auditor` | 安全掃描 |
| 提到「測試」「品質」 | `qa-tester` | 品質檢查 |
| 提到「回顧」「這週做了什麼」 | `retro-analyst` | Git 歷史分析 |

### 研究情境

| 你說了什麼 | 自動呼叫 | 執行動作 |
|-----------|---------|---------|
| 提到「論文」「審查」「review」 | `paper-reviewer` | 七維度評分 + 問題分級 |
| 提到「文獻」「research gap」 | `literature-researcher` | 文獻分析 + Gap 識別 |
| 提到「寫論文」「潤稿」 | `paper-writer` | 撰寫、潤稿、英文改寫 |
| 提到「引用」「bib」 | `citation-checker` | 引用驗證、BibTeX 健檢 |
| 提到「數據」「結果驗證」 | `data-validator` | 數據品質 + 一致性 |
| 提到「統計」「p-value」 | `stats-validator` | 統計分析 + 顯著性 |
| 提到「投稿」「cover letter」 | `submission-helper` | 投稿準備 + 回覆審稿 |
| 複雜研究任務（多步驟） | `research-orchestrator` | 協調多個研究 Agent |

---

## Layer 3：10 個一鍵 Command

Command 是**串接多個 Agent 的完整工作流**，一個指令觸發一整條流水線：

### 開發 Commands

| Command | 串接流程 | 說明 |
|---------|---------|------|
| `/dev-review` | security-auditor → code-reviewer → qa-tester | 全面審查：安全 → 品質 → 測試 |
| `/ship-release` | qa-tester → code-reviewer → security-auditor → release-engineer | 一鍵發布，含人工確認 |
| `/qa-check` | qa-tester | 自動偵測專案類型，健康度評分 |
| `/security-scan` | security-auditor | 安全掃描 + 漏洞報告 |
| `/plan-feature` | architect → planner → tdd-guide | 功能規劃：設計 → 分解 → TDD |

### 研究 Commands

| Command | 串接流程 | 說明 |
|---------|---------|------|
| `/review-paper` | citation-checker → data-validator → paper-reviewer | 全面審查：引用 → 數據 → 七維度評分 |
| `/analyze-literature` | literature-researcher | 文獻分類 + Gap 識別 + Related Work |
| `/analyze-experiment` | data-validator → stats-validator | 數據品質 → 統計分析 |
| `/prepare-submission` | paper-reviewer → submission-helper | 投稿準備：審查 → Cover Letter |
| `/respond-reviewers` | submission-helper | 審稿回覆信撰寫 |

---

## 如何運作

```
使用者輸入：「幫我審查這篇論文」
    ↓
Claude 讀取 agents.md
    ↓
比對 16 條自動觸發規則
    ↓
自動呼叫：citation-checker → data-validator → paper-reviewer
    ↓
產出：引用驗證報告 + 數據一致性 + 七維度評分
```

觸發規則全部定義在 `agents.md` 這一個檔案中，修改規則、新增 Agent，只需要改這一個地方。

---

## 安裝方式

```bash
cd ~/Desktop/dev-workflow-package
./install.sh
```

自動複製到：
- `~/.claude/agents/`（14 個 Agent）
- `~/.claude/commands/`（10 個 Command）

> L3「Agent 框架深度實戰」課程中，我們會實際安裝這套工作流，並從零開始設計屬於你的自動觸發規則，理解三層架構的設計邏輯。
