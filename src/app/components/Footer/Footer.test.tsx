import { render, screen } from "@testing-library/react";
import { Footer } from "./index";

describe("Footer Component", () => {
  it("renders the copyright text", () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/© Flow 2023/i);
    expect(copyrightText).toBeInTheDocument();
  });

  it("renders the privacy and terms links", () => {
    render(<Footer />);

    const privacyLink = screen.getByText(/Política de Privacidade/i);
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute("href", "#");

    const termsLink = screen.getByText(/Termos de uso/i);
    expect(termsLink).toBeInTheDocument();
    expect(termsLink).toHaveAttribute("href", "#");
  });

  it("renders the developed by text with company name", () => {
    render(<Footer />);

    const developedByText = screen.getByText(/Desenvolvido por/i);

    const companyName = screen.getByText("Netshow.me");

    expect(developedByText).toBeInTheDocument();
    expect(companyName).toBeInTheDocument();
    expect(companyName.tagName).toBe("STRONG");
  });

  it("renders the BETA badge", () => {
    render(<Footer />);

    const betaBadge = screen.getByText("BETA");
    expect(betaBadge).toBeInTheDocument();
  });
});
