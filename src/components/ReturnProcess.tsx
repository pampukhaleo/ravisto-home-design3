import { Package, MessageSquare, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Зв'яжіться з нами",
    description: "Напишіть або зателефонуйте нам протягом 14 днів після покупки",
  },
  {
    icon: Package,
    title: "Упакуйте товар",
    description: "Збережіть оригінальну упаковку та бирки на товарі",
  },
  {
    icon: Truck,
    title: "Відправте товар",
    description: "Ми організуємо безкоштовний вивіз або ви можете відправити самостійно",
  },
  {
    icon: CheckCircle,
    title: "Отримайте кошти",
    description: "Повернемо гроші протягом 5-7 робочих днів після перевірки",
  },
];

const ReturnProcess = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Процес повернення
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ми піклуємося про ваш комфорт – повернення товару простe та швидке
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-warm mb-6 shadow-medium">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 -z-10 w-full h-0.5 bg-border hidden lg:block">
                    {index < steps.length - 1 && (
                      <div className="w-full h-full bg-terracotta/30" />
                    )}
                  </div>
                  <div className="mb-3 text-terracotta font-bold text-lg">
                    Крок {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-card rounded-2xl shadow-soft">
            <h3 className="text-2xl font-bold text-primary mb-4 text-center">
              Умови повернення
            </h3>
            <ul className="space-y-3 text-foreground max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-terracotta flex-shrink-0 mt-0.5" />
                <span>Товар не повинен бути у використанні</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-terracotta flex-shrink-0 mt-0.5" />
                <span>Збережена оригінальна упаковка та бирки</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-terracotta flex-shrink-0 mt-0.5" />
                <span>Повернення протягом 14 днів з моменту покупки</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-terracotta flex-shrink-0 mt-0.5" />
                <span>Товар не входить до переліку виключень (індивідуальне замовлення)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnProcess;
