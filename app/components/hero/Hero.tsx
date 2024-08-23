import StarsSvg from "@/app/svg_components/Stars";
import {
  HeroMain,
  HeroHeadContainer,
  HeroContent,
  HeroContentLower,
  HeroImage,
} from "./Hero.styles";

const Hero: React.FC = () => {
  return (
    <>
      <HeroMain>
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
