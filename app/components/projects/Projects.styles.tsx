import styled from "styled-components";
import { media } from "@/app/utils/media";

export const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 32px;
  gap: 2rem;

  ${media.mobile`
    grid-template-columns:  1fr;
    padding: 18px;
`}
`;
