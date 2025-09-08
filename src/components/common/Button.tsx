
"use client";
import React from "react";
export default function Button({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string; }) {
  return (
    <button onClick={onClick} className={className || "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold bg-white text-slate-900 hover:opacity-90"}>
      {children}
    </button>
  );
}
