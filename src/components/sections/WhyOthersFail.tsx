import { X, AlertCircle } from "lucide-react";

export const WhyOthersFail = () => {
  const failures = [
    {
      title: "Fazer academia obsessivamente e mudar o visual drasticamente",
      description: "Você gasta fortunas em personal trainer, procedimentos estéticos e roupas novas, mas continua se sentindo insegura por dentro. A verdade é que beleza física sem magnetismo interior não conquista homens de qualidade."
    },
    {
      title: "Terapia tradicional que demora anos para mostrar resultados",
      description: "Você fala sobre sua infância por meses, mas continua stalkeando o ex e se sentindo rejeitada. Terapia é importante, mas não ensina especificamente como ativar seu poder de atração."
    },
    {
      title: "Tentar \"ser amiga\" do ex ou usar técnicas de perseguição",
      description: "Você manda mensagens \"casuais\", curte todas as fotos dele, tenta mostrar que está bem... Mas isso só confirma para ele que fez a escolha certa. Perseguição gera repulsa, não atração."
    },
    {
      title: "Seguir conselhos genéricos de autoajuda e \"se valorizar\"",
      description: "Você lê livros sobre amor próprio, faz afirmações positivas, mas na primeira oportunidade volta aos mesmos padrões. Autoajuda genérica não aborda a dinâmica específica da atração masculina."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-destructive/20 text-destructive px-4 py-2 rounded-full mb-4">
            <AlertCircle className="w-5 h-5" />
            <span className="font-semibold text-sm">ATENÇÃO</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold">
            🔥 Por que <span className="text-gradient-gold">outras soluções</span> falham:
          </h2>
        </div>

        {/* Failures List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {failures.map((failure, index) => (
            <div 
              key={index}
              className="bg-card/80 p-6 rounded-xl border border-destructive/30 hover:border-destructive/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-destructive/20 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {failure.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {failure.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
