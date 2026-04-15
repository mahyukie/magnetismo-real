import { Shield, CheckCircle, HeadphonesIcon, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

export const GuaranteeSection = () => {
  return (
    <section className="py-10 md:py-24 bg-gradient-section-beige relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-12">
            <span className="font-cta text-primary font-semibold text-sm uppercase tracking-wider">Sua Segurança</span>
            <h2 className="font-heading text-2xl md:text-5xl font-bold mt-2 text-foreground">
              🛡️ <span className="text-gradient-gold">TRIPLA GARANTIA</span> BLINDADA
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-card p-6 md:p-12 rounded-3xl border-2 border-primary/40 shadow-gold relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-full flex items-center justify-center border-4 border-primary/40 shadow-gold">
                    <Shield className="w-12 h-12 md:w-16 md:h-16 text-primary" fill="currentColor" />
                  </div>
                </div>

                <div className="flex-1 space-y-5 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm md:text-lg">✅ GARANTIA #1 — RESULTADOS OU DINHEIRO DE VOLTA</h3>
                      <p className="text-muted-foreground mt-1 text-xs md:text-base">
                        Se em 7 dias você não se sentir pelo menos 10x mais confiante e poderosa, devolvemos CADA centavo. Sem perguntas, sem burocracia. SIMPLES ASSIM.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <RefreshCcw className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm md:text-lg">✅ GARANTIA #2 — SATISFAÇÃO TOTAL</h3>
                      <p className="text-muted-foreground mt-1 text-xs md:text-base">
                        Se por QUALQUER motivo você não ficar 100% satisfeita com o conteúdo, tem 7 dias para pedir reembolso total.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <HeadphonesIcon className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm md:text-lg">✅ GARANTIA #3 — SUPORTE VIP</h3>
                      <p className="text-muted-foreground mt-1 text-xs md:text-base">
                        Acesso direto comigo e minha equipe por 21 dias. Suas perguntas serão respondidas em até 48 horas.
                        Saiba que Tudo em nosso Método, é muito simples. com examplos claros e linguagem direta, auto explicativo, sabe? Mas se por algum motivo surgirem dúvidas, nos colocamos a sua disposição pra te ajudar com o que for preciso.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border/30 text-center">
                <p className="text-sm md:text-lg text-foreground font-medium">
                  <strong>Você literalmente NÃO TEM NADA A PERDER.</strong> Ou você se transforma, ou seu dinheiro volta integralmente.💕
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="text-center mt-10 px-2">
          <Button variant="cta" size="xxl" className="w-full max-w-xl text-xs md:text-base leading-tight text-center whitespace-normal h-auto py-4 font-cta" asChild>
            <a href="https://pay.kiwify.com.br/NRl6nzM" target="_blank" rel="noopener noreferrer">
              ✨ SIM, QUERO MINHA TRANSFORMAÇÃO AGORA — R$ 197
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
