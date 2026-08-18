import React from 'react';

type SectionProps = {
  title: string;
  /** Optional element rendered on the right of the heading row (e.g. a "view all" link). */
  action?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

/**
 * A page section with a standard heading row.
 * Keeps every section's title styling and spacing consistent.
 */
export default function Section({ title, action, className, children }: SectionProps) {
  return (
    <section className={className}>
      <div className="flex flex-row items-center justify-between">
        <h2>{title}</h2>
        {action}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
