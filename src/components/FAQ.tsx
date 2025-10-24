import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Час доставки?",
    answer:
      "1–3 дні по Україні. При замовленні від 1200 грн - доставка безкоштовна",
  },
  {
    question: "Де виробляєте?",
    answer:
      "Власне виробництво та прямі постачання з країн Европи та Азії",
  },
  {
    question: "Можливий опт?",
    answer:
      "Так, умови за запитом у Telegram/Instagram",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Топ питання
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
