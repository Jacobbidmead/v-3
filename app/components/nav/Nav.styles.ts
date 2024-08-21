import styled from "styled-components";
import { motion } from "framer-motion";

export const FloatingNavContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 3;
  padding-top: 40px;
  align-items: center;
`;

export const FloatingNav = styled.div<{ navBorder: string }>`
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-between;
  padding: 9px 8px;
  background-color: rgba(114, 114, 114, 0.2);
  backdrop-filter: blur(20px);
  box-shadow: 0 2px 10px #0000001a;
  align-items: center;
  border-radius: 30px;
  transition: all 0.4s ease;
  width: 30%;
  height: 40px;
  border: ${(props) => props.navBorder};
  position: relative;
  z-index: 1; /* Ensure FloatingNav itself is on top */
`;

export const FnLinks = styled.div`
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 17px;
  z-index: 2; /* Ensure this is higher than BackgroundBlock */
  margin: 0 5px;
  border-radius: 30px;
  color: rgb(198, 198, 198);
  position: relative;
  width: 20%;
  display: inline-block;
  text-align: center;

  &:hover {
    color: white;
  }
`;

export const BackgroundBlock = styled(motion.div)`
  position: absolute;
  z-index: 1; /* Ensure this is lower than FnLinks */
  width: 19.5%;
  height: 64%;
  background-color: rgba(114, 114, 114, 0.2);
  border-radius: 30px;
`;
