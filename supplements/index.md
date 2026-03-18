---
layout: default
title: "補充單元"
description: "深入特定主題，了解我們的教學風格"
---

<div class="supplements-index">
  <div class="supplements-index-hero">
    <h1>補充單元</h1>
    <p>深入特定主題，先讀先學。每個單元都連結到對應的課程等級。</p>
  </div>

  <div class="supplements-index-list">
    {% for s in site.data.supplements %}
    <a href="{{ '/supplements/' | append: s.id | relative_url }}" class="supplement-card">
      <span class="supplement-icon">{{ s.icon }}</span>
      <div class="supplement-info">
        <span class="supplement-tag">{{ s.tag }}</span>
        <h3>{{ s.name }}</h3>
        <p>{{ s.tagline }}</p>
      </div>
      <span class="supplement-arrow">→</span>
    </a>
    {% endfor %}
  </div>
</div>
