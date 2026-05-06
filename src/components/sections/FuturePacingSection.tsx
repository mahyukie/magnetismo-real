import { ScrollReveal } from "@/components/ScrollReveal";
import { Sparkles } from "lucide-react";

export const FuturePacingSection = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-section-warm relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="font-cta text-primary text-xs uppercase tracking-widest">Imagine Comigo...</span>
            <h2 className="font-heading text-2xl md:text-5xl font-bold mt-3 text-foreground">
              Daqui a <span className="text-gradient-gold">21 Dias</span>, Sua Vida Vai Estar Assim:
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-5">
          {[
            { day: "DIA 3", text: "Você acorda e, pela primeira vez em meses, NÃO checa o WhatsApp procurando uma mensagem dele. Seu coração está leve. Você sente algo novo no peito: poder." },
            { day: "DIA 7", text: "Ele te manda mensagem. 'Oi, tudo bem?'. Você sorri, fecha o celular, e só responde 6 horas depois — porque agora VOCÊ controla o tempo, o ritmo, a temperatura." },
            { day: "DIA 14", text: "Você sai com as amigas. Três homens diferentes te abordam na mesma noite. Você já não sente urgência, nem carência. Você ESCOLHE com quem vai conversar." },
            { day: "DIA 21", text: "Ele liga. A voz embargada. 'Eu errei. Eu não sabia o que tinha. Me dá mais uma chance...'. E aí, querida, VOCÊ decide se quer ou não — porque agora você é a prêmio, não ele." },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="flex gap-4 md:gap-6 p-5 md:p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-metallic">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-metallic rounded-full flex items-center justify-center font-cta font-bold text-white text-xs md:text-sm shadow-glow">
                    {item.day}
                  </div>
                </div>
                <p className="text-foreground text-sm md:text-lg leading-relaxed flex items-center">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <p className="text-center mt-10 text-base md:text-xl text-foreground font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Isso NÃO é fantasia. É o que aconteceu com 3.847 mulheres antes de você.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
