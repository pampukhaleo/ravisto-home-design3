import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram } from "lucide-react";
import heroImage from "@/assets/hero-bedroom.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[700px] flex items-center pt-32 md:pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Затишна спальня з якісним домашнім текстилем - постільна білизна, подушки та пледи від Ravisto.Home"
          className="w-full h-full object-cover"
          width="1920"
          height="700"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-heading">
            Ravisto.Home — дім, у якому хочеться залишитись
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Постіль, рушники, пледи, домашній декор і чай — усе, щоб створити тепло, яке відчуваєш серцем.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" onClick={() => scrollToSection("products")} className="h-14 text-base">
              Переглянути каталог
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection("about")}
              className="bg-background/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none h-14 text-base"
            >
              <a
                href="https://www.instagram.com/ravisto.home?igsh=aXg0c2JlM25peTNy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Слідкуйте за нами в Instagram
              </a>
            </Button>
          </div>
          <div className="flex gap-4 mt-6">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
