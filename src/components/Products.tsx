import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import beddingImage from "@/assets/product-bedding.jpg";
import pillowsImage from "@/assets/product-pillows.jpg";
import towelsImage from "@/assets/product-towels.jpg";
import blanketImage from "@/assets/product-blanket.jpg";
import teaImage from "@/assets/product-tea.jpg";
import decorImage from "@/assets/product-decor.jpg";

const products = [
  {
    id: 1,
    name: "Рушники",
    description: "м'які, поглинаючі, різних розмірів",
    price: "від 450 грн",
    image: towelsImage,
  },
  {
    id: 2,
    name: "Постіль",
    description: "сатин, бязь, поплін комплекти та окремі елементи",
    price: "від 1 890 грн",
    image: beddingImage,
  },
  {
    id: 3,
    name: "Пледи",
    description: "теплі, фактурні, у модних кольорах",
    price: "від 1 290 грн",
    image: blanketImage,
  },
  {
    id: 4,
    name: "Декор",
    description: "квіткові композиції, вази, ароматизовані свічки",
    price: "від 350 грн",
    image: decorImage,
  },
  {
    id: 5,
    name: "Чаї",
    description: "натуральні бленди та чайні набори для затишних моментів",
    price: "від 180 грн",
    image: teaImage,
  },
];

const Products = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-4">
            Наш асортимент
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            М'якість рушників, ніжність постелі, затишок пледів і аромати домашніх чаїв — у кожному товарі ми поєднали турботу й якість
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden border-0 shadow-soft hover:shadow-medium transition-smooth bg-card rounded-2xl group"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative overflow-hidden w-full md:w-80 h-56 md:h-auto flex-shrink-0">
                  <img
                    src={product.image}
                    alt={`${product.name} - ${product.description} від Ravisto.Home`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    loading="lazy"
                    width="320"
                    height="256"
                  />
                </div>
                <CardContent className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-heading mb-3">
                      {product.name}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground mb-4 md:mb-6">{product.description}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-terracotta">
                      {product.price}
                    </span>
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                      <Button 
                        variant="secondary" 
                        size="lg"
                        onClick={() => scrollToSection("contact")}
                        className="w-full sm:w-auto h-12"
                      >
                        Детальніше
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        asChild
                        className="w-full sm:w-auto h-12"
                      >
                        <a 
                          href="https://www.instagram.com/ravisto.home?igsh=aXg0c2JlM25peTNy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <Instagram className="w-5 h-5" />
                          Instagram
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
