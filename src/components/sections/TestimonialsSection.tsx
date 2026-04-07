import { Star, Quote, CheckCircle, Heart } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  {
    name: "Fernanda M.",
    age: 31,
    location: "Publicitária",
    image: testimonial1,
    rating: 5,
    result: "Ex voltou em 7 dias",
    quote: "Em APENAS 7 dias aplicando o método, meu ex (que havia me bloqueado há 3 meses) apareceu na porta da minha casa com flores dizendo que não conseguia mais viver sem mim. Eu nem sabia se queria ele de volta, mas ver o PODER que eu tinha desenvolvido foi incrível. Hoje estou com alguém 10x melhor!",
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
    quote: "Eu pensava que aos 49 anos e após 3 filhos eu jamais seria 'desejada' novamente. O método me provou que estava COMPLETAMENTE errada. Hoje namoro um empresário de 40 anos que me trata como a mulher mais especial do mundo.",
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
    quote: "Apliquei exatamente o que você ensinou e em 2 semanas tinha 3 homens incríveis interessados em mim. Pela primeira vez na vida EU é que estava escolhendo. Sensação indescritível de poder!",
    highlight: "Poder de escolha pela primeira vez",
    verified: true
  },
  {
    name: "Regina T.",
    age: 53,
    location: "Curitiba, PR",
    image: testimonial4,
    rating: 5,
    result: "Noiva de homem mais novo",
    quote: "Achava que minha idade era um problema. MENTIRA! O método me mostrou que maturidade é PODER. Hoje namoro um homem 8 anos mais novo que me trata como uma rainha.",
    highlight: "Maturidade como superpoder",
    verified: true
  }
];

const stats = [
  { number: "3.847+", label: "Mulheres Transformadas" },
  { number: "92%", label: "Taxa de Satisfação" },
  { number: "21", label: "Dias Para Resultados" },
  { number: "4.9", label: "Avaliação Média", icon: Star }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-10 md:py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-4">
            ⭐ RESULTADOS REAIS
          </span>
          <h2 className="text-2xl md:text-5xl font-bold text-foreground mb-4">
            O Que Nossas Alunas<br />
            <span className="text-gradient-silver">Estão Dizendo</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Já são mais de <strong className="text-secondary">3.847 transformações</strong> documentadas
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-3 md:p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-xl md:text-3xl font-bold text-secondary">{stat.number}</span>
                {stat.icon && <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-secondary fill-secondary" />}
              </div>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10 group">
              <CardContent className="p-5 md:p-6">
                <div className="flex items-start gap-3 md:gap-4 mb-4">
                  <Avatar className="w-14 h-14 md:w-16 md:h-16 border-2 border-secondary/50 group-hover:border-secondary transition-colors">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                    <AvatarFallback className="bg-primary text-primary-foreground">{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-foreground text-sm md:text-base">{testimonial.name}</h4>
                      {testimonial.verified && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">{testimonial.age} anos • {testimonial.location}</p>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-secondary fill-secondary" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/20 rounded-full mb-3">
                  <Heart className="w-3 h-3 md:w-4 md:h-4 text-secondary" />
                  <span className="text-xs md:text-sm font-semibold text-secondary">{testimonial.result}</span>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 md:w-8 md:h-8 text-secondary/20" />
                  <p className="text-muted-foreground italic pl-5 md:pl-6 leading-relaxed text-xs md:text-sm">"{testimonial.quote}"</p>
                </div>
                <div className="mt-3 pt-3 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">✨ Destaque:</span>
                  <p className="font-semibold text-primary text-sm">{testimonial.highlight}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
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
