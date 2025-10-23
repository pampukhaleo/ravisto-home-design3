import { Truck, Shield, Heart } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Якість, перевірена часом",
    description: "",
  },
  {
    icon: Truck,
    title: "Швидка доставка",
    description: "",
  },
  {
    icon: Heart,
    title: "Особистий підхід",
    description: "",
  },
];

const Benefits = () => {
  return (
    <section className="py-16 bg-beige/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-terracotta/10 flex items-center justify-center">
                <benefit.icon className="w-7 h-7 text-terracotta" />
              </div>
              <h3 className="font-semibold text-lg text-primary">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
