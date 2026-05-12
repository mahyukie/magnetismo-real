import { Star, Quote, CheckCircle, Heart } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  {
    name: "Fernanda M.",
    age: 36,
    location: "Publicitária",
    image: testimonial1,
    rating: 5,
    result: "Ex voltou em 10 dias",
    quote: "Em APENAS 10 dias aplicando o Método Nefertiti, meu ex (que havia me bloqueado há 3 meses) apareceu na porta da minha casa com flores dizendo que não conseguia mais viver sem mim. Naquele momento, eu nem sabia se queria ele de volta, mas ver o PODER que eu tinha desenvolvido foi incrível. Hoje estou com alguém 10x melhor!\"💃",
    highlight: "Desenvolveu poder de escolha total",
    verified: true
  },
  {
    name: "Claudia R.",
    age: 49,
    location: "Dentista",
    image: testimonial2,
    rating: 5,
    result: "Novo amor aos 49",
    quote: "Eu pensava que aos 49 anos e após 3 filhos eu jamais seria 'desejada' novamente. O Método Nefertiti me provou que estava COMPLETAMENTE errada. Hoje estou noiva de um empresário de 41 anos que me trata como a mulher mais especial do mundo.",
    highlight: "Provou que idade não importa",
    verified: true
  },
  {
    name: "Ana Carolina",
    age: 28,
    location: "Arquiteta",
    image: testimonial3,
    rating: 5,
    result: "3 pretendentes em 2 semanas",
    quote: "Apliquei exatamente o que vocês ensinaram e em 2 semanas tinha 3 homens de alto valor interessados em mim. Pela primeira vez na vida EU é que estava escolhendo. Não precisava mais implorar por atenção, carinho, ou afeto... Agradeço mil vezes por ter encontrado vcs... kkkk Obrigada a toda equipe do Método Nefertiti.",
    highlight: "Poder de escolha pela primeira vez",
    verified: true
  },
  {
    name: "Regina T.",
    age: 55,
    location: "Curitiba, PR",
    image: testimonial4,
    rating: 5,
    result: "Encontrou o amor na Maturidade",
    quote: "Achava que minha idade era um problema. MENTIRA! O método NEFERTITI me mostrou que maturidade é PODER. Hoje namoro um homem 12 anos mais novo! E posso dizer com muita autoridade, nunca fui tão feliz! Nos divertimos muito juntos, viajamos, namoramos, enfim... só palavras de agradecimento a vcs meninas!! Me deram esperanças quando eu mesma já não tinha mais de encontrar o Amor... O meu MUITISSIMO OBRIGADA!!",
    highlight: "Maturidade como superpoder",
    verified: true
  }
];

const stats = [
  { number: "3.847+", label: "Mulheres Transformadas" },
  { number: "96%", label: "Taxa de Satisfação" },
  { number: "21", label: "Dias Para Resultados" },
  { number: "4.9", label: "Avaliação Média", icon: Star }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-10 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-block px-4 py-2 bg-primary/20 text-secondary rounded-full text-sm font-semibold mb-4">
              ⭐⭐⭐⭐⭐ RESULTADOS REAIS
            </span>
            <h2 className="font-heading text-2xl md:text-5xl font-bold text-foreground mb-4">
              O Que Nossas Alunas<br />
              <span className="text-gradient-gold">Estão Dizendo</span>
            </h2>
            <p className="font-subheading text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Já são mais de <strong className="text-primary">3.847 transformações</strong> documentadas
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-3 md:p-4 text-center shadow-card">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="font-cta text-xl md:text-3xl font-bold text-gradient-gold">{stat.number}</span>
                  {stat.icon && <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary" />}
                </div>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="bg-card/80 backdrop-blur-sm border-primary/15 hover:border-primary/40 transition-all duration-300 hover:shadow-metallic group h-full">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4 mb-4">
                    <Avatar className="w-14 h-14 md:w-16 md:h-16 border-2 border-primary/50 group-hover:border-primary transition-colors">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                      <AvatarFallback className="bg-primary/20 text-foreground">{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-foreground text-sm md:text-base">{testimonial.name}</h4>
                        {testimonial.verified && <CheckCircle className="w-4 h-4 text-nefertiti-emerald" />}
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground">{testimonial.age} anos • {testimonial.location}</p>
                      <div className="flex gap-0.5 mt-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-secondary fill-secondary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/15 rounded-full mb-3">
                    <Heart className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                    <span className="text-xs md:text-sm font-semibold text-foreground">{testimonial.result}</span>
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 md:w-8 md:h-8 text-primary/20" />
                    <p className="text-muted-foreground italic pl-5 md:pl-6 leading-relaxed text-xs md:text-sm font-quote">"{testimonial.quote}"</p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">✨ Destaque:</span>
                    <p className="font-semibold text-foreground text-sm">{testimonial.highlight}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-10 px-2">
          <Button variant="cta" size="xxl" className="w-full max-w-xl text-xs md:text-base leading-tight text-center whitespace-normal h-auto py-4 font-cta animate-shimmer" asChild>
            <a href="https://pay.kiwify.com.br/iX5ySX9" target="_blank" rel="noopener noreferrer">
              👑 QUERO DESPERTAR MINHA RAINHA INTERIOR NEFERTITI AGORA
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
