import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./app/page";
import useNavbarLogic from "./app/hooks/useNavbarLogic";
import Nav from "./app/components/nav/Nav";
import Hero from "./app/components/hero/Hero";

jest.mock("./app/hooks/useNavbarLogic");
jest.mock("./app/components/nav/Nav", () =>
  jest.fn(() => <div data-testid='nav'>Nav Component</div>)
);
jest.mock("./app/components/hero/Hero", () =>
  jest.fn(() => <div data-testid='hero'>Hero Component</div>)
);

beforeEach(() => {
  (useNavbarLogic as jest.Mock).mockReturnValue({
    isMobile: false,
    backgroundColor: "rgb(4,4,4)",
    scrollToSection: jest.fn(),
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

it("renders the home component with the correct background color and passed props to Nav component", () => {
  render(<Home />);

  const mainElement = screen.getByRole("main");
  expect(mainElement).toHaveStyle({ backgroundColor: "rgb(4,4,4)" });

  expect(screen.getByTestId("nav")).toBeInTheDocument();

  expect(Nav).toHaveBeenCalledWith(
    expect.objectContaining({
      scrollToSection: expect.any(Function),
    }),
    {}
  );
});
