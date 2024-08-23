import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 2em;
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space between;
`;

export const AboutTextContainer = styled(motion.div)`
  font-size: 164x;
  color: white;
  text-align: center;
  padding: 30px;
`;

export const AboutText = styled(motion.div)`
  padding: 2rem;
  border-radius: 10px;
  border-radius: 10px;
  background-color: rgba(64, 63, 63, 0.033);
`;
