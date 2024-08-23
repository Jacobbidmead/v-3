import StarsSvg from "@/app/svg_components/Stars";
import {
  HeroMain,
  HeroHeadContainer,
  HeroContent,
  HeroContentLower,
  HeroImage,
} from "./Hero.styles";
import { DarkerGrotesque } from "@/app/fonts";

const Hero: React.FC = () => {
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
