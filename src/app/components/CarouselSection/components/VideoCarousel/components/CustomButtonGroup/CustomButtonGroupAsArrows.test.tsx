import { render, screen, fireEvent } from "@testing-library/react";
import { CustomButtonGroupAsArrows } from "./index";

describe("CustomButtonGroupAsArrows Component", () => {
  it('renders the "Ver mais" text', () => {
    render(<CustomButtonGroupAsArrows />);

    const verMaisText = screen.getByText("Ver mais");
    expect(verMaisText).toBeInTheDocument();
  });

  it("renders next and previous buttons", () => {
    render(<CustomButtonGroupAsArrows />);

    const previousButton = screen.getAllByRole("button")[0];
    const nextButton = screen.getAllByRole("button")[1];

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it("calls previous function when previous button is clicked", () => {
    const previousMock = jest.fn();
    render(<CustomButtonGroupAsArrows previous={previousMock} />);

    const previousButton = screen.getAllByRole("button")[0];
    fireEvent.click(previousButton);

    expect(previousMock).toHaveBeenCalled();
  });

  it("calls next function when next button is clicked", () => {
    const nextMock = jest.fn();
    render(<CustomButtonGroupAsArrows next={nextMock} />);

    const nextButton = screen.getAllByRole("button")[1];
    fireEvent.click(nextButton);

    expect(nextMock).toHaveBeenCalled();
  });
});
