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
            ✨ Para mulheres que amaram demais e foram esquecidas rápido demais
          </span>
          <h1 className="font-heading text-2xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 md:mb-5 text-foreground">
            Se ele te deixou <span className="text-gradient-gold">e levou junto a sua autoestima…</span> descubra o método em 21 dias que já reconstruiu a presença e o magnetismo de +3.847 mulheres — sem perseguir, sem implorar, sem fingir que está bem.
          </h1>
          <p className="font-subheading text-sm md:text-xl text-muted-foreground leading-relaxed italic max-w-3xl mx-auto">
            Um <strong>protocolo emocional de 21 dias</strong> criado para mulheres que estão cansadas de chorar escondido e prontas para voltar a se sentir <strong>inteiras, desejadas e no comando</strong> — começando hoje, mesmo que ele já tenha seguido em frente.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground mt-3">
            ⭐ 4.9/5 avaliação das alunas · +3.847 mulheres · 7 anos de método
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 mb-6 md:mb-8 px-2">
          <Button variant="cta" size="xxl" className="w-full max-w-xl text-xs md:text-base leading-tight text-center whitespace-normal h-auto py-5 rounded-full animate-shimmer" asChild>
            <a href="https://pay.kiwify.com.br/iX5ySX9" target="_blank" rel="noopener noreferrer">
              👑 Quero despertar minha Rainha Interior
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">
            ✓ Acesso imediato · Garantia incondicional de 7 dias · Restam apenas 13 vagas neste lote.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-8 text-xs md:text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /><span>Acesso imediato e vitalício</span></div>
          <div className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /><span>Garantia de 7 dias — risco zero</span></div>
          <div className="flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" /><span>+3.847 mulheres transformadas</span></div>
        </div>
      </div>
    </section>
  );
};
