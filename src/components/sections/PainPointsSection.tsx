import { HeartCrack, Eye, AlertTriangle } from "lucide-react";

export const PainPointsSection = () => {
  return (
    <section className="py-10 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Você se identifica?</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-4">
            O TÉRMINO QUE <span className="text-gradient-gold">Ninguém Te Contou</span> 💔
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {/* Pain Point 1 */}
          <div className="bg-gradient-card p-5 md:p-8 rounded-2xl border border-border/50 shadow-card hover:border-secondary/30 transition-all">
            <div className="w-14 h-14 bg-primary/30 rounded-full flex items-center justify-center mb-6">
              <HeartCrack className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
              😭 INSEGURANÇA TOTAL
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Como <strong className="text-foreground">ESQUECER</strong> aquele momento. O <em>EXATO MOMENTO</em> que ELE terminou com você? Aquela sensação QUE FEZ LITERALMENTE o chão desaparecer sob seus pés, o aperto no peito que não passa...
            </p>
            <p className="text-foreground mt-4 italic border-l-2 border-secondary pl-4">
              "Por que eu não sou suficiente?" eu me perguntava toda vez que via uma foto dele sorrindo, com outra.
            </p>
          </div>

          {/* Pain Point 2 */}
          <div className="bg-gradient-card p-5 md:p-8 rounded-2xl border border-border/50 shadow-card hover:border-secondary/30 transition-all">
            <div className="w-14 h-14 bg-primary/30 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
              😰 BAIXA AUTO ESTIMA
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Tentar fazer ciúmes saindo com qualquer um... Isso apenas <strong className="text-foreground">reforça seu desespero</strong> e diminui ainda mais seu valor aos olhos dele e de outros homens de qualidade.
            </p>
            <p className="text-foreground mt-4 italic border-l-2 border-secondary pl-4">
              Além disso, você acaba se machucando ainda mais ao se envolver com pessoas que não te valorizam.
            </p>
          </div>

          {/* Pain Point 3 */}
          <div className="bg-gradient-card p-5 md:p-8 rounded-2xl border border-border/50 shadow-card hover:border-secondary/30 transition-all">
            <div className="w-14 h-14 bg-primary/30 rounded-full flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
              💔 OBSESSÃO CONSTANTE
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Tornar-se espiã profissional e <strong className="text-foreground">stalkeá-lo freneticamente</strong> no Insta ou no Face... ou até no Tinder 🔥 buscando evidências ou pistas.
            </p>
            <p className="text-foreground mt-4 italic border-l-2 border-secondary pl-4">
              Verificando se ele já entrou em outro relacionamento, a cada minuto.
            </p>
          </div>
        </div>

        {/* What You Tried */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-8">
            VOCÊ TENTOU... <span className="text-secondary">E o Pior de Tudo…</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "Seguir conselhos da família (cada um fala uma coisa)",
              "Suas amigas (mais confusão que ajuda)",
              "Coaches de Relacionamento que só diz \"é normal, vai passar\" (mas não passa)",
              "Livros de Auto Ajuda (teoria que não funciona na prática)"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg border border-border/30">
                <span className="text-destructive text-xl">✗</span>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-primary/20 border border-primary/40 rounded-xl">
            <p className="text-lg font-medium text-foreground">
              E <strong>nada funcionou.</strong>
            </p>
            <p className="text-muted-foreground mt-2">
              Porque o que você precisa não é mais informação fragmentada.
            </p>
          </div>
        </div>

        {/* Scarcity Banner */}
        <div className="max-w-4xl mx-auto mt-8 md:mt-12 p-4 md:p-6 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 border border-secondary/40 rounded-xl text-center animate-pulse-slow">
          <p className="text-sm md:text-xl font-bold text-foreground leading-relaxed">
            🔥 Devido à natureza exclusiva do método, estamos limitando o acesso para as primeiras <span className="text-secondary">25 mulheres</span> que entrarem no Método Cleópatra, nos próximos <span className="text-secondary">15 minutos</span>, afim de garantir resultados máximos!! 🔥
          </p>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12">
          <p className="text-2xl md:text-3xl font-bold text-secondary">
            +3.000 MULHERES JÁ TRANSFORMARAM SUAS VIDAS ✨
          </p>
        </div>
      </div>
    </section>
  );
};
