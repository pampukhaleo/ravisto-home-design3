import { MessageCircle, CheckCircle, Home } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Напишіть нам",
    description: "у Instagram або Telegram",
  },
  {
    icon: CheckCircle,
    title: "Оберіть товар",
    description: "Ми допоможемо вибрати і підтвердимо наявність",
  },
  {
    icon: Home,
    title: "Отримайте замовлення",
    description: "Оплата — доставка — дім, у якому затишно",
  },
];

const HowToOrder = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            Як зробити замовлення?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-warm mb-6">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="mb-4">
                  <span className="inline-block w-8 h-8 rounded-full bg-terracotta/20 text-terracotta font-bold flex items-center justify-center mb-3">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
