
export const prefilledWA = (text: string, phone?: string) =>
  `https://wa.me/${phone || ""}?text=${encodeURIComponent(text)}`;
