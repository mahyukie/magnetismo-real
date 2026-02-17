import { Gift, Smartphone, Brain, Lock } from "lucide-react";

export const BonusSection = () => {
  const bonuses = [
    {
      icon: Smartphone,
      title: "Protocolo de Renascimento Digital",
      originalPrice: "R$97",
      description: "Transforme sua presença online e torne-se irresistível nas redes sociais"
    },
    {
      icon: Brain,
      title: "Manual de Inteligência Emocional Pós-Término",
      originalPrice: "R$67",
      description: "Domine suas emoções e recupere o controle da sua vida"
    },
    {
      icon: Lock,
      title: "Arquivo Secreto da Sedução Situacional",
      originalPrice: "R$47",
      description: "Técnicas avançadas para cada situação específica"
    }
  ];

  return (
    <section className="py-10 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Bônus Exclusivos</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">
            🎁 Presentes Especiais Para <span className="text-gradient-gold">VOCÊ</span>
          </h2>
        </div>

        {/* Bonuses Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="relative bg-gradient-card p-6 rounded-2xl border-2 border-secondary/30 shadow-gold group hover:border-secondary/60 transition-all"
            >
              {/* Gift badge */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-gold">
                <Gift className="w-5 h-5 text-secondary-foreground" />
              </div>

              <div className="w-14 h-14 bg-primary/30 rounded-xl flex items-center justify-center mb-4">
                <bonus.icon className="w-7 h-7 text-secondary" />
              </div>

              <h3 className="font-serif text-lg font-bold mb-2 text-foreground">
                🎁 {bonus.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {bonus.description}
              </p>

              <div className="flex items-center gap-3">
                <span className="text-muted-foreground line-through text-sm">
                  Valor Original: {bonus.originalPrice}
                </span>
                <span className="bg-secondary/20 text-secondary font-bold px-3 py-1 rounded-full text-sm">
                  GRÁTIS
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency Banner */}
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-destructive/20 border border-destructive/40 rounded-xl text-center">
          <p className="text-lg font-bold text-foreground">
            🎁 <strong>SÓ ATÉ AS 23:59HS DE HOJE</strong>, VOCÊ LEVARÁ TODOS OS BÔNUS POR <span className="text-secondary text-2xl">R$0,00</span>
          </p>
        </div>
      </div>
    </section>
  );
};
