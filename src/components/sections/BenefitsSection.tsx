import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Check, Star } from "lucide-react";

export const BenefitsSection = () => {
  return (
    <section className="py-10 md:py-24 bg-gradient-section-warm relative overflow-hidden">
      <div className="absolute top-10 right-10 text-primary/20 animate-pulse">
        <Star className="w-12 h-12 md:w-16 md:h-16" fill="currentColor" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-heading text-2xl md:text-5xl font-bold text-foreground">
              Querida, <span className="text-gradient-gold">Chegou Sua Hora...</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-6 text-sm md:text-lg">
          <ScrollReveal delay={100}>
            <p className="text-muted-foreground text-center leading-relaxed">
              Você tem duas opções agora:
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="p-5 md:p-6 bg-destructive/10 border border-destructive/30 rounded-2xl">
              <h3 className="font-bold text-foreground mb-3 text-base md:text-lg">OPÇÃO 1:</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Feche esta página e continue vivendo a mesma dor, a mesma insegurança, a mesma sensação de que "nunca mais vai ser a mesma, e ainda ficar com aquele arrependimento, por não ter entrado para o Método NEFERTITI, sem saber quantas coisas maravilhosas poderiam ter acontecido com você!"...
              </p>
              <p className="text-muted-foreground text-sm md:text-base mt-2">
                Continue vendo outras mulheres conquistarem os homens que você deseja... Continue se sentindo invisível, rejeitada, sem valor e ainda somado a TUDO isso, um coração partido e uma ferida que não cicatriza..😪
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="p-5 md:p-6 bg-primary/10 border-2 border-primary/30 rounded-2xl shadow-metallic">
              <h3 className="font-bold text-primary mb-3 text-base md:text-lg">OU... OPÇÃO 2:</h3>
              <p className="text-foreground text-sm md:text-base leading-relaxed font-medium">
                Decida que HOJE é o dia que sua vida amorosa muda para sempre. PORQUE VOCÊ MERECE!!👸
              </p>
              <ul className="mt-3 space-y-2 text-foreground text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                  Que você nunca mais vai aceitar migalhas emocionais de homem nenhum;
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                  Que você vai se tornar a mulher que tem OPÇÕES de alto valor e sente-se estimada e valorizada
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                  Que VOCÊ é quem ESCOLHE e é DESEJADA, não só pelo seu corpo, dinheiro ou beleza, e sim por sua feminilidade, e poder de atração magnética que deixam os homen hipnotizados, loucos para te decifrar...
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-center text-foreground font-semibold text-base md:text-lg">
              A escolha é sua. Mas lembre-se: <span className="text-destructive">apenas 12 vagas restantes</span> e esse preço especial <strong>NUNCA MAIS</strong> será oferecido!
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing */}
        <ScrollReveal delay={500}>
          <div className="text-center mt-10 bg-card p-6 md:p-8 rounded-2xl border-2 border-primary/30 shadow-metallic max-w-lg mx-auto">
            <p className="text-muted-foreground text-sm">VALOR TOTAL se comprado separadamente:</p>
            <p className="line-through text-lg text-destructive">R$997,00</p>
            <p className="text-foreground font-bold text-base md:text-lg mt-2 font-cta">SEU INVESTIMENTO HOJE:</p>
            <p className="font-cta font-bold text-3xl md:text-5xl mt-1 text-nefertiti-emerald">12 x 14,70</p>
            <p className="text-sm mt-1 text-destructive font-semibold">OU R$147,00 Á VISTA</p>
            <p className="text-muted-foreground text-xs mt-1 italic">Menos que um jantar para duas pessoas</p>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <div className="text-center mt-8 px-2">
          <Button variant="cta" size="xxl" className="w-full max-w-xl text-xs md:text-base leading-tight text-center whitespace-normal h-auto py-5 font-cta animate-shimmer" asChild>
            <a href="https://pay.kiwify.com.br/NRl6nzM" target="_blank" rel="noopener noreferrer">
              👑 CLIQUE AQUI PARA ENTRAR PARA O MÉTODO NEFERTITI
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
