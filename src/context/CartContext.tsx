"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
type CartItem = { id: string; title: string; variant?: string; qty: number; price?: number };
type CartCtx = {
  items: CartItem[]; add: (i: CartItem) => void; remove: (id: string, v?: string) => void; clear: () => void; total: number;
};
const CART_KEY = "tm_cart_v1";
const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => { try { const raw = localStorage.getItem(CART_KEY); if (raw) setItems(JSON.parse(raw)); } catch {} }, []);
  useEffect(() => { try { localStorage.setItem(CART_KEY, JSON.stringify(items)); } catch {} }, [items]);

  const add = (it: CartItem) => setItems(prev => {
    const i = prev.findIndex(p => p.id === it.id && p.variant === it.variant);
    if (i >= 0) { const c = [...prev]; c[i] = { ...c[i], qty: c[i].qty + it.qty }; return c; }
    return [...prev, it];
  });
  const remove = (id: string, v?: string) => setItems(prev => prev.filter(p => !(p.id === id && p.variant === v)));
  const clear = () => setItems([]);
  const total = useMemo(() => items.reduce((s, it) => s + (it.price ?? 0) * it.qty, 0), [items]);
  const value = useMemo(() => ({ items, add, remove, clear, total }), [items, total]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export const useCart = () => {
  const c = useContext(Ctx); if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
};
