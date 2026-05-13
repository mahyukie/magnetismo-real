import { Star, Quote, CheckCircle, Heart } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";

const testimonials = [
  {
    name: "Fernanda M.",
    age: 36,
    location: "Publicitária · SP",
    image: testimonial1,
    rating: 5,
    result: "Ex voltou em 10 dias",
    quote:
      "Em apenas 10 dias aplicando o método, meu ex (que tinha me bloqueado há 3 meses) apareceu na porta de casa com flores. Naquele momento, eu nem sabia se queria ele de volta — só vi o PODER que tinha desenvolvido. Hoje estou com alguém 10x melhor.",
    highlight: "Desenvolveu poder de escolha total",
  },
  {
    name: "Claudia R.",
    age: 49,
    location: "Dentista · RJ",
    image: testimonial2,
    rating: 5,
    result: "Novo amor aos 49",
    quote:
      "Pensava que aos 49 e com 3 filhos eu jamais seria desejada de novo. O Método Nefertiti me provou o contrário. Hoje estou noiva de um empresário de 41 anos que me trata como a mulher mais especial do mundo.",
    highlight: "Provou que idade não importa",
  },
  {
    name: "Ana Carolina",
    age: 28,
    location: "Arquiteta · MG",
    image: testimonial3,
    rating: 5,
    result: "3 pretendentes em 2 semanas",
    quote:
      "Apliquei exatamente o que ensinaram e em 2 semanas tinha 3 homens de alto valor interessados em mim. Pela primeira vez na vida EU é que estava escolhendo. Não precisava mais implorar por atenção.",
    highlight: "Poder de escolha pela primeira vez",
  },
  {
    name: "Regina T.",
    age: 55,
    location: "Curitiba · PR",
    image: testimonial4,
    rating: 5,
    result: "Encontrou amor na maturidade",
    quote:
      "Achava que minha idade era um problema. Mentira! O método me mostrou que maturidade é PODER. Hoje namoro um homem 12 anos mais novo. Nunca fui tão feliz — viajamos, namoramos, vivemos.",
    highlight: "Maturidade como superpoder",
  },
  {
    name: "Larissa S.",
    age: 26,
    location: "Estudante · RS",
    image: testimonial5,
    rating: 5,
    result: "Reconquistou a autoestima",
    quote:
      "Eu tinha 22 e me sentia 50 de tão acabada. Em 3 semanas, redescobri a mulher que eu era. Não é só sobre homem — é sobre acordar gostando de quem você vê no espelho.",
    highlight: "Autoestima reconstruída do zero",
  },
  {
    name: "Patrícia A.",
    age: 45,
    location: "Empresária · BA",
    image: testimonial6,
    rating: 5,
    result: "2 pretendentes em 3 semanas",
    quote:
      "Após o divórcio achei que estava acabada. Em 3 semanas tinha 2 homens me cortejando — e finalmente entendi o oposto de migalhas emocionais. É um interesse genuíno em me decifrar.",
    highlight: "Voltou a se sentir desejada",
  },
];

const stats = [
  { number: "3.847+", label: "Mulheres Transformadas" },
  { number: "96%", label: "Taxa de Satisfação" },
  { number: "21", label: "Dias Para Resultados" },
  { number: "4.9", label: "Avaliação Média", icon: Star },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-14 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="font-cta text-secondary uppercase tracking-[0.25em] text-[10px] md:text-xs">
              ⭐⭐⭐⭐⭐ Resultados reais
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 leading-[1.15]">
              O que nossas alunas{" "}
              <span className="text-gradient-gold">estão dizendo</span>
            </h2>
            <p className="font-subheading text-base md:text-xl text-muted-foreground italic mt-4 max-w-2xl mx-auto">
              Já são mais de <strong className="text-secondary not-italic">3.847 transformações</strong> documentadas.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-card border border-secondary/25 rounded-2xl p-4 text-center shadow-card"
              >
                <div className="flex items-center justify-center gap-1.5">
                  <span className="font-cta text-2xl md:text-4xl font-extrabold text-gradient-gold leading-none">
                    {stat.number}
                  </span>
                  {stat.icon && (
                    <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-secondary fill-secondary" />
                  )}
                </div>
                <span className="text-[11px] md:text-xs text-muted-foreground uppercase tracking-wider mt-2 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <Card className="bg-gradient-card border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-metallic group h-full">
                <CardContent className="p-5 md:p-6 flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-4">
                    <Avatar className="w-14 h-14 border-2 border-secondary/50 shadow-gold">
                      <AvatarImage src={t.image} alt={t.name} className="object-cover" />
                      <AvatarFallback className="bg-secondary/20 text-foreground">
                        {t.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-heading font-bold text-foreground text-base truncate">
                          {t.name}
                        </h4>
                        <CheckCircle className="w-4 h-4 text-nefertiti-emerald flex-shrink-0" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {t.age} anos · {t.location}
                      </p>
                      <div className="flex gap-0.5 mt-1">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-secondary fill-secondary" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary/15 rounded-full mb-3 self-start">
                    <Heart className="w-3 h-3 text-secondary fill-secondary" />
                    <span className="text-xs font-cta font-semibold text-foreground uppercase tracking-wider">
                      {t.result}
                    </span>
                  </div>

                  <div className="relative flex-1">
                    <Quote className="absolute -top-1 -left-1 w-7 h-7 text-secondary/15" />
                    <p className="text-muted-foreground italic pl-5 leading-relaxed text-sm font-quote">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/50">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      ✨ Destaque
                    </span>
                    <p className="font-subheading text-foreground text-sm mt-0.5">
                      {t.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
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
