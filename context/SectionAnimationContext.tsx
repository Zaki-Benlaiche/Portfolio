"use client";
import { createContext, useContext, useState } from "react";

type Ctx = {
  clickCount: number;
  triggerAnimation: () => void;
};

const SectionAnimationContext = createContext<Ctx>({
  clickCount: 0,
  triggerAnimation: () => {},
});

export function SectionAnimationProvider({ children }: { children: React.ReactNode }) {
  const [clickCount, setClickCount] = useState(0);
  const triggerAnimation = () => setClickCount((c) => c + 1);

  return (
    <SectionAnimationContext.Provider value={{ clickCount, triggerAnimation }}>
      {children}
    </SectionAnimationContext.Provider>
  );
}

export const useSectionAnimation = () => useContext(SectionAnimationContext);
