import { Truck, RotateCcw, CreditCard, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Безкоштовна доставка",
    description: "При замовленні від 2000 грн по всій Україні",
  },
  {
    icon: RotateCcw,
    title: "Легке повернення",
    description: "14 днів для повернення товару без пояснень",
  },
  {
    icon: CreditCard,
    title: "Зручна оплата",
    description: "Оплата при отриманні або онлайн",
  },
  {
    icon: Headphones,
    title: "Підтримка 24/7",
    description: "Завжди готові допомогти з вибором",
  },
];

const Benefits = () => {
  return (
    <section className="py-16 bg-beige/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-terracotta" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
