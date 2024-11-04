import { render, screen, fireEvent } from "@testing-library/react";
import { CallToActionButton } from "./index";
import { Video } from "@/app/types";
import "@testing-library/jest-dom";
import { Icons } from "@/app/icons";

describe("CallToActionButton Component", () => {
  const mockAction = jest.fn();
  const mockVideo: Video = {
    id: "1",
    title: "Sample Video",
    created_at: "2024-06-03T19:13:49.000000Z",
    hls_path: "https://example.com/video",
    category: 1,
    description:
      "Descubra como empresas de todos os portes estão aproveitando estratégias de canais e vendas indiretas para impulsionar seus negócios e obter resultados excepcionais! Para falar sobre isso, convidamos Guilherme Tsuchida, responsável pelo desenvolvimento de novas parcerias estratégicas na Microsoft Américas, para abrilhantar o episódio #21 do #OverTheCast",
    thumbnail:
      "https://static-ott.netshow.me/sites/70/media/268999/Over-The-Cast---21.png",
    site_id: 70,
    views: 22,
    likes: 1,
  };

  it("renders with provided text", () => {
    render(
      <CallToActionButton
        action={mockAction}
        video={mockVideo}
        icon={<Icons.Like />}
        text="Play Video"
      />
    );

    const textElement = screen.getByText("Play Video");
    expect(textElement).toBeInTheDocument();
  });

  it("applies extraClassName classes", () => {
    const { container } = render(
      <CallToActionButton
        action={mockAction}
        video={mockVideo}
        icon={<Icons.Like />}
        text="Play Video"
        extraClassName="extra-class"
      />
    );

    const button = container.querySelector("button");
    expect(button).toHaveClass("extra-class");
  });

  it("calls the action function with video on click", () => {
    render(
      <CallToActionButton
        action={mockAction}
        video={mockVideo}
        icon={<Icons.Like />}
        text="Play Video"
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockAction).toHaveBeenCalledTimes(1);
    expect(mockAction).toHaveBeenCalledWith(mockVideo);
  });
});
