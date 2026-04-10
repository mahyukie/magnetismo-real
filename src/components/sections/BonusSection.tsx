import { Gift, Smartphone, Brain, MessageCircle } from "lucide-react";

export const BonusSection = () => {
  const bonuses = [
    {
      icon: Smartphone,
      title: "Guia de Transformação Digital",
      originalPrice: "R$197",
      items: [
        "Scripts específicos para redes sociais que geram curiosidade masculina",
        "Como se tornar irresistível no WhatsApp sem parecer interesseira",
        "Estratégias de \"soft ghosting\" que fazem ele correr atrás"
      ]
    },
    {
      icon: Brain,
      title: "Manual de Inteligência Emocional Feminina",
      originalPrice: "R$147",
      items: [
        "Como nunca mais ser pega de surpresa por homens emocionalmente indisponíveis",
        "Técnicas para ler sinais masculinos com 99% de precisão",
        "O método para fazer qualquer homem se abrir emocionalmente"
      ]
    },
    {
      icon: MessageCircle,
      title: "Guia de Comunicação Feminina Avançada",
      originalPrice: "R$97",
      items: [
        "Scripts testados para conversas que despertam interesse masculino",
        "Técnicas de comunicação para cada situação específica",
        "Protocolo de texting que gera curiosidade e desejo"
      ]
    }
  ];

  return (
    <section className="py-10 md:py-24 bg-gradient-section-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Apenas Para as Primeiras 25 Mulheres</span>
          <h2 className="font-serif text-2xl md:text-5xl font-bold mt-2">
            🎁 Bônus <span className="text-gradient-silver">Exclusivos</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="relative bg-gradient-card p-5 md:p-6 rounded-2xl border-2 border-secondary/30 shadow-silver group hover:border-secondary/60 transition-all"
            >
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-silver">
                <Gift className="w-5 h-5 text-secondary-foreground" />
              </div>

              <div className="w-12 h-12 bg-primary/30 rounded-xl flex items-center justify-center mb-4">
                <bonus.icon className="w-6 h-6 text-secondary" />
              </div>

              <h3 className="font-serif text-base md:text-lg font-bold mb-3 text-foreground">
                BÔNUS #{index + 1}: {bonus.title}
              </h3>

              <ul className="space-y-2 mb-4">
                {bonus.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground text-xs md:text-sm flex items-start gap-2">
                    <span className="text-secondary flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                <span className="text-muted-foreground line-through text-xs md:text-sm">
                  Valor: {bonus.originalPrice}
                </span>
                <span className="bg-secondary/20 text-secondary font-bold px-3 py-1 rounded-full text-xs md:text-sm">
                  GRÁTIS
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-10 p-5 md:p-6 bg-secondary/10 border border-secondary/30 rounded-xl text-center">
          <p className="text-foreground font-bold text-sm md:text-lg">
            🎁 VALOR TOTAL DOS BÔNUS: <span className="text-secondary text-xl md:text-2xl">R$441,00</span>
          </p>
          <p className="text-muted-foreground text-xs md:text-sm mt-1">
            Inclusos GRATUITAMENTE na sua compra hoje
          </p>
        </div>
      </div>
    </section>
  );
};
