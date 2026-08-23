import Image from "next/image";
import About from "./components/About";
import Work from "./components/Work";
import CurrentWork from "./components/CurrentWork";
import TectStack from "./components/TectStack";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/ui/Header";
import SmoothScroll from "./components/SmoothScroll";
import Hero from "./components/Hero";
import GsapTimelineProvider from "./components/animation-providers/HeroGsapTimelineProvider";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <main id="smooth-wrapper">
        <div id="smooth-content">
          <GsapTimelineProvider>
            <Header />
            <Hero />
          </GsapTimelineProvider>
          <About />
          <Work />
          <CurrentWork />
          <TectStack />
          <Experience />
          <Footer />
        </div>
      </main>
    </>
  );
}
