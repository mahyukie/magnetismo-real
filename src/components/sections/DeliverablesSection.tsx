import { Check, Sparkles } from "lucide-react";
import mockupImage from "@/assets/mockup-ebook.jpg";

export const DeliverablesSection = () => {
  const deliverables = [
    "Ritual de Libertação Emocional do Passado - Elimine a ansiedade obsessiva sobre o ex em 72 horas",
    "Técnica de Ressignificação da Rejeição - Transforme dor em combustível para sua nova versão",
    "Protocolo de Cura das Feridas de Abandono do Passado - Supere padrões repetitivos de relacionamentos",
    "Exercícios de Reconexão com Sua Essência Feminina - Desperte seu magnetismo natural",
    "Os 7 Pilares do Magnetismo Feminino - Desperte a energia que faz homens pararem para olhar",
    "Linguagem Corporal de Poder e Sedução - Comunique valor sem dizer uma palavra",
    "Técnicas de Comunicação Hipnótica - Crie fascínio genuíno em qualquer conversa",
    "Protocolo de Elevação da Autoestima - Desenvolva confiança inabalável independente de validação externa",
    "Sistema de Criação de Escassez Saudável - Ative o desejo masculino usando o Princípio da Escassez Neural",
    "Técnicas Avançadas de Sedução Psicológica - Domine a arte da \"Disponibilidade Seletiva\"",
    "Protocolo de Atração de Homens de Alto Valor - Atraia parceiros de qualidade naturalmente",
    "Estratégias de Reconquista Sem Perseguição - Faça-o vir até você sem jogos infantis"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Deliverables List */}
          <div className="space-y-3">
            {deliverables.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-card/50 p-4 rounded-xl border border-border/30 hover:border-secondary/30 transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-secondary-foreground" />
                </div>
                <p className="text-foreground">
                  🔥 <strong>{item.split(' - ')[0]}</strong>
                  {item.includes(' - ') && (
                    <span className="text-muted-foreground"> - {item.split(' - ')[1]}</span>
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Mockup Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full" />
            <img 
              src={mockupImage} 
              alt="Método Cleópatra - Material Digital" 
              className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-gold animate-float"
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card px-6 py-3 rounded-full border border-secondary/30 shadow-gold">
              <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-secondary" />
                Acesso Imediato Após a Compra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
