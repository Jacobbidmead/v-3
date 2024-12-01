"use client";

import { useEffect, useState } from "react";
import StarsSvg from "@/app/svg_components/Stars";
import {
  HeroMain,
  HeroHeadContainer,
  HeroContent,
  HeroContentLower,
  HeroImage,
} from "./Hero.styles";
import { DarkerGrotesque } from "@/app/fonts";

interface LandingPageData {
  heading: string;
  subtitle: string;
  aboutLeft: any[];
  aboutCenter: any[];
  aboutRight: any[];
}

const Hero: React.FC = () => {
  const [landingPageData, setLandingPageData] = useState<LandingPageData[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/landingPageData");
        const data = await res.json();
        setLandingPageData(data);
      } catch (error) {
        console.error("Error fetching landing page data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <HeroMain className={DarkerGrotesque.className}>
        <HeroImage src='images/gradient.webp' alt='hero image' />
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
