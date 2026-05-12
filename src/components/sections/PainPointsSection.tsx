import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

export const PainPointsSection = () => {
  const painChecklist = [
    "Acorda no meio da madrugada pensando nele, inclusive ainda sonha com ele...💔",
    "Verifica compulsivamente as redes sociais, pra saber se ele curtiu algum post seu ou se ele já está saindo com outra pessoa...💔",
    "Se ele já estiver saindo com outra pessoa, se pergunta \"o que ela tem que eu não tenho?\"💔",
    "Sente que perdeu toda sua capacidade de atrair outros homens, sentindo isso afetar sua auto estima..💔",
    "Se fechou para o Amor, e acabou desenvolvendo um trauma de sofrer assim novamente, e tem medo de nunca mais ser desejada como antes💔",
  ];

  const failedAttempts = [
    "Fingiu que estava bem pessoalmente e nas redes sociais (mas chorava no banho)..😪.",
    "Saiu com outros homens para tentar esquecer (mas só se sentiu pior)..😪.",
    "Seguiu todos os conselhos das amigas (que só te confundiram mais)..😪.",
  ];

  return (
    <section className="py-10 md:py-24 bg-gradient-section-beige">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
            <h2 className="font-heading text-2xl md:text-4xl font-bold mb-6 leading-tight text-foreground">
              Querida amiga que está sofrendo em silêncio <span className="text-gradient-gold">por causa DELE...</span>
            </h2>
            <p className="font-subheading text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Sei que você está aqui porque algo dentro de você <strong className="text-foreground">QUEBROU</strong> quando ele disse aquelas palavras que mudaram tudo.
            </p>
            <p className="font-subheading text-base md:text-lg text-muted-foreground leading-relaxed">
              E sei também que você já tentou de tudo para PARAR essa DOR que corrói por dentro:
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-3xl mx-auto space-y-3 mb-10 md:mb-14">
            {failedAttempts.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-muted/30 p-4 rounded-xl border border-border/30">
                <span className="text-destructive text-lg flex-shrink-0">✗</span>
                <p className="text-muted-foreground text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-foreground font-medium text-base md:text-lg mb-6">
              <strong>Posso estar errada</strong>, mas tenho quase certeza de que você:
            </p>
            <div className="space-y-3 mb-8">
              {painChecklist.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-primary/10 p-4 rounded-xl border border-primary/20">
                  <span className="text-destructive text-lg flex-shrink-0">✗</span>
                  <p className="text-foreground text-sm md:text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gradient-card border-2 border-primary/30 rounded-2xl shadow-metallic text-center my-8">
              <p className="text-foreground font-semibold text-base md:text-lg">
                Se você assentiu com a cabeça para pelo menos 3 dessas afirmações, então você está no lugar certo!
              </p>
              <p className="text-muted-foreground mt-3 text-sm md:text-base">
                Porque o que vou compartilhar com você nas próximas linhas vai <strong className="text-foreground">mudar completamente</strong> a forma como você se vê e como os homens te veem.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="text-center mt-10 px-2">
          <Button variant="cta" size="xxl" className="w-full max-w-xl text-xs md:text-base leading-tight text-center whitespace-normal h-auto py-4 font-cta animate-shimmer" asChild>
            <a href="https://pay.kiwify.com.br/iX5ySX9" target="_blank" rel="noopener noreferrer">
              ✨ CLIQUE AQUI PARA ENTRAR PARA O MÉTODO NEFERTITI
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
