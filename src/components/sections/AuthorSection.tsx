import marinaImage from "@/assets/marina-author.jpg";
import logoCleopatra from "@/assets/logo-cleopatra.jpeg";

export const AuthorSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <img 
            src={logoCleopatra} 
            alt="Método Cleópatra" 
            className="h-16 mx-auto mb-6"
          />
          <h2 className="font-serif text-3xl md:text-5xl font-bold">
            Conheça a <span className="text-gradient-gold">Criadora</span>
          </h2>
        </div>

        {/* Author Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card p-8 md:p-12 rounded-3xl border border-border/50 shadow-card">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Author Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-secondary/40 shadow-gold">
                    <img 
                      src={marinaImage} 
                      alt="Marina - Criadora do Método Cleópatra" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary px-4 py-2 rounded-full shadow-gold">
                    <p className="text-secondary-foreground font-semibold text-sm whitespace-nowrap">
                      Marina • Facilitadora
                    </p>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <p className="text-muted-foreground leading-relaxed">
                  Sou <strong className="text-foreground">Marina</strong>, facilitadora e criadora do <span className="text-secondary">Método Cleópatra</span> e sei exatamente o que você está sentindo. Pois já passei pelo mesmo que você.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Quando meu ex rompeu comigo, entrei em colapso. Eu era a namorada perfeita. Cuidava dele, cozinhava, fazia tudo o que eu podia para vê-lo feliz e completo, e mesmo assim, ele terminou tudo, assim do nada. Meu mundo ruiu, meu chão desabou.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Fui viajar para me encontrar, até que conheci <strong className="text-foreground">Dra. Sophia Miendez</strong>, que me ensinou o que chamo hoje de Método Cleópatra. Aos primeiros 7 dias, notei como minha capacidade em atrair olhares masculinos, havia voltado novamente.
                </p>

                <div className="p-4 bg-secondary/10 border border-secondary/30 rounded-xl mt-6">
                  <p className="text-foreground font-medium italic">
                    "Minha missão: provar que você pode ser uma mulher, forte, autoconfiante, com uma energia magnética fora da curva, para atrair Homens que te valorizem de verdade."
                  </p>
                </div>

                <p className="text-xl text-secondary font-semibold mt-4">
                  💫 Se eu consegui, você também consegue! ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
