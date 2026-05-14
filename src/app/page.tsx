import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import BrandMarquee from "@/components/sections/brand-marquee";
import Problem from "@/components/sections/problem";
import Solution from "@/components/sections/solution";
import About from "@/components/sections/about";
import MidCTA from "@/components/sections/mid-cta";
import Services from "@/components/sections/services";
import Videos from "@/components/sections/videos";
import Results from "@/components/sections/results";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import WhatsAppButton from "@/components/sections/whatsapp-button";
import CursorGlow from "@/components/sections/cursor-glow";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505]">
      <CursorGlow />
      <Navbar />
      <Hero />
      <BrandMarquee />
      <Problem />
      <Solution />
      <About />
      <MidCTA />
      <Services />
      <Videos />
      <Results />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
