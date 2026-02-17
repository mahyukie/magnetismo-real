import { Shield, CheckCircle, HeadphonesIcon, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export const GuaranteeSection = () => {
  return (
    <section className="py-10 md:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Nossa Garantia</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">
            <span className="text-gradient-gold">GARANTIA TRIPLA</span> DE SATISFAÇÃO
          </h2>
        </div>

        {/* Guarantee Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card p-8 md:p-12 rounded-3xl border-2 border-secondary/40 shadow-gold relative overflow-hidden">
            {/* Decorative shield */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            
            <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
              {/* Shield Icon */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-secondary/20 rounded-full flex items-center justify-center border-4 border-secondary/40 shadow-gold">
                  <Shield className="w-16 h-16 text-secondary" fill="currentColor" />
                </div>
              </div>

              {/* Guarantees */}
              <div className="flex-1 space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">✅ GARANTIA DE RESULTADOS</h3>
                    <p className="text-muted-foreground mt-1">
                      Se em 21 dias você não sentir uma transformação significativa em sua autoestima e magnetismo, devolvemos 100% do seu investimento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <RefreshCcw className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">✅ GARANTIA DE SATISFAÇÃO</h3>
                    <p className="text-muted-foreground mt-1">
                      Se por qualquer motivo você não ficar completamente satisfeita com o conteúdo, tem 7 dias para solicitar reembolso total.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <HeadphonesIcon className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">✅ GARANTIA DE SUPORTE</h3>
                    <p className="text-muted-foreground mt-1">
                      Acesso direto à nossa equipe de especialistas por 30 dias para tirar todas suas dúvidas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom message */}
            <div className="mt-8 pt-8 border-t border-border/30 text-center">
              <p className="text-lg text-foreground font-medium">
                <strong>Você não tem nada a temer.</strong> Ou você se transforma na mulher magnética que sempre sonhou ser, ou seu dinheiro volta integralmente.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <Button variant="cta" size="xxl" className="w-full max-w-xl" asChild>
            <a href="https://pay.kiwify.com.br/NRl6nzM" target="_blank" rel="noopener noreferrer">
              ✨ SIM, QUERO DESPERTAR MINHA CLEÓPATRA INTERIOR AGORA - APENAS R$197
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
