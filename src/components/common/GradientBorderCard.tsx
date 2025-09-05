export default function GradientBorderCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-[1px] rounded-3xl" style={{backgroundImage:"linear-gradient(90deg,#3A7BD5,#7A50C8,#C6A66A)"}}>
      <div className="rounded-[calc(1.5rem-1px)] bg-white/5 backdrop-blur-md border border-white/10">{children}</div>
    </div>
  );
}
export const Pill = ({ children }: { children: React.ReactNode }) =>
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">{children}</span>;
