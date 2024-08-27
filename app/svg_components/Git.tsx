import Image from "next/image";
import gitIcon from "../svg/git.svg";
import styled from "styled-components";

const GitSvg = () => {
  return <Image src={gitIcon} alt='git icon' />;
};

export default GitSvg;
