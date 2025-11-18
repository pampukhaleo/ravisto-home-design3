import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke(
        'ravisto-bloom-send-telegram',
        {
          body: {
            name: formData.name,
            phone: formData.phone,
            message: formData.message,
          },
        }
      );

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message || 'Помилка відправки');
      }

      if (!data?.success) {
        throw new Error(data?.error || 'Помилка відправки');
      }

      toast({
        title: "Дякуємо за заявку!",
        description: "Ми зв'яжемося з вами найближчим часом.",
      });
      
      setFormData({ name: "", phone: "", message: "" });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        title: "Помилка",
        description: error.message || "Не вдалося відправити заявку. Спробуйте ще раз.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-4">
            Зв'яжіться з нами
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Залиште заявку і наш менеджер зв'яжеться з вами протягом 15 хвилин
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-primary font-semibold">
                  Ім'я *
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 rounded-2xl border-2 h-12"
                  placeholder="Введіть ваше ім'я"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-primary font-semibold">
                  Телефон *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 rounded-2xl border-2 h-12"
                  placeholder="+380"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-primary font-semibold"
                >
                  Повідомлення
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 rounded-2xl border-2 min-h-32"
                  placeholder="Розкажіть, що вас цікавить..."
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Відправка...
                  </>
                ) : (
                  'Відправити заявку'
                )}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-heading mb-6">
                Наші контакти
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary mb-1">
                      Телефон
                    </div>
                    <a
                      href="tel:+380505644141"
                      className="text-muted-foreground hover:text-terracotta transition-smooth"
                    >
                      +38 (050) 564 41 41
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary mb-1">Email</div>
                    <a
                      href="mailto:ravistohome@gmail.com"
                      className="text-muted-foreground hover:text-terracotta transition-smooth"
                    >
                      ravistohome@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-warm rounded-2xl p-8 text-primary-foreground shadow-medium">
              <h3 className="text-2xl font-bold mb-4">Робочі години</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Понеділок - П'ятниця:</span>
                  <span className="font-semibold">8:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Субота - Неділя:</span>
                  <span className="font-semibold">Вихідні</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
