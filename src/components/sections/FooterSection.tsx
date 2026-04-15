import logoAurora from "@/assets/logo-aurora.png";

export const FooterSection = () => {
  return (
    <footer className="py-10 md:py-12 bg-card border-t border-primary/15">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6 md:mb-8">
          <img
            src={logoAurora}
            alt="Método Nefertiti"
            className="h-10 md:h-12 opacity-70"
            loading="lazy"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 md:mb-8 text-xs md:text-sm">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a>
          <span className="text-border">|</span>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a>
          <span className="text-border">|</span>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Este produto é um material digital informativo. Os resultados podem variar de pessoa para pessoa e dependem do comprometimento individual com o método. Não garantimos resultados específicos. Este site não é afiliado ao Facebook, Instagram ou qualquer outra plataforma de redes sociais. Todo o conteúdo deste site é de nossa total responsabilidade. Produto oferecido pela plataforma digital segura. Pagamento processado com criptografia de dados.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-8">
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <span>💳</span><span>Cartão de Crédito</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <span>📱</span><span>PIX</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <span>🔒</span><span>Compra Segura</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Método Nefertiti. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
