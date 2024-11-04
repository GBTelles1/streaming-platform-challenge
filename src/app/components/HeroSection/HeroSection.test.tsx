import { render, screen } from "@testing-library/react";
import { HeroSection } from "./index";

describe("HeroSection Component", () => {
  it("renders the correct title, subtitle, and link", () => {
    render(<HeroSection />);

    const mainTitle = screen.getByText("Over the Cast");
    expect(mainTitle).toBeInTheDocument();

    const contentTitle = screen.getByText(
      "TikTok como inovação na era digital, com Rafael Kiso"
    );
    expect(contentTitle).toBeInTheDocument();

    const contentSubtitle = screen.getByText(
      "Os principais desafios na priorização no desenvolvimento de novos produtos."
    );
    expect(contentSubtitle).toBeInTheDocument();

    const playLink = screen.getByRole("link", { name: "Reproduzir agora" });
    expect(playLink).toBeInTheDocument();
    expect(playLink).toHaveAttribute("href", "#");
  });
});
