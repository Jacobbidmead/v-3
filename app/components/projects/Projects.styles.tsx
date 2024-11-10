import styled from "styled-components";
import { media } from "@/app/utils/media";

export const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 32px;
  gap: 2rem;

  ${media.mobile`
    grid-template-columns:  1fr;
    padding: 12px;
`}
  ${media.mobileLarge`
    grid-template-columns:  1fr;
    
`}
  ${media.tablet`
    grid-template-columns:  1fr;

`}
`;
