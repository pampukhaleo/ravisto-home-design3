import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import beddingImage from "@/assets/product-bedding.jpg";
import pillowsImage from "@/assets/product-pillows.jpg";
import towelsImage from "@/assets/product-towels.jpg";
import blanketImage from "@/assets/product-blanket.jpg";

const products = [
  {
    id: 1,
    name: "Постільна білизна Premium",
    description: "100% льон, натуральні відтінки",
    price: "2 990 грн",
    image: beddingImage,
  },
  {
    id: 2,
    name: "Декоративні подушки",
    description: "М'які наповнювачі, стійкі тканини",
    price: "890 грн",
    image: pillowsImage,
  },
  {
    id: 3,
    name: "Банні рушники",
    description: "Бавовна преміум-класу",
    price: "650 грн",
    image: towelsImage,
  },
  {
    id: 4,
    name: "Пледи та ковдри",
    description: "Тепло та затишок для вашого дому",
    price: "1 790 грн",
    image: blanketImage,
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Наші товари
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Кожен виріб створений з любов'ю до деталей та натуральних матеріалів
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden border-0 shadow-soft hover:shadow-medium transition-smooth bg-card rounded-2xl group"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-terracotta">
                    {product.price}
                  </span>
                  <Button variant="secondary" size="sm">
                    Детальніше
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
