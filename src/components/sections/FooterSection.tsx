import logoCleopatra from "@/assets/logo-cleopatra.jpeg";

export const FooterSection = () => {
  return (
    <footer className="py-12 bg-card border-t border-border/30">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={logoCleopatra} 
            alt="Método Cleópatra" 
            className="h-12 opacity-70"
          />
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
            Termos de Uso
          </a>
          <span className="text-border">|</span>
          <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
            Política de Privacidade
          </a>
          <span className="text-border">|</span>
          <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
            Contato
          </a>
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Este produto é um material digital informativo. Os resultados podem variar de pessoa para pessoa e dependem do comprometimento individual com o método. Não garantimos resultados específicos. Este site não é afiliado ao Facebook, Instagram ou qualquer outra plataforma de redes sociais. Todo o conteúdo deste site é de nossa total responsabilidade. Produto oferecido pela plataforma digital segura. Pagamento processado com criptografia de dados.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <span>💳</span>
            <span>Cartão de Crédito</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <span>📱</span>
            <span>PIX</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <span>🔒</span>
            <span>Compra Segura</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Método Cleópatra. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
