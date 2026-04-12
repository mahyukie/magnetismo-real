import { Button } from "@/components/ui/button";

export const StorySection = () => {
  return (
    <section className="py-10 md:py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-serif text-2xl md:text-4xl font-bold leading-tight">
            Vamos as Apresentações...<br />
            Meu Nome é Marina e Eu Era Você <span className="text-gradient-silver">Há + 18 Meses Atrás...</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-5 md:space-y-6 text-sm md:text-lg leading-relaxed text-rose-400">
          <p className="text-muted-foreground">
            Em outubro de 2022, eu estava exatamente onde você está agora. Deitada no chão do banheiro, às 3h da manhã, chorando compulsivamente porque tinha visto uma foto dele com outra mulher no Instagram.
          </p>

          <p className="text-muted-foreground">
            6 anos de relacionamento. <strong className="text-foreground">JOGADOS FORA</strong>, do nada. Eu que sempre fui a namorada perfeita. Cuidava dele, cozinhava, estava sempre disponível, para o que ele precisasse... fazia tudo para vê-lo feliz... <strong className="text-foreground">E mesmo assim, ele me trocou.</strong>
          </p>

          <div className="p-5 bg-card border border-border/50 rounded-xl my-6">
            <p className="text-foreground font-medium text-sm md:text-base">
              Pelos próximos 6 meses, me transformei numa sombra de quem eu costumava ser:
            </p>
            <ul className="mt-3 space-y-2 text-muted-foreground text-sm md:text-base">
              <li>• Perdi 8kg (não de forma saudável)😪</li>
              <li>• Evitava sair de casa para não ver outros casais na rua😪</li>
              <li>• Me sentia <strong className="text-foreground">INVISÍVEL</strong> para qualquer homem interessante, pois não sentia vontade mais de me arrumar😪</li>
              <li>• Chegava a ter ataques de pânico quando via que ele havia visualizado meu status, pois achava que ele fosse vir falar comigo, com alguma esperança de reatarmos...😪</li>
            </ul>
          </div>

          <p className="text-muted-foreground">
            Sofri TANTO, que vcs não tem idéia... Peraí, vocês tem idéia SIM, porque estão passando ou já passaram pelo mesmo término doloroso de relacionamento.💔
            Mas então algo aconteceu que mudou tudo... <strong className="text-foreground">Durante uma viagem pela primeira vez SOZINHA, para me "encontrar"</strong> (clichê, eu sei), conheci <strong className="text-secondary">Dra. Sophia Miendez</strong> — uma psicóloga comportamental especializada em dinâmicas de atração que havia estudado por mais de 25 anos os padrões de comportamento e técnicas de atração das mulheres mais magneticamente irresistíveis da história. Cleópatra, a Rainha do Egito Antigo, por exemplo.
          </p>

          <div className="p-6 bg-gradient-card border-2 border-secondary/30 rounded-2xl shadow-silver my-8">
            <p className="text-foreground font-medium text-center text-base md:text-lg italic">
              "Marina, você realmente acredita que Cleópatra chorava no banheiro quando Marco Antônio a rejeitou?"
            </p>
            <p className="text-secondary font-semibold text-center mt-3 text-sm md:text-base">
              Claro que não. Ela fazia o OPOSTO disso. E MUITO provavelmente, tenha feito ELE chorar... kkk
            </p>
          </div>

          <h3 className="font-serif text-xl md:text-2xl font-bold text-center text-foreground pt-4 bg-rose-200">
            A GRANDE Descoberta: O <span className="text-gradient-silver">"Efeito Inversão Psicológica"</span>
          </h3>

          <p className="text-muted-foreground">
            Dra. Sophia me mostrou estudos da Universidade de Harvard que provavam: <strong className="text-foreground">homens relatam 347% mais atração por mulheres que demonstram "disponibilidade seletiva"</strong> — estar presente, mas não necessitada.
          </p>

          <div className="space-y-4 my-8">
            <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-xl">
              <p className="font-semibold text-foreground text-sm md:text-base">📍 Em apenas 7 dias...</p>
              <p className="text-muted-foreground text-sm md:text-base mt-1">
                Um homem na academia do meu prédio me parou e disse: "UAU! Preciso saber qual é o seu segredo, pois não paro mais de olhar pra você...estou hipnotizado!" E pediu meu WhatsApp.
              </p>
            </div>
            <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-xl">
              <p className="font-semibold text-foreground text-sm md:text-base">📍 Aos 14 dias...</p>
              <p className="text-muted-foreground text-sm md:text-base mt-1">
                Recebi 3 convites para jantar. Meu ex mandou mensagem perguntando "como eu estava". Amigas começaram a perguntar que BRUXARIA eu estava fazendo e qual era meu "segredo".🤣
              </p>
            </div>
            <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-xl">
              <p className="font-semibold text-foreground text-sm md:text-base">📍 Aos 21 dias...</p>
              <p className="text-muted-foreground text-sm md:text-base mt-1">
                Tinha 5 homens me cortejando simultaneamente. Me sentia <strong className="text-foreground">PODEROSA</strong> pela primeira vez em anos.Não se trata de números, pois aqui estava realmente os conhecendo, e descobrindo qual de fato teria mais compatibilidade comigo. Finalmente entendi e senti o oposto de migalhas emocionais, recebendo o mais genuíno interesse em me decifrar, em quererem ficar mais e mais comigo.
              </p>
            </div>
          </div>

          <p className="text-center text-foreground font-semibold text-base md:text-lg">
            Hoje, 18 meses depois, já ajudei <span className="text-secondary">3.847 mulheres</span> a fazerem a mesma transformação.
          </p>
          <p className="text-xl text-center font-bold text-secondary mt-2">
            E agora é SUA vez. ✨
          </p>
        </div>

        <div className="text-center mt-10 px-2">
          <Button variant="cta" size="xxl" className="w-full max-w-xl text-xs md:text-base leading-tight text-center whitespace-normal h-auto py-4" asChild>
            <a href="https://pay.kiwify.com.br/NRl6nzM" target="_blank" rel="noopener noreferrer">
              🔥 QUERO MINHA TRANSFORMAÇÃO AGORA
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
