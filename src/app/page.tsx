import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import KPIs from "@/components/KPIs";
import Timeline from "@/components/Timeline";
import Transparency from "@/components/Transparency";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <KPIs />
      <Timeline />
      {/* <Testimonials /> */}
      <Transparency />
      <Footer />
    </main>
  );
}
