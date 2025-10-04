import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Про Ravisto.Home
            </h2>
            <div className="inline-block px-6 py-2 bg-terracotta/10 rounded-full mb-8">
              <span className="text-terracotta font-semibold">
                На ринку з 2015 року
              </span>
            </div>
          </div>

          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              <span className="font-semibold text-primary">Ravisto.Home</span> – це сімейна компанія, яка вже понад 8 років створює затишок в українських домівках. Ми почали свій шлях з невеликого ательє, де власноруч шили постільну білизну з натуральних тканин.
            </p>
            <p>
              Сьогодні ми виросли у надійного партнера для тисяч родин по всій Україні. Наша місія залишається незмінною – <span className="font-semibold text-terracotta">дарувати комфорт та якість кожному дому</span>.
            </p>
            <p>
              Ми ретельно відбираємо матеріали, працюємо лише з перевіреними постачальниками та контролюємо якість кожного виробу. Наша команда складається з професіоналів, які люблять свою справу та піклуються про ваш затишок.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-4xl font-bold text-terracotta mb-2">
                  8+
                </div>
                <div className="text-muted-foreground">років на ринку</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-terracotta mb-2">
                  5000+
                </div>
                <div className="text-muted-foreground">задоволених клієнтів</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-terracotta mb-2">
                  100%
                </div>
                <div className="text-muted-foreground">натуральні матеріали</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Дізнатися більше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
