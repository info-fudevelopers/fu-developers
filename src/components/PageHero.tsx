import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Container, SectionLabel } from './ui';
import Reveal from './Reveal';

export type Crumb = { label: string; to?: string };

export default function PageHero({
  label,
  title,
  text,
  crumbs,
  children,
  visual,
}: {
  label: string;
  title: ReactNode;
  text?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
  visual?: ReactNode;
}) {
  return (
    <section className="page-hero relative overflow-hidden border-b border-[#E5E5E5] pb-14 pt-32 lg:pb-20 lg:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-black/[0.035] blur-[130px]"
        aria-hidden
      />
      {visual}
      <Container className="relative">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2">
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-2">
                {i > 0 && <ChevronRight size={12} className="text-gold/60" aria-hidden />}
                {c.to ? (
                  <Link
                    to={c.to}
                    className="font-tech text-[10px] uppercase tracking-[0.22em] text-[#666666] transition-colors hover:text-gold-bright"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-tech text-[10px] uppercase tracking-[0.22em] text-gold">
                    {c.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}
        <Reveal className="relative z-10">
          <SectionLabel>{label}</SectionLabel>
          <h1 className="heading mt-5 max-w-4xl text-4xl text-[#111111] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {text && <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#666666] sm:text-lg">{text}</p>}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
