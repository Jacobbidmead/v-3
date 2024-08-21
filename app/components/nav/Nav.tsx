"use client";

import useNavbarLogic from "@/app/hooks/useNavbarLogic";

const Nav: React.FC = () => {
  const { isMobile, backgroundColor, scrollToSection } = useNavbarLogic();
  return <>Nav</>;
};

export default Nav;
