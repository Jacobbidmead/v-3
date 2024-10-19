import styled from "styled-components";

interface HomeContainerProps {
  backgroundColor: string;
}

export const HomeContainer = styled.main<HomeContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
`;
