import certificateImage from "./assets/canva-certificate.jpg";
import profilePortrait from "./assets/profile-photo-portrait.jpg";
import twStockAgentPoster from "./assets/tw-stock-agent-poster.jpg";

export const profile = {
  name: "陳禹丞",
  role: "AI 工作者 / AI Agent 客製化搭建",
  intro:
    "我善用各種 AI 工具搭建網站與客製化 AI agent，熟悉 GitHub、前端設計與數位工具整合，協助把想法快速做成可展示、可使用的線上產品。",
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

export const pricingPlans = [
  {
    title: "入門展示頁",
    fit: "個人介紹 / 作品集 / 服務頁",
    detail: "一頁式網站、基本 RWD、聯絡方式整理與上線部署。",
    price: "NT$ 3,000 起",
  },
  {
    title: "AI 工具網站 / 前端原型",
    fit: "可操作 Demo / 想法驗證",
    detail: "React 前端、表單與資料顯示、API 串接、部署設定。",
    price: "NT$ 8,000 起",
  },
  {
    title: "客製化 AI Agent",
    fit: "問答 / 資料分析 / 自動化流程",
    detail: "需求規劃、Agent 流程、資料處理、簡易 Dashboard 與部署建議。",
    price: "NT$ 15,000 起，依需求報價",
  },
];

export const works = [
  {
    title: "台股分析師 Agent",
    type: "AI Agent / Taiwan Stock",
    result:
      "多 Agent 台股研究助理，輸入股票代碼後自動整合行情、月營收、財務、估值、技術分析、新聞、同業比較與風險條件，產出繁體中文分析報告與 Web Dashboard。",
    note: "此為研究工具展示，不構成投資建議。",
    image: twStockAgentPoster,
  },
  {
    title: "AI Chat Data Evaluator",
    type: "AI Knowledge Assistant",
    result: "結合 AI 問答與資料評估流程，展示知識型 AI assistant 的應用方式。",
    url: "https://ai-chat-data-evaluator.vercel.app/knowledge-assistant",
  },
  {
    title: "客製化 AI Agent 服務",
    type: "AI Agent",
    result: "依需求規劃 AI agent 的任務流程、互動方式與可落地的使用場景。",
  },
  {
    title: "AI 工具網站搭建",
    type: "Web Build",
    result: "使用 AI 工具、GitHub 與前端設計，把想法快速整理成線上作品。",
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
