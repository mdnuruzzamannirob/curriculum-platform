import Banner from "@/components/home/Banner";
import HighlightedCourses from "@/components/home/HighlightedCourses";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import About from "@/components/home/About";
import HomeCta from "@/components/home/HomeCta";
import Reviews from "@/components/home/Reviews";

export default function HomePage() {
  return (
    <>
      <Banner />
      <HighlightedCourses />
      <HowItWorks />
      <Features />
      <Reviews />
      <About />
      <HomeCta />
    </>
  );
}
