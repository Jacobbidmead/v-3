import styled from "styled-components";
import { media } from "@/app/utils/media";
import { motion } from "framer-motion";

export const ExperienceHeader = styled.h4`
  color: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`;

export const ExperienceContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  background-color: rgba(64, 63, 63, 0.033);
  border-radius: 10px;
`;

export const ExperienceSection = styled.div`
  color: white;
  background-color: rgba(64, 63, 63, 0.033);
  border: 1px solid rgba(194, 193, 193, 0.477);
  border-radius: 10px;
  font-size: 13px;
  padding: 40px 20px;
  margin: 2px;

  ${media.mobile`
  font-size:11px;
`}
`;

export const ExperienceTextContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 2em;
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space-evenly;

  ${media.mobile`
   flex-direction: column;
   gap: 10px;
   padding: 1em;
  `}

  ${media.tablet`
  flex-direction: column;
`}
`;

export const ExperienceText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border-radius: 10px;
  background-color: rgba(64, 63, 63, 0.033);
`;

export const ExperienceParagraph = styled.p``;

export const Tech = styled.span`
  color: rgb(45, 255, 167);
  border: 1px solid;
  padding: 4px;
  border-radius: 1px;
  margin-right: 4px;
  font-size: 8px;
`;
