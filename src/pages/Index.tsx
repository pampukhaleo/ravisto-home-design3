import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import AboutProducts from "@/components/AboutProducts";
import Benefits from "@/components/Benefits";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ReturnProcess from "@/components/ReturnProcess";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <AboutProducts />
        <About />
        <Reviews />
        <FAQ />
        <ReturnProcess />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
