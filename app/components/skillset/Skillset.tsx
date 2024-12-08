"use client";
import { SkillsetHeader, SkillsetContainer, Skill, SkillContainer } from "./Skillset.style";
import { useState, useEffect } from "react";

interface SkillsetDataProps {
  skills: string[];
}
[];

const Skillset: React.FC<SkillsetDataProps> = () => {
  const [skillsData, setSkillsData] = useState<SkillsetDataProps[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/skillset");

        if (!res.ok) {
          throw new Error("Failed to fetch landing page data");
        }

        const data: SkillsetDataProps[] = await res.json();
        setSkillsData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!skillsData || skillsData.length === 0) return <div>No data found</div>;

  const data = skillsData[0];
  const { skills } = data;

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
