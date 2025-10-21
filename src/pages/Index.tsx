import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import AboutProducts from "@/components/AboutProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
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
        <AboutProducts />
        <WhyChooseUs />
        <Benefits />
        <About />
        <Reviews />
        <FAQ />
        <HowToOrder />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
