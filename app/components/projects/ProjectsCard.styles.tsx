import styled from "styled-components";
import { media } from "@/app/utils/media";

export const ProjectCard = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 60px;
  border: 1px solid rgba(194, 193, 193, 0.477);
  border-radius: 10px;
  flex-direction: column;
  place-items: center;
  color: white;
  background-color: rgba(64, 63, 63, 0.033);
  cursor: pointer;
  gap: 14px;
`;

export const Technologies = styled.div`
  padding-top: 10px;
  font-size: 12px;
`;

export const Tech = styled.span`
  color: rgb(45, 255, 167);
  border: 1px solid;
  padding: 4px;
  border-radius: 1px;
  margin-right: 4px;
  font-size: 8px;
`;

export const ProjectLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const LinkIcon = styled.a`
  text-decoration: none;
  color: white;
  padding-top: 10px;
  &:hover {
    color: rgb(45, 255, 167);
  }
`;
