import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Results from "@/components/sections/results";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import WhatsAppButton from "@/components/sections/whatsapp-button";
import CursorGlow from "@/components/sections/cursor-glow";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Results />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
