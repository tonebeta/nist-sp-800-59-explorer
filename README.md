# NIST SP 800-53 Rev 5 Explorer

互動式 NIST SP 800-53 Revision 5 安全與隱私控制項瀏覽器。

## Features

- 🔍 即時搜尋 — 依控制項 ID、名稱（英/中）或說明內容搜尋
- 🏷️ 基線篩選 — Low / Moderate / High / Privacy 多選篩選
- 📋 家族總覽 — 20 個控制家族卡片式展示（含基線涵蓋統計）
- 📊 控制項清單 — 324 個基礎控制項完整表格，點擊展開詳情
- 🌗 Dark Mode — 手動切換 System / Light / Dark，偏好自動記憶
- 📱 RWD — 支援行動裝置瀏覽

## Tech Stack

- React 19 + Vite 6
- IBM Plex Sans + Noto Sans TC
- Pure CSS (no framework dependencies)
- Static SPA — zero backend

## Deploy to Vercel

```bash
# 方法一：Vercel CLI
npm i -g vercel
vercel

# 方法二：GitHub 整合
# Push to GitHub → Import in vercel.com/new
```

## Development

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # Production build → dist/
```

## Data Source

NIST SP 800-53 Rev 5, Update 1
https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final

## License

MIT
