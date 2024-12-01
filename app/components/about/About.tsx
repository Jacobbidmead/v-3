"use client";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@sanity/types";
import { AboutContainer, AboutTextContainer, AboutText } from "./About.styles";
// const isMobile = window.innerWidth < 601;
const boxAnimate = {
  offscreen: { y: 200, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      bounce: 0.5,
      duration: 1,
    },
  },
};

const textAnimate = {
  offscreen: { y: 200 },
  onscreen: {
    y: 0,
    transition: {
      type: "tween",
      bounce: 0.5,
      duration: 1,
    },
  },
};

interface AboutProps {
  leftText: PortableTextBlock[];
  centerText: PortableTextBlock[];
  rightText: PortableTextBlock[];
}

const About: React.FC<AboutProps> = ({ leftText, rightText, centerText }) => {
  return (
    <>
      <AboutContainer id='about'>
        <AboutTextContainer
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={boxAnimate}
          viewport={{ once: true, amount: 0.1 }}>
          <AboutText>
            <p data-testid='about-description'>
              <PortableText value={leftText} />
            </p>
          </AboutText>
        </AboutTextContainer>

        <AboutTextContainer
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={boxAnimate}
          viewport={{ once: true, amount: 0.1 }}>
          <AboutText>
            <p data-testid='about-description'>
              <PortableText value={centerText} />
            </p>
          </AboutText>
        </AboutTextContainer>

        <AboutTextContainer
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={boxAnimate}
          viewport={{ once: true, amount: 0.1 }}>
          <AboutText>
            <p data-testid='about-description'>
              <PortableText value={rightText} />
            </p>
          </AboutText>
        </AboutTextContainer>
      </AboutContainer>
    </>
  );
};

export default About;
