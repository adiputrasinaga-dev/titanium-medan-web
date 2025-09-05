/**
 * track() mendukung GA4 (gtag) dan Plausible (fallback).
 * Panggil: track("click_whatsapp", { from: "hero" | "catalog_card" | "product_modal" | "cart_drawer" })
 */
export function track(name: string, props?: Record<string, any>) {
  try {
    (window as any).gtag?.("event", name, props || {});
  } catch {}
  try {
    (window as any).plausible?.(name, { props });
  } catch {}
}
