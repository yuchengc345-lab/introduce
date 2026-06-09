# 陳禹丞｜AI Agent 與前端作品集

React + Vite 個人作品集網站，展示 AI Agent、AI 工具網站、前端設計、GitHub 專案整理與證書資料。

## 本機開發

```bash
npm install
npm run dev
```

若 5173 已被其他專案使用，可改用其他 port：

```bash
./node_modules/.bin/vite --host 127.0.0.1 --port 5174
```

## 驗證

```bash
npm test -- --run
npm run build
```

## 部署到 Vercel

Vercel 設定：

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

本專案也已包含 `vercel.json`，匯入 Vercel 後通常可直接部署。

## 內容注意

台股分析師 Agent 是研究工具展示，不構成投資建議。若未來加入線上 demo，請先確認資料來源、API key 與登入保護設定。
