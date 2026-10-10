import type { ReactNode } from 'react';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`container-x ${className}`}>{children}</div>;
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-gold" aria-hidden />
      <span className="label-tech">{children}</span>
    </div>
  );
}

export function SectionTitle({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`heading text-3xl sm:text-4xl lg:text-[2.6rem] ${className}`}>{children}</h2>
  );
}

/** Gold-accented word inside headings. */
export function Gold({ children }: { children: ReactNode }) {
  return <span className="bg-gold-text bg-clip-text text-transparent">{children}</span>;
}

/** Silver gradient heading text. */
export function Silver({ children }: { children: ReactNode }) {
  return <span className="bg-silver-text bg-clip-text text-transparent">{children}</span>;
}
