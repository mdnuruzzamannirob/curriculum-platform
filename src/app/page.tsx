import Banner from "@/components/home/Banner";
import HighlightedCourses from "@/components/home/HighlightedCourses";
import BackendPath from "@/components/home/BackendPath";
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
      <BackendPath />
      <HowItWorks />
      <Features />
      <Reviews />
      <About />
      <HomeCta />
    </>
  );
}
