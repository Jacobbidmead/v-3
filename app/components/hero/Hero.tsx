"use client";

import StarsSvg from "@/app/svg_components/Stars";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <>
      {/* // <div className='main-page-container'>
    //   {!isMobile ? <Nav scrollToSection={scrollToSection} /> : null}
    //   <img src='images/gradient.webp' alt='' className='hero-img' />
    //   {isMobile ? (
        <div>
          <Burger />{" "}
        </div>
      ) : null} */}
      <div className='hi-container'>
        <div className='hi'>Hi, Im Jacob</div>
        <div className='hi-lower'>I make things for the web.</div>
      </div>
      {/* <StarsSvg className='overlay-svg' /> */}

      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        // variants={textAnimate}
        viewport={{ once: true, amount: 0.1 }}
        className='contents-container'></motion.div>
    </>
  );
};

export default Hero;
