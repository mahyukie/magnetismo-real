import { useEffect, useState } from "react";
import { ShoppingBag, X } from "lucide-react";

interface Purchase {
  name: string;
  city: string;
  time: string;
}

const PURCHASES: Purchase[] = [
  { name: "Mariana S.", city: "São Paulo, SP", time: "há 2 minutos" },
  { name: "Juliana R.", city: "Rio de Janeiro, RJ", time: "há 4 minutos" },
  { name: "Patrícia L.", city: "Belo Horizonte, MG", time: "há 6 minutos" },
  { name: "Camila O.", city: "Curitiba, PR", time: "há 9 minutos" },
  { name: "Fernanda M.", city: "Porto Alegre, RS", time: "há 12 minutos" },
];

export const SocialProofPopup = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    let i = 0;
    const showNext = () => {
      setIndex(i % PURCHASES.length);
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
      i++;
    };
    const initial = setTimeout(showNext, 4000);
    const interval = setInterval(showNext, 12000);
    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed) return null;

  const purchase = PURCHASES[index];

  return (
    <div
      className={`fixed bottom-24 left-4 z-40 max-w-xs transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="bg-card/95 backdrop-blur-md border border-primary/30 shadow-metallic rounded-xl p-3 pr-8 flex items-center gap-3 relative">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-1 right-1 text-muted-foreground hover:text-foreground p-1"
          aria-label="Fechar"
        >
          <X className="w-3.5 h-3.5" />
        </button>
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-metallic flex items-center justify-center shadow-metallic">
          <ShoppingBag className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-foreground text-xs font-semibold leading-tight">
            <span className="text-primary">{purchase.name}</span> acabou de comprar!
          </p>
          <p className="text-muted-foreground text-[10px] leading-tight mt-0.5">
            {purchase.city} • {purchase.time}
          </p>
          <p className="text-[10px] text-primary/80 font-medium mt-0.5">
            👑 +5 mulheres compraram nos últimos minutos
          </p>
        </div>
      </div>
    </div>
  );
};
