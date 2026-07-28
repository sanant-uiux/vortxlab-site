import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black p-3 font-inter md:p-4">
      <div className="flex w-full flex-col gap-3 md:gap-4">
        <Hero />
        <main className="flex w-full flex-col gap-3 md:gap-4">
          <About />
          <Services />
          <Marquee />
          <Work />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
