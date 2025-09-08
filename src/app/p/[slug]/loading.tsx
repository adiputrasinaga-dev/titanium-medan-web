
export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="animate-pulse grid gap-8 md:grid-cols-2">
        <div className="h-96 rounded-3xl bg-white/5" />
        <div className="space-y-3">
          <div className="h-8 w-2/3 rounded bg-white/5" />
          <div className="h-4 w-1/2 rounded bg-white/5" />
          <div className="h-32 rounded bg-white/5" />
        </div>
      </div>
    </div>
  );
}
