import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Check, Clock, MessageCircle } from 'lucide-react';
import { Container, Gold, SectionLabel, SectionTitle } from '../components/ui';
import Reveal from '../components/Reveal';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import CodeEditorBackground from '../components/CodeEditorBackground';
import { SERVICES } from '../data/services';
import { PROJECTS } from '../data/projects';
import { TECHNOLOGIES } from '../data/process';
import { SITE, waLink } from '../data/site';
import { PROCESS_STEPS } from '../data/process';
import { usePageMeta } from '../lib/seo';

const HERO_SERVICES = [
  'WEBSITES',
  'WEB APPS',
  'MOBILE APPS',
  'GAMES',
  'DESKTOP SOFTWARE',
  'AI SOLUTIONS',
];

const INTRO_POINTS = [
  'Clean, modern and practical technology',
  'Responsive builds tested on real devices',
  'Clear communication from idea to launch',
  'One team across web, mobile, games and AI',
];

export default function Home() {
  usePageMeta({
    title: 'FU DEVELOPERS | Web Development & AI Solutions in Karachi',
    description:
      'FU DEVELOPERS builds professional websites, web apps, mobile apps and AI solutions for businesses in Karachi and across Pakistan. Get your digital solution today.',
  });

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero-shell relative isolate flex min-h-[min(900px,100svh)] items-center overflow-hidden py-28 sm:py-32 lg:py-36">
        <CodeEditorBackground />
        <div className="hero-orbit" aria-hidden="true">
          <span className="hero-orbit__ring hero-orbit__ring--outer" />
          <span className="hero-orbit__ring hero-orbit__ring--inner" />
          <span className="hero-orbit__core" />
        </div>
        <Container className="relative z-10 w-full">
          <Reveal className="hero-copy max-w-4xl">
            <SectionLabel>Digital Development Agency</SectionLabel>
            <h1 className="heading mt-7 max-w-4xl text-4xl text-white sm:text-6xl lg:text-7xl">
              We Build Digital Experiences That Move Business Forward.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Websites, web applications, mobile apps, games, desktop software and AI solutions —
              thoughtfully designed and built around your business.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn-hero">
                Start Your Project
                <ArrowRight size={15} aria-hidden />
              </Link>
              <Link to="/projects" className="btn-hero-secondary">
                Explore Our Work
              </Link>
            </div>
            <p className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/20 pt-5 font-tech text-[10px] font-semibold tracking-[0.2em] text-white/60 sm:gap-x-4">
              {HERO_SERVICES.map((s, i) => (
                <span key={s} className="flex items-center gap-3">
                  {i > 0 && <span className="h-1 w-1 rotate-45 bg-white/50" aria-hidden />}
                  {s}
                </span>
              ))}
            </p>
          </Reveal>
        </Container>
        <a className="scroll-cue" href="#studio-intro" aria-label="Scroll to learn about FU DEVELOPERS">
          <span>Scroll to explore</span>
          <ArrowDown size={15} aria-hidden />
        </a>
      </section>

      <section className="border-t border-line bg-ink-900 py-16 lg:py-20">
        <Container>
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>How we work</SectionLabel>
              <SectionTitle className="mt-5 text-white">
                A CLEAR PATH FROM <Gold>IDEA TO LAUNCH.</Gold>
              </SectionTitle>
            </div>
            <Link
              to="/process"
              className="inline-flex items-center gap-2 font-tech text-[11px] font-semibold uppercase tracking-[0.25em] text-gold transition-colors hover:text-gold-bright"
            >
              Explore our process
              <ArrowRight size={14} aria-hidden />
            </Link>
          </Reveal>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, index) => (
              <Reveal key={step.step} delay={index * 70}>
                <li className="h-full rounded-xl border border-line bg-ink-950/70 p-5">
                  <span className="font-tech text-xs font-semibold tracking-[0.2em] text-gold">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* ============ TECH MARQUEE ============ */}
      <div className="overflow-hidden border-y border-[#E5E5E5] bg-[#F7F7F7] py-4" aria-hidden>
        <div className="flex w-max animate-marquee">
          {[...TECHNOLOGIES, ...TECHNOLOGIES].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="flex items-center gap-6 px-6 font-tech text-[11px] tracking-[0.3em] text-[#666666]"
            >
              <span>{t}</span>
              <span className="h-1 w-1 rotate-45 bg-gold/70" />
            </span>
          ))}
        </div>
      </div>

      {/* ============ INTRO ============ */}
      <section id="studio-intro" className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionLabel>Who we are</SectionLabel>
            <SectionTitle className="mt-6 text-[#111111]">
              ONE TEAM.
              <br />
              MULTIPLE <Gold>DIGITAL SOLUTIONS.</Gold>
            </SectionTitle>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-[#666666] sm:text-lg">
              FU DEVELOPERS helps businesses, startups and individuals turn ideas into professional
              digital products.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#666666]">
              From a simple business website to a custom application, software solution or
              AI-powered product, we focus on building clean, modern and practical technology.
            </p>
            <ul className="mt-8 space-y-3">
              {INTRO_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-[#111111]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-gold/10">
                    <Check size={11} strokeWidth={3} className="text-gold-bright" aria-hidden />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Link to="/services" className="btn-ghost mt-9">
              Explore Our Services
              <ArrowRight size={15} aria-hidden />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ============ SERVICES PREVIEW ============ */}
      <section className="border-t border-[#E5E5E5] bg-[#F7F7F7] py-20 lg:py-28">
        <Container>
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>Services</SectionLabel>
              <SectionTitle className="mt-5 text-[#111111]">
                WHAT WE <Gold>BUILD</Gold>
              </SectionTitle>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-tech text-[11px] font-semibold uppercase tracking-[0.25em] text-gold transition-colors hover:text-gold-bright"
            >
              All Services
              <ArrowRight size={14} aria-hidden />
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 90}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ FEATURED OFFER ============ */}
      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-ink-900">
              <div className="bg-panel pointer-events-none absolute inset-0" aria-hidden />
              <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />
              <div
                className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-gold/15 blur-[110px]"
                aria-hidden
              />
              <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:p-16">
                <div>
                  <SectionLabel>Featured Offer</SectionLabel>
                  <h2 className="heading mt-5 text-3xl bg-silver-text bg-clip-text text-transparent sm:text-4xl">
                    READY TO TAKE YOUR BUSINESS ONLINE?
                  </h2>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
                    Get a professional, modern and responsive website designed for your business.
                    <br />
                    <br />
                    <strong>Rs. 15,000 Starter Website Includes:</strong>
                  </p>
                  <ul className="mt-7 space-y-3">
                    {[
                      'Up to 5 Pages',
                      'Modern & Professional Design',
                      'Fully Responsive — Mobile, Tablet & Desktop',
                      'WhatsApp, Call & Contact Integration',
                      'Contact Form',
                      'Social Media Integration',
                      'Basic SEO Setup',
                      'Fast & Optimized Website',
                      'Basic Revisions',
                      '7 Days Delivery',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-silver">
                        <Check size={14} strokeWidth={3} className="shrink-0 text-gold-bright" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted">
                    <strong>Pages can include:</strong> Home • About • Services • Portfolio/Gallery • Contact
                  </p>
                  <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                      href={waLink(
                        `Hi FU DEVELOPERS! I'm interested in the business website offer starting from ${SITE.offerPrice}.`,
                      )}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn-gold"
                    >
                      Get Your Website
                      <ArrowRight size={15} aria-hidden />
                    </a>
                    <span className="flex items-center gap-2 text-sm text-muted">
                      <MessageCircle size={15} className="text-gold" aria-hidden />
                      WhatsApp: {SITE.whatsappDisplay}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center rounded-xl border border-gold/25 bg-ink-950/70 p-8 text-center backdrop-blur">
                  <p className="font-tech text-[10px] font-semibold uppercase tracking-[0.3em] text-muted">
                    Starting From
                  </p>
                  <p className="mt-3 font-tech text-4xl font-bold text-gold-bright sm:text-5xl">
                    {SITE.offerPrice}
                  </p>
                  <div className="mx-auto my-6 h-px w-16 bg-gold/50" aria-hidden />
                  <p className="flex items-center justify-center gap-2 font-tech text-xs font-semibold uppercase tracking-[0.25em] text-silver">
                    <Clock size={14} className="text-gold" aria-hidden />
                    {SITE.offerDelivery} Delivery
                  </p>
                  <p className="mt-6 text-xs leading-relaxed text-muted">
                    <strong>Not Included:</strong> Domain, hosting, paid plugins/themes &amp; advanced
                    functionality.
                    <br />
                    <br />
                    <strong>Web Applications, Mobile Apps, Software &amp; AI Solutions</strong> are
                    quoted separately based on project requirements.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ SELECTED WORK ============ */}
      <section className="border-t border-[#E5E5E5] bg-[#F7F7F7] py-20 lg:py-28">
        <Container>
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>Portfolio</SectionLabel>
              <SectionTitle className="mt-5 text-[#111111]">
                SELECTED <Gold>WORK</Gold>
              </SectionTitle>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#666666]">
              Real projects, live and clickable — test them yourself before we talk.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.title} delay={(i % 2) * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex justify-center">
            <Link to="/projects" className="btn-ghost">
              View All Projects
              <ArrowRight size={15} aria-hidden />
            </Link>
          </Reveal>
        </Container>
      </section>

      <CTASection
        label="Next step"
        title="HAVE AN IDEA? LET'S TURN IT INTO A PRODUCT."
        text="Tell us what you want to build — a website, an application, a game or something that doesn't have a name yet. We'll tell you exactly how we'd build it."
      />
    </>
  );
}
