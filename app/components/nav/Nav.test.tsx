import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "./Nav";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));
describe("Nav Component", () => {
  const mockScrollToSection = jest.fn();

  it("renders all navigation links", () => {
    render(<Nav scrollToSection={mockScrollToSection} />);

    const buttons = ["About", "Skillset", "Projects", "Contact", "Photo"];
    buttons.forEach((button) => {
      expect(screen.getByText(button)).toBeInTheDocument();
    });
  });

  it("calls scrollToScreen when a link is clicked", () => {
    render(<Nav scrollToSection={mockScrollToSection} />);

    const aboutLink = screen.getByText(/about/i);
    fireEvent.click(aboutLink);
    expect(mockScrollToSection).toHaveBeenCalledWith("about");
  });
});
