import { ScrollReveal } from "@/components/ScrollReveal";
import { AlertTriangle } from "lucide-react";

export const CostOfInactionSection = () => {
  return (
    <section className="py-12 md:py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-destructive/5" />
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4 animate-pulse" />
            <h2 className="font-heading text-2xl md:text-5xl font-bold text-foreground">
              O Verdadeiro <span className="text-destructive">CUSTO</span> de Não Fazer Nada
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="bg-background p-6 md:p-10 rounded-2xl border-2 border-destructive/30 shadow-metallic space-y-5 text-foreground text-sm md:text-lg leading-relaxed">
            <p>Pense bem, querida. Se você fechar esta página agora e seguir sua vida sem mudar absolutamente nada...</p>
            <ul className="space-y-3 pl-5 list-disc marker:text-destructive">
              <li><strong>Daqui a 30 dias</strong>, você ainda vai estar checando o Instagram dele toda madrugada.</li>
              <li><strong>Daqui a 3 meses</strong>, você vai descobrir que ele já está com outra — mais nova, mais magra, mais "feliz" que você.</li>
              <li><strong>Daqui a 6 meses</strong>, ele vai noivar. E você vai chorar fingindo que não dói.</li>
              <li><strong>Daqui a 1 ano</strong>, você vai olhar no espelho e perguntar: <em>"por que eu não fiz nada quando tive a chance?"</em></li>
            </ul>
            <p className="text-base md:text-xl font-semibold pt-3 border-t border-border">
              R$147 é menos que um jantar. Continuar do jeito que está custa <span className="text-destructive">a sua vida amorosa inteira.</span>
            </p>
            <p className="font-cta text-primary text-center text-lg md:text-xl uppercase tracking-wider">
              Qual dor você prefere?
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
