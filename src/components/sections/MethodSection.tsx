import { Brain, Zap, Eye, GraduationCap, Microscope, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

export const MethodSection = () => {
  const triggers = [
    {
      icon: Brain,
      title: "GATILHO 1 — Escassez Neural",
      description:
        'Quando você para de estar "sempre disponível", o cérebro masculino interpreta isso como alta qualidade e dispara o sistema de recompensa primitivo.',
      result: "Ele começa a pensar em você obsessivamente.",
    },
    {
      icon: Zap,
      title: "GATILHO 2 — Desafio Cognitivo",
      description:
        "Ao se tornar ligeiramente inalcançável, você ativa o centro de prazer cerebral masculino — o mesmo que dispara durante a caça.",
      result: "Ele sente necessidade compulsiva de te conquistar.",
    },
    {
      icon: Eye,
      title: "GATILHO 3 — Investimento Crescente",
      description:
        "Quando ele percebe que está investindo mais do que recebendo, o Efeito IKEA é ativado — quanto mais investe, mais valoriza.",
      result: "Ele se torna emocionalmente dependente de você.",
    },
  ];

  const stats = [
    { number: "+25", label: "Anos de pesquisa" },
    { number: "347%", label: "+ atração comprovada" },
    { number: "3.847", label: "Mulheres transformadas" },
    { number: "96%", label: "Taxa de satisfação" },
  ];

  return (
    <section className="py-14 md:py-24 bg-gradient-noir relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      {/* Subtle gold scan line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-14">
            <span className="font-cta text-secondary uppercase tracking-[0.25em] text-[10px] md:text-xs">
              A ciência por trás do método
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-white leading-[1.15]">
              Apresentando o{" "}
              <span className="text-gradient-gold">Método Nefertiti</span>
            </h2>
            <p className="font-subheading text-white/70 mt-4 text-base md:text-xl max-w-2xl mx-auto italic">
              O primeiro sistema de reversão psicológica que transforma rejeição em magnetismo irresistível.
            </p>
          </div>
        </ScrollReveal>

        {/* Dr. Sophia authority card */}
        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto mb-14">
            <div className="relative bg-white/[0.04] backdrop-blur-md p-6 md:p-10 rounded-3xl border border-secondary/30 shadow-metallic overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-metallic rounded-full flex items-center justify-center border-4 border-secondary/40 shadow-gold">
                    <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <span className="inline-block font-cta text-secondary uppercase tracking-wider text-[10px] md:text-xs">
                    Base científica do método
                  </span>
                  <h3 className="font-heading text-xl md:text-3xl font-bold text-white mt-1">
                    Dra. Sophia Miendez
                  </h3>
                  <p className="text-white/70 font-body text-sm md:text-base mt-2">
                    Psicóloga comportamental, 25+ anos estudando dinâmicas de atração e os padrões das mulheres mais magneticamente irresistíveis da história — Nefertiti, Cleópatra, Helena de Troia.
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/15 border border-secondary/40 text-secondary text-xs font-cta">
                      <Microscope className="w-3.5 h-3.5" /> Estudos Harvard
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/15 border border-secondary/40 text-secondary text-xs font-cta">
                      <BookOpen className="w-3.5 h-3.5" /> Neurociência da atração
                    </span>
                  </div>
                </div>
              </div>

              {/* Pull quote */}
              <div className="relative z-10 mt-6 md:mt-8 pt-6 border-t border-white/10">
                <p className="font-quote italic text-white/90 text-base md:text-xl leading-relaxed text-center max-w-2xl mx-auto">
                  "Homens relatam <span className="text-gradient-gold font-bold not-italic">347% mais atração</span> por mulheres que demonstram disponibilidade seletiva — presentes, mas não necessitadas."
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Big number stats — Montserrat */}
        <ScrollReveal delay={150}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-4xl mx-auto mb-14">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-secondary/25 rounded-2xl px-3 py-5 text-center"
              >
                <div className="font-cta font-extrabold text-3xl md:text-5xl text-gradient-gold leading-none">
                  {s.number}
                </div>
                <p className="text-white/60 text-[11px] md:text-xs uppercase tracking-wider mt-2">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* 3 triggers */}
        <ScrollReveal delay={200}>
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl md:text-4xl font-bold text-white">
              Os 3 gatilhos neurológicos que fazem{" "}
              <span className="text-gradient-gold">homens te perseguirem</span>
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5 md:gap-7 max-w-6xl mx-auto">
          {triggers.map((trigger, index) => (
            <ScrollReveal key={index} delay={index * 120 + 300}>
              <div className="relative group h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-metallic rounded-full flex items-center justify-center font-cta font-extrabold text-white shadow-gold z-10 text-lg">
                  {index + 1}
                </div>
                <div className="h-full bg-white/[0.06] backdrop-blur-md p-7 rounded-3xl border border-secondary/25 group-hover:border-secondary/60 group-hover:-translate-y-1 transition-all duration-300 shadow-card">
                  <div className="w-14 h-14 bg-secondary/15 rounded-2xl flex items-center justify-center mb-5">
                    <trigger.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h4 className="font-heading text-lg md:text-xl font-bold mb-3 text-white">
                    {trigger.title}
                  </h4>
                  <p className="text-white/65 text-sm leading-relaxed mb-5 font-body">
                    {trigger.description}
                  </p>
                  <div className="p-3 bg-secondary/10 rounded-xl border border-secondary/30">
                    <p className="text-secondary font-semibold text-sm italic">
                      ✦ {trigger.result}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12 px-2">
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
