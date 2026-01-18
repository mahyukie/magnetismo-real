import { Button } from "@/components/ui/button";
import { Play, Shield, Clock, Users } from "lucide-react";
import logoCleopatra from "@/assets/logo-cleopatra.jpeg";
import heroImage from "@/assets/hero-cleopatra.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Cleópatra" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={logoCleopatra} 
            alt="Método Cleópatra 2.0" 
            className="h-20 md:h-28 object-contain"
          />
        </div>

        {/* VSL Placeholder */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative aspect-video bg-card rounded-xl border-2 border-secondary/30 shadow-gold overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-secondary-foreground ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-4">
              <p className="text-center text-foreground/80 text-sm">Clique para assistir ao vídeo</p>
            </div>
          </div>
          
          {/* Urgency Banner */}
          <div className="mt-4 p-4 bg-destructive/20 border border-destructive/40 rounded-lg">
            <p className="text-center text-foreground font-semibold text-sm md:text-base">
              ⚠️ <strong>AVISO IMPORTANTE:</strong> você não verá esse vídeo novamente, ele ficará no ar apenas até as <strong className="text-secondary">23:59hs de HOJE!</strong>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-6">
          <Button variant="cta" size="xxl" className="w-full max-w-xl">
            🔥 QUERO DESPERTAR MINHA CLEÓPATRA INTERIOR AGORA
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-secondary" />
            <span>Acesso Imediato</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-secondary" />
            <span>Garantia de 7 Dias</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-secondary" />
            <span>+3.000 Mulheres Transformadas</span>
          </div>
        </div>

        {/* Subheadline */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Desperte O <span className="text-gradient-gold">Poder Ancestral Cleópatra</span> Em 21 Dias e Torne-se Tão <em>Magnética</em> Que Ele <strong>Implorará Pelo Seu Perdão</strong>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Enquanto É <strong className="text-foreground">VOCÊ</strong> Que Terá o Poder de Escolha. A Fila Andou? Ou Voltará Com Seu Ex? <span className="text-secondary font-semibold">Depois de Conhecer o Método Cleópatra, é Você Que Decidirá!</span>
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
