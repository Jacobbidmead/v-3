"use client";
import { motion } from "framer-motion";
import { AboutContainer, AboutTextContainer, AboutText } from "./About.styles";

const About: React.FC = () => {
  return (
    <>
      <AboutContainer id='about'>
        <AboutTextContainer
        // initial={"offscreen"}
        // whileInView={"onscreen"}
        // variants={boxAnimate}
        // viewport={{ once: true, amount: 0.1 }}
        >
          <AboutText>
            <p>
              Im a creative Front End JavaScript developer with a passion for design and creating
              intuatuive UI. I build web applications with TypeScript, React & Next.js.
            </p>
          </AboutText>
        </AboutTextContainer>

        <AboutTextContainer>
          <AboutText>
            <p>
              Im a bootcamp graduate and for the most part self taught; I have learnt to utilise my
              problem-solving skills to create intuative and responsive web applications in a
              professional enviroment.
            </p>
          </AboutText>
        </AboutTextContainer>

        <AboutTextContainer>
          <AboutText>
            <p>
              I have a creative background, studying print & time based media at UAL. A passionate
              photographer & explorer, I have documented my travels around the world over the last
              ten years.
            </p>
          </AboutText>
        </AboutTextContainer>
      </AboutContainer>
    </>
  );
};

export default About;
