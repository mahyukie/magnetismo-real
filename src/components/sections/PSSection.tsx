import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

export const PSSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <div className="bg-card/70 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-primary/30 shadow-metallic space-y-5 text-foreground text-sm md:text-base leading-relaxed">
            <p><span className="font-cta font-bold text-primary text-lg md:text-xl">P.S.</span> Se você chegou até aqui, é porque algo em você JÁ sabe que precisa disso. Aquela vozinha dentro do peito não está mentindo.</p>

            <p><span className="font-cta font-bold text-primary text-lg md:text-xl">P.P.S.</span> Lembre-se: por apenas <strong>R$ 147</strong> (ou 12x de R$ 14,70) você leva o Método completo + 3 bônus exclusivos (R$ 1.461 grátis) + Tripla Garantia Blindada de 21 dias. <strong>Risco zero pra você. Risco total pra mim.</strong></p>

            <p><span className="font-cta font-bold text-primary text-lg md:text-xl">P.P.P.S.</span> Restam apenas <span className="text-destructive font-bold">12 vagas</span> com este preço. Quando esgotar, o valor volta para R$ 997 — sem exceção. Decida agora se você quer continuar onde está, ou se quer ser a mulher que ELE não consegue esquecer.</p>

            <p className="font-heading text-base md:text-xl text-center pt-4 border-t border-border italic">
              "A escolha que você faz nos próximos 60 segundos vai determinar os próximos 365 dias da sua vida amorosa."
            </p>

            <div className="text-center pt-2">
              <Button variant="cta" size="xxl" className="w-full max-w-xl text-xs md:text-base leading-tight text-center whitespace-normal h-auto py-5 font-cta animate-shimmer" asChild>
                <a href="https://pay.kiwify.com.br/NRl6nzM" target="_blank" rel="noopener noreferrer">
                  👑 SIM, EU ESCOLHO ME TRANSFORMAR AGORA
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-3">Com amor e verdade,<br /><span className="font-heading italic text-primary text-base">Marina • Método Nefertiti</span></p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
