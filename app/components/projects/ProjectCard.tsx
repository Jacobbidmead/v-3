"use client";
import GitSvg from "@/app/svg_components/Git";
import LinkSvg from "@/app/svg_components/Link";

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
      <div className='project-box'>
        {ProjectData.map((proj) => (
          <section key={proj.projectID}>
            <div>{proj.projectTitle}</div>
            <p className='technologies'>
              {proj.projectTech.map((tech) => (
                <span key={proj.projectID} className='project-techs'>
                  {tech}
                </span>
              ))}
            </p>
            <div className='project-link'>
              <a href={proj.projectLink} target='_blank' rel='noreferrer' className='link'>
                <LinkSvg />
              </a>
              <a href={proj.projectRepo} target='_blank' rel='noreferrer' className='link'>
                <GitSvg />
              </a>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default ProjectsCard;
