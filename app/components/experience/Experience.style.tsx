import styled from "styled-components";
import { media } from "@/app/utils/media";

export const ExperienceHeader = styled.h4`
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`;

export const ExperienceContainer = styled.section`
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  background-color: rgba(64, 63, 63, 0.033);
  border-radius: 10px;
  padding: 30px;
`;

export const ExperienceSection = styled.div`
  color: rgba(45, 255, 167, 0.764);
  background-color: rgba(64, 63, 63, 0.033);
  border: 1px solid rgba(194, 193, 193, 0.477);
  border-radius: 10px;
  font-size: 13px;
  padding: 50px;
  margin: 2px;
  ${media.mobile`
  font-size:11px;
`}
`;
