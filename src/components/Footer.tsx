import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Mail, MessageCircle, MapPin } from 'lucide-react';
import { LogoLockup } from './Logo';
import { Container } from './ui';
import Reveal from './Reveal';
import { NAV_LINKS, SITE, waLink } from '../data/site';
import { SERVICES } from '../data/services';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      {/* Footer CTA */}
      <div className="border-b border-white/10">
        <Reveal>
          <Container className="flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center lg:py-16">
            <div>
              <p className="label-tech">Have an idea?</p>
              <h2 className="heading mt-3 text-2xl text-[#111111] sm:text-3xl">
                Let&apos;s build your next digital product.
              </h2>
            </div>
            <Link to="/contact" className="btn-gold shrink-0">
              Start a Project
              <ArrowRight size={15} aria-hidden />
            </Link>
          </Container>
        </Reveal>
      </div>

      <Reveal>
        <Container className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1fr] lg:gap-10">
          <div>
            <LogoLockup height={58} />
            <p className="mt-5 max-w-xs font-tech text-[11px] uppercase tracking-[0.3em] text-[#666666]">
              {SITE.tagline}
            </p>
            <div className="footer-social mt-6 flex items-center gap-3">
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="FU DEVELOPERS on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E5E5] text-[#666666] transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold-bright"
              >
                <Instagram size={16} aria-hidden />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Chat with FU DEVELOPERS on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E5E5] text-[#666666] transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold-bright"
              >
                <MessageCircle size={16} aria-hidden />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email FU DEVELOPERS"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E5E5] text-[#666666] transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold-bright"
              >
                <Mail size={16} aria-hidden />
              </a>
            </div>
          </div>

          <nav aria-label="Footer quick links">
            <h3 className="font-tech text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-[#666666] transition-colors hover:text-gold-bright"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <h3 className="font-tech text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-[#666666] transition-colors hover:text-gold-bright"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-tech text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-[#666666]">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all transition-colors hover:text-gold-bright"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={waLink()} className="transition-colors hover:text-gold-bright">
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-gold-bright"
                >
                  {SITE.instagram}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-gold" aria-hidden />
                {SITE.location}
              </li>
            </ul>
          </div>
        </Container>
      </Reveal>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-[#666666]">© 2026 FU DEVELOPERS. All rights reserved.</p>
          <p className="font-tech text-[10px] uppercase tracking-[0.3em] text-[#666666]/70">
            {SITE.logoTagline}
          </p>
        </Container>
      </div>
    </footer>
  );
}
