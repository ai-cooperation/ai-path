#!/usr/bin/env bash
# Sync ai-path/vibe-coding/ → agent-kb/slides/ (ai-path is source of truth)
# 檔名大小寫映射：M1-1-AI-... → M1-1-ai-... 等
# 2026-05-14: 對齊 docs/tasks 模式 — repo root 為 source，sync-kb.mjs 會在 web build 時
# 自動複製到 server/assets/kb/slides/ 給 Worker 用。
set -e
SRC="/Users/user/Desktop/AI100講/ai-path/vibe-coding"
DST="/Users/user/projects/agent-kb/slides"

mkdir -p "$DST"
for f in "$SRC"/M*.html; do
  base=$(basename "$f")
  # 第一個字 M 保留，其餘 lowercase
  target=$(echo "${base:1}" | tr '[:upper:]' '[:lower:]')
  cp "$f" "$DST/M$target"
  echo "  $base → M$target"
done
echo "Done."
echo "下一步：cd /Users/user/projects/agent-kb/web && npm run build"
echo "      （sync-kb 會把 slides 帶到 server/assets/kb/slides/，再 wrangler deploy 上 Worker）"
