import { Button } from "@/components/ui/button";

export const PainPointsSection = () => {
  const painChecklist = [
    "Acorda no meio da madrugada pensando nele",
    "Verifica compulsivamente as redes sociais dele",
    "Se pergunta \"o que ela tem que eu não tenho?\"",
    "Sente que perdeu toda sua capacidade de atrair homens",
    "Tem medo de nunca mais ser desejada como antes",
  ];

  const failedAttempts = [
    "Fingiu que estava bem nas redes sociais (mas chorou no banho)...",
    "Saiu com outros homens para tentar esquecer (mas só se sentiu pior)...",
    "Seguiu todos os conselhos das amigas (que só te confundiram mais)...",
  ];

  return (
    <section className="py-10 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Opening */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="font-serif text-2xl md:text-4xl font-bold mb-6 leading-tight">
            Querida amiga que está sofrendo em silêncio <span className="text-gradient-silver">por causa DELE...</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            Sei que você está aqui porque algo dentro de você <strong className="text-foreground">QUEBROU</strong> quando ele disse aquelas palavras que mudaram tudo.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            E sei também que você já tentou de tudo para parar essa dor que corrói por dentro:
          </p>
        </div>

        {/* Failed attempts */}
        <div className="max-w-3xl mx-auto space-y-3 mb-10 md:mb-14">
          {failedAttempts.map((item, index) => (
            <div key={index} className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg border border-border/30">
              <span className="text-destructive text-lg flex-shrink-0">✗</span>
              <p className="text-muted-foreground text-sm md:text-base">{item}</p>
            </div>
          ))}
        </div>

        {/* Checklist */}
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-foreground font-medium text-base md:text-lg mb-6">
            <strong>Posso estar errada</strong>, mas tenho quase certeza de que você:
          </p>
          <div className="space-y-3 mb-8">
            {painChecklist.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-primary/10 p-4 rounded-lg border border-primary/20">
                <span className="text-destructive text-lg flex-shrink-0">✗</span>
                <p className="text-foreground text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-card border-2 border-secondary/30 rounded-2xl shadow-silver text-center my-8">
            <p className="text-foreground font-semibold text-base md:text-lg">
              Se você assentiu com a cabeça para pelo menos 3 dessas afirmações, então <span className="text-secondary">você está no lugar certo.</span>
            </p>
            <p className="text-muted-foreground mt-3 text-sm md:text-base">
              Porque o que vou compartilhar com você nas próximas linhas vai <strong className="text-foreground">mudar completamente</strong> a forma como você se vê e como os homens te veem.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 px-2">
          <Button variant="cta" size="xxl" className="w-full max-w-xl text-xs md:text-base leading-tight text-center whitespace-normal h-auto py-4" asChild>
            <a href="https://pay.kiwify.com.br/NRl6nzM" target="_blank" rel="noopener noreferrer">
              🔥 QUERO MINHA TRANSFORMAÇÃO AGORA - R$197
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
