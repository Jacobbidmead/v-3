"use client";

import React from "react";
import { motion } from "framer-motion";
import { Skill } from "./skillset/Skillset.style";

interface ExperienceItem {
  title: string;
  description: string;
  date: string;
  company: string;
  technology: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Entwurf",
    title: "Frontend ReactJS Developer",
    description: "Building web applications using Next.js",
    date: "August 2024 - Present",
    technology: ["Next.js", "styled components", "sanity.io"],
  },
  {
    company: "Curated Loop",
    title: "Frontend Developer",
    description: "Created responsive user interfaces and implemented complex UI animations.",
    date: "Feburary 2024 - July 2024",
    technology: [],
  },
  {
    company: "Ignite Hubs",
    title: "Web Design Intern",
    description: "Assisted in designing and prototyping website layouts using Figma and Adobe XD.",
    date: "May 2023 - July 2024",
    technology: [],
  },
];

export default function ExperienceSection() {
  const allTechnologies = experiences.flatMap((experience) => experience.technology);
  return (
    <div
      className=' flex items-center justify-center bg-[rgb(12,9,16)] text-white p-4 '
      id='experience'>
      <div className='w-full flex justify-center'>
        <h2 className='text-1xl  text-left pr-12'>Professional coding experience</h2>
        <div className='relative'>
          <div
            className='absolute left-2 top-0 bottom-0 w-px bg-[rgba(194,193,193,0.477)]'
            aria-hidden='true'
          />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='mb-8 pl-6'>
              <div className='relative'>
                <div className='absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-[rgba(194,193,193,0.477)] flex items-center justify-center'>
                  <div className='w-1.5 h-1.5 rounded-full bg-white' />
                </div>
                <div>
                  <h2>{exp.company}</h2>
                  <h3 className='text-xl  mb-2'>{exp.title}</h3>
                  <p className='text-[rgba(194,193,193,0.477)] mb-2'>{exp.date}</p>
                  <p>{exp.description}</p>
                </div>

                {/* Loop over the combined technology array */}
                {allTechnologies.map((tech, index) => (
                  <Skill key={index}>{tech}</Skill>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
