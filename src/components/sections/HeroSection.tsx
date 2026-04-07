import { Button } from "@/components/ui/button";
import { Shield, Clock, Users } from "lucide-react";
import logoArtemis from "@/assets/logo-artemis.png";
import heroImage from "@/assets/hero-artemis.jpg";
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
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Protocolo Ártemis" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6 md:py-8">
        {/* Logo */}
        <div className="flex justify-center mb-6 md:mb-8">
          <img 
            src={logoArtemis} 
            alt="Protocolo Ártemis" 
            className="h-20 md:h-32 object-contain"
          />
        </div>

        {/* VSL Embed */}
        <div className="max-w-4xl mx-auto mb-6 md:mb-8">
          <div className="relative aspect-video bg-card rounded-xl border-2 border-secondary/30 shadow-silver overflow-hidden">
            <iframe
              src="https://player-vz-3ebd9223-994.tv.pandavideo.com.br/embed/?v=ca056d71-829e-4229-bcd3-4e7c3c0c0626"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          {/* Urgency Banner */}
          <div className="mt-3 md:mt-4 p-3 md:p-4 bg-destructive/20 border border-destructive/40 rounded-lg">
            <p className="text-center text-foreground font-semibold text-xs md:text-base leading-snug">
              ⚠️ <strong>AVISO:</strong> Este vídeo ficará disponível apenas por <strong className="text-secondary">tempo limitado.</strong> Assista agora antes que saia do ar!
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-4 md:mb-6 px-2">
          <Button variant="cta" size="xxl" className="w-full max-w-xl text-xs md:text-base leading-tight text-center whitespace-normal h-auto py-4" asChild>
            <a href="https://pay.kiwify.com.br/NRl6nzM" target="_blank" rel="noopener noreferrer">
              🔥 QUERO MINHA TRANSFORMAÇÃO AGORA
            </a>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-8 mb-8 md:mb-12 text-xs md:text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5 md:gap-2">
            <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" />
            <span>Acesso Imediato</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <Shield className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" />
            <span>Garantia de 7 Dias</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" />
            <span>+3.847 Mulheres Transformadas</span>
          </div>
        </div>

        {/* Subheadline */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
            Como 3.847 Mulheres Transformaram a Dor do Término na <span className="text-gradient-silver">Arma Mais Poderosa</span> Para Conquistar Homens de Alto Valor
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed italic">
            Baseado em estudos de psicologia comportamental e validado por mais de 15.000 horas de aplicação prática, este método revela como transformar rejeição em magnetismo irresistível — <span className="text-secondary font-semibold">mesmo que você se sinta "invisível" agora</span>
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-secondary/50 rounded-full flex justify-center">
          <div className="w-1 h-2.5 md:h-3 bg-secondary rounded-full mt-1.5 md:mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
