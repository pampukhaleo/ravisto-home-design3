import { Shield, CheckCircle, Truck, MessageCircle, Instagram } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Перевірені постачальники",
    description: "Ми працюємо лише з перевіреними постачальниками тканин",
  },
  {
    icon: CheckCircle,
    title: "Контроль якості",
    description: "Кожен виріб проходить контроль якості на складі",
  },
  {
    icon: Truck,
    title: "Швидка доставка",
    description: "Швидка доставка по Україні (1–4 дні)",
  },
  {
    icon: MessageCircle,
    title: "Консультація",
    description: "Консультація та допомога у виборі кольору та матеріалів",
  },
  {
    icon: Instagram,
    title: "Зручне замовлення",
    description: "Можливість замовлення через Instagram або Telegram",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Чому обирають нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ваш комфорт — наш пріоритет
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-smooth"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-warm flex items-center justify-center mb-4 shadow-soft">
                <reason.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
