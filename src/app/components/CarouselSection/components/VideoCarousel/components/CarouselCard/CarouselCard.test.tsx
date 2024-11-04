import { render, screen } from "@testing-library/react";
import { CarouselCard } from "./index";
import "@testing-library/jest-dom";
import { ImgHTMLAttributes } from "react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
}));

describe("CarouselCard Component", () => {
  const defaultProps = {
    thumbnailSource: "/path/to/thumbnail.jpg",
    categoryTitle: "Ao vivo",
    title: "Video Title",
    videoId: "12345",
  };

  it("renders the image with correct source attribute", () => {
    render(<CarouselCard {...defaultProps} />);

    const image = screen.getByRole("img", { name: defaultProps.title });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", defaultProps.thumbnailSource);
  });

  it("renders the category title", () => {
    render(<CarouselCard {...defaultProps} />);

    const categoryTitle = screen.getAllByText(defaultProps.categoryTitle);
    expect(categoryTitle[0]).toBeInTheDocument();
  });

  it("renders the video title", () => {
    render(<CarouselCard {...defaultProps} />);

    const videoTitle = screen.getByText(defaultProps.title);
    expect(videoTitle).toBeInTheDocument();
  });

  it("renders the correct link with video URL", () => {
    render(<CarouselCard {...defaultProps} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/videoView/${defaultProps.videoId}`);
  });

  it('displays the "Ao vivo" badge when categoryTitle is "Ao vivo"', () => {
    render(<CarouselCard {...defaultProps} />);

    const liveBadge = screen.getAllByText("Ao vivo");
    expect(liveBadge[0]).toBeInTheDocument();
  });

  it('does not display the "Ao vivo" badge when categoryTitle is not "Ao vivo"', () => {
    render(<CarouselCard {...defaultProps} categoryTitle="Other Category" />);

    const liveBadge = screen.queryByText("Ao vivo");
    expect(liveBadge).not.toBeInTheDocument();
  });
});
