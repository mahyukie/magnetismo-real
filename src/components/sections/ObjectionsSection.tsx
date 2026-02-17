import { MessageSquare, CheckCircle } from "lucide-react";

export const ObjectionsSection = () => {
  const objections = [
    {
      question: "\"Isso é muito caro para mim\"",
      answer: "Por apenas R$197 (menos que UMA sessão de terapia), você tem acesso ao sistema completo + bônus exclusivos que valem mais de R$400. É o investimento mais barato que você pode fazer em sua transformação. Lembre-se: o valor original é R$1.997!"
    },
    {
      question: "\"Não tenho tempo para me dedicar totalmente\"",
      answer: "O método foi criado para mulheres ocupadas como você. São apenas 20-30 minutos por dia durante 21 dias. Menos tempo do que você gasta stalkeando redes sociais."
    },
    {
      question: "\"E se não funcionar comigo porque meu caso é diferente?\"",
      answer: "Temos garantia tripla de 7 dias. Se não funcionar, devolvemos 100% do seu dinheiro. Você não tem nada a perder, apenas sua vida amorosa para ganhar."
    },
    {
      question: "\"Isso não é manipulação?\"",
      answer: "Absolutamente não. O método desperta sua autenticidade mais poderosa, não ensina você a fingir ser alguém que não é. É sobre reconectar com sua essência feminina natural."
    }
  ];

  return (
    <section className="py-10 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Principais Objeções</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">
            Talvez Você Esteja Pensando... 🤔
          </h2>
        </div>

        {/* Objections Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {objections.map((objection, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-6 rounded-2xl border border-border/50 hover:border-secondary/30 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <MessageSquare className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
                <p className="font-semibold text-foreground italic">
                  {objection.question}
                </p>
              </div>
              <div className="flex items-start gap-4 pl-10">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  {objection.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
