"use client";

import {
  ExperienceParagraph,
  ExperienceText,
  ExperienceTextContainer,
  ExperienceHeader,
  Tech,
} from "./Experience.style";

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
        {experience.map((job) => (
          <>
            <ExperienceText>
              {job.company}
              <ExperienceParagraph>{job.dates}</ExperienceParagraph>
              <ExperienceParagraph>{job.description}</ExperienceParagraph>

              {job.technologies.map((tech, index) => (
                <Tech key={index}>{tech}</Tech>
              ))}
            </ExperienceText>
          </>
        ))}
      </ExperienceTextContainer>
    </>
  );
};

export default ExperienceTextSection;
