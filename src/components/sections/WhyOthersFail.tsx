import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhyOthersFail = () => {
  return (
    <section className="py-10 md:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-destructive/20 text-destructive px-4 py-2 rounded-full mb-4">
            <AlertCircle className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-semibold text-xs md:text-sm">VAGAS LIMITADAS</span>
          </div>
          <h2 className="font-serif text-2xl md:text-4xl font-bold">
            ⚠️ Por Que Estamos Limitando a <span className="text-gradient-silver">Apenas 25 Vagas?</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-card/80 p-5 md:p-6 rounded-xl border border-border/50">
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              <strong>Simples:</strong> Quero garantir que cada mulher tenha resultados excepcionais. Nos últimos 6 meses, sempre que abro mais de 50 vagas, o suporte fica sobrecarregado e algumas alunas não conseguem a atenção que merecem.
            </p>
          </div>
          <div className="bg-card/80 p-5 md:p-6 rounded-xl border border-border/50">
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              <strong className="text-secondary">Prefiro transformar 25 vidas COMPLETAMENTE</strong> do que ajudar 200 pela metade.
            </p>
          </div>
          <div className="bg-card/80 p-5 md:p-6 rounded-xl border border-border/50">
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              Além disso, <strong>este preço especial</strong> foi autorizado pela minha equipe apenas para este lançamento. A partir da próxima turma, o investimento volta para <span className="text-destructive font-bold">R$1.997,00</span>.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 px-2">
          <Button variant="cta" size="xxl" className="w-full max-w-xl text-xs md:text-base leading-tight text-center whitespace-normal h-auto py-4" asChild>
            <a href="https://pay.kiwify.com.br/NRl6nzM" target="_blank" rel="noopener noreferrer">
              ✨ CLIQUE AQUI PARA ENTRAR PARA O MÉTODO AURORA
            </a>
          </Button>
          <p className="text-muted-foreground mt-3 text-xs md:text-sm">
            ⚠️ Restam apenas 12 vagas neste lote
          </p>
        </div>
      </div>
    </section>
  );
};
