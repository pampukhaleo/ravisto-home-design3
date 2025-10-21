import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Якість, перевірена часом",
  "Швидка доставка",
  "Особистий підхід",
];

const WhyRavisto = () => {
  return (
    <section className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-foreground mb-12">
          Чому Ravisto.Home
        </h2>
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary-foreground flex-shrink-0" />
              <span className="text-lg font-medium text-primary-foreground">
                {reason}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRavisto;
