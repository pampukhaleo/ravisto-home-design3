import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              Ravisto Bloom<span className="text-terracotta"> Home</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Преміальний домашній текстиль для вашого затишку
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/_ravisto_bloom_home_?igsh=aXg0c2JlM25peTNy"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-smooth"
                aria-label="Instagram сторінка Ravisto Bloom Home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:ravistohome@gmail.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-smooth"
                aria-label="Написати email на ravistohome@gmail.com"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Каталог</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-smooth">
                  Постільна білизна
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-smooth">
                  Подушки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-smooth">
                  Рушники
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-smooth">
                  Пледи та ковдри
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Інформація</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-smooth">
                  Про нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-smooth">
                  Доставка та оплата
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-smooth">
                  Повернення товару
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary-foreground transition-smooth">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Контакти</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>+38 (050) 564 41 41</li>
              <li>ravistohome@gmail.com</li>
              <li>Пн-Пт: 8:00 - 17:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/60">
          <p>© 2025 Ravisto Bloom Home. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
