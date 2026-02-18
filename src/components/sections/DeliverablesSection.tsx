import { Check, Sparkles } from "lucide-react";
import mockupImage from "@/assets/mockup-devices.png";

export const DeliverablesSection = () => {
  const modules = [
    {
      title: "Módulo 1: Renascimento da Fênix",
      items: [
        "Ritual de Libertação Emocional do Passado",
        "Técnica de Ressignificação da Rejeição",
        "Protocolo de Cura das Feridas de Abandono",
        "Exercícios de Reconexão com Sua Essência Feminina"
      ]
    },
    {
      title: "Módulo 2: Arquétipo Cleópatra",
      subtitle: "Dominando a Arte da Sedução Magnética e Presença Irresistível",
      items: [
        "Os 7 Pilares do Magnetismo Feminino",
        "Linguagem Corporal de Poder e Sedução",
        "Técnicas de Comunicação Hipnótica",
        "Protocolo de Elevação da Auto Estima"
      ]
    },
    {
      title: "Módulo 3: Estratégias de Reconquista Magnética",
      items: [
        "Sistema de Criação de Escassez Saudável",
        "Técnicas Avançadas de Sedução Psicológica",
        "Protocolo de Atração de Homens de Alto Valor",
        "Estratégias de Reconquista Sem Perseguição"
      ]
    }
  ];

  return (
    <section className="py-10 md:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Entregáveis do Método Cleópatra</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">
            O Que Você Vai Receber 👀
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Modules List */}
          <div className="space-y-6">
            {modules.map((module, moduleIndex) => (
            <div key={moduleIndex} className="bg-card/30 rounded-2xl border border-border/30 overflow-hidden">
                <div className="bg-secondary/20 px-5 py-3 border-b border-border/30">
                  <h3 className="font-semibold text-foreground text-lg flex items-center gap-2">
                    <span className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
                      {moduleIndex + 1}
                    </span>
                    {module.title}
                  </h3>
                  {module.subtitle && (
                    <p className="text-muted-foreground text-sm mt-1 ml-10">{module.subtitle}</p>
                  )}
                </div>
                <div className="p-4 space-y-3">
                  {module.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-start gap-3 p-3 rounded-xl bg-background/50 hover:bg-background/80 transition-colors"
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-secondary/80 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-secondary-foreground" />
                      </div>
                      <p className="text-foreground text-sm">
                        <strong>{item.split(' - ')[0]}</strong>
                        {item.includes(' - ') && (
                          <span className="text-muted-foreground"> - {item.split(' - ')[1]}</span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mockup Image */}
          <div className="relative flex flex-col items-center lg:sticky lg:top-24">
            <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full" />
            <img 
              src={mockupImage} 
              alt="Método Cleópatra - Acesse em qualquer dispositivo" 
              className="relative z-10 w-full max-w-lg mx-auto rounded-2xl shadow-gold"
            />
            <div className="relative z-10 mt-6 bg-card px-6 py-4 rounded-2xl border border-secondary/30 shadow-gold text-center">
              <p className="text-lg font-bold text-foreground flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-secondary" />
                Acesso Imediato em Qualquer Dispositivo
                <Sparkles className="w-5 h-5 text-secondary" />
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                📱 Celular • 💻 Computador • 📲 Tablet
              </p>
              <div className="mt-3 pt-3 border-t border-border/30">
                <p className="text-sm text-muted-foreground">
                  De <span className="line-through">R$1.997,00</span>
                </p>
                <p className="text-2xl font-bold text-secondary">
                  Por apenas R$197,00
                </p>
                <p className="text-xs text-muted-foreground">ou 12x de R$19,58</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
