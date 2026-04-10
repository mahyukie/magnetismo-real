import { MessageSquare, CheckCircle } from "lucide-react";

export const ObjectionsSection = () => {
  const objections = [
    {
      question: "\"E se isso não funcionar comigo porque meu caso é diferente?\"",
      answer: "Querida, TODAS as minhas alunas pensavam que eram \"caso perdido\". A Carolina pensou isso aos 52 anos... e hoje está noiva. O método funciona porque ataca princípios UNIVERSAIS da psicologia masculina."
    },
    {
      question: "\"E se ele realmente não me quer mais?\"",
      answer: "SE ele realmente não te quer, você vai descobrir isso tendo 5 outros homens incríveis interessados em você. Aí você vai agradecer por ele ter saído da sua vida. MAS na maioria dos casos, quando você se transforma, ele volta correndo."
    },
    {
      question: "\"E se eu não conseguir aplicar as técnicas?\"",
      answer: "O método é step-by-step. Cada exercício leva 15-20 minutos. Se você consegue escovar os dentes, consegue aplicar isso. Além disso, você tem suporte total durante o processo."
    },
    {
      question: "\"E se as pessoas acharem que eu estou sendo manipuladora?\"",
      answer: "Querida, MANIPULAÇÃO é fingir ser alguém que você não é. Este método desperta sua AUTENTICIDADE mais poderosa. Você não vai fingir — vai se TORNAR irresistível."
    }
  ];

  return (
    <section className="py-10 md:py-24 bg-gradient-section-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-rose-500/8 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <span className="text-rose-300 font-semibold text-sm uppercase tracking-wider">"Marina, Mas E Se..."</span>
          <h2 className="font-serif text-2xl md:text-5xl font-bold mt-2 text-white">
            Talvez Você Esteja <span className="text-gradient-silver">Pensando...</span> 🤔
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {objections.map((objection, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white/15 hover:border-rose-400/30 transition-all"
            >
              <div className="flex items-start gap-3 md:gap-4 mb-4">
                <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-rose-300/60 flex-shrink-0 mt-1" />
                <p className="font-semibold text-white italic text-sm md:text-base">{objection.question}</p>
              </div>
              <div className="flex items-start gap-3 md:gap-4 pl-8 md:pl-10">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-rose-300 flex-shrink-0 mt-1" />
                <p className="text-rose-100/70 text-xs md:text-sm">{objection.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
