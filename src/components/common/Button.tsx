import { cn } from "@/lib/cn";
export default function Button({ variant="primary", className, ...rest }: any) {
  const base = "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition-transform active:scale-[.98]";
  const styles = { primary: "text-slate-900 bg-white hover:brightness-95 shadow-lg", ghost: "text-white/80 hover:text-white border border-white/10" } as const;
  return <button className={cn(base, styles[variant as keyof typeof styles], className)} {...rest} />;
}
