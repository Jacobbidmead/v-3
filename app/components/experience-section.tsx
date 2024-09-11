"use client";

import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  description: string;
  date: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Developer",
    description: "Developed and maintained web applications using React and Node.js.",
    date: "2020 - Present",
  },
  {
    title: "Frontend Developer",
    description: "Created responsive user interfaces and implemented complex UI animations.",
    date: "2018 - 2020",
  },
  {
    title: "Web Design Intern",
    description: "Assisted in designing and prototyping website layouts using Figma and Adobe XD.",
    date: "2017 - 2018",
  },
  {
    title: "Freelance Web Developer",
    description: "Built custom websites for small businesses and startups.",
    date: "2016 - 2017",
  },
];

export default function ExperienceSection() {
  return (
    <div className=' flex items-center justify-center bg-[rgb(12,9,16)] text-white p-4'>
      <div className='max-w-3xl w-full'>
        <h2 className='text-3xl font-bold mb-8 text-center'>My Experience</h2>
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
                  <h3 className='text-xl font-semibold mb-2'>{exp.title}</h3>
                  <p className='text-[rgba(194,193,193,0.477)] mb-2'>{exp.date}</p>
                  <p>{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
