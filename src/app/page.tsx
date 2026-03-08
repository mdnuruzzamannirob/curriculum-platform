import Banner from "@/components/home/Banner";
import HowItWorks from "@/components/home/HowItWorks";
import HighlightedCourses from "@/components/home/HighlightedCourses";
import Features from "@/components/home/Features";
import HomeCta from "@/components/home/HomeCta";

export default function HomePage() {
  return (
    <>
      <Banner />
      <HowItWorks />
      <HighlightedCourses />
      <Features />
      <HomeCta />
    </>
  );
}
