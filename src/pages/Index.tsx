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

const Index = () => {
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
