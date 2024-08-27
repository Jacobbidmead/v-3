import styled from "styled-components";
import { media } from "@/app/utils/media";

export const HeroMain = styled.div`
  padding-bottom: 100px;
  position: relative;
  z-index: 1;

  ${media.mobile`
    padding-bottom: 40px;

  `}
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const HeroHeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 63%;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

export const HeroContent = styled.div`
  padding-top: 200px;
  font-size: 100px;
  color: rgb(45, 255, 167);
  text-shadow: 0 0 6px rgb(45, 255, 167);

  ${media.mobile`
    font-size: 3em;
    padding-top: 150px;
  `}
`;

export const HeroContentLower = styled.div`
  font-size: 40px;
  color: rgb(198, 198, 198);
  text-shadow: 0 0 6px #cccfcabf;

  ${media.mobile`
    font-size: 1em;
  `}
`;
