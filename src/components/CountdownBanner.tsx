import { useState, useEffect } from "react";
import { Clock, AlertTriangle } from "lucide-react";

export const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const COUNTDOWN_KEY = 'countdown_start_time';
    const COUNTDOWN_DURATION = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

    const getStartTime = () => {
      const stored = localStorage.getItem(COUNTDOWN_KEY);
      if (stored) {
        return parseInt(stored, 10);
      }
      const now = Date.now();
      localStorage.setItem(COUNTDOWN_KEY, now.toString());
      return now;
    };

    const startTime = getStartTime();

    const calculateTimeLeft = () => {
      const now = Date.now();
      const endTime = startTime + COUNTDOWN_DURATION;
      const difference = endTime - now;
      
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
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
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-destructive via-destructive/90 to-destructive py-3 px-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <div className="flex items-center gap-2 text-destructive-foreground">
          <AlertTriangle className="w-5 h-5 animate-pulse" />
          <span className="font-bold text-sm md:text-base">⚠️ OFERTA EXPIRA HOJE!</span>
        </div>
        
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-secondary" />
          <div className="flex items-center gap-1">
            <div className="bg-background/20 backdrop-blur-sm rounded px-2 py-1 min-w-[40px] text-center">
              <span className="font-mono font-bold text-lg text-secondary">{formatNumber(timeLeft.hours)}</span>
            </div>
            <span className="text-secondary font-bold text-xl">:</span>
            <div className="bg-background/20 backdrop-blur-sm rounded px-2 py-1 min-w-[40px] text-center">
              <span className="font-mono font-bold text-lg text-secondary">{formatNumber(timeLeft.minutes)}</span>
            </div>
            <span className="text-secondary font-bold text-xl">:</span>
            <div className="bg-background/20 backdrop-blur-sm rounded px-2 py-1 min-w-[40px] text-center">
              <span className="font-mono font-bold text-lg text-secondary">{formatNumber(timeLeft.seconds)}</span>
            </div>
          </div>
        </div>
        
        <span className="text-destructive-foreground/90 text-xs md:text-sm font-medium hidden md:block">
          Restam apenas algumas vagas!
        </span>
      </div>
    </div>
  );
};
