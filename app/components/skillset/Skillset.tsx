"use client";
import { SkillsetHeader, SkillsetContainer, Skill, SkillContainer } from "./Skillset.style";
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

const Skillset: React.FC = () => {
  return (
    <>
      <SkillsetContainer id='skillset'>
        <SkillsetHeader>Skillset</SkillsetHeader>
        <SkillContainer>
          {skills.map((skill, i) => (
            <Skill className='home-techs' key={i}>
              {skill}
            </Skill>
          ))}
        </SkillContainer>
      </SkillsetContainer>
    </>
  );
};

export default Skillset;
