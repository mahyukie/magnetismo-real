import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BenefitsSection = () => {
  return (
    <section className="py-10 md:py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute top-10 right-10 text-secondary/20 animate-pulse">
        <Star className="w-12 h-12 md:w-16 md:h-16" fill="currentColor" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-2xl md:text-5xl font-bold">
            Querida, <span className="text-gradient-silver">Chegou Sua Hora...</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-sm md:text-lg">
          <p className="text-muted-foreground text-center leading-relaxed">
            Você tem duas opções agora:
          </p>

          {/* Option 1 */}
          <div className="p-5 md:p-6 bg-destructive/10 border border-destructive/30 rounded-2xl">
            <h3 className="font-bold text-foreground mb-3 text-base md:text-lg">OPÇÃO 1:</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Feche esta página e continue vivendo a mesma dor, a mesma insegurança, a mesma sensação de que "nunca mais vai ser a mesma"...
            </p>
            <p className="text-muted-foreground text-sm md:text-base mt-2">
              Continue vendo outras mulheres conquistarem os homens que você deseja... Continue se sentindo invisível, rejeitada, sem valor...
            </p>
          </div>

          {/* Option 2 */}
          <div className="p-5 md:p-6 bg-secondary/10 border-2 border-secondary/30 rounded-2xl shadow-silver">
            <h3 className="font-bold text-secondary mb-3 text-base md:text-lg">OU... OPÇÃO 2:</h3>
            <p className="text-foreground text-sm md:text-base leading-relaxed font-medium">
              Decida que HOJE é o dia que sua vida amorosa muda para sempre.
            </p>
            <ul className="mt-3 space-y-2 text-foreground text-sm md:text-base">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0 mt-0.5" />
                Que você nunca mais vai aceitar migalhas
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0 mt-0.5" />
                Que você vai se tornar a mulher que tem OPÇÕES
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0 mt-0.5" />
                Que VOCÊ é quem ESCOLHE e é DESEJADA
              </li>
            </ul>
          </div>

          <p className="text-center text-foreground font-semibold text-base md:text-lg">
            A escolha é sua. Mas lembre-se: <span className="text-secondary">apenas 12 vagas restantes</span> e esse preço especial <strong>NUNCA MAIS</strong> será oferecido.
          </p>
        </div>

        {/* Pricing */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground text-sm">VALOR TOTAL se comprado separadamente:</p>
          <p className="text-muted-foreground line-through text-lg">R$1.997,00</p>
          <p className="text-foreground font-bold text-base md:text-lg mt-2">SEU INVESTIMENTO HOJE:</p>
          <p className="text-secondary font-bold text-3xl md:text-5xl mt-1">R$197,00</p>
          <p className="text-muted-foreground text-sm mt-1">ou 12x de apenas R$19,70</p>
          <p className="text-muted-foreground text-xs mt-1 italic">Menos que um jantar para duas pessoas</p>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 px-2">
          <Button variant="cta" size="xxl" className="w-full max-w-xl text-xs md:text-base leading-tight text-center whitespace-normal h-auto py-4" asChild>
            <a href="https://pay.kiwify.com.br/NRl6nzM" target="_blank" rel="noopener noreferrer">
              🔥 QUERO MINHA TRANSFORMAÇÃO AGORA — APENAS R$197
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
