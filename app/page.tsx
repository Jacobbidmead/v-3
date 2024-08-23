"use client";

import Hero from "./components/hero/Hero";
import useNavbarLogic from "./hooks/useNavbarLogic";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";

// TODO test background color scroll functionality

export default function Home() {
  const { isMobile, backgroundColor, scrollToSection } = useNavbarLogic();
  return (
    <main style={{ backgroundColor: backgroundColor }}>
      <Nav scrollToSection={scrollToSection} />
      <Hero />
      <About />
    </main>
  );
}
