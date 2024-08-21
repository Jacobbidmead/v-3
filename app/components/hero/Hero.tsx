"use client";

import StarsSvg from "@/app/svg_components/Stars";
import { motion } from "framer-motion";

interface HeroProps {
  backgroundColor: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundColor }) => {
  return (
    <>
      <main style={{ backgroundColor: backgroundColor }}>
        <div className='main-page-container'>
          <img src='images/gradient.webp' alt='' className='hero-img' />
          <div className='hi-container'>
            <div className='hi'>Hi, Im Jacob</div>
            <div className='hi-lower'>I make things for the web.</div>
          </div>
          {/* <StarsSv g className='overlay-svg' /> */}
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            // variants={textAnimate}
            viewport={{ once: true, amount: 0.1 }}
            className='contents-container'></motion.div>
        </div>
      </main>
    </>
  );
};

export default Hero;
