"use client";

import Hero from "./components/hero/Hero";
import useNavbarLogic from "./hooks/useNavbarLogic";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import { HomeContainer } from "@/Home.styles";
import Skillset from "./components/skillset/Skillset";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import useBackgroundColorScroll from "./hooks/useBackgroundColorScroll";

export default function Home() {
  const { scrollToSection } = useNavbarLogic();
  const { backgroundColor } = useBackgroundColorScroll();
  return (
    <HomeContainer backgroundColor={backgroundColor}>
      <Nav scrollToSection={scrollToSection} />
      <Hero />
      <About />
      <Skillset />
      <Experience experience={[]} />
      <Projects />
    </HomeContainer>
  );
}
