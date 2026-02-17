import { Brain, Heart, Magnet } from "lucide-react";

export const MethodSection = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Reversão da Escassez Neural",
      description: "Em vez de demonstrar disponibilidade total (que sinaliza baixo valor), você cultiva uma presença magnética que comunica valor alto sem arrogância, ativando o sistema de recompensa masculino."
    },
    {
      icon: Heart,
      title: "Reversão da Validação Externa",
      description: "Ao contrário de buscar aprovação masculina para se sentir valiosa, você desenvolve uma autoestima genuína que naturalmente atrai homens que reconhecem qualidade."
    },
    {
      icon: Magnet,
      title: "Reversão da Energia de Perseguição",
      description: "Enquanto outras mulheres perseguem homens com mensagens, ligações e tentativas de contato, você se torna o polo magnético que naturalmente atrai atenção masculina."
    }
  ];

  return (
    <section className="py-10 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Por Dentro do Método Cleópatra</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">
            3 Pilares Para Transformar Sua <br/>
            <span className="text-gradient-gold">REJEIÇÃO EM MAGNETISMO GENUÍNO</span>
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-bold text-secondary-foreground shadow-gold z-10">
                {index + 1}
              </div>
              
              <div className="h-full bg-gradient-card p-8 rounded-2xl border border-border/50 shadow-card group-hover:border-secondary/50 group-hover:shadow-gold transition-all duration-300">
                <div className="w-16 h-16 bg-primary/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <pillar.icon className="w-8 h-8 text-secondary" />
                </div>
                
                <h3 className="font-serif text-xl font-bold mb-4 text-foreground">
                  {pillar.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
