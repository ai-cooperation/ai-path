---
layout: supplement
title: "Gemini 圖片生成實戰"
icon: "🎨"
tag: "工具 · 圖像"
tagline: "好的 Prompt 不是天賦，是工程"
description: "從模糊指令到精準產出：三層構建法、鏡頭語言、風格控制，掌握 Gemini Imagen 的完整 Prompt 工程。"
related_level: L2
---

<style>
.img-gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.8rem; margin: 1.2rem 0 2rem; }
.img-gallery img { width: 100%; border-radius: 8px; border: 1px solid var(--border); display: block; }
.img-gallery.cols-2 { grid-template-columns: repeat(2, 1fr); }
.img-gallery.cols-3 { grid-template-columns: repeat(3, 1fr); }
.img-gallery.cols-4 { grid-template-columns: repeat(4, 1fr); }
.img-caption { font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-dim); margin-top: 0.3rem; text-align: center; }
.img-label { background: var(--bg-deep); border: 1px solid var(--border); border-radius: 8px; padding: 0.8rem; }
.img-label .img-label-tag { font-family: var(--font-mono); font-size: 0.65rem; color: var(--cyan); display: block; margin-bottom: 0.3rem; }
.compare-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.2rem 0 2rem; }
@media (max-width: 600px) { .compare-row, .img-gallery.cols-3, .img-gallery.cols-4 { grid-template-columns: 1fr 1fr; } }
</style>

## 模糊指令 vs 結構化 Prompt

同一主題，Prompt 的品質決定了圖片的品質。看看差距有多大：

<div class="compare-row">
  <div class="img-label">
    <span class="img-label-tag">❌ 模糊指令</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide03_img16.jpg' | relative_url }}" alt="模糊Prompt結果">
    <p class="img-caption">「畫一張 AI 幫助人類工作的圖」<br>風格隨機，每次結果都不同</p>
  </div>
  <div class="img-label">
    <span class="img-label-tag">✅ 結構化 Prompt</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide03_img17.jpg' | relative_url }}" alt="結構化Prompt結果">
    <p class="img-caption">指定主體、風格、光線、比例<br>穩定複現，符合預期</p>
  </div>
</div>

---

## 三層構建法：逐層加上去

**What（主體）→ How（技術參數）→ Meta（風格）**，三層堆疊，精準度逐步提升。

同一場景——科學家在實驗室——三種 Prompt 深度的效果：

<div class="img-gallery cols-3">
  <div class="img-label">
    <span class="img-label-tag">Layer 1 — 只有主體</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide06_img24.jpg' | relative_url }}" alt="Layer 1">
    <p class="img-caption">A scientist examining samples in a laboratory<br>隨機角度、隨機光線</p>
  </div>
  <div class="img-label">
    <span class="img-label-tag">Layer 2 — 加技術參數</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide06_img25.jpg' | relative_url }}" alt="Layer 2">
    <p class="img-caption">+ 85mm lens, f/2.8, shallow depth of field<br>主體清晰，背景虛化</p>
  </div>
  <div class="img-label">
    <span class="img-label-tag">Layer 3 — 加風格</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide06_img26.jpg' | relative_url }}" alt="Layer 3">
    <p class="img-caption">+ cinematic lighting, professional photography<br>完全不同的視覺質感</p>
  </div>
</div>

---

## 鏡頭語言：同場景，不同焦段

焦段不同，畫面說的故事就不同。固定場景：`Engineer writing on whiteboard in office`

<div class="img-gallery cols-4">
  <div class="img-label">
    <span class="img-label-tag">24mm 超廣角</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide09_img50.jpg' | relative_url }}" alt="24mm">
    <p class="img-caption">寬廣視角，透視變形<br>強調空間與環境</p>
  </div>
  <div class="img-label">
    <span class="img-label-tag">35mm 廣角</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide09_img51.jpg' | relative_url }}" alt="35mm">
    <p class="img-caption">自然視角，接近人眼<br>適合情境記錄</p>
  </div>
  <div class="img-label">
    <span class="img-label-tag">85mm 人像</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide09_img52.jpg' | relative_url }}" alt="85mm">
    <p class="img-caption">主體突出，背景壓縮<br>商業人像首選</p>
  </div>
  <div class="img-label">
    <span class="img-label-tag">200mm 望遠</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide09_img53.jpg' | relative_url }}" alt="200mm">
    <p class="img-caption">強烈背景模糊<br>戲劇性壓縮效果</p>
  </div>
</div>

---

## 光線控制：同場景，不同光線

光線決定情緒。固定場景：`Portrait of a CEO at a desk, 85mm lens, f/2.8`

<div class="img-gallery cols-4">
  <div class="img-label">
    <span class="img-label-tag">Soft Diffused</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide10_img64.jpg' | relative_url }}" alt="Soft Diffused">
    <p class="img-caption">柔和散射光<br>友善、商業、無陰影</p>
  </div>
  <div class="img-label">
    <span class="img-label-tag">Golden Hour</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide10_img65.jpg' | relative_url }}" alt="Golden Hour">
    <p class="img-caption">黃金時段側光<br>溫暖、有故事感</p>
  </div>
  <div class="img-label">
    <span class="img-label-tag">Dramatic Side</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide10_img66.jpg' | relative_url }}" alt="Dramatic Side">
    <p class="img-caption">戲劇性側光<br>強勢、有力、高端感</p>
  </div>
  <div class="img-label">
    <span class="img-label-tag">Neon / Studio</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide10_img67.jpg' | relative_url }}" alt="Neon Studio">
    <p class="img-caption">霓虹/攝影棚光<br>科技感、現代、個性</p>
  </div>
</div>

---

## 風格控制：同主題，七種風格

主題固定：「工程師在白板前討論架構」，只換風格前綴，呈現完全不同的視覺語言。

<div class="img-gallery cols-3">
  <div class="img-label">
    <span class="img-label-tag">電影感 — 高端簡報</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide12_img31.jpg' | relative_url }}" alt="電影感">
    <p class="img-caption">cinematic shot, dramatic side lighting, film grain</p>
  </div>
  <div class="img-label">
    <span class="img-label-tag">寫實攝影 — 官網/報告</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide12_img32.jpg' | relative_url }}" alt="寫實攝影">
    <p class="img-caption">professional photography, natural lighting</p>
  </div>
  <div class="img-label">
    <span class="img-label-tag">3D 卡通 — 活潑場合</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide12_img33.jpg' | relative_url }}" alt="3D卡通">
    <p class="img-caption">3D cartoon style, vibrant colors, Pixar-like</p>
  </div>
  <div class="img-label">
    <span class="img-label-tag">水彩插圖 — 創意場合</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide12_img34.jpg' | relative_url }}" alt="水彩">
    <p class="img-caption">watercolor illustration, soft brushstrokes</p>
  </div>
  <div class="img-label">
    <span class="img-label-tag">扁平插圖 — 科技/UI</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide12_img35.jpg' | relative_url }}" alt="扁平插圖">
    <p class="img-caption">flat design illustration, minimal, vector-style</p>
  </div>
  <div class="img-label">
    <span class="img-label-tag">資訊圖 — 教學/簡報</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide12_img36.jpg' | relative_url }}" alt="資訊圖">
    <p class="img-caption">infographic style, clean icons, diagram</p>
  </div>
</div>

---

## 風格一致性：為什麼要固定風格前綴

沒有固定風格前綴，三張圖三種樣子，放在同一份簡報裡觀感零散。

<div class="img-gallery cols-3">
  <div class="img-label">
    <span class="img-label-tag">❌ 風格混亂</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide13_img18.jpg' | relative_url }}" alt="風格混亂1">
  </div>
  <div class="img-label">
    <span class="img-label-tag">❌ 風格混亂</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide13_img19.jpg' | relative_url }}" alt="風格混亂2">
  </div>
  <div class="img-label">
    <span class="img-label-tag">✅ 固定風格前綴</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide13_img20.jpg' | relative_url }}" alt="風格一致">
    <p class="img-caption">Style prefix 一致<br>整份視覺有整體感</p>
  </div>
</div>

**做法**：建立一個「風格前綴模板」，每次只換主體內容：

```
[Style prefix]: cinematic shot, professional photography,
                dramatic side lighting, film grain
[Subject]:      (每次換這裡)
[Technical]:    85mm lens, f/2.8, shallow DOF
```

---

## Image Grounding：真實場景 vs 泛用生成

需要特定地點或物件時，不描述「一個歌劇院」，而是給 AI 參考圖片。

<div class="compare-row">
  <div class="img-label">
    <span class="img-label-tag">❌ 沒有 Grounding</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide15_img21.jpg' | relative_url }}" alt="無Grounding">
    <p class="img-caption">「A beautiful opera house by the harbor at sunset」<br>AI 生一個通用歌劇院，形狀細節全不對</p>
  </div>
  <div class="img-label">
    <span class="img-label-tag">✅ 有 Grounding</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide15_img22.jpg' | relative_url }}" alt="有Grounding">
    <p class="img-caption">提供參考圖 + 描述<br>保留真實特徵，加上你想要的光線/氛圍</p>
  </div>
</div>

---

## 概念視覺化：從抽象到具體

簡報最常見的需求：把一個抽象概念（AI 協作、創新、數據）變成一張圖。

<div class="img-gallery cols-4">
  <div class="img-label">
    <span class="img-label-tag">AI 協作</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide20_img32.jpg' | relative_url }}" alt="AI協作">
    <p class="img-caption">人手 + 機器手握手<br>flat design, blue and white</p>
  </div>
  <div class="img-label">
    <span class="img-label-tag">數據流</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide20_img33.jpg' | relative_url }}" alt="數據流">
    <p class="img-caption">光點串連成流動路徑<br>data stream visualization</p>
  </div>
  <div class="img-label">
    <span class="img-label-tag">創新突破</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide20_img34.jpg' | relative_url }}" alt="創新">
    <p class="img-caption">燈泡爆發光芒<br>lightbulb with energy burst</p>
  </div>
  <div class="img-label">
    <span class="img-label-tag">系統整合</span>
    <img src="{{ '/assets/images/supplements/gemini-image/slide20_img35.jpg' | relative_url }}" alt="系統整合">
    <p class="img-caption">齒輪嚙合運作<br>interlocking gears, clean icons</p>
  </div>
</div>

---

## 三層構建法 Prompt 模板

可以直接複製，替換括號內的部分：

```
[Style]: Professional, clean, modern illustration
         (可換: cinematic / flat design / watercolor)

[Subject]: (概念的視覺比喻)
           例: interlocking gears representing system integration

[Technical]: high resolution, white background,
             16:9 aspect ratio, no text in image

[Mood]: (可選) corporate, innovative, collaborative
```

> L2「AI 個人助手與自動化」課程中，會有 Gemini Prompt 工程實作工作坊，從三層構建法到風格前綴模板，每個學員建立自己的「配圖 Prompt 庫」。
