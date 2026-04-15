import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4 bg-card/95 backdrop-blur-md border-t border-primary/30 shadow-gold animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={() => setIsDismissed(true)}
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
            aria-label="Fechar"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <div className="text-center sm:text-left">
            <p className="text-foreground font-semibold text-xs md:text-base">
              🔥 Últimas vagas disponíveis! Garanta seu acesso agora
            </p>
            <p className="text-muted-foreground text-xs">
              Garantia de 7 dias • Acesso imediato
            </p>
          </div>
        </div>
        <Button variant="cta" size="lg" className="w-full sm:w-auto whitespace-nowrap text-xs md:text-sm font-cta" asChild>
          <a href="https://pay.kiwify.com.br/NRl6nzM" target="_blank" rel="noopener noreferrer">
            CLIQUE AQUI PARA ENTRAR →
          </a>
        </Button>
      </div>
    </div>
  );
};
