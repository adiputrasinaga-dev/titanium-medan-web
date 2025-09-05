"use client";
import React from "react";
import { track } from "@/lib/analytics";

type TrackedLinkProps = Omit<React.ComponentProps<"a">, "onClick"> & {
  /** Nama event, default: "click_whatsapp" */
  event?: string;
  /** Lokasi klik, mis. "hero", "catalog_card", "product_modal", "cart_drawer" */
  from?: string;
  /** Data tambahan untuk analytics */
  data?: Record<string, any>;
  /** onClick tambahan (opsional) */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function TrackedLink({
  event = "click_whatsapp",
  from,
  data,
  onClick,
  ...aProps
}: TrackedLinkProps) {
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    try { track(event, { from, ...(data || {}) }); } catch {}
    onClick?.(e);
  };
  return <a {...aProps} onClick={handleClick} />;
}
