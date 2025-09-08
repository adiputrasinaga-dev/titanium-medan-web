
"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
  id: string;
  title: string;
  variant: string | null;
  qty: number;
  price: number | null;
};

type CartState = {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (id: string, variant?: string | null) => void;
  increment: (id: string, variant?: string | null) => void;
  decrement: (id: string, variant?: string | null) => void;
  clear: () => void;
  totalItems: number;
  totalPrice: number;
};

const Ctx = createContext<CartState | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try { const raw = localStorage.getItem("tm_cart"); if (raw) setItems(JSON.parse(raw)); } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem("tm_cart", JSON.stringify(items)); } catch {}
  }, [items]);

  const add: CartState["add"] = (item) => {
    setItems(prev => {
      const idx = prev.findIndex(i => i.id === item.id && i.variant === item.variant);
      if (idx >= 0) {
        const copy = prev.slice(); copy[idx] = { ...copy[idx], qty: copy[idx].qty + (item.qty || 1) }; return copy;
      }
      return [...prev, { ...item, qty: Math.max(1, item.qty || 1), price: item.price ?? 0 }];
    });
  };

  const remove = (id: string, variant?: string | null) => setItems(prev => prev.filter(i => !(i.id === id && i.variant === (variant ?? null))));
  const increment = (id: string, variant?: string | null) => setItems(prev => prev.map(i => (i.id === id && i.variant === (variant ?? null)) ? { ...i, qty: i.qty + 1 } : i));
  const decrement = (id: string, variant?: string | null) => setItems(prev => prev.map(i => (i.id === id && i.variant === (variant ?? null)) ? { ...i, qty: Math.max(1, i.qty - 1) } : i));
  const clear = () => setItems([]);

  const totalItems = useMemo(() => items.reduce((s, it) => s + (it.qty || 0), 0), [items]);
  const totalPrice = useMemo(() => items.reduce((s, it) => s + (it.qty || 0) * (it.price || 0), 0), [items]);

  const value: CartState = { items, add, remove, increment, decrement, clear, totalItems, totalPrice };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useCart = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCart must be used within <CartProvider>");
  return v;
};
