import certificateImage from "./assets/canva-certificate.jpg";
import chatDataDashboard from "./assets/ai-chat-data-dashboard.svg";
import profilePortrait from "./assets/profile-photo-portrait.jpg";
import twStockAgentPoster from "./assets/tw-stock-agent-poster.jpg";

export const profile = {
  name: "陳禹丞",
  role: "AI Product Studio / AI Agent 客製化搭建",
  intro:
    "把你的 AI 想法，做成可以展示、可以測試、可以上線的產品。我協助個人與小型團隊快速建立 AI Agent、資料分析工具、互動式網站與 MVP 展示頁。",
  about:
    "我是一位 AI 工作者，專注於把 AI 工具、前端設計與 GitHub 部署流程整合起來，協助需求方從想法、頁面、資料流程到 AI agent 原型快速落地。",
  portrait: profilePortrait,
  contact: {
    email: "yuchengc345@gmail.com",
    line: "Line: 916569671",
    location: "Taiwan / Remote",
  },
};

export const stats = [
  { value: "AI", label: "工具整合" },
  { value: "Git", label: "GitHub 熟悉" },
  { value: "Web", label: "前端設計" },
];

export const strengths = [
  {
    title: "AI 工具搭建網站",
    detail: "善用各種 AI 工具協助網站規劃、內容生成、前端實作與快速迭代。",
  },
  {
    title: "GitHub 與部署流程",
    detail: "熟悉 GitHub 專案管理、版本控管與前端作品部署，方便後續維護與展示。",
  },
  {
    title: "前端設計實作",
    detail: "能將服務內容整理成清楚的頁面結構，並搭配互動動畫提升專業感。",
  },
];

export const services = [
  {
    title: "客製化 AI Agent",
    detail: "依照需求搭建 AI agent，協助處理資料、問答、知識庫或特定工作流程。",
  },
  {
    title: "AI 工具網站搭建",
    detail: "使用 AI 工具與前端技術快速建立可展示、可互動、可部署的網站作品。",
  },
  {
    title: "前端頁面設計",
    detail: "設計個人介紹頁、服務頁、作品頁與互動式介面，讓內容更清楚呈現。",
  },
  {
    title: "GitHub 專案整理",
    detail: "協助整理專案結構、版本管理與部署流程，讓作品更容易持續更新。",
  },
  {
    title: "AI 知識庫應用",
    detail: "建立可查詢內容、整理資料或輔助判斷的 AI 知識型工具。",
  },
  {
    title: "作品原型製作",
    detail: "把想法快速做成可以分享給他人測試的線上原型或展示頁。",
  },
];

export const studioFlow = [
  {
    title: "想法整理",
    detail: "把需求、使用情境、資料來源與目標客戶整理成可開發的產品規格。",
  },
  {
    title: "Agent 流程",
    detail: "設計 AI 任務邏輯、輸入輸出、風險條件與人機協作節點。",
  },
  {
    title: "前端介面",
    detail: "做出可操作的網站、Dashboard、表單或 Demo，讓想法能被看見。",
  },
  {
    title: "部署上線",
    detail: "整理 GitHub 專案、測試與部署流程，交付可分享的正式網址。",
  },
];

export const demoPreview = [
  {
    label: "Prompt",
    value: "我想做一個客服聊天分析工具",
  },
  {
    label: "AI Agent Plan",
    value: "CSV 上傳、需求分類、風險評分、人工跟進",
  },
  {
    label: "Interface",
    value: "Dashboard 指標、案例列表、報告頁、部署網址",
  },
];

export const pricingPlans = [
  {
    title: "資料分析報告",
    fit: "CSV / 客戶對話 / 營運資料",
    detail: "資料整理、指標分析、風險分類、重點摘要與可閱讀報告。",
    price: "NT$ 5,000 / 案",
  },
  {
    title: "AI 工具網站 / 前端原型",
    fit: "可操作 Demo / 想法驗證",
    detail: "React 前端、表單與資料顯示、API 串接、部署設定。",
    price: "NT$ 8,000 / 案",
  },
  {
    title: "客製化 AI Agent",
    fit: "問答 / 資料分析 / 自動化流程",
    detail: "需求規劃、Agent 流程、資料處理、簡易 Dashboard 與部署建議。",
    price: "NT$ 12,000 / 案",
  },
];

export const works = [
  {
    title: "台股分析師 Agent",
    type: "AI Agent / Taiwan Stock",
    result:
      "多 Agent 台股研究助理，輸入股票代碼後自動整合行情、月營收、財務、估值、技術分析、新聞、同業比較與風險條件，產出繁體中文分析報告與 Web Dashboard。",
    note: "此為研究工具展示，不構成投資建議。",
    metrics: ["多 Agent 研究流程", "繁中分析報告", "行情與財務整合"],
    image: twStockAgentPoster,
  },
  {
    title: "AI Chat Data Evaluator",
    type: "Chat Data Analytics / AI QA",
    result:
      "AI 聊天數據評估 MVP，可上傳 LINE、AI 客服、電商與顧問服務聊天 CSV，透過規則引擎分析購買意圖、情緒分數、流失風險、問題分類與人工跟進名單，並產生 Dashboard 與分析報告。",
    note: "支援行業模板、AI 回覆品質檢查與 Supabase 報告儲存擴充。",
    metrics: ["CSV 上傳分析", "風險與意圖評分", "Dashboard 報告頁"],
    image: chatDataDashboard,
    url: "https://ai-chat-data-evaluator.vercel.app/knowledge-assistant",
  },
];

export const certificates = [
  {
    title: "Google / Coursera AI Tools 課程證書",
    issuer: "Google Career Certificates",
    course: "Maximize Productivity With AI Tools",
    date: "2026/5/30",
    image: certificateImage,
  },
];
