"use client";
// TODO write some test for Hero

import StarsSvg from "@/app/svg_components/Stars";
import { HeroMain, HeroHeadContainer, HeroContent, HeroContentLower } from "./Hero.styles";

const Hero: React.FC = () => {
  return (
    <>
      <HeroMain>
        <HeroHeadContainer>
          <HeroContent>Hi, Im Jacob</HeroContent>
          <HeroContentLower>I make things for the web.</HeroContentLower>
        </HeroHeadContainer>
        <StarsSvg />
      </HeroMain>
    </>
  );
};

export default Hero;
