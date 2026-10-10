import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Service } from '../data/services';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="card group flex h-full flex-col gap-5 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-gold"
    >
      <div className="flex items-start justify-between">
        <span className="font-tech text-xs font-bold tracking-[0.25em] text-gold/70 transition-colors group-hover:text-gold-bright">
          {service.number}
        </span>
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold transition-all duration-300 group-hover:border-gold/50 group-hover:text-gold-bright">
          <service.icon size={20} strokeWidth={1.6} aria-hidden />
        </span>
      </div>
      <h3 className="font-display text-lg font-bold text-[#111111]">{service.title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-[#666666]">{service.cardText}</p>
      <span className="inline-flex items-center gap-1.5 font-tech text-[10px] font-semibold uppercase tracking-[0.25em] text-gold transition-colors group-hover:text-gold-bright">
        Learn More
        <ArrowUpRight
          size={13}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      </span>
    </Link>
  );
}
