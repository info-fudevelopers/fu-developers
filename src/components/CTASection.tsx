import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Container, SectionLabel } from './ui';
import Reveal from './Reveal';
import { waLink } from '../data/site';

export default function CTASection({
  label = 'Ready when you are',
  title,
  text,
}: {
  label?: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-gold/25 bg-ink-900 p-9 sm:p-12 lg:p-16">
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden />
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-[100px]"
              aria-hidden
            />
            <div className="relative max-w-2xl">
              <SectionLabel>{label}</SectionLabel>
              <h2 className="heading mt-5 text-3xl bg-silver-text bg-clip-text text-transparent sm:text-4xl">
                {title}
              </h2>
              {text && <p className="mt-5 text-base leading-relaxed text-muted">{text}</p>}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="btn-gold">
                  Start a Project
                  <ArrowRight size={15} aria-hidden />
                </Link>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-ghost !border-silver/25 !text-silver"
                >
                  <MessageCircle size={15} aria-hidden />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
