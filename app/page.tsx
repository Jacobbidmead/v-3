"use client";

import Hero from "./components/hero/Hero";
import useNavbarLogic from "./hooks/useNavbarLogic";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import { HomeContainer } from "@/Home.styles";
export default function Home() {
  const { isMobile, backgroundColor, scrollToSection } = useNavbarLogic();
  return (
    <HomeContainer bgColor={backgroundColor}>
      <Nav scrollToSection={scrollToSection} />
      <Hero />
      <About />
    </HomeContainer>
  );
}
