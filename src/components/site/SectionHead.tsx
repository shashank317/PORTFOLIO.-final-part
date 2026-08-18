export function SectionHead({
  number,
  label,
  className = "",
}: {
  number: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex items-baseline gap-6 ${className}`}>
      <span className="label text-foreground">
        {number} / {label}
      </span>
      <span className="draw rule flex-1" />
    </div>
  );
}

export function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-col gap-0 md:flex-row md:items-stretch">
      {steps.map((s, i) => (
        <li
          key={s}
          className="reveal flex flex-1 items-center gap-4 border-t py-5 md:flex-col md:items-start md:gap-6 md:border-t md:border-l md:px-5 md:first:border-l-0 md:first:pl-0"
          style={{ ["--d" as string]: `${i * 110}ms` }}
        >
          <span className="font-mono text-[0.6rem] text-accent">{`0${i + 1}`}</span>
          <span className="font-mono text-[0.68rem] tracking-[0.16em] uppercase">{s}</span>
          <span className="ml-auto text-muted-foreground md:mt-auto md:ml-0">
            {i < steps.length - 1 ? "→" : "■"}
          </span>
        </li>
      ))}
    </ol>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2">
      {items.map((t) => (
        <li key={t} className="label">
          {t}
        </li>
      ))}
    </ul>
  );
}
