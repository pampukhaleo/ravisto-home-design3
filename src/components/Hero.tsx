import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bedroom.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[700px] flex items-center pt-20">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary leading-tight">
            Ravisto.Home — дім, у якому хочеться залишитись
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Постіль, рушники, пледи, домашній декор і чай — усе, щоб створити тепло, яке відчуваєш серцем.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" onClick={() => scrollToSection("products")}>
              Переглянути каталог
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("about")}>
              Дізнатися більше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
