import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroMain = styled.main`
  transition: background-color 1s ease-in-out;
  padding-bottom: 100px;
  position: relative;
  z-index: 1;
  background-image: url("images/gradient.webp");
`;

export const HeroHeadContainer = styled.div`
 display: flex;
  flex-direction: column;
  place-items: center;
  height: 63%;
  justify-content: center;
  position: relative;
  z-index: 1; /* Higher than the SVG */
}
`;

export const HeroContent = styled.div`
  padding-top: 240px;
  font-size: 100px;
  color: rgb(45, 255, 167);
  text-shadow: 0 0 6px rgb(45, 255, 167);
`;

export const HeroContentLower = styled.div`
  font-size: 40px;
  color: rgb(198, 198, 198);
  text-shadow: 0 0 6px #cccfcabf;
`;
