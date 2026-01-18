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
      answer: "Oferecemos uma Garantia Tripla de Satisfação: 1) Garantia de Resultados: Se em 7 dias você não sentir uma transformação significativa, devolvemos 100% do seu investimento; 2) Garantia de Satisfação: 7 dias para avaliar o conteúdo; 3) Garantia de Suporte: Acesso direto à nossa equipe por 30 dias."
    },
    {
      question: "Este método é para mim?",
      answer: "✅ Se você é uma mulher de 25-65 anos que passou por um término doloroso e quer recuperar seu poder de atração, este método foi feito especificamente para você."
    },
    {
      question: "Que tipo de suporte está incluído?",
      answer: "✅ Suporte direto com nossa equipe de especialistas por 30 dias para tirar todas suas dúvidas sobre a implementação."
    },
    {
      question: "Em quanto tempo vejo os primeiros resultados?",
      answer: "✅ Baseado no Método Cleópatra, os primeiros sinais de transformação podem aparecer em 48-72 horas, com muitas mulheres relatando resultados completos em 21 dias, aplicando exatamente como ensinado no método."
    },
    {
      question: "Como posso pagar?",
      answer: "✅ Aceitamos cartão de crédito com parcelamento em até 10x de R$19,70 ou à vista por R$147 via PIX (com desconto especial)."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Perguntas Frequentes</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">
            Tire Suas <span className="text-gradient-gold">Dúvidas</span> ❓
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-border/50 rounded-xl px-6 data-[state=open]:border-secondary/30"
              >
                <AccordionTrigger className="text-foreground hover:text-secondary font-semibold text-left py-5">
                  ❓ {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
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
