"use client";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <>
      {" "}
      <div className='welcome-container' id='about'>
        <div className='welcome'>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            // variants={boxAnimate}
            viewport={{ once: true, amount: 0.1 }}
            className='about about-left'>
            <motion.div>
              <p>
                Im a creative Front End JavaScript developer with a passion for design and creating
                intuatuive UI. I build web applications with TypeScript, React & Next.js.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            // variants={boxAnimate}
            viewport={{ once: true, amount: 0.1 }}
            className='about about-center'>
            <motion.div>
              <p>
                {" "}
                My journey started with Haiku Academys full stack web development bootcamp, which I
                completed in October 2022. since graduating, I have learnt to utilise my
                problem-solving skills to create intuative and responsive web applications in a
                professional enviroment.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            // variants={boxAnimate}
            viewport={{ once: true, amount: 0.1 }}
            className='about about-center'>
            {" "}
            <div>
              <p>
                I have a creative background, studying print & time based media at UAL. A passionate
                photographer & explorer, I have documented my travels around the world over the last
                ten years.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
