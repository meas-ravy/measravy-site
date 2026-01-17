const BADGE_STYLES: Record<string, string> = {
  TypeScript: "bg-[#3178c6] text-white",
  React: "bg-cyan-500 text-white",
  PostgreSQL: "bg-emerald-500 text-white",
  "Next.js": "bg-gray-500 text-white",
  "Node.js": "bg-green-500 text-white",
  Flutter: "bg-sky-500 text-white",
  "Windows Server": "bg-blue-600 text-white",
  Linux: "bg-slate-600 text-white",
  "AWS Cloud": "bg-orange-500 text-white",
  Docker: "bg-sky-500 text-white",
  Python: "bg-indigo-600 text-white",
  "NLP datasets": "bg-violet-600 text-white",
  PyTorch: "bg-orange-600 text-white",
  "Gemini APIs": "bg-fuchsia-600 text-white",
};

export function Badge({ label }: { label: string }) {
  return (
    <span
      className={[
        "inline-flex items-center whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold shadow-sm",
        BADGE_STYLES[label] ?? "bg-zinc-700 text-white",
      ].join(" ")}
    >
      {label}
    </span>
  );
}
