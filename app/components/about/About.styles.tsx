import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "@/app/utils/media";

export const AboutContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space-between;
  padding: 30px;

  ${media.mobile`
   gap: 10px;
   padding: 12px;
   flex-direction: column;
  `}

  ${media.mobileLarge`
   gap: 10px;
   padding: 12px;
   flex-direction: column;
  `}

  ${media.tablet`
   gap: 10px;
   flex-direction: column;
  `}

  ${media.desktop`
  flex-direction: row;
`}
`;

export const AboutTextContainer = styled(motion.div)`
  font-size: 18px;
  color: rgb(198, 198, 198);
  text-align: center;
  padding: 30px;

  ${media.mobile`
    font-size: 12px;
   padding: 12px;
  `}
  ${media.tablet`
  padding: 0;
`}
`;

export const AboutText = styled(motion.div)`
  padding: 30px;
  border-radius: 10px;
  border-radius: 10px;
  background-color: rgba(64, 63, 63, 0.033);
`;
