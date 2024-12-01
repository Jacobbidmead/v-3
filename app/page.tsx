"use client";

import { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import useNavbarLogic from "./hooks/useNavbarLogic";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import { HomeContainer } from "@/Home.styles";
import Skillset from "./components/skillset/Skillset";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import useBackgroundColorScroll from "./hooks/useBackgroundColorScroll";

interface LandingPageData {
  heading: string;
  subtitle: string;
  aboutLeft: any[];
  aboutCenter: any[];
  aboutRight: any[];
}

export default function Home() {
  const { scrollToSection } = useNavbarLogic();
  const { backgroundColor } = useBackgroundColorScroll();
  const [landingPageData, setLandingPageData] = useState<LandingPageData[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/portfolio");

        if (!res.ok) {
          throw new Error("Failed to fetch landing page data");
        }

        const data: LandingPageData[] = await res.json();
        setLandingPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!landingPageData || landingPageData.length === 0) return <div>No data found</div>;

  const data = landingPageData[0];
  const { heading, subtitle, aboutCenter, aboutRight, aboutLeft } = data;
  console.log(data);
  return (
    <HomeContainer backgroundColor={backgroundColor}>
      <Nav scrollToSection={scrollToSection} />
      <Hero heading={heading} subtitle={subtitle} />
      <About />
      <Skillset />
      <Experience experience={[]} />
      <Projects />
    </HomeContainer>
  );
}
