import { MessageSquare, CheckCircle, Home } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Напишіть нам у Instagram або Telegram",
    description: "Зв'яжіться з нами зручним для вас способом",
  },
  {
    icon: CheckCircle,
    title: "Ми допоможемо вибрати і підтвердимо наявність",
    description: "Наші консультанти підкажуть найкращі варіанти",
  },
  {
    icon: Home,
    title: "Оплата — доставка — дім, у якому затишно",
    description: "Швидка доставка та комфорт у вашій домівці",
  },
];

const HowToOrder = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-4">
            Як зробити замовлення?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Просто три кроки до затишку вашого дому
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-warm mb-6 shadow-medium">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="mb-3 text-terracotta font-bold text-lg">
                    Крок {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-heading mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
