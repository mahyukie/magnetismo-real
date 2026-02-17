import { useState } from "react";

const REVEAL_DELAY_SECONDS = 10;
const STORAGE_KEY = "video_reveal_unlocked";

export function useVideoReveal() {
  const [isRevealed, setIsRevealed] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) === "true";
  });

  const startRevealTimer = (): (() => void) | void => {
    if (isRevealed) return;
    const timer = setTimeout(() => {
      setIsRevealed(true);
      localStorage.setItem(STORAGE_KEY, "true");
    }, REVEAL_DELAY_SECONDS * 1000);
    return () => clearTimeout(timer);
  };

  return { isRevealed, startRevealTimer };
}
