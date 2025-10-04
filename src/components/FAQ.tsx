import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Які матеріали ви використовуєте?",
    answer:
      "Ми використовуємо виключно натуральні матеріали: льон, бавовна, шовк. Всі тканини мають сертифікати якості та є екологічно чистими.",
  },
  {
    question: "Скільки часу займає доставка?",
    answer:
      "Доставка по Києву займає 1-2 дні, по Україні - 2-4 дні. При замовленні від 2000 грн доставка безкоштовна.",
  },
  {
    question: "Чи можна повернути товар?",
    answer:
      "Так, ви можете повернути товар протягом 14 днів з моменту покупки без пояснення причин, якщо він не був у використанні.",
  },
  {
    question: "Які способи оплати ви приймаєте?",
    answer:
      "Ми приймаємо оплату при отриманні (накладений платіж), а також онлайн-оплату банківською карткою.",
  },
  {
    question: "Чи надаєте ви гарантію на товари?",
    answer:
      "Так, ми надаємо гарантію на всі товари. Термін гарантії залежить від типу виробу та складає від 6 до 24 місяців.",
  },
  {
    question: "Як правильно доглядати за текстилем?",
    answer:
      "Рекомендації по догляду вказані на етикетці кожного виробу. Зазвичай це машинне прання при температурі 30-40°C без відбілювачів.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Часті запитання
            </h2>
            <p className="text-xl text-muted-foreground">
              Відповіді на найпопулярніші питання наших клієнтів
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0 shadow-soft rounded-2xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
