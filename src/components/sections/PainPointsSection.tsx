import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeartCrack } from "lucide-react";

export const PainPointsSection = () => {
  const pains = [
    "Acorda no meio da madrugada pensando nele — e ainda sonha com ele.",
    "Verifica compulsivamente as redes sociais pra saber se ele já está com outra.",
    'Se pergunta em silêncio: "o que ela tem que eu não tenho?"',
    "Sente que perdeu a capacidade de atrair — e a sua autoestima despencou junto.",
    "Se fechou pro amor, com medo de nunca mais ser desejada como antes.",
    "Finge que está bem nas redes, mas chora escondida no banho.",
  ];

  const failedAttempts = [
    "Fingiu que estava bem nas redes (mas chorava no banho).",
    "Saiu com outros homens pra tentar esquecer (e se sentiu pior).",
    "Seguiu todos os conselhos das amigas (que só te confundiram mais).",
  ];

  return (
    <section className="py-14 md:py-24 bg-gradient-pearl relative">
      {/* Pearl border accents */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <span className="inline-block font-cta text-secondary uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4">
              Você não está sozinha
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-[1.15] mb-5 text-foreground">
              Querida amiga que está sofrendo em silêncio{" "}
              <span className="text-gradient-gold">por causa DELE…</span>
            </h2>
            <p className="font-subheading text-base md:text-xl text-muted-foreground leading-relaxed">
              Sei que você está aqui porque algo dentro de você{" "}
              <strong className="text-foreground">QUEBROU</strong> quando ele disse aquelas palavras que mudaram tudo. E sei também que você já tentou de tudo pra parar essa dor que corrói por dentro:
            </p>
          </div>
        </ScrollReveal>

        {/* Failed attempts */}
        <ScrollReveal delay={100}>
          <div className="max-w-3xl mx-auto space-y-3 mb-12 md:mb-16">
            {failedAttempts.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-secondary/20 shadow-card"
              >
                <span className="text-destructive text-xl flex-shrink-0 leading-none">✗</span>
                <p className="text-muted-foreground text-sm md:text-base font-body">{item}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Two-column pains with broken-heart icons */}
        <ScrollReveal delay={200}>
          <p className="text-center text-foreground font-subheading text-lg md:text-xl mb-8">
            <strong>Posso estar errada</strong>, mas tenho quase certeza de que você:
          </p>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4 md:gap-5 mb-10">
            {pains.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gradient-card p-5 rounded-2xl border border-primary/25 shadow-card hover:shadow-metallic transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <HeartCrack className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-foreground text-sm md:text-base font-body leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="max-w-3xl mx-auto p-6 md:p-8 bg-gradient-card border-2 border-secondary/40 rounded-3xl shadow-metallic text-center">
            <p className="text-foreground font-subheading text-lg md:text-xl">
              Se você assentiu pra pelo menos <strong>3 dessas</strong>, você está no lugar certo.
            </p>
            <p className="text-muted-foreground mt-3 text-sm md:text-base">
              Porque o que vou te mostrar nas próximas linhas vai{" "}
              <strong className="text-foreground">mudar completamente</strong> a forma como você se vê — e como os homens te veem.
            </p>
          </div>
        </ScrollReveal>

        <div className="text-center mt-10 px-2">
          <Button
            variant="cta"
            size="xxl"
            className="w-full max-w-xl text-sm md:text-lg leading-tight text-center whitespace-normal h-auto py-5 rounded-full font-cta animate-shimmer"
            asChild
          >
            <a href="https://pay.kiwify.com.br/iX5ySX9" target="_blank" rel="noopener noreferrer">
              👑 QUERO O MÉTODO NEFERTITI AGORA — R$ 147
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
