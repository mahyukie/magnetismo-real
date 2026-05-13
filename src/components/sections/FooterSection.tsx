import logoNefertiti from "@/assets/logo-nefertiti.png";
import { Lock, ShieldCheck, CreditCard } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-gradient-noir text-white/80 pt-14 md:pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src={logoNefertiti}
            alt="Método Nefertiti"
            className="h-14 md:h-16 opacity-90"
            loading="lazy"
            width={200}
            height={80}
          />
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm text-white/70">
            <ShieldCheck className="w-4 h-4 text-secondary" />
            <span>Garantia de 7 dias</span>
          </div>
          <div className="inline-flex items-center gap-2 text-xs md:text-sm text-white/70">
            <Lock className="w-4 h-4 text-secondary" />
            <span>Compra 100% segura</span>
          </div>
          <div className="inline-flex items-center gap-2 text-xs md:text-sm text-white/70">
            <CreditCard className="w-4 h-4 text-secondary" />
            <span>Cartão · PIX · Boleto</span>
          </div>
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 text-xs md:text-sm">
          <a href="#" className="text-white/60 hover:text-secondary transition-colors">Termos de Uso</a>
          <span className="text-white/20">|</span>
          <a href="#" className="text-white/60 hover:text-secondary transition-colors">Política de Privacidade</a>
          <span className="text-white/20">|</span>
          <a href="mailto:contato@metodonefertiti.com" className="text-white/60 hover:text-secondary transition-colors">Contato</a>
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-[11px] md:text-xs text-white/50 leading-relaxed">
            Este produto é um material digital informativo. Os resultados podem variar de pessoa para pessoa e dependem do comprometimento individual com o método. Não garantimos resultados específicos. Este site não é afiliado ao Facebook, Instagram, Google ou qualquer outra plataforma de redes sociais. Todo o conteúdo deste site é de nossa total responsabilidade. Pagamento processado pela plataforma Kiwify, com criptografia de dados.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/50 font-cta uppercase tracking-wider">
            © {new Date().getFullYear()} Método Nefertiti · Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
