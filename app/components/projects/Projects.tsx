"use client";

import ProjectsCard from "./ProjectCard";
import { ProjectsContainer } from "./Projects.styles";

const Projects: React.FC = () => {
  return (
    <>
      <ProjectsContainer id='projects'>
        <ProjectsCard />
      </ProjectsContainer>
    </>
  );
};

export default Projects;
