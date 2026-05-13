import { Button } from "@/components/ui/button";
import { Shield, Clock, Users, Star, Sparkles } from "lucide-react";
import logoNefertiti from "@/assets/logo-nefertiti.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-gradient-hero">
      {/* Decorative metallic orbs + subtle marble texture */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, hsl(var(--nefertiti-rose)) 0%, transparent 35%), radial-gradient(circle at 80% 90%, hsl(var(--nefertiti-gold-rose)) 0%, transparent 40%)",
        }}
      />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-14">
        {/* Logo */}
        <div className="flex justify-center mb-6 md:mb-8">
          <img
            src={logoNefertiti}
            alt="Método Nefertiti"
            className="h-16 md:h-24 object-contain drop-shadow-md"
            width={240}
            height={96}
          />
        </div>

        {/* Top trust pill */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-primary/30 text-secondary font-cta uppercase tracking-wider text-[10px] md:text-xs px-4 py-2 rounded-full shadow-gold">
            <Sparkles className="w-3.5 h-3.5" />
            Para mulheres que amaram demais e foram esquecidas rápido demais
          </span>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-7 md:mb-10">
          {/* Main headline — Playfair, gradient */}
          <h1 className="font-heading text-[28px] leading-[1.12] md:text-5xl lg:text-[56px] font-bold tracking-tight mb-5 md:mb-6 text-foreground">
            Se ele te deixou{" "}
            <span className="text-gradient-gold">
              e levou junto a sua autoestima…
            </span>{" "}
            descubra o método em 21 dias que já reconstruiu a presença e o magnetismo de{" "}
            <span className="text-gradient-gold">+3.847 mulheres</span>
            <span className="block mt-2 text-base md:text-2xl font-subheading italic text-muted-foreground font-normal">
              — sem perseguir, sem implorar, sem fingir que está bem.
            </span>
          </h1>

          {/* Subheadline — Lora */}
          <p className="font-subheading text-base md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Um <strong className="text-foreground">protocolo emocional de 21 dias</strong> criado para mulheres que estão cansadas de chorar escondido e prontas para voltar a se sentir{" "}
            <strong className="text-foreground">inteiras, desejadas e no comando</strong> — começando hoje, mesmo que ele já tenha seguido em frente.
          </p>

          {/* Mini social proof row */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-5 text-xs md:text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-secondary text-secondary" />
              ))}
              <strong className="text-foreground ml-1">4.9/5</strong>
            </span>
            <span className="hidden md:inline text-border">•</span>
            <span><strong className="text-foreground">+3.847</strong> mulheres transformadas</span>
            <span className="hidden md:inline text-border">•</span>
            <span><strong className="text-foreground">7 anos</strong> de método</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3 mb-8 md:mb-10 px-2">
          <Button
            variant="cta"
            size="xxl"
            className="w-full max-w-xl text-sm md:text-lg leading-tight text-center whitespace-normal h-auto py-5 md:py-6 rounded-full animate-shimmer font-cta"
            asChild
          >
            <a href="https://pay.kiwify.com.br/iX5ySX9" target="_blank" rel="noopener noreferrer">
              👑 QUERO O MÉTODO NEFERTITI AGORA — R$ 147
            </a>
          </Button>
          <p className="text-xs md:text-sm text-muted-foreground">
            ✓ Acesso imediato · Garantia incondicional de 7 dias · Restam apenas <strong className="text-foreground">13 vagas</strong> neste lote.
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-8 text-xs md:text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /><span>Acesso imediato e vitalício</span></div>
          <div className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /><span>Garantia de 7 dias — risco zero</span></div>
          <div className="flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" /><span>+3.847 mulheres transformadas</span></div>
        </div>
      </div>
    </section>
  );
};
