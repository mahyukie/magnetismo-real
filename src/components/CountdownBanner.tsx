import { useState, useEffect } from "react";
import { Clock, AlertTriangle } from "lucide-react";

export const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const COUNTDOWN_KEY = 'countdown_start_time';
    const COUNTDOWN_DURATION = 12 * 60 * 60 * 1000;

    const getStartTime = () => {
      const stored = localStorage.getItem(COUNTDOWN_KEY);
      if (stored) return parseInt(stored, 10);
      const now = Date.now();
      localStorage.setItem(COUNTDOWN_KEY, now.toString());
      return now;
    };

    const startTime = getStartTime();

    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = startTime + COUNTDOWN_DURATION - now;
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor(difference / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        localStorage.removeItem(COUNTDOWN_KEY);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-secondary py-2 md:py-3 px-3 md:px-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <div className="flex items-center gap-2 text-secondary-foreground">
          <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
          <span className="font-cta font-bold text-xs md:text-base">⚠️ ÚLTIMAS 47 VAGAS DISPONÍVEIS!</span>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary-foreground/80" />
          <div className="flex items-center gap-1">
            <div className="bg-secondary-foreground/20 backdrop-blur-sm rounded px-1.5 md:px-2 py-1 min-w-[36px] md:min-w-[40px] text-center">
              <span className="font-cta font-bold text-base md:text-lg text-secondary-foreground">{formatNumber(timeLeft.hours)}</span>
            </div>
            <span className="text-secondary-foreground font-bold text-lg md:text-xl">:</span>
            <div className="bg-secondary-foreground/20 backdrop-blur-sm rounded px-1.5 md:px-2 py-1 min-w-[36px] md:min-w-[40px] text-center">
              <span className="font-cta font-bold text-base md:text-lg text-secondary-foreground">{formatNumber(timeLeft.minutes)}</span>
            </div>
            <span className="text-secondary-foreground font-bold text-lg md:text-xl">:</span>
            <div className="bg-secondary-foreground/20 backdrop-blur-sm rounded px-1.5 md:px-2 py-1 min-w-[36px] md:min-w-[40px] text-center">
              <span className="font-cta font-bold text-base md:text-lg text-secondary-foreground">{formatNumber(timeLeft.seconds)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
