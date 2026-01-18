import { Button } from "@/components/ui/button";

export const StorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Headline */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
            "NUNCA MAIS SEJA A MULHER QUE ELE DESCARTOU": <span className="text-gradient-gold">O MÉTODO PROIBIDO</span> QUE FAZ QUALQUER HOMEM SE ARREPENDER DE TER TE PERDIDO
          </h2>
          <p className="text-xl text-secondary mt-4 font-semibold">
            (E IMPLORAR POR PERDÃO)
          </p>
        </div>

        {/* Story Content */}
        <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
          <p className="text-muted-foreground">
            Talvez você seja como eu, <strong className="text-foreground">Marina de 34 anos</strong>, que após 4 anos de relacionamento me vi, perdida, sem chão, quando meu ex, <em>do NADA</em>, terminou tudo comigo. Sem saber o que fazer, ficava horas stalkeando as redes sociais do meu ex às 2h da manhã, me perguntando como poderia ter acontecido isso - logo comigo, que sempre fui a "certinha", a namorada perfeita.
          </p>

          <p className="text-muted-foreground">
            Os dias vão se passando, todos iguais e você já não se reconhece mais, <strong className="text-foreground">perdeu a vontade de se produzir</strong>, de flertar com outros homens, até passar por aquela sensação de estar em um evento social e <em>se sentir completamente invisível</em>, como se todos os homens interessantes olhassem através de você, mas não PARA você.
          </p>

          <div className="p-6 bg-card border border-border/50 rounded-xl my-8">
            <p className="text-foreground font-medium text-center">
              Isso só valida que você está perdendo sua identidade, sua auto estima. 💔
            </p>
          </div>

          <p className="text-muted-foreground">
            A verdade é que <strong className="text-foreground">você não perdeu sua capacidade de seduzir</strong>. Você simplesmente foi condicionada pela sociedade a esconder sua essência magnética, a ser "certinha" demais, a priorizar o parceiro e esquecer daquela mulher poderosa que conquistava qualquer homem que desejasse.
          </p>

          <div className="p-8 bg-gradient-card border-2 border-secondary/30 rounded-2xl shadow-gold my-10">
            <p className="text-xl text-foreground font-medium text-center">
              Mas e se eu te dissesse que existe uma forma de <strong className="text-secondary">reverter completamente essa situação?</strong>
            </p>
            <p className="text-lg text-muted-foreground text-center mt-4">
              E se existisse um método que não apenas recuperasse sua autoestima, mas te transformasse na mulher que os homens disputam - seja para reconquistar seu ex ou atrair parceiros ainda melhores?
            </p>
          </div>

          <p className="text-muted-foreground">
            Vou te contar como descobri algo <strong className="text-foreground">revolucionário</strong>, e que mudou completamente minha vida: o <span className="text-secondary font-bold">Método Cleópatra</span> - um sistema baseado no arquétipo da mulher mais sedutora da história, Cleópatra, que fazia imperadores romanos abandonarem impérios inteiros só para estar ao seu lado.
          </p>

          <p className="text-xl text-center font-semibold text-secondary mt-8">
            E não, não era apenas por sua beleza física... ✨
          </p>
        </div>
      </div>
    </section>
  );
};
