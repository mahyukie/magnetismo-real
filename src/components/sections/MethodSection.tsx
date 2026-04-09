import { Brain, Zap, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      result: "Você se torna irresistível para ele"
    },
    {
      icon: Eye,
      title: "GATILHO 3: Mistério Emocional",
      description: "Quando você desenvolve uma \"vida interna rica\", você se torna infinitamente mais interessante do que 97% das outras mulheres.",
      result: "Ele quer DESCOBRIR quem é essa \"nova versão\" de você"
    }
  ];

  const miniTestimonials = [
    { name: "Carol, 34 anos", quote: "Em 16 dias meu ex que havia me bloqueado mandou mensagem dizendo que não conseguia parar de pensar em mim" },
    { name: "Juliana, 29 anos", quote: "Hoje tenho 4 homens incríveis interessados em mim e finalmente EU é que escolho aquele que REALMENTE me completa." },
    { name: "Patricia, 58 anos", quote: "Achei que aos 58 já era tarde demais. Hoje estou noiva de um homem 12 anos mais novo que me trata como rainha" },
  ];

  return (
    <section className="py-10 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-10">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Apresentando</span>
          <h2 className="font-serif text-2xl md:text-5xl font-bold mt-2">
            MÉTODO <span className="text-gradient-silver">AURORA</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm md:text-lg max-w-2xl mx-auto italic">
            O Primeiro Sistema de Reversão Psicológica Para Transformar Rejeição em Magnetismo Irresistível
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="p-5 md:p-6 bg-gradient-card border border-border/50 rounded-2xl">
            <p className="text-foreground font-medium text-sm md:text-base mb-4">
              <strong>Não importa:</strong>
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm md:text-base">
              <li>• Sua idade (funciona MUITO bem dos 20 aos 65 anos)</li>
              <li>• Há quanto tempo foi o término</li>
              <li>• Se ele já está com outra</li>
              <li>• Se você se sente "sem esperança"</li>
            </ul>
            <p className="text-foreground font-semibold mt-4 text-sm md:text-base">
              Você para de ser a "rejeitada" e se torna a <span className="text-secondary">"desejada"</span>. De forma 100% AUTÊNTICA.
            </p>
          </div>
        </div>

        <div className="text-center mb-10">
          <h3 className="font-serif text-xl md:text-3xl font-bold">
            Os 3 Gatilhos Neurológicos Que Fazem <br className="hidden md:block"/>
            <span className="text-gradient-silver">Homens Te Perseguirem</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto mb-10 md:mb-16">
          {triggers.map((trigger, index) => (
            <div key={index} className="relative group">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-bold text-secondary-foreground shadow-silver z-10">
                {index + 1}
              </div>
              <div className="h-full bg-gradient-card p-6 md:p-8 rounded-2xl border border-border/50 shadow-card group-hover:border-secondary/50 group-hover:shadow-silver transition-all duration-300">
                <div className="w-14 h-14 bg-primary/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <trigger.icon className="w-7 h-7 text-secondary" />
                </div>
                <h4 className="font-serif text-lg font-bold mb-3 text-foreground">{trigger.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{trigger.description}</p>
                <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                  <p className="text-secondary font-semibold text-sm italic">Resultado: {trigger.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-foreground font-semibold text-base md:text-lg mb-6">
            Aqui estão apenas ALGUNS resultados das nossas alunas:
          </p>
          <div className="space-y-4">
            {miniTestimonials.map((t, i) => (
              <div key={i} className="p-4 bg-card/60 border border-border/30 rounded-xl">
                <p className="text-muted-foreground italic text-sm md:text-base">
                  📍 <strong className="text-foreground">{t.name}:</strong> <em>"{t.quote}"</em>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 px-2">
          <Button variant="cta" size="xxl" className="w-full max-w-xl text-xs md:text-base leading-tight text-center whitespace-normal h-auto py-4" asChild>
            <a href="https://pay.kiwify.com.br/NRl6nzM" target="_blank" rel="noopener noreferrer">
              🔥 QUERO MINHA TRANSFORMAÇÃO AGORA
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
