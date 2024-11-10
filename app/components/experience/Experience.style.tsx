import styled from "styled-components";
import { media } from "@/app/utils/media";
import { motion } from "framer-motion";

export const ExperienceHeader = styled.h4`
  color: rgb(198, 198, 198);
  font-size: 16px;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;

  ${media.mobile`
  padding-top: 30px;
`}

  ${media.mobileLarge`
  padding-top: 30px;
`}
`;

export const ExperienceContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;

  border-radius: 10px;
  padding: 2em;

  ${media.mobile`
  padding: 12px;
  
`}
`;

export const ExperienceSection = styled.div`
  color: white;
  background-color: rgba(64, 63, 63, 0.033);
  border-radius: 10px;
  font-size: 16px;
  padding: 40px 20px;
  margin: 2px;

  ${media.mobile`
  font-size: 10px;
  padding: 0;
`}

  ${media.mobileLarge`
  font-size: 14px;
  padding: 0;
`}
`;

export const ExperienceTextContainer = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  padding: 32px;
  gap: 2rem;
  gap: 24px;
  margin: 0px 100px;

  ${media.mobile`
   flex-direction: column;
   gap: 10px;
   padding: 1em;
   margin: 0;
  `}
  ${media.mobileLarge`
   flex-direction: column;
   gap: 10px;
   padding: 1em;
   margin: 0 20px;
  `}


  ${media.tablet`
  flex-direction: column;
  margin: 0 10px;
`}

${media.desktop`
  flex-direction: column;
  margin: 0px 75px;
  
`}
`;

export const ExperienceText = styled(motion.div)`
  border-radius: 10px;
  border-radius: 10px;
  padding: 2px 0px;
`;
export const ExperienceParagraph = styled.p`
  padding: 2px 0;
  display: block;
  color: rgba(194, 193, 193, 0.8);
`;

export const TechContainer = styled.div`
  margin-top: 22px;
`;

export const Tech = styled.span`
  color: rgb(45, 255, 167);
  border: 1px solid;
  padding: 4px;
  border-radius: 1px;
  margin: 4px;
  font-size: 10px;
  ${media.mobile`
  font-size:5px;
  margin: 2px;
`}
`;
