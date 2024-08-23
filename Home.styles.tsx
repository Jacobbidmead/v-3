import styled from "styled-components";

interface HomeContainerProps {
  bgColor: string;
}

export const HomeContainer = styled.main<HomeContainerProps>`
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
`;
