import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";

// Test the component is rendered
// Test the animtion is working as expected

describe("Renders About component", () => {
  render(<About />);
  const aboutDescription = screen.getByTestId("about-description");
  expect(aboutDescription).toBeInTheDocument();
});
