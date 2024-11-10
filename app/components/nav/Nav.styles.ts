import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "@/app/utils/media";

interface FloatingNavProps {
  navOpacity: string;
  border: string;
}

export const FloatingNavContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 3;
  padding-top: 40px;
  align-items: center;

  ${media.mobileLarge`
   display: none;
  `}
`;

export const FloatingNav = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "navOpacity" && prop !== "border",
})<FloatingNavProps>`
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-between;
  padding: 9px 8px;
  background-color: ${(props) => props.navOpacity};
  backdrop-filter: blur(20px);
  box-shadow: 0 2px 10px #0000001a;
  align-items: center;
  border-radius: 30px;
  transition: all 0.4s ease;
  width: 35%;
  height: 4rem;
  border: ${(props) => props.border};
  position: relative;

  ${media.desktop`
   width: 65%;
  `}
  ${media.tablet`
   width: 70%;
  `}
  ${media.mobileLarge`
   display: none;
  `}
  ${media.mobile`
   display: none;
  `}
`;

export const FnLinks = styled.div`
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 16px;
  z-index: 2;
  margin: 4px;
  border-radius: 30px;
  color: rgb(198, 198, 198);
  position: relative;
  width: 22%;
  display: inline-block;
  text-align: center;

  &:hover {
    color: white;
  }
`;

export const BackgroundBlock = styled(motion.div)`
  position: absolute;
  z-index: 1;
  width: 19.4%;
  height: 64%;
  background-color: rgba(114, 114, 114, 0.2);
  border-radius: 30px;
  top: 20%;
`;
