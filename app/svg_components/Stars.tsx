import Image from "next/image";
import stars from "../svg/stars.svg";
import { StarsContainer } from "./Stars.styles";

const StarsSvg = () => {
  return (
    <StarsContainer>
      <Image src={stars} alt='Stars' />
    </StarsContainer>
  );
};

export default StarsSvg;
