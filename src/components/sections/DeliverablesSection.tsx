import { Check, Sparkles, Flame, Gem, Zap, Smartphone, Monitor, Tablet } from "lucide-react";
import productMockup from "@/assets/product-mockup.jpg";
import { ScrollReveal } from "@/components/ScrollReveal";

export const DeliverablesSection = () => {
  const modules = [
    {
      icon: Flame,
      emoji: "🔥",
      title: "MÓDULO 1 — Cura e Renovação Interior",
      subtitle: "Dias 1 ao 7",
      items: [
        "O Ritual de 48 Horas que elimina 90% da dor emocional do término",
        "Técnica de Ressignificação Neural: rejeição vira combustível",
        "Protocolo de Libertação Emocional que quebra a dependência energética do ex",
        "7 exercícios de reconexão com sua essência feminina original",
      ],
      result: "Ao fim da semana 1, você se sente 10x mais forte e centrada.",
    },
    {
      icon: Gem,
      emoji: "💎",
      title: "MÓDULO 2 — Ativação do Poder Feminino",
      subtitle: "Dias 8 ao 14",
      items: [
        "Os 7 Pilares da Presença Magnética que fazem homens pararem pra olhar",
        "Linguagem corporal de poder que comunica valor alto instantaneamente",
        "Técnicas de comunicação hipnótica — você fica gravada na mente dele",
        "Sistema de elevação da autoestima por validação INTERNA",
      ],
      result: "Na semana 2, você nota homens demonstrando interesse renovado.",
    },
    {
      icon: Zap,
      emoji: "⚡",
      title: "MÓDULO 3 — Estratégias de Atração Natural",
      subtitle: "Dias 15 ao 21",
      items: [
        "Sistema de Escassez Saudável que te torna irresistível",
        "Protocolo de Atração Reversa que faz ELE te perseguir",
        "Estratégias específicas de reconquista — sem parecer desesperada",
        "Como atrair Homens de Alto Valor que realmente te merecem",
      ],
      result: "Na semana 3, você tem opções e poder de escolha total.",
    },
  ];

  return (
    <section className="py-14 md:py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[28rem] h-[28rem] bg-primary/8 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="font-cta text-secondary uppercase tracking-[0.25em] text-[10px] md:text-xs">
              O que você vai receber
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-foreground leading-[1.15]">
              Por dentro do{" "}
              <span className="text-gradient-gold">Método Nefertiti</span>
            </h2>
            <p className="font-subheading text-base md:text-xl text-muted-foreground italic mt-4 max-w-2xl mx-auto">
              3 módulos · 21 dias · transformação completa.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
          {/* Modules */}
          <div className="space-y-5">
            {modules.map((module, moduleIndex) => (
              <ScrollReveal key={moduleIndex} delay={moduleIndex * 150}>
                <div className="group bg-white/70 backdrop-blur-sm rounded-3xl border border-secondary/25 overflow-hidden hover:shadow-metallic hover:border-secondary/50 transition-all duration-300">
                  <div className="bg-gradient-metallic px-5 py-4">
                    <h3 className="font-heading text-white text-base md:text-xl font-bold flex items-center gap-2 leading-snug">
                      <span className="text-2xl">{module.emoji}</span>
                      {module.title}
                    </h3>
                    <p className="text-white/85 text-xs md:text-sm font-cta uppercase tracking-wider mt-1 ml-9">
                      {module.subtitle}
                    </p>
                  </div>
                  <div className="p-5 space-y-3">
                    {module.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-metallic rounded-full flex items-center justify-center mt-0.5 shadow-gold">
                          <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                        </div>
                        <p className="text-foreground text-sm md:text-base font-body leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                    <div className="mt-2 pt-3 border-t border-secondary/20">
                      <p className="text-secondary font-subheading italic text-sm md:text-base">
                        ✨ {module.result}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Product mockup */}
          <ScrollReveal delay={200}>
            <div className="relative flex flex-col items-center lg:sticky lg:top-24">
              <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full" />
              <img
                src={productMockup}
                alt="Método Nefertiti — acesso multiplataforma"
                className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-metallic transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
                width={1280}
                height={960}
              />
              <div className="relative z-10 mt-6 w-full max-w-md bg-white/80 backdrop-blur-sm px-6 py-5 rounded-2xl border border-secondary/30 shadow-metallic text-center">
                <p className="text-base md:text-lg font-heading font-bold text-foreground flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5 text-secondary" />
                  Acesso imediato e vitalício
                  <Sparkles className="w-5 h-5 text-secondary" />
                </p>
                <div className="flex items-center justify-center gap-4 mt-3 text-muted-foreground">
                  <span className="inline-flex items-center gap-1 text-xs"><Smartphone className="w-4 h-4" /> Celular</span>
                  <span className="inline-flex items-center gap-1 text-xs"><Monitor className="w-4 h-4" /> Computador</span>
                  <span className="inline-flex items-center gap-1 text-xs"><Tablet className="w-4 h-4" /> Tablet</span>
                </div>
                <div className="mt-4 pt-3 border-t border-secondary/20">
                  <p className="text-sm font-cta uppercase tracking-wider text-secondary">
                    Oferta por tempo limitado
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
