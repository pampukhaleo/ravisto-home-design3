import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Ми віримо, що затишок створюють деталі
            </h2>
          </div>

          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p className="text-center max-w-3xl mx-auto">
              <span className="font-semibold text-primary">Ravisto.Home</span> — це не просто домашній текстиль. Це історія про турботу, комфорт і красу щодня. Ми підбираємо тканини, що приємні до тіла, кольори, що гармоніюють з настроєм, і деталі, які роблять ваш дім живим.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
