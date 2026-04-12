import { Button } from "@/components/ui/button";
import { Shield, Clock, Users } from "lucide-react";
import logoAurora from "@/assets/logo-aurora.png";
import { useEffect, useRef } from "react";

interface HeroSectionProps {
  onVideoInteraction?: () => (() => void) | void;
}

export const HeroSection = ({ onVideoInteraction }: HeroSectionProps) => {
  const cleanupRef = useRef<(() => void) | null>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!hasStarted.current && onVideoInteraction) {
      hasStarted.current = true;
      const cleanup = onVideoInteraction();
      if (cleanup) cleanupRef.current = cleanup;
    }
    return () => {
      cleanupRef.current?.();
    };
  }, [onVideoInteraction]);

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Soft decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 py-6 md:py-8">
        <div className="flex justify-center mb-4 md:mb-6">
          <img 
            src={logoAurora} 
            alt="Método Aurora" 
            className="h-16 md:h-24 object-contain"
          />
        </div>

        {/* HEADLINE above VSL */}
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
          <h1 className="font-serif text-xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-5 text-foreground">
            Como 3.847 Mulheres Transformaram a Dor do Término na <span className="text-gradient-silver">Arma Mais Poderosa</span> Para Conquistar Homens de Alto Valor - E Passaram de Rejeitadas a Irresistíveis Utilizando Este Método...
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed italic">
            Baseado em estudos de psicologia comportamental e validado por mais de 15.000 horas de aplicação prática, este Método é o ÚNICO no mercado que revela como transformar rejeição em magnetismo irresistível — mesmo que você se sinta "invisível" agora.
            Assista ao vídeo abaixo e veja como ela fez para o ex se arrepender de ter a perdido...
          </p>
        </div>

        {/* VSL */}
        <div className="max-w-4xl mx-auto mb-6 md:mb-8">
          <div className="relative aspect-video bg-card rounded-2xl border border-border shadow-card overflow-hidden">
            <iframe
              src="https://player-vz-3ebd9223-994.tv.pandavideo.com.br/embed/?v=ca056d71-829e-4229-bcd3-4e7c3c0c0626"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          <div className="mt-3 md:mt-4 p-3 md:p-4 bg-primary/10 border border-primary/20 rounded-xl">
            <p className="text-center text-foreground font-semibold text-xs md:text-base leading-snug">
              ⚠️ <strong>AVISO:</strong> Este vídeo ficará disponível por tempo limitado. Assista AGORA antes que saia do ar!
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-4 md:mb-6 px-2">
          <Button variant="cta" size="xxl" className="w-full max-w-xl text-xs md:text-base leading-tight text-center whitespace-normal h-auto py-4 rounded-full" asChild>
            <a href="https://pay.kiwify.com.br/NRl6nzM" target="_blank" rel="noopener noreferrer">
              🌸 QUERO MINHA TRANSFORMAÇÃO AGORA
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-8 mb-8 md:mb-12 text-xs md:text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5 md:gap-2">
            <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span>Acesso Imediato</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <Shield className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span>Garantia de 7 Dias</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span>+3.847 Mulheres Transformadas</span>
          </div>
        </div>
      </div>
    </section>
  );
};
