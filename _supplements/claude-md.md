---
layout: supplement
title: "CLAUDE.md：給 AI 的專案說明書"
icon: "📋"
tag: "工具 · Claude Code"
tagline: "一份文件，讓 AI 永遠知道它在哪個專案、該怎麼工作"
description: "CLAUDE.md 是 Claude Code 的專案配置文件，定義 AI 的工作規則、技術背景、禁止事項。寫好一份 CLAUDE.md，等於給 AI 一位資深同事的入職說明。"
related_level: L3
---

## 為什麼需要 CLAUDE.md？

每次打開 Claude Code 操作新專案，AI 都要重新理解：
- 這個 codebase 是做什麼的？
- 用什麼語言、框架、規範？
- 哪些檔案不能動？
- 測試怎麼跑？部署怎麼做？

**CLAUDE.md** 就是解決這個問題的：把這些背景一次寫清楚，放在專案根目錄，Claude Code 每次啟動都會自動讀取。

---

## CLAUDE.md 的結構

一份好的 CLAUDE.md 通常包含：

### 專案概覽
```markdown
# 專案名稱

## 這是什麼
一句話說明這個專案做什麼。

## 技術棧
- 前端：React 18 + TypeScript
- 後端：FastAPI + Python 3.11
- 資料庫：PostgreSQL + Redis
- 部署：Docker + GitHub Actions
```

### 常用指令
```markdown
## 常用指令
- 啟動開發環境：`npm run dev`
- 跑測試：`pytest tests/`
- 部署：`./scripts/deploy.sh`
```

### 工作規範
```markdown
## 工作規範
- 所有函式必須有 type hints
- 新功能必須先寫測試（TDD）
- 禁止直接 commit 到 main branch
```

### 禁止事項
```markdown
## 禁止事項
- 不要修改 `config/production.env`
- 不要刪除 `migrations/` 下的任何檔案
- API key 只能放在 `.env`，不能 hardcode
```

---

## CLAUDE.md 的層級結構

Claude Code 支援多層級的 CLAUDE.md：

```
專案根目錄/
├── CLAUDE.md          ← 全專案規則
├── frontend/
│   └── CLAUDE.md      ← 前端專屬規則
└── backend/
    └── CLAUDE.md      ← 後端專屬規則
```

下層的規則會繼承上層，並可以覆蓋。

---

## Memory 系統

除了 CLAUDE.md，Claude Code 還有：

**Project Memory**（`~/.claude/projects/`）
跨 session 的專案記憶，記錄你和 AI 的工作歷史。

**User Memory**（`~/.claude/CLAUDE.md`）
全局設定，適用所有專案：你的個人工作偏好、常用語言、溝通風格。

---

## ITTO 框架

在 CLAUDE.md 中描述任務時，建議用 **ITTO 框架**：

| 元素 | 說明 | 範例 |
|------|------|------|
| **Input** | AI 接收什麼 | CSV 檔案、API 回應 |
| **Task** | 要做什麼 | 清洗資料、生成報告 |
| **Tool** | 可以用什麼工具 | Python、pandas、Sheets |
| **Output** | 產出什麼 | 整理後的 Excel、摘要文件 |

---

## 相關專有名詞

`CLAUDE.md` `Claude Code` `Project Memory` `User Memory` `ITTO`
`System Prompt` `Context Engineering` `codebase context` `MCP`
`Agentic coding` `Anthropic` `AI coding assistant` `Developer workflow`

> L3「Code Agent 與 MCP」課程的第一件事，就是為你的專案寫一份 CLAUDE.md，讓 AI 從第一秒就理解你的工作環境。
