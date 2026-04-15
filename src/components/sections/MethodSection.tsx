import { Brain, Zap, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

export const MethodSection = () => {
  const triggers = [
    {
      icon: Brain,
      title: "GATILHO 1: Escassez Neural",
      description: "Quando você para de estar \"sempre disponível\", o cérebro masculino interpreta isso como \"alta qualidade\" e dispara o sistema de recompensa primitivo.",
      result: "Ele começa a pensar em você obsessivamente"
    },
    {
      icon: Zap,
      title: "GATILHO 2: Desafio Cognitivo",
      description: "Quando você se torna \"ligeiramente inalcançável\", você ativa o centro de prazer cerebral masculino — o mesmo que ativa durante a caça.",
      result: "Ele sente necessidade compulsiva de te conquistar"
    },
    {
      icon: Eye,
      title: "GATILHO 3: Investimento Crescente",
      description: "Quando ele percebe que está investindo mais do que recebendo, o Efeito IKEA é ativado — quanto mais investe, mais valoriza.",
      result: "Ele se torna emocionalmente dependente de você"
    }
  ];

  const miniTestimonials = [
    { name: "Maria Clara, 28", quote: "Em 11 dias meu ex voltou pedindo outra chance. Mas agora EU que não sei se quero ele de volta...Pois estou gostando das novas opções que estou atraindo... Foi ele que perdeu e não eu!" },
    { name: "Mariana, 28", quote: "Ele bloqueou todo mundo menos eu. Agora me liga às 2 da manhã dizendo que errou..." },
    { name: "Patrícia, 50", quote: "Achei que com 50 anos eu não teria mais chance, pois também passei por um divórcio bem difícil. Sabe como é, dediquei minha vida toda ao relacionamento, aos filhos e agora chegou a minha vez. Em 3 semanas tinha 2 homens me cortejando, estou me sentindo nas nuvens... hahaha" }
  ];

  return (
    <section className="py-10 md:py-24 bg-gradient-section-dark relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-6 md:mb-10">
            <span className="font-cta text-primary font-semibold text-sm uppercase tracking-wider">APRESENTANDO A VOCÊS</span>
            <h2 className="font-heading text-2xl md:text-5xl font-bold mt-2 text-white">
              MÉTODO <span className="text-gradient-gold">NEFERTITI</span>
            </h2>
            <p className="font-subheading text-primary/70 mt-3 text-sm md:text-lg max-w-2xl mx-auto italic">
              O Primeiro Sistema de Reversão Psicológica Que Transforma Rejeição em Magnetismo Irresistível
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-3xl mx-auto mb-10 md:mb-16">
            <div className="p-5 md:p-6 bg-white/10 backdrop-blur-sm border border-primary/20 rounded-2xl">
              <p className="text-white font-medium text-sm md:text-base mb-4">
                <strong>Não importa:</strong>
              </p>
              <ul className="space-y-2 text-white/70 text-sm md:text-base">
                <li>• Sua idade (funciona MUITO bem dos 20 aos 65 anos)</li>
                <li>• Há quanto tempo foi o término</li>
                <li>• Se ele já está com outra</li>
                <li>• Se você se sente "sem esperança"</li>
              </ul>
              <p className="text-white font-semibold mt-4 text-sm md:text-base">
                Você para de ser a "rejeitada" e se torna a <span className="text-primary">"desejada"</span>. De forma 100% AUTÊNTICA. Sem Joguinhos ou manipulação psicológica..
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="text-center mb-10">
            <h3 className="font-heading text-xl md:text-3xl font-bold text-white">
              Conheçam Agora Os 3 Gatilhos Neurológicos Que Fazem <br className="hidden md:block"/>
              <span className="text-gradient-gold">Homens Te Perseguirem (NO BOM SENTIDO)</span>
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto mb-10 md:mb-16">
          {triggers.map((trigger, index) => (
            <ScrollReveal key={index} delay={index * 100 + 300}>
              <div className="relative group h-full">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center font-cta font-bold text-secondary-foreground shadow-gold z-10">
                  {index + 1}
                </div>
                <div className="h-full bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-primary/20 group-hover:border-primary/50 group-hover:shadow-gold transition-all duration-300">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <trigger.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-heading text-lg font-bold mb-3 text-white">{trigger.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{trigger.description}</p>
                  <div className="p-3 bg-primary/15 rounded-lg border border-primary/20">
                    <p className="text-primary font-semibold text-sm italic">Resultado: {trigger.result}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-white font-semibold text-base md:text-lg mb-6">
              Aqui estão apenas ALGUNS resultados das nossas alunas:
            </p>
            <div className="space-y-4">
              {miniTestimonials.map((t, i) => (
                <div key={i} className="p-4 bg-white/8 border border-white/10 rounded-xl">
                  <p className="text-white/70 italic text-sm md:text-base">
                    📍 <strong className="text-white">{t.name}:</strong> <em>"{t.quote}"</em>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="text-center mt-10 px-2">
          <Button variant="cta" size="xxl" className="w-full max-w-xl text-xs md:text-base leading-tight text-center whitespace-normal h-auto py-4 font-cta" asChild>
            <a href="https://pay.kiwify.com.br/NRl6nzM" target="_blank" rel="noopener noreferrer">
              🔥 QUERO MINHA TRANSFORMAÇÃO AGORA — R$ 197
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
