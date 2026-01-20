import { Star, Quote, CheckCircle, Heart } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  {
    name: "Juliana S.",
    age: 32,
    location: "São Paulo, SP",
    image: testimonial1,
    rating: 5,
    result: "Reconquistou o ex em 18 dias",
    quote: "Eu estava DESTRUÍDA quando meu ex terminou comigo. Passei semanas chorando, stalkeando ele... Até que encontrei o Método Cleópatra. Em menos de 3 semanas, ele voltou IMPLORANDO uma segunda chance. Hoje, SOU EU quem decide se vale a pena ou não!",
    highlight: "Ele voltou implorando perdão",
    verified: true
  },
  {
    name: "Carla M.",
    age: 41,
    location: "Rio de Janeiro, RJ",
    image: testimonial2,
    rating: 5,
    result: "3 pretendentes em 14 dias",
    quote: "Depois de um casamento de 12 anos, achei que nunca mais seria desejada. O Método Cleópatra me fez redescobrir minha essência feminina. Hoje tenho OPÇÕES! Homens de qualidade me procuram constantemente. É libertador!",
    highlight: "De invisível a disputada",
    verified: true
  },
  {
    name: "Amanda R.",
    age: 27,
    location: "Belo Horizonte, MG",
    image: testimonial3,
    rating: 5,
    result: "Autoestima transformada",
    quote: "Eu era aquela que sempre corria atrás, mandava mensagens, fazia ciúmes... Tudo errado! Com o Método Cleópatra aprendi a INVERTER o jogo. Agora são ELES que me perseguem. A sensação de poder é indescritível!",
    highlight: "O jogo virou completamente",
    verified: true
  },
  {
    name: "Regina T.",
    age: 53,
    location: "Curitiba, PR",
    image: testimonial4,
    rating: 5,
    result: "Novo relacionamento aos 53",
    quote: "Achava que minha idade era um problema. MENTIRA! O Método Cleópatra me mostrou que maturidade é PODER. Hoje namoro um homem 8 anos mais novo que me trata como uma rainha. A fila REALMENTE andou!",
    highlight: "Provou que idade não importa",
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-4">
            ⭐ PROVA SOCIAL REAL
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            +3.000 MULHERES JÁ<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              TRANSFORMARAM SUAS VIDAS
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja os resultados REAIS de mulheres como você que aplicaram o Método Cleópatra
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-2xl md:text-3xl font-bold text-secondary">{stat.number}</span>
                {stat.icon && <stat.icon className="w-5 h-5 text-secondary fill-secondary" />}
              </div>
              <span className="text-xs md:text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10 group"
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-16 h-16 border-2 border-secondary/50 group-hover:border-secondary transition-colors">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.age} anos • {testimonial.location}
                    </p>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Result Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/20 rounded-full mb-4">
                  <Heart className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-semibold text-secondary">{testimonial.result}</span>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-secondary/20" />
                  <p className="text-muted-foreground italic pl-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Highlight */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">✨ Destaque:</span>
                  <p className="font-semibold text-primary">{testimonial.highlight}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20 rounded-full border border-secondary/30">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <Avatar key={i} className="w-8 h-8 border-2 border-background">
                  <AvatarImage src={t.image} alt={t.name} className="object-cover" />
                </Avatar>
              ))}
            </div>
            <span className="text-sm text-foreground">
              <strong className="text-secondary">+127 mulheres</strong> adquiriram nas últimas 24 horas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
