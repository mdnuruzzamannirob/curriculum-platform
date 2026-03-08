import Banner from "@/components/home/Banner";
import LevelShowcase from "@/components/home/LevelShowcase";
import HighlightedCourses from "@/components/home/HighlightedCourses";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import About from "@/components/home/About";
import HomeCta from "@/components/home/HomeCta";

export default function HomePage() {
  return (
    <>
      <Banner />
      <LevelShowcase />
      <HighlightedCourses />
      <HowItWorks />
      <Features />
      <About />
      <HomeCta />
    </>
  );
}
