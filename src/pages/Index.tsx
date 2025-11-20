import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import HowToOrder from "@/components/HowToOrder";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { trackScroll } from "@/lib/analytics";

const Index = () => {
  // Scroll depth tracking
  useEffect(() => {
    const scrollDepths = [25, 50, 75, 100];
    const triggered = new Set<number>();

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

      scrollDepths.forEach(depth => {
        if (scrollPercent >= depth && !triggered.has(depth)) {
          triggered.add(depth);
          trackScroll(depth);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <WhyChooseUs />
        <Benefits />
        <About />
        <FAQ />
        <HowToOrder />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
