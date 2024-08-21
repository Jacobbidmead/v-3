"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FloatingNav, FloatingNavContainer, FnLinks, BackgroundBlock } from "./Nav.styles";

interface NavProps {
  scrollToSection: (sectionId: string) => void;
  backgroundColo?: string;
}

const Nav: React.FC<NavProps> = ({ scrollToSection, backgroundColor }) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(null);
  const [navOpacity, setNavOpacity] = useState("rgba(114, 114, 114, 0)");
  const [navBorder, setNavBorder] = useState("none");
  const router = useRouter();

  const backgroundX = activeButtonIndex !== null ? `${activeButtonIndex * 100}%` : "0%";
  const buttons = ["About", "Skillset", "Projects", "Contact", "Photo"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setNavOpacity("rgba(114, 114, 114, 0.2)");
        setNavBorder("1px solid #404040b5");
      } else {
        setNavOpacity("rgba(114, 114, 114, 0)");
        setNavBorder("none");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = (index: number, label: string) => {
    if (label === "Photo") {
      router.push("/Photo");
    } else {
      setActiveButtonIndex(index);
      scrollToSection(label.toLowerCase());
    }
  };

  return (
    <FloatingNavContainer>
      <FloatingNav backgroundColor={backgroundColor} navBorder={navBorder}>
        {buttons.map((label, index) => (
          <FnLinks key={label} onClick={() => handleButtonClick(index, label)}>
            {label}
          </FnLinks>
        ))}
        <BackgroundBlock
          initial={false}
          animate={{ x: backgroundX }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
        />
      </FloatingNav>
    </FloatingNavContainer>
  );
};

export default Nav;
