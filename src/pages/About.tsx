import { Briefcase, GraduationCap, Languages, MapPin } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import TechSection from '../components/TechSection';
import { Container, Gold, SectionLabel, SectionTitle } from '../components/ui';
import { LogoFull } from '../components/Logo';
import { SITE } from '../data/site';
import { usePageMeta } from '../lib/seo';

const PRINCIPLES = [
  {
    title: 'Practical technology',
    text: 'We choose the lightest technology that solves the problem properly — never tech for its own sake.',
  },
  {
    title: 'Clear process',
    text: 'Five honest steps from idea to launch, so you always know what happens next and what it costs.',
  },
  {
    title: 'Client-focused communication',
    text: 'Plain language, reviewable progress and quick replies on WhatsApp or email.',
  },
];

const FOCUS_AREAS = [
  'Frontend Development',
  'Web Development',
  'UI Design',
  'Digital Solutions',
  'AI Tools',
];

export default function About() {
  usePageMeta({
    title: 'About FU DEVELOPERS | Digital Development Agency in Karachi',
    description:
      'Learn about FU DEVELOPERS, a digital development agency creating professional websites, web apps, mobile apps and AI solutions for businesses in Karachi and across Pakistan.',
  });

  return (
    <>
      <PageHero
        label="About"
        title={
          <>
            ABOUT <Gold>FU DEVELOPERS</Gold>
          </>
        }
        text="FU DEVELOPERS is a digital development agency focused on creating modern websites, applications, software and AI-powered solutions."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      {/* Identity + principles */}
      <section className="pb-20 lg:pb-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <figure className="card overflow-hidden p-3">
              <LogoFull className="w-full rounded-xl" />
              <figcaption className="px-2 pb-1 pt-4 text-center font-tech text-[10px] uppercase tracking-[0.28em] text-[#666666]">
                Official FU DEVELOPERS identity — black, gold &amp; silver
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <SectionLabel>How we think</SectionLabel>
            <SectionTitle className="mt-5 text-[#111111]">
              We combine development, design and technology to create digital products that are{' '}
              <Gold>practical, responsive</Gold> and built around the needs of each project.
            </SectionTitle>
            <div className="mt-9 space-y-5">
              {PRINCIPLES.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden />
                  <div>
                    <h3 className="font-display text-base font-bold text-[#111111]">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#666666]">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* The developer behind FU DEVELOPERS */}
      <section className="border-t border-[#E5E5E5] bg-[#F7F7F7] py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionLabel>The developer behind FU DEVELOPERS</SectionLabel>
            <SectionTitle className="mt-5 max-w-2xl text-[#111111]">
              One developer. <Gold>Full ownership</Gold> of your project.
            </SectionTitle>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <div className="card h-full p-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 font-tech text-2xl font-bold text-gold">
                  MU
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-[#111111]">Muhammad Uzair</h3>
                <p className="mt-2 font-tech text-[11px] uppercase tracking-[0.22em] text-gold">
                  Founder &amp; Frontend Web Developer
                </p>
                <p className="mt-4 flex items-center gap-2 text-sm text-[#666666]">
                  <MapPin size={14} className="text-gold" aria-hidden />
                  {SITE.location}
                </p>
                <div className="mt-7 rounded-xl border border-[#E5E5E5] bg-white p-5">
                  <p className="flex items-center gap-2 font-tech text-[10px] uppercase tracking-[0.25em] text-gold">
                    <Briefcase size={13} aria-hidden />
                    Experience
                  </p>
                  <p className="mt-3 font-tech text-sm font-bold text-[#111111]">2025 – Present</p>
                  <p className="mt-1 text-sm text-[#111111]">Frontend Web Developer</p>
                  <p className="mt-0.5 text-sm text-[#666666]">Home-Based</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card h-full p-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="flex items-center gap-2 font-tech text-[10px] uppercase tracking-[0.25em] text-gold">
                      <GraduationCap size={13} aria-hidden />
                      Education
                    </p>
                    <p className="mt-3 text-sm text-[#111111]">Matric Pass</p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 font-tech text-[10px] uppercase tracking-[0.25em] text-gold">
                      <Languages size={13} aria-hidden />
                      Languages
                    </p>
                    <p className="mt-3 text-sm text-[#111111]">Urdu · Simple English</p>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="font-tech text-[10px] uppercase tracking-[0.25em] text-gold">
                    Professional focus
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {FOCUS_AREAS.map((f) => (
                      <span key={f} className="chip">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-8 text-sm leading-relaxed text-[#666666]">
                  FU DEVELOPERS is the professional brand behind Muhammad Uzair&apos;s work — a
                  focused, home-based development practice in Karachi that plans, designs and
                  builds digital products end to end, and communicates with every client directly.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-900 p-9 sm:p-12 lg:p-16">
              <div className="bg-panel pointer-events-none absolute inset-0" aria-hidden />
              <SectionLabel>Our mission</SectionLabel>
              <blockquote className="mt-6 max-w-3xl">
                <p className="heading text-2xl bg-silver-text bg-clip-text text-transparent sm:text-3xl lg:text-4xl">
                  &ldquo;Turn ideas into <Gold>useful, modern and professional</Gold> digital
                  products.&rdquo;
                </p>
              </blockquote>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted">
                Whether someone needs a business website, application, AI solution or custom
                software, FU DEVELOPERS aims to make the development process clear and accessible.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <TechSection />

      <CTASection
        label="Work with us"
        title="LET'S BUILD SOMETHING USEFUL TOGETHER."
        text="Share your idea — even if it's only a few sentences — and get an honest opinion on how it should be built."
      />
    </>
  );
}
