export const cn = (...a: (string | undefined | false)[]) => a.filter(Boolean).join(" ");
