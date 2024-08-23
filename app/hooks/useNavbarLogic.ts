import { useState, useEffect } from "react";

interface NavBarLogicProps {
  backgroundColor: string;
  isMobile: boolean;
  scrollToSection: (sectionId: string) => void;
}

const useNavbarLogic = (): NavBarLogicProps => {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" && window.innerWidth < 601
  );
  const [backgroundColor, setBackgroundColor] = useState<string>("rgb(4, 4, 4)");

  const checkMobile = () => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 601);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkMobile);

      return () => {
        window.removeEventListener("resize", checkMobile);
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setBackgroundColor("rgb(12, 9, 16)");
      } else {
        setBackgroundColor("rgb(4, 4, 4)");
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return { isMobile, backgroundColor, scrollToSection };
};

export default useNavbarLogic;
