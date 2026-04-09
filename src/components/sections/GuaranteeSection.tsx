import { Shield, CheckCircle, HeadphonesIcon, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export const GuaranteeSection = () => {
  return (
    <section className="py-10 md:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Sua Segurança</span>
          <h2 className="font-serif text-2xl md:text-5xl font-bold mt-2">
            🛡️ <span className="text-gradient-silver">TRIPLA GARANTIA</span> BLINDADA
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card p-6 md:p-12 rounded-3xl border-2 border-secondary/40 shadow-silver relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center relative z-10">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-secondary/20 rounded-full flex items-center justify-center border-4 border-secondary/40 shadow-silver">
                  <Shield className="w-12 h-12 md:w-16 md:h-16 text-secondary" fill="currentColor" />
                </div>
              </div>

              <div className="flex-1 space-y-5 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm md:text-lg">✅ GARANTIA #1 — RESULTADOS OU DINHEIRO DE VOLTA</h3>
                    <p className="text-muted-foreground mt-1 text-xs md:text-base">
                      Se em 7 dias você não se sentir pelo menos 10x mais confiante e poderosa, devolvemos CADA centavo. Sem perguntas, sem burocracia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <RefreshCcw className="w-5 h-5 md:w-6 md:h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm md:text-lg">✅ GARANTIA #2 — SATISFAÇÃO TOTAL</h3>
                    <p className="text-muted-foreground mt-1 text-xs md:text-base">
                      Se por QUALQUER motivo você não ficar 100% satisfeita com o conteúdo, tem 7 dias para pedir reembolso total.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <HeadphonesIcon className="w-5 h-5 md:w-6 md:h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm md:text-lg">✅ GARANTIA #3 — SUPORTE VIP</h3>
                    <p className="text-muted-foreground mt-1 text-xs md:text-base">
                      Acesso direto comigo e minha equipe por 30 dias. Suas perguntas serão respondidas em até 24 horas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border/30 text-center">
              <p className="text-sm md:text-lg text-foreground font-medium">
                <strong>Você literalmente NÃO TEM NADA A PERDER.</strong> Ou você se transforma, ou seu dinheiro volta integralmente.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 px-2">
          <Button variant="cta" size="xxl" className="w-full max-w-xl text-xs md:text-base leading-tight text-center whitespace-normal h-auto py-4" asChild>
            <a href="https://pay.kiwify.com.br/NRl6nzM" target="_blank" rel="noopener noreferrer">
              ✨ SIM, QUERO MINHA TRANSFORMAÇÃO AGORA
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
