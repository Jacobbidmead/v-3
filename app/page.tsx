"use client";

import Hero from "./components/hero/Hero";
import useNavbarLogic from "./hooks/useNavbarLogic";
import Nav from "./components/nav/Nav";

export default function Home() {
  const { isMobile, backgroundColor, scrollToSection } = useNavbarLogic();
  return (
    <main>
      <Nav scrollToSection={scrollToSection} backgroundColor={backgroundColor} />
      <Hero />
    </main>
  );
}
