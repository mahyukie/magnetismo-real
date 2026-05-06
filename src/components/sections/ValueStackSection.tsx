import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Check } from "lucide-react";

const STACK = [
  { item: "Método Nefertiti — Sistema Completo dos 21 Dias", value: "R$ 1.997" },
  { item: "Módulo 1: Reprogramação Emocional Pós-Término", value: "R$ 497" },
  { item: "Módulo 2: Protocolo dos 3 Espelhos", value: "R$ 697" },
  { item: "Módulo 3: Magnetismo Nefertiti Avançado", value: "R$ 597" },
  { item: "🎁 BÔNUS #1 — Guia de Transformação Digital", value: "R$ 297" },
  { item: "🎁 BÔNUS #2 — Manual de Inteligência Emocional", value: "R$ 467" },
  { item: "🎁 BÔNUS #3 — Comunicação Feminina Avançada", value: "R$ 697" },
  { item: "🎁 Suporte VIP por 21 dias", value: "R$ 497" },
];

export const ValueStackSection = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-section-gold">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="font-cta text-primary uppercase text-xs tracking-widest">O Que Você Recebe HOJE</span>
            <h2 className="font-heading text-2xl md:text-5xl font-bold mt-3 text-foreground">
              Veja TUDO Que Está <span className="text-gradient-gold">Incluso</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="bg-card rounded-2xl border-2 border-primary/30 shadow-metallic overflow-hidden">
            <ul className="divide-y divide-border">
              {STACK.map((row, i) => (
                <li key={i} className="flex items-center justify-between gap-3 p-4 md:p-5">
                  <div className="flex items-start gap-2 text-sm md:text-base text-foreground">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{row.item}</span>
                  </div>
                  <span className="font-cta font-semibold text-foreground text-sm md:text-base whitespace-nowrap">{row.value}</span>
                </li>
              ))}
            </ul>

            <div className="bg-primary/10 p-5 md:p-6 border-t-2 border-primary/30">
              <div className="flex justify-between items-center mb-2 text-sm md:text-base">
                <span className="text-muted-foreground">Valor real:</span>
                <span className="line-through text-destructive font-cta font-bold text-lg md:text-2xl">R$ 5.746</span>
              </div>
              <div className="flex justify-between items-center mb-2 text-sm md:text-base">
                <span className="text-muted-foreground">Promoção comum:</span>
                <span className="line-through text-muted-foreground">R$ 997</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-primary/30">
                <span className="font-cta font-bold text-foreground text-sm md:text-base uppercase">Hoje, só:</span>
                <div className="text-right">
                  <p className="font-cta font-extrabold text-3xl md:text-5xl text-nefertiti-emerald leading-none">R$ 147</p>
                  <p className="text-xs text-muted-foreground mt-1">ou 12x de R$ 14,70</p>
                </div>
              </div>
              <p className="text-center text-xs md:text-sm text-destructive font-semibold mt-4">
                Você economiza <strong>R$ 5.599</strong> — uma economia de 97%
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="text-center mt-8 px-2">
          <Button variant="cta" size="xxl" className="w-full max-w-xl text-xs md:text-base leading-tight text-center whitespace-normal h-auto py-5 font-cta animate-shimmer" asChild>
            <a href="https://pay.kiwify.com.br/NRl6nzM" target="_blank" rel="noopener noreferrer">
              👑 GARANTIR MEU ACESSO POR R$ 147
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-3">🔒 Pagamento 100% seguro • Acesso imediato</p>
        </div>
      </div>
    </section>
  );
};
