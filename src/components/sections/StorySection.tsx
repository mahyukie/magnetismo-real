import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Quote } from "lucide-react";
import marinaImage from "@/assets/marina-portrait.jpg";

const timeline = [
  {
    day: "Dia 1",
    title: "O ritual de 48h",
    text: "Pela primeira vez em meses, durmo a noite inteira. A obsessão começa a soltar.",
  },
  {
    day: "Dia 7",
    title: "A primeira faísca",
    text: 'Um homem na academia me para: "preciso saber qual é o seu segredo, não consigo parar de te olhar."',
  },
  {
    day: "Dia 14",
    title: "O ex reaparece",
    text: '3 convites pra jantar. Meu ex manda mensagem perguntando "como eu estava". As amigas perguntam minha bruxaria.',
  },
  {
    day: "Dia 21",
    title: "A Rainha desperta",
    text: "5 homens me cortejando ao mesmo tempo. Pela primeira vez em anos, EU é que escolho.",
  },
];

export const StorySection = () => {
  return (
    <section className="py-14 md:py-24 bg-gradient-section-warm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block font-cta text-secondary uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3">
              Minha história
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-[1.15] text-foreground">
              Meu nome é Marina e eu fui você{" "}
              <span className="text-gradient-gold">alguns anos atrás.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Photo + intro side by side */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-[260px_1fr] gap-8 md:gap-12 items-start mb-14">
          <ScrollReveal delay={100}>
            <div className="relative mx-auto md:mx-0">
              <div className="absolute -inset-3 bg-gradient-metallic rounded-[2rem] blur-xl opacity-40" />
              <div className="relative w-56 h-72 md:w-[260px] md:h-[340px] rounded-[2rem] overflow-hidden border-4 border-white shadow-metallic">
                <img
                  src={marinaImage}
                  alt="Marina, criadora do Método Nefertiti"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={520}
                  height={680}
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-metallic px-4 py-1.5 rounded-full shadow-metallic whitespace-nowrap">
                <p className="text-white font-cta text-xs">Marina · Criadora</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="space-y-5 text-sm md:text-base font-body leading-relaxed text-muted-foreground">
              <p>
                Em outubro de 2022, eu estava exatamente onde você está agora. Deitada no chão do banheiro, às 3h da manhã, chorando porque tinha visto uma foto dele com outra mulher no Instagram.
              </p>
              <p>
                <strong className="text-foreground">6 anos de relacionamento jogados fora.</strong> Eu sempre fui a namorada perfeita: cuidava, cozinhava, estava sempre disponível. E mesmo assim, ele me trocou.
              </p>
              <p>
                Pelos 6 meses seguintes virei uma sombra: perdi 8kg de qualquer jeito, evitava sair pra não ver casais, me sentia <strong className="text-foreground">invisível</strong> pra qualquer homem interessante.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Highlighted quote box */}
        <ScrollReveal delay={200}>
          <div className="max-w-3xl mx-auto p-7 md:p-9 bg-gradient-card border-2 border-secondary/40 rounded-3xl shadow-metallic relative my-10">
            <Quote className="absolute -top-5 left-6 w-10 h-10 text-secondary fill-secondary/20" />
            <p className="font-quote italic text-base md:text-xl text-foreground leading-relaxed text-center">
              "Marina, você realmente acredita que <strong>Nefertiti</strong> chorava no banheiro quando foi rejeitada?"
            </p>
            <p className="text-secondary font-cta uppercase text-xs md:text-sm tracking-wider text-center mt-4">
              — Dra. Sophia Miendez
            </p>
            <p className="text-muted-foreground text-center mt-3 text-sm italic">
              Claro que não. Ela fazia o oposto. E provavelmente, fez ELE chorar.
            </p>
          </div>
        </ScrollReveal>

        {/* Subtle vertical timeline */}
        <ScrollReveal delay={300}>
          <div className="max-w-3xl mx-auto mt-12">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
              A linha do tempo da minha{" "}
              <span className="text-gradient-gold">transformação</span>
            </h3>

            <div className="relative pl-6 md:pl-8 border-l-2 border-secondary/40">
              {timeline.map((step, i) => (
                <div key={i} className="relative pb-8 last:pb-0">
                  <div className="absolute -left-[37px] md:-left-[41px] top-1 w-6 h-6 rounded-full bg-gradient-metallic border-2 border-white shadow-gold" />
                  <span className="font-cta uppercase tracking-wider text-xs text-secondary">
                    {step.day}
                  </span>
                  <h4 className="font-heading text-lg md:text-xl font-bold text-foreground mt-1">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base mt-1 font-body leading-relaxed">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="text-center font-subheading text-foreground text-lg md:text-2xl italic mt-10">
            Hoje, +18 meses depois, já ajudei <span className="text-secondary font-bold">+3.847 mulheres</span> a fazerem essa mesma transformação.
          </p>
          <p className="text-center font-heading text-xl md:text-2xl text-gradient-gold font-bold mt-2">
            E agora é a SUA vez. ✨
          </p>
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
