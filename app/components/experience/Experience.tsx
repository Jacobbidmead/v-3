"use client";

import { ExperienceContainer, ExperienceHeader, ExperienceSection } from "./Experience.style";
import ExperienceTextSection from "./ExperienceTextSection";
interface Experience {
  company: string;
  dates: string;
  description: string;
  technologies: string[];
}
interface ExperienceProps {
  experience: Experience[];
}

const experience = [
  {
    company: `Entwurf`,
    dates: `August 2024 - Current`,
    description: `description`,
    technologies: ["TypeScript", "Next.js", "Node", "Styled Components", "Git", "Sanity.io", "NPM"],
  },
  {
    company: `Ignite Hubs`,
    dates: `August 2024 - Current`,
    description: `description`,
    technologies: ["TypeScript", "Next.js", "Node", "Styled Components", "Git", "Sanity.io", "NPM"],
  },
  {
    company: `Curated Loop`,
    dates: `August 2024 - Current`,
    description: `description`,
    technologies: ["TypeScript", "Next.js", "Node", "Styled Components", "Git", "Sanity.io", "NPM"],
  },
];

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <>
      <ExperienceContainer>
        <ExperienceSection>
          <ExperienceHeader>Experience</ExperienceHeader>
          <ExperienceTextSection experience={experience} />
        </ExperienceSection>
      </ExperienceContainer>
    </>
  );
};

export default Experience;
