import styled from "styled-components";
import { media } from "@/app/utils/media";

export const SkillsetHeader = styled.h4`
  color: rgb(198, 198, 198);
  font-size: 16px;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`;

export const SkillsetContainer = styled.section`
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: rgba(64, 63, 63, 0.033);
  border-radius: 10px;
  padding: 30px;
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px 60px;

  ${media.mobile`
  padding: 2px;

  `}
`;

export const Skill = styled.div`
  color: rgba(45, 255, 167, 0.764);
  border: 1px solid rgb(45, 255, 167);
  background-color: rgba(64, 63, 63, 0.033);
  padding: 4px;
  border-radius: 2px;
  font-size: 13px;
  gap: 12px;
  margin: 2px;

  ${media.mobile`
  font-size:11px;
`}
`;
