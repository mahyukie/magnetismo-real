import { Gift, Smartphone, Brain, MessageCircle, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const BonusSection = () => {
  const bonuses = [
    {
      icon: Smartphone,
      title: "Guia de Transformação Digital",
      originalPrice: "R$ 297",
      items: [
        "Scripts para redes sociais que geram curiosidade masculina",
        "Como ser irresistível no WhatsApp sem parecer interesseira",
        'Estratégias de "soft ghosting" que fazem ele correr atrás',
      ],
    },
    {
      icon: Brain,
      title: "Manual de Inteligência Emocional Feminina",
      originalPrice: "R$ 467",
      items: [
        "Como nunca mais ser pega por homens emocionalmente indisponíveis",
        "Técnicas pra ler sinais masculinos com 99% de precisão",
        "O método pra fazer qualquer homem se abrir emocionalmente",
      ],
    },
    {
      icon: MessageCircle,
      title: "Guia de Comunicação Feminina Avançada",
      originalPrice: "R$ 697",
      items: [
        "Scripts testados para conversas que despertam interesse",
        "Técnicas de comunicação para cada situação específica",
        "Protocolo de texting que gera curiosidade e desejo",
      ],
    },
  ];

  return (
    <section className="py-14 md:py-24 bg-gradient-section-gold relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="font-cta text-secondary uppercase tracking-[0.25em] text-[10px] md:text-xs">
              Apenas para as primeiras 25 mulheres
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-foreground leading-[1.15]">
              🎁 Bônus <span className="text-gradient-gold">Exclusivos</span>
            </h2>
            <p className="font-subheading text-muted-foreground text-base md:text-xl italic mt-3 max-w-xl mx-auto">
              3 ferramentas práticas que valem mais do que o método inteiro.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5 md:gap-7 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <ScrollReveal key={index} delay={index * 120}>
              <div className="relative h-full bg-white/80 backdrop-blur-sm p-6 md:p-7 rounded-3xl border-2 border-secondary/35 shadow-metallic group hover:border-secondary/60 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -top-5 -right-5 w-12 h-12 bg-gradient-metallic rounded-full flex items-center justify-center shadow-gold border-2 border-white">
                  <Gift className="w-5 h-5 text-white" />
                </div>

                <div className="w-14 h-14 bg-secondary/15 rounded-2xl flex items-center justify-center mb-5">
                  <bonus.icon className="w-7 h-7 text-secondary" />
                </div>

                <span className="font-cta uppercase tracking-wider text-[10px] text-secondary">
                  Bônus #{index + 1}
                </span>
                <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mt-1 mb-4 leading-snug">
                  {bonus.title}
                </h3>

                <ul className="space-y-2.5 mb-5">
                  {bonus.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm font-body flex items-start gap-2 leading-relaxed">
                      <Sparkles className="w-3.5 h-3.5 text-secondary flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3 pt-4 border-t border-secondary/20">
                  <span className="text-destructive line-through text-sm font-cta">
                    {bonus.originalPrice}
                  </span>
                  <span className="bg-nefertiti-emerald text-white font-cta font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider shadow-md">
                    Grátis
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="max-w-3xl mx-auto mt-12 p-6 md:p-7 bg-gradient-card border-2 border-secondary/40 rounded-3xl shadow-metallic text-center">
            <p className="font-subheading text-muted-foreground text-sm md:text-base">
              🎁 VALOR TOTAL DOS BÔNUS
            </p>
            <p className="font-cta text-3xl md:text-5xl font-extrabold text-gradient-gold mt-2">
              R$ 1.461,00
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Inclusos <strong className="text-foreground">gratuitamente</strong> na sua compra de hoje.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
