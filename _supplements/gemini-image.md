---
layout: supplement
title: "Gemini 圖片生成實戰"
icon: "🎨"
tag: "工具 · 圖像"
tagline: "用文字描述，讓 AI 生成你需要的圖片"
description: "從 prompt 設計到實際操作，掌握 Gemini Imagen 的完整圖片生成工作流。適合簡報配圖、知識圖解、視覺素材製作。"
related_level: L2
---

## AI 生圖能解決什麼問題？

每次做簡報、寫提案，你是不是都在：

- 翻遍 Google 找「勉強可以用」的免費圖片
- 下載後發現解析度不夠或比例不對
- 用了別人圖片被版權困擾

AI 圖片生成的出現，讓**描述需求就能得到符合情境的圖片**成為可能。

> Claude 本身無法生圖——但搭配 Gemini Imagen，可以做到「描述 → 生成 → 整合」的完整流程。

---

## Gemini 圖片生成的定位

Google 的 Gemini 系列包含了 Imagen 模型，主要透過以下方式使用：

| 方式 | 說明 | 適合對象 |
|------|------|---------|
| **Gemini App（網頁/App）** | 直接在對話中要求生圖 | 一般使用者 |
| **Google AI Studio** | 透過 API 呼叫 Imagen | 開發者、自動化 |
| **ImageFX** | Google 專屬的圖片生成工具 | 創意工作者 |

---

## Prompt 設計三原則

### 原則 1：說場景，不說技術

❌ 「生成一張 AI 神經網路架構圖」
✅ 「一張現代化辦公室，員工在大型螢幕上看資料儀表板，科技感，藍色調」

AI 不需要你描述「怎麼生成」，只需要你描述「你看到什麼」。

---

### 原則 2：加上風格標籤

在描述後加上風格指引，結果會更精準：

- `professional photography` — 商業攝影感
- `flat illustration` — 扁平插圖風格
- `isometric diagram` — 立體等距示意圖
- `infographic style` — 資訊圖表風格
- `minimal, clean` — 極簡風格
- `dark background, tech aesthetic` — 科技深色風

---

### 原則 3：指定比例與用途

- 簡報配圖：`16:9 aspect ratio, wide format`
- 封面圖：`1:1 square format`
- 社群貼文：`4:5 portrait format`

---

## 實戰範例

### 場景 1：簡報封面圖

```
A professional team gathered around a holographic AI interface,
modern office setting, blue and white color scheme,
technology-focused, corporate style, 16:9 wide format
```

### 場景 2：概念示意圖

```
Abstract diagram showing three interconnected nodes representing
AI agent communication, minimal flat design, teal and dark navy
colors, clean white background, infographic style
```

### 場景 3：流程圖插圖

```
Simple isometric illustration of a workflow: person at desk →
AI brain icon → output document, step-by-step arrows,
soft gradient background, professional and clean
```

---

## 常見問題

**Q：生出來的圖有中文字嗎？**

目前 Gemini Imagen 的中文字渲染仍不穩定。建議：
- 圖片本身不放文字，文字後製加入（在簡報軟體中）
- 需要含文字的圖，可用 Claude Code 搭配程式碼方式生成

**Q：一天可以生幾張？**

- Gemini Free：有限額
- Google One AI Premium：大幅提升額度
- API 方式（AI Studio）：依帳戶等級，開發測試用免費額度

**Q：圖片版權歸誰？**

Google 政策：你生成的圖片可用於商業用途，但需遵守使用條款，不可用於誤導性內容。

---

## 整合到工作流

最實用的整合方式：

1. **AI 生圖** → 儲存為 PNG
2. **直接插入簡報** — Gamma / PowerPoint / Google Slides
3. **搭配程式碼自動化** — L3 課程會教如何批量生圖 + 整合進 pptxgenjs

> L2 課程「AI 個人助手與自動化」中會有 Gemini 圖片生成的實作練習，包含 prompt 設計工作坊和 Gemini Gems 整合應用。
