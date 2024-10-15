"use client";

import { ExperienceText, ExperienceTextContainer } from "./Experience.style";

interface Experience {
  company: string;
  dates: string;
  description: string;
  technologies: string[];
}
interface ExperienceProps {
  experience: Experience[];
}
const ExperienceTextSection: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <>
      <ExperienceTextContainer>
        <ExperienceText></ExperienceText>
      </ExperienceTextContainer>
    </>
  );
};

export default ExperienceTextSection;
