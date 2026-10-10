import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, MessageCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { Container, Gold, SectionLabel } from '../components/ui';
import { PROCESS_STEPS } from '../data/process';
import { waLink } from '../data/site';
import { usePageMeta } from '../lib/seo';

const GUARANTEES = [
  'A clear quote before development starts',
  'Reviewable progress at every milestone',
  'Builds tested on real devices',
  'Proper handover with documentation',
];

export default function Process() {
  usePageMeta({
    title: 'Our Development Process | FU DEVELOPERS',
    description:
      'See how FU DEVELOPERS turns ideas into professional websites, web apps, mobile apps and AI solutions through a clear and structured development process.',
  });

  return (
    <>
      <PageHero
        label="Process"
        title={
          <>
            HOW WE <Gold>WORK</Gold>
          </>
        }
        text="Five clear steps from first message to launch day. No mystery, no surprise costs — you always know where your project stands."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Process' }]}
      />

      <section className="pb-20 lg:pb-28">
        <Container>
          <div className="relative">
            <div
              className="process-progress absolute bottom-8 left-[27px] top-8 w-px bg-gradient-to-b from-gold/50 via-[#E5E5E5] to-gold/50 sm:left-[31px]"
              aria-hidden
            />
            <ol className="space-y-6">
              {PROCESS_STEPS.map((step, i) => (
                <li key={step.step}>
                  <Reveal delay={i * 80}>
                    <div className="grid gap-5 sm:grid-cols-[64px_1fr] sm:gap-8">
                      <span className="process-step-marker relative z-10 flex h-14 w-14 items-center justify-center rounded-xl border border-gold/40 bg-white font-tech text-lg font-bold text-gold shadow-goldsm sm:h-16 sm:w-16">
                        {step.step}
                      </span>
                      <div className="card p-7 transition-all duration-300 hover:border-gold/45 sm:p-8">
                        <h2 className="font-display text-xl font-bold text-[#111111] sm:text-2xl">
                          {step.title}
                        </h2>
                        <p className="mt-3 text-base text-[#111111]">{step.text}</p>
                        <p className="mt-2.5 text-sm leading-relaxed text-[#666666]">{step.detail}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <Reveal className="mt-14">
            <div className="card grid gap-6 p-8 sm:grid-cols-2 sm:p-10">
              <div>
                <SectionLabel>What you always get</SectionLabel>
                <ul className="mt-6 space-y-3">
                  {GUARANTEES.map((g) => (
                    <li key={g} className="flex items-center gap-3 text-sm text-[#111111]">
                      <BadgeCheck size={16} className="shrink-0 text-gold" aria-hidden />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center rounded-xl border border-gold/25 bg-[#F7F7F7] p-8 text-center">
                <p className="font-tech text-[10px] uppercase tracking-[0.3em] text-[#666666]">
                  Ready to begin?
                </p>
                <Link to="/contact" className="btn-gold mt-5 w-full">
                  Start Your Project
                  <ArrowRight size={15} aria-hidden />
                </Link>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-ghost mt-3 w-full"
                >
                  <MessageCircle size={15} aria-hidden />
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
