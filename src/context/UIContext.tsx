
"use client";
import React, { createContext, useContext, useState } from "react";

type UIState = {
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const Ctx = createContext<UIState | null>(null);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <Ctx.Provider value={{ cartOpen, openCart: () => setCartOpen(true), closeCart: () => setCartOpen(false) }}>
      {children}
    </Ctx.Provider>
  );
}

export const useUI = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useUI must be used within <UIProvider>");
  return v;
};
