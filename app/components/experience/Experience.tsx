"use client";

import { ExperienceContainer, ExperienceHeader, ExperienceSection } from "./Experience.style";
import ExperienceTextSection from "./ExperienceTextSection";

interface Experience {
  company: string;
  dates: string;
  description: string[];
  technologies: string[];
}
interface ExperienceProps {
  experience: Experience[];
}

const experience = [
  {
    company: `Entwurf`,
    dates: `August 2024 - Current`,
    description: [
      "Working within a team of React developers to build and maintain diverse Next.js applications, including production-level music streaming services for prominent music organisations.",

      "Translated detailed Figma designs into fully responsive, dynamic web applications using Next.js, TypeScript, and Styled Components, ensuring a seamless user experience across devices.",

      "Diagnosed and resolved bugs and user-reported issues, contributing to overall platform stability and performance.",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Styled Components",
      "Git",
      "Sanity.io",
      "NPM",
    ],
  },
  {
    company: `Ignite Hubs`,
    dates: `May 2023 - July 2024`,
    description: [
      "Leading the development of the Ignite Hubs website, an NGO committed to empowering underprivileged children through coding education.",
      "Building fully responsive component based applications with Next.js & TypeScript, using Tailwind for styling and Hygraph headless CMS for content management.",
      "Focusing on implementing UI designs that follow WCAG guidelines and all other modern accessibility standards, i.e semantic HTML & ARIA tags",
    ],
    technologies: ["TypeScript", "Next.js", "Vue.js", "Nuxt", "Tailwind", "HyGraph"],
  },
  {
    company: `Curated Loop`,
    dates: `February 2024 - July 2024`,
    description: [
      "Contributing member of a dynamic team dedicated to creating an MVP product aiming at facilitating B2C rentals for luxury fashion brands.",
      "Engaging in the comprehensive development and design phases of the product to ensure its functionality and user experience align with market demands and brand objectives.",
      "I took full ownership of the UX/UI design and Front End build of the application, which uses TypeScript & Next.js 14.",
    ],
    technologies: ["TypeScript", "Next.js", "Node", "antd", "Git", "NPM", "Node.js"],
  },
];

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <>
      <ExperienceContainer id='experience'>
        <ExperienceSection>
          <ExperienceHeader>Experience</ExperienceHeader>
          <ExperienceTextSection experience={experience} />
        </ExperienceSection>
      </ExperienceContainer>
    </>
  );
};

export default Experience;
