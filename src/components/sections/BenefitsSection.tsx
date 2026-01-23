import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BenefitsSection = () => {
  const benefits = [
    "Eliminar completamente a ansiedade obsessiva sobre seu ex e recuperar sua paz mental",
    "Desenvolver presença magnética que faz homens pararem para olhar quando você entra em um ambiente",
    "Transformar rejeição em poder de atração irresistível usando o Método Cleópatra Exclusivo, único no mercado",
    "Ter opções românticas em apenas 21 dias sem precisar sair caçando homens",
    "Ser vista como a mulher irresistível que todos desejam e recuperar seu status de \"desejada\"",
    "Sentir-se confiante e valiosa independente de qualquer homem com autoestima genuína e inabalável",
    "Dominar técnicas práticas de sedução autêntica que funcionam em qualquer situação",
    "Nunca mais se sentir invisível ou rejeitada porque você terá o poder de escolha nos relacionamentos"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 right-10 text-secondary/20 animate-pulse">
        <Star className="w-16 h-16" fill="currentColor" />
      </div>
      <div className="absolute bottom-10 left-10 text-secondary/20 animate-pulse-slow">
        <Star className="w-12 h-12" fill="currentColor" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Benefícios em Destaque</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">
            Ao Adquirir Hoje, <span className="text-gradient-gold">Você Vai:</span> ✨
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-card/60 p-5 rounded-xl border border-secondary/20 hover:border-secondary/40 hover:bg-card/80 transition-all"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-secondary-foreground" />
                </div>
                <p className="text-foreground leading-relaxed">
                  ✓ {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="cta" size="xxl" className="w-full max-w-xl" asChild>
            <a href="https://pay.kiwify.com.br/NRl6nzM" target="_blank" rel="noopener noreferrer">
              🔥 QUERO DESPERTAR MINHA CLEÓPATRA INTERIOR AGORA
            </a>
          </Button>
          <p className="text-muted-foreground mt-4 text-sm">
            De <span className="line-through">R$1.997</span> por apenas <span className="text-secondary font-bold text-lg">R$197</span> ou 12x de R$19,58
          </p>
        </div>
      </div>
    </section>
  );
};
