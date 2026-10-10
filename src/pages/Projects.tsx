import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import { Container, Gold } from '../components/ui';
import { FILTERS, PROJECTS, type ProjectFilter } from '../data/projects';
import { usePageMeta } from '../lib/seo';

export default function Projects() {
  usePageMeta({
    title: 'Our Projects | Websites, Web Apps & AI Solutions | FU DEVELOPERS',
    description:
      'Explore FU DEVELOPERS projects and see examples of professional websites, web applications and digital solutions built for modern business needs.',
  });

  const [filter, setFilter] = useState<ProjectFilter>('all');
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.filter === filter);

  return (
    <>
      <PageHero
        label="Portfolio"
        title={
          <>
            OUR <Gold>WORK</Gold>
          </>
        }
        text="Every project below is live. Open it, click around, test it on your phone — then imagine what we could build for you."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Projects' }]}
      />

      <section className="pb-20 lg:pb-28">
        <Container>
          <Reveal className="flex flex-wrap gap-3" >
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                className={`rounded-lg border px-5 py-2.5 font-tech text-[10px] font-semibold uppercase tracking-[0.25em] transition-all duration-300 ${filter === f.id
                    ? 'border-gold/60 bg-gold/15 text-gold-bright'
                    : 'border-[#E5E5E5] text-[#666666] hover:border-gold/40 hover:text-[#111111]'
                  }`}
              >
                {f.label}
              </button>
            ))}
          </Reveal>

          {filtered.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {filtered.map((project, i) => (
                <Reveal key={project.title} delay={(i % 2) * 100}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mt-10 rounded-2xl border border-dashed border-[#E5E5E5] p-14 text-center">
                <p className="font-tech text-sm tracking-[0.2em] text-[#666666]">
                  NO PROJECTS IN THIS CATEGORY YET — MORE ARE ON THE WAY.
                </p>
              </div>
            </Reveal>
          )}

          {/* Coming soon */}
          <Reveal className="mt-14">
            <div className="relative overflow-hidden rounded-2xl border border-dashed border-gold/35 bg-[#F7F7F7] p-10 text-center sm:p-14">
              <div
                className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-[90px]"
                aria-hidden
              />
              <span className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                <Sparkles size={20} strokeWidth={1.6} aria-hidden />
              </span>
              <h2 className="heading relative mt-6 text-2xl text-[#111111] sm:text-3xl">
                MORE PROJECTS <Gold>COMING SOON</Gold>
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#666666]">
                FU DEVELOPERS is building new projects right now. New case studies — with live
                demos, just like these — will be published here as they ship.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        label="Your project next"
        title="THE NEXT PROJECT HERE COULD BE YOURS."
        text="From a first sketch to a live product — start with a message and we'll take it from there."
      />
    </>
  );
}
