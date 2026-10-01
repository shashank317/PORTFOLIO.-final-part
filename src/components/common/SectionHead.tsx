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
          className="flex flex-1 items-center gap-4 border-t border-hairline/40 py-5 md:flex-col md:items-start md:gap-6 md:border-t-0 md:border-l md:px-5 md:first:border-l-0 md:first:pl-0"
          style={{ ["--d" as string]: `${i * 110}ms` }}
        >
          <span className="font-label text-[0.75rem] text-accent">{`0${i + 1}`}</span>
          <span className="font-sans text-[0.72rem] font-medium tracking-[0.04em] uppercase text-foreground">{s}</span>
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
