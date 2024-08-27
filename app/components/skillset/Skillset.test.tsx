import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skillset from "./Skillset";
const skills: string[] = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Next.js",
  "Vue",
  "Nuxt",
  "Node",
  "CSS",
  "Tailwind",
  "Styled Components",
  "Git",
  "GitHub",
  "Zustand",
  "MongoDB",
  "Postgres",
  "REST",
  "GraphQL",
  "HyGraph",
  "Jest",
  "NPM",
  "Framer Motion",
  "Postman",
];

test("renders each skill correctly", () => {
  render(<Skillset />);

  skills.forEach((skill) => {
    expect(screen.getByText(skill)).toBeInTheDocument();
  });
});
