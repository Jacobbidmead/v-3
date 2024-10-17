"use client";

import {
  ExperienceParagraph,
  ExperienceText,
  ExperienceTextContainer,
  TechContainer,
  Tech,
} from "./Experience.style";

interface Experience {
  company: string;
  dates: string;
  description: string[];
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

              <ExperienceText>{job.dates}</ExperienceText>

              {job.description.map((des, i) => (
                <ExperienceParagraph key={i}>{des}</ExperienceParagraph>
              ))}
              <TechContainer>
                {job.technologies.map((tech, index) => (
                  <Tech key={index}>{tech}</Tech>
                ))}
              </TechContainer>
            </ExperienceText>
          </>
        ))}
      </ExperienceTextContainer>
    </>
  );
};

export default ExperienceTextSection;
