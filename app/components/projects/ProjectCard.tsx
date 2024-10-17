"use client";
import GitSvg from "@/app/svg_components/Git";
import LinkSvg from "@/app/svg_components/Link";
import {
  ProjectCard,
  Technologies,
  Tech,
  ProjectLinks,
  LinkIcon,
  ProjectTitle,
} from "./ProjectsCard.styles";

interface ProjectDataTypes {
  projectTitle: string;
  projectTech: string[];
  projectLink: string;
  projectRepo: string;
  projectID?: number;
}

const ProjectData: ProjectDataTypes[] = [
  {
    projectTitle: "MediaBookAI",
    projectTech: ["TypeScript", "Next.js", "Tailwind", "OpenAI "],
    projectLink: "https://movie-book-next.vercel.app/",
    projectRepo: "https://github.com/Jacobbidmead/movie-book-next",
    projectID: 1,
  },
  {
    projectTitle: "Memory Game",
    projectTech: ["TypeScript", "Next.js", "Tailwind", "DALLE - E "],
    projectLink: "https://snap-app-git-main-jacobbidmead.vercel.app/",
    projectRepo: "https://github.com/Jacobbidmead/snap-app",
    projectID: 2,
  },
  {
    projectTitle: "E-Comm Store",
    projectTech: ["TypeScript", "Next.js", "MUI", "Context API "],
    projectLink: "https://webstore-react-app-git-main-jacobbidmead.vercel.app",
    projectRepo: "https://github.com/Jacobbidmead/webstore-react-app",
    projectID: 3,
  },
  {
    projectTitle: "Fetch Products",
    projectTech: ["Next.js", "Tailwind", "REST"],
    projectLink: "https://get-products-app.vercel.app/",
    projectRepo: "https://github.com/Jacobbidmead/get-products-app",
    projectID: 4,
  },
];

const ProjectsCard: React.FC = () => {
  return (
    <>
      {ProjectData.map((proj) => (
        <ProjectCard key={proj.projectID}>
          <ProjectTitle>{proj.projectTitle}</ProjectTitle>
          <Technologies>
            {proj.projectTech.map((tech) => (
              <Tech key={proj.projectID} className='project-techs'>
                {tech}
              </Tech>
            ))}
          </Technologies>
          <ProjectLinks>
            <LinkIcon href={proj.projectLink} target='_blank' rel='noreferrer'>
              <LinkSvg />
            </LinkIcon>
            <LinkIcon href={proj.projectRepo} target='_blank' rel='noreferrer'>
              <GitSvg />
            </LinkIcon>
          </ProjectLinks>
        </ProjectCard>
      ))}
    </>
  );
};

export default ProjectsCard;
