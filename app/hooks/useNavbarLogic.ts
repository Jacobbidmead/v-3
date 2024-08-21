import { useState, useEffect } from "react";

const useNavbarLogic = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 601);
  const [backgroudColor, setBackgroundColor] = useState<string>("rgb(4, 4, 4)");

  const checkMobile = () => {
    setIsMobile(window.innerWidth < 601);
  };

  useEffect(() => {
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setBackgroundColor("rgb(12, 9, 16 )");
      } else {
        setBackgroundColor("rgb(4, 4, 4)");
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return { isMobile, backgroudColor, scrollToSection };
};

export default useNavbarLogic;
