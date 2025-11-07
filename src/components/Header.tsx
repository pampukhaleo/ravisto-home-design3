import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBag, Instagram, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-heading">
            Ravisto<span className="text-terracotta">.Home</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Товари
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Про нас
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Контакти
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              asChild
              className="hover:text-primary"
            >
              <a 
                href="https://www.instagram.com/ravisto.home?igsh=aXg0c2JlM25peTNy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Перейти в Instagram Ravisto.Home"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              variant="hero" 
              size="sm" 
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex"
            >
              <ShoppingBag className="w-4 h-4" />
              Замовити
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="md:hidden hover:text-primary"
                  aria-label="Відкрити меню"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <button
                    onClick={() => scrollToSection("products")}
                    className="text-left text-lg font-medium text-foreground hover:text-primary transition-smooth py-3 border-b border-border"
                  >
                    Товари
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-left text-lg font-medium text-foreground hover:text-primary transition-smooth py-3 border-b border-border"
                  >
                    Про нас
                  </button>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="text-left text-lg font-medium text-foreground hover:text-primary transition-smooth py-3 border-b border-border"
                  >
                    FAQ
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-left text-lg font-medium text-foreground hover:text-primary transition-smooth py-3 border-b border-border"
                  >
                    Контакти
                  </button>
                  <Button 
                    variant="hero" 
                    size="lg" 
                    onClick={() => scrollToSection("contact")}
                    className="w-full mt-4"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Замовити
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
