import { Button } from "@/components/ui/button";
import { Shield, Clock, Users } from "lucide-react";
import logoAurora from "@/assets/logo-nefertiti.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-hero overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-2xl" />

      <div className="relative z-10 container mx-auto px-4 py-6 md:py-10">
        <div className="flex justify-center mb-4 md:mb-6">
          <img src={logoAurora} alt="Método Nefertiti" className="h-16 md:h-24 object-contain" />
        </div>

        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
          <span className="inline-block bg-primary/15 text-primary font-cta uppercase tracking-wider text-[10px] md:text-xs px-3 py-1.5 rounded-full mb-4 border border-primary/30">
            🔥 Revelado: O "Protocolo Nefertiti dos 3 Espelhos"
          </span>
          <h1 className="font-heading text-2xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 md:mb-5 text-foreground">
            O <span className="text-gradient-gold">"Gatilho dos 9 Segundos"</span> Que Fez 3.847 Mulheres Rejeitadas Virarem o Jogo — E Fizeram o Ex Implorar de Volta em Até 21 Dias
          </h1>
          <p className="font-subheading text-sm md:text-xl text-muted-foreground leading-relaxed italic max-w-3xl mx-auto">
            Um protocolo silencioso de inversão psicológica, baseado em neurociência comportamental, que transforma a dor do término na sua arma mais magnética — mesmo que ele já esteja com outra, mesmo que você ache que perdeu seu valor.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 mb-6 md:mb-8 px-2">
          <Button variant="cta" size="xxl" className="w-full max-w-xl text-xs md:text-base leading-tight text-center whitespace-normal h-auto py-5 rounded-full animate-shimmer" asChild>
            <a href="https://pay.kiwify.com.br/NRl6nzM" target="_blank" rel="noopener noreferrer">
              👑 QUERO ATIVAR MEU GATILHO NEFERTITI AGORA
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">
            ✓ Acesso imediato após pagamento  ✓ Garantia incondicional de 21 dias
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-8 text-xs md:text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /><span>Resultados em 21 dias</span></div>
          <div className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /><span>Tripla Garantia Blindada</span></div>
          <div className="flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" /><span>+3.847 mulheres transformadas</span></div>
        </div>
      </div>
    </section>
  );
};
