export type EntryCardProps = {
  /** Organization / institution — the bold primary line. */
  org: string;
  /** Role or degree — the pink accent line under the org. */
  role: string;
  /** Date range, e.g. "Sep 2024 - Present". */
  date: string;
  /** Bulleted highlights (used for education / lists). */
  points?: string[];
  /** A single paragraph of description (used for experience). */
  desc?: string;
  /** Optional icon/logo image; falls back to a soft placeholder square. */
  icon?: string;
};

/**
 * A single education or experience row:
 * a rounded icon, then org + role + date, then bullets or a paragraph.
 */
export default function EntryCard({ org, role, date, points, desc, icon }: EntryCardProps) {
  return (
    <div className="flex flex-row items-start gap-[18px]">
      <img
        src={icon}
        alt=""
        className="size-16 shrink-0 rounded-2xl bg-primary/8 object-cover"
      />

      <div className="flex flex-1 flex-col gap-2.5">
        <div>
          <div className="flex flex-row items-center justify-between gap-4">
            <h3 className="font-sans text-sm font-bold text-primary">{org}</h3>
            <span className="shrink-0 font-sans text-[0.5rem] font-bold text-primary">{date}</span>
          </div>
          <p className="font-sans text-[0.6875rem] text-accent">{role}</p>
        </div>

        {points && (
          <ul className="list-disc pl-[16.5px] font-sans text-[0.6875rem] leading-[1.5] text-primary">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}

        {desc && <p className="font-sans text-[0.6875rem] leading-[1.5] text-primary">{desc}</p>}
      </div>
    </div>
  );
}
