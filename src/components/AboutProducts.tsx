import { Leaf, Shield, Award, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Перевірені постачальники",
    description: "Ми працюємо лише з перевіреними постачальниками тканин",
  },
  {
    icon: Award,
    title: "Контроль якості",
    description: "Кожен виріб проходить контроль якості на складі",
  },
  {
    icon: Leaf,
    title: "Швидка доставка",
    description: "Швидка доставка по Україні (1–4 дні)",
  },
  {
    icon: Heart,
    title: "Особистий підхід",
    description: "Консультація та допомога у виборі кольору та матеріалів. Можливість замовлення через Instagram або Telegram",
  },
];

const AboutProducts = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Чому обирають нас
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-smooth"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-warm mb-6">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProducts;
