import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, lead, children }: { eyebrow?: string; title: string; lead?: string; children?: ReactNode }) {
  return (
    <header className="page-header container">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {lead && <p className="page-lead">{lead}</p>}
      {children}
    </header>
  );
}
