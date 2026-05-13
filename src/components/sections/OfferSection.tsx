import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Check, X, Shield, Lock, CreditCard, Sparkles } from "lucide-react";

const includedItems = [
  "Método completo de 21 dias (3 módulos)",
  "Bônus #1: Guia de Transformação Digital",
  "Bônus #2: Inteligência Emocional Feminina",
  "Bônus #3: Comunicação Feminina Avançada",
  "Acesso vitalício e atualizações gratuitas",
  "Suporte VIP por 21 dias",
  "Garantia incondicional de 7 dias",
];

const comparisonRows = [
  { feature: "Reconstrução real da autoestima", method: true, others: false },
  { feature: "Base científica (Harvard + Dra. Sophia)", method: true, others: false },
  { feature: "Resultados em 21 dias", method: true, others: false },
  { feature: "Suporte VIP por 21 dias", method: true, others: false },
  { feature: "Garantia de 7 dias incondicional", method: true, others: false },
  { feature: "Conselhos genéricos das amigas", method: false, others: true },
  { feature: "Cursos teóricos sem método", method: false, others: true },
];

export const OfferSection = () => {
  return (
    <section className="py-16 md:py-28 bg-gradient-noir relative overflow-hidden">
      {/* Decorative gold orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="font-cta text-secondary uppercase tracking-[0.3em] text-[10px] md:text-xs">
              Sua oportunidade hoje
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 leading-[1.1]">
              Garanta seu acesso ao{" "}
              <span className="text-gradient-gold">Método Nefertiti</span>
            </h2>
            <p className="font-subheading text-white/70 italic text-base md:text-xl mt-4 max-w-2xl mx-auto">
              Restam apenas <strong className="text-secondary not-italic">13 vagas</strong> neste lote — depois o preço sobe.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing card */}
        <ScrollReveal delay={100}>
          <div className="max-w-3xl mx-auto mb-14">
            <div className="relative bg-white/[0.04] backdrop-blur-md border-2 border-secondary/40 rounded-[2rem] p-8 md:p-12 shadow-metallic overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />

              <div className="relative z-10 text-center">
                <span className="inline-block bg-destructive text-destructive-foreground font-cta font-bold uppercase tracking-wider text-xs px-4 py-1.5 rounded-full">
                  Oferta especial — 76% OFF
                </span>

                <p className="text-white/50 text-base md:text-lg line-through mt-5 font-cta">
                  De R$ 597,00
                </p>
                <div className="mt-1">
                  <p className="text-white/70 text-sm md:text-base font-subheading italic">por apenas</p>
                  <div className="flex items-baseline justify-center gap-2 mt-1">
                    <span className="text-white text-2xl md:text-3xl font-cta">R$</span>
                    <span className="font-cta font-extrabold text-7xl md:text-8xl text-gradient-gold leading-none">
                      147
                    </span>
                    <span className="text-white/70 text-base md:text-lg font-cta">,00</span>
                  </div>
                  <p className="text-white/70 text-sm md:text-base font-subheading mt-2">
                    à vista · ou 12x de <strong className="text-white">R$ 14,87</strong>
                  </p>
                </div>

                <div className="my-7 max-w-md mx-auto text-left">
                  <p className="text-secondary font-cta uppercase tracking-wider text-xs text-center mb-3">
                    Tudo o que está incluso:
                  </p>
                  <ul className="space-y-2">
                    {includedItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/85 text-sm md:text-base font-body">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-metallic flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="cta"
                  size="xxl"
                  className="w-full max-w-xl text-sm md:text-lg leading-tight text-center whitespace-normal h-auto py-6 rounded-full font-cta animate-shimmer"
                  asChild
                >
                  <a href="https://pay.kiwify.com.br/iX5ySX9" target="_blank" rel="noopener noreferrer">
                    👑 QUERO O MÉTODO NEFERTITI AGORA — R$ 147
                  </a>
                </Button>

                {/* Trust seals */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 text-white/70 text-xs">
                  <span className="inline-flex items-center gap-1.5"><Shield className="w-4 h-4 text-secondary" /> Garantia 7 dias</span>
                  <span className="inline-flex items-center gap-1.5"><Lock className="w-4 h-4 text-secondary" /> Compra 100% segura</span>
                  <span className="inline-flex items-center gap-1.5"><CreditCard className="w-4 h-4 text-secondary" /> Cartão · PIX · Boleto</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Comparison table */}
        <ScrollReveal delay={200}>
          <div className="max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white text-center mb-8">
              Por que o Método Nefertiti é{" "}
              <span className="text-gradient-gold">diferente</span>
            </h3>
            <div className="overflow-hidden rounded-3xl border border-secondary/30 bg-white/[0.04] backdrop-blur-md shadow-metallic">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gradient-metallic">
                    <th className="px-4 md:px-6 py-4 text-white font-cta uppercase tracking-wider text-xs md:text-sm">
                      Recurso
                    </th>
                    <th className="px-3 py-4 text-white font-cta uppercase tracking-wider text-xs md:text-sm text-center">
                      <span className="hidden md:inline">Método </span>Nefertiti
                    </th>
                    <th className="px-3 py-4 text-white/85 font-cta uppercase tracking-wider text-xs md:text-sm text-center">
                      Outros
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-t border-white/10 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
                    >
                      <td className="px-4 md:px-6 py-3.5 text-white/85 text-sm md:text-base font-body">
                        {row.feature}
                      </td>
                      <td className="px-3 py-3.5 text-center">
                        {row.method ? (
                          <Check className="w-5 h-5 text-nefertiti-emerald inline" strokeWidth={3} />
                        ) : (
                          <X className="w-5 h-5 text-destructive inline" />
                        )}
                      </td>
                      <td className="px-3 py-3.5 text-center">
                        {row.others ? (
                          <Check className="w-5 h-5 text-white/40 inline" />
                        ) : (
                          <X className="w-5 h-5 text-white/40 inline" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center text-white/60 text-xs md:text-sm mt-6 font-subheading italic">
              <Sparkles className="w-4 h-4 inline text-secondary" /> Você não está comprando um curso. Você está comprando uma transformação.
            </p>
          </div>
        </ScrollReveal>

        <div className="text-center mt-12 px-2">
          <Button
            variant="cta"
            size="xxl"
            className="w-full max-w-xl text-sm md:text-lg leading-tight text-center whitespace-normal h-auto py-6 rounded-full font-cta animate-shimmer"
            asChild
          >
            <a href="https://pay.kiwify.com.br/iX5ySX9" target="_blank" rel="noopener noreferrer">
              👑 GARANTIR MINHA VAGA POR R$ 147
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
