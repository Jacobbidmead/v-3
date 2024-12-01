"use client";

import StarsSvg from "@/app/svg_components/Stars";
import {
  HeroMain,
  HeroHeadContainer,
  HeroContent,
  HeroContentLower,
  HeroImage,
} from "./Hero.styles";
import { DarkerGrotesque } from "@/app/fonts";

interface HeroProps {
  heading: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ heading, subtitle }) => {
  return (
    <>
      <HeroMain className={DarkerGrotesque.className}>
        <HeroImage src='images/gradient.webp' alt='hero image' />
        <HeroHeadContainer>
          <HeroContent>{heading}</HeroContent>
          <HeroContentLower>I make things for the web.</HeroContentLower>
        </HeroHeadContainer>
        <StarsSvg />
      </HeroMain>
    </>
  );
};

export default Hero;
