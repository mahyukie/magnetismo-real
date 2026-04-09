import { Check, Sparkles, Flame, Gem, Zap } from "lucide-react";
import mockupImage from "@/assets/mockup-devices.png";

export const DeliverablesSection = () => {
  const modules = [
    {
      icon: Flame,
      emoji: "🔥",
      title: "MÓDULO 1: CURA E RENOVAÇÃO INTERIOR",
      subtitle: "Dias 1-7",
      items: [
        "O Ritual de 48 Horas que elimina 90% da dor emocional do término",
        "Técnica de Ressignificação Neural para transformar rejeição em combustível",
        "Protocolo de Libertação Emocional que quebra a dependência energética do ex",
        "7 Exercícios de Reconexão com sua essência feminina original"
      ],
      result: "No final da primeira semana, você vai se sentir 10x mais forte e centrada"
    },
    {
      icon: Gem,
      emoji: "💎",
      title: "MÓDULO 2: ATIVAÇÃO DO PODER FEMININO",
      subtitle: "Dias 8-14",
      items: [
        "Os 7 Pilares da Presença Magnética que fazem homens pararem para olhar",
        "Linguagem Corporal de Poder que comunica valor alto instantaneamente",
        "Técnicas de Comunicação Hipnótica que fazem você ficar gravada na mente dele",
        "Sistema de Elevação da Autoestima baseado em validação INTERNA"
      ],
      result: "Na segunda semana, você vai notar homens demonstrando interesse renovado"
    },
    {
      icon: Zap,
      emoji: "⚡",
      title: "MÓDULO 3: ESTRATÉGIAS DE ATRAÇÃO NATURAL",
      subtitle: "Dias 15-21",
      items: [
        "Sistema de Escassez Saudável que faz você se tornar irresistível",
        "Protocolo de Atração Reversa que faz ELE te perseguir",
        "Estratégias Específicas de Reconquista sem parecer desesperada",
        "Como Atrair Homens de Alto Valor que realmente te merecem"
      ],
      result: "Na terceira semana, você vai ter OPÇÕES e poder de escolha total"
    }
  ];

  return (
    <section className="py-10 md:py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">O Que Você Vai Receber</span>
          <h2 className="font-serif text-2xl md:text-5xl font-bold mt-2">
            Dentro do <span className="text-gradient-silver">Método Aurora</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          <div className="space-y-6">
            {modules.map((module, moduleIndex) => (
              <div key={moduleIndex} className="bg-card/30 rounded-2xl border border-border/30 overflow-hidden">
                <div className="bg-secondary/20 px-4 md:px-5 py-3 border-b border-border/30">
                  <h3 className="font-semibold text-foreground text-sm md:text-lg flex items-center gap-2">
                    <span className="text-lg">{module.emoji}</span>
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm mt-1 ml-7">({module.subtitle})</p>
                </div>
                <div className="p-3 md:p-4 space-y-2 md:space-y-3">
                  {module.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start gap-3 p-2 md:p-3 rounded-xl bg-background/50 hover:bg-background/80 transition-colors"
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-secondary/80 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-secondary-foreground" />
                      </div>
                      <p className="text-foreground text-xs md:text-sm">{item}</p>
                    </div>
                  ))}
                  <p className="text-secondary italic text-xs md:text-sm px-2 pt-2">
                    ✨ {module.result}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex flex-col items-center lg:sticky lg:top-24">
            <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full" />
            <img
              src={mockupImage}
              alt="Método Aurora - Acesse em qualquer dispositivo"
              className="relative z-10 w-full max-w-lg mx-auto rounded-2xl shadow-silver"
              loading="lazy"
            />
            <div className="relative z-10 mt-6 bg-card px-5 md:px-6 py-4 rounded-2xl border border-secondary/30 shadow-silver text-center">
              <p className="text-base md:text-lg font-bold text-foreground flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-secondary" />
                Acesso Imediato
                <Sparkles className="w-5 h-5 text-secondary" />
              </p>
              <p className="text-muted-foreground text-xs md:text-sm mt-1">
                📱 Celular • 💻 Computador • 📲 Tablet
              </p>
              <div className="mt-3 pt-3 border-t border-border/30">
                <p className="text-sm font-semibold text-secondary">
                  Oferta por tempo limitado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
