import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Como acesso o material após a compra?",
      answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com seus dados de acesso à área de membros. O acesso é instantâneo!"
    },
    {
      question: "Qual é a garantia oferecida?",
      answer: "Oferecemos uma Tripla Garantia Blindada: 1) Resultados ou dinheiro de volta em 7 dias; 2) Satisfação total — 7 dias para avaliar o conteúdo; 3) Suporte VIP — acesso direto à equipe por 30 dias."
    },
    {
      question: "Este método é para mim?",
      answer: "Se você é uma mulher de 20-65 anos que passou por um término doloroso e quer recuperar seu poder de atração, este método foi feito especificamente para você."
    },
    {
      question: "Que tipo de suporte está incluído?",
      answer: "Suporte VIP direto com Marina e equipe por 30 dias. Suas perguntas serão respondidas em até 24 horas."
    },
    {
      question: "Em quanto tempo vejo os primeiros resultados?",
      answer: "Os primeiros sinais de transformação podem aparecer em 48-72 horas, com resultados completos relatados em 21 dias, aplicando exatamente como ensinado no Método Aurora."
    },
    {
      question: "Como posso pagar?",
      answer: "Aceitamos cartão de crédito com parcelamento ou à vista via PIX. Os detalhes completos estão na página de pagamento."
    }
  ];

  return (
    <section className="py-10 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">COM DÚVIDAS? 🤔AQUI ESTÃO AS PERGUNTAS FREQUENTES</span>
          <h2 className="font-serif text-2xl md:text-5xl font-bold mt-2">
            Tire Suas <span className="text-gradient-silver">Dúvidas</span> ❓
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-card border border-border/50 rounded-xl px-4 md:px-6 data-[state=open]:border-secondary/30"
              >
                <AccordionTrigger className="text-foreground hover:text-secondary font-semibold text-left py-4 md:py-5 text-sm md:text-base">
                  ❓ {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 md:pb-5 text-xs md:text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
