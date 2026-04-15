import marinaImage from "@/assets/marina-author.jpg";
import logoAurora from "@/assets/logo-aurora.png";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

export const AuthorSection = () => {
  return (
    <section className="py-10 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-12">
            <img
              src={logoAurora}
              alt="Método Nefertiti"
              className="h-14 md:h-16 mx-auto mb-6"
              loading="lazy"
            />
            <h2 className="font-heading text-2xl md:text-5xl font-bold text-foreground">
              Conheça um pouquinho a <span className="text-gradient-gold">Criadora</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-card p-6 md:p-12 rounded-3xl border border-primary/20 shadow-card">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/40 shadow-gold">
                      <img
                        src={marinaImage}
                        alt="Marina - Criadora do Método Nefertiti"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary px-4 py-2 rounded-full shadow-bronze">
                      <p className="text-secondary-foreground font-semibold text-xs md:text-sm whitespace-nowrap">
                        Marina • Facilitadora
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-4 text-center md:text-left">
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    Olá, minhas queridas! Aqui é a <strong className="text-foreground">Marina</strong>, facilitadora e criadora do antigo Método Cleópatra, refinado <span className="text-primary">Método Nefertiti</span>. Dois conteúdos que ajudaram e continuam ajudando TANTAS mulheres, que ouso dizer, que são meus dois bebês, pois tenho tamanho carinho pelo propósito que está envolvido.
                    Sei MUITO BEM, sei exatamente o que você está sentindo, pois já passei pelo mesmo.💔
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    Quando meu ex rompeu comigo, do nada e me trocou após 6 anos de relacionamento, entrei em colapso, meu chão ruiu diante dos meus pés. Pois tinha MUITOS planos para NÓS.
                     Fui viajar sozinha para me encontrar e conheci <strong className="text-foreground">Dra. Sophia Miendez</strong>, que me ensinou TODOS os princípios que ela estudou por mais de 20 anos, que hoje formam o Método Nefertiti.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    Hoje, + de 18 meses depois, já ajudei <strong className="text-primary">3.847 mulheres</strong> a fazerem a mesma transformação e ressignificação em suas vidas. Promovendo cura e renovação interior, ativação do Poder Feminino(recuperação da auto estima), e estratégias de Atração Natural.
                  </p>

                  <div className="p-4 bg-primary/10 border border-primary/30 rounded-xl mt-6">
                    <p className="text-foreground font-medium italic text-sm md:text-base font-subheading">
                      "Meu verdadeiro Propósito: provar que você pode ser uma mulher forte, autoconfiante, com energia magnética fora da curva, para atrair homens de alto valor que te valorizem de verdade." E não qualquer mequetrefe que pode ferir seu coração novamente.
                    </p>
                  </div>

                  <p className="text-lg md:text-xl text-primary font-semibold mt-4">
                    💫 Se eu consegui, você também consegue! ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-3xl mx-auto mt-10 space-y-4">
            <div className="p-4 md:p-5 bg-card/60 border border-primary/15 rounded-xl">
              <p className="text-muted-foreground text-xs md:text-sm">
                <strong className="text-foreground">P.S.:</strong> Enquanto você estava lendo esta página, <strong className="text-primary">3 mulheres</strong> já garantiram sua vaga. Não deixe para "pensar depois" DECIDIR DEPOIS — depois pode acabar as vagas e ficar mais caro, podendo ser tarde demais.
              </p>
            </div>
            <div className="p-4 md:p-5 bg-card/60 border border-primary/15 rounded-xl">
              <p className="text-muted-foreground text-xs md:text-sm">
                <strong className="text-foreground">P.P.S.:</strong> Lembra da pergunta que Dra. Sophia me fez? "Você acha que Cleópatra chorava no banheiro?" <strong className="text-primary">NÃO.</strong> E nem você vai precisar chorar mais. Sua transformação começa AGORA. E SÓ DEPENDE DE UM CLIQUE.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="text-center mt-10 px-2">
          <Button variant="cta" size="xxl" className="w-full max-w-xl text-xs md:text-base leading-tight text-center whitespace-normal h-auto py-4 font-cta" asChild>
            <a href="https://pay.kiwify.com.br/NRl6nzM" target="_blank" rel="noopener noreferrer">
              🔥 GARANTIR MINHA VAGA AGORA — R$ 197
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
