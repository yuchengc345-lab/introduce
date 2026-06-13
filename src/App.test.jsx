import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Professional profile site", () => {
  it("renders the core professional services sections", () => {
    const { container } = render(<App />);

    expect(screen.getByText("AI Product Studio / AI Agent 客製化搭建")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "把 AI 想法做成能上線的產品" })).toBeInTheDocument();
    expect(screen.getByText("Live Build Board")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "從想法到上線" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Agent 流程" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "服務內容" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "服務方案" })).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { name: "客製化 AI Agent" })).toHaveLength(2);
    expect(screen.getByRole("heading", { name: "資料分析報告" })).toBeInTheDocument();
    expect(screen.getByText("NT$ 5,000 / 案")).toBeInTheDocument();
    expect(screen.getByText("NT$ 8,000 / 案")).toBeInTheDocument();
    expect(screen.getByText("NT$ 12,000 / 案")).toBeInTheDocument();
    expect(screen.getByText("實際價格會依功能範圍、資料來源、是否需要部署、是否串接 API 調整。")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Demo 預覽" })).toBeInTheDocument();
    expect(screen.getByText("generate product plan")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Case Study" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "台股分析師 Agent" })).toBeInTheDocument();
    expect(screen.getByText("此為研究工具展示，不構成投資建議。")).toBeInTheDocument();
    expect(screen.getByText("多 Agent 研究流程")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "AI Chat Data Evaluator" })).toBeInTheDocument();
    expect(screen.getByText(/透過規則引擎分析購買意圖、情緒分數、流失風險/)).toBeInTheDocument();
    expect(screen.getByText("支援行業模板、AI 回覆品質檢查與 Supabase 報告儲存擴充。")).toBeInTheDocument();
    expect(container.querySelectorAll(".work-image img")).toHaveLength(2);
    expect(screen.queryByRole("heading", { name: "客製化 AI Agent 服務" })).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "證書" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "聯絡方式" })).toBeInTheDocument();
    expect(screen.getByAltText("陳禹丞 的證書")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "預約諮詢" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "yuchengc345@gmail.com" })).toBeInTheDocument();
    expect(screen.getByText("Line: 916569671")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "查看作品" })).toHaveAttribute(
      "href",
      "https://ai-chat-data-evaluator.vercel.app/knowledge-assistant",
    );
  });
});
