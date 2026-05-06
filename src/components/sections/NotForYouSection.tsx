import { ScrollReveal } from "@/components/ScrollReveal";
import { X, Check } from "lucide-react";

export const NotForYouSection = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-section-beige">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-heading text-2xl md:text-5xl font-bold text-foreground">
              O Método Nefertiti <span className="text-gradient-gold">NÃO É</span> Para Todas
            </h2>
            <p className="text-muted-foreground mt-3 text-sm md:text-base">Seja honesta consigo mesma agora. Isto pode mudar tudo.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5 md:gap-8">
          <ScrollReveal delay={100}>
            <div className="p-6 md:p-8 bg-destructive/10 border-2 border-destructive/30 rounded-2xl h-full">
              <h3 className="font-heading text-lg md:text-2xl font-bold text-destructive mb-5">❌ NÃO entre se você...</h3>
              <ul className="space-y-3 text-sm md:text-base text-foreground">
                {[
                  "Quer fórmula mágica sem aplicar 15 minutos por dia",
                  "Acredita que ainda vai funcionar implorar e ser carente",
                  "Não está disposta a olhar pra dentro e mudar padrões",
                  "Procura culpados em vez de assumir o próprio poder",
                  "Quer manipular alguém — isto é sobre VOCÊ, não sobre ele",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2"><X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />{t}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="p-6 md:p-8 bg-primary/10 border-2 border-primary/40 rounded-2xl h-full shadow-metallic">
              <h3 className="font-heading text-lg md:text-2xl font-bold text-primary mb-5">✅ Entre AGORA se você...</h3>
              <ul className="space-y-3 text-sm md:text-base text-foreground">
                {[
                  "Está cansada de chorar pelos cantos e quer virar o jogo",
                  "Tem coragem de aplicar o método por 21 dias seguidos",
                  "Quer parar de aceitar migalhas e voltar a se sentir desejada",
                  "Aceita que o problema não é você ser pouco — é você não saber o seu valor",
                  "Está pronta para ser a mulher que ele NUNCA mais esquece",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />{t}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
