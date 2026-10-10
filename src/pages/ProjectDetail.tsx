import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import { BrowserFrame, ProjectMock } from '../components/mockups/Mockups';
import { Container, Gold, SectionLabel, SectionTitle } from '../components/ui';
import { getProject } from '../data/projects';
import { usePageMeta } from '../lib/seo';
import { breadcrumbSchema, JsonLd, projectSchema } from '../lib/structuredData';
import NotFound from './NotFound';

const PROJECT_META_DESCRIPTIONS: Record<string, string> = {
  'todo-list':
    'Explore the Todo List project by FU DEVELOPERS: a daily task planner with priorities, filters and browser-saved tasks for everyday organization.',
  calculator:
    'Explore the Calculator project by FU DEVELOPERS: a responsive tool for chained arithmetic, percentages and quick everyday calculations.',
  'weather-app':
    'Explore the Weather App project by FU DEVELOPERS: live city search, geolocation and forecasts in a clear, responsive interface.',
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug ?? '');

  usePageMeta({
    title: project ? `${project.title} | FU DEVELOPERS` : 'Project not found | FU DEVELOPERS',
    description: project
      ? PROJECT_META_DESCRIPTIONS[project.slug ?? '']
      : 'This project page could not be found.',
    indexable: Boolean(project?.slug && project.overview),
  });

  if (!project || !project.slug || !project.overview) return <NotFound />;

  return (
    <>
      <JsonLd
        data={[
          projectSchema({
            slug: project.slug,
            name: project.title,
            description: PROJECT_META_DESCRIPTIONS[project.slug],
            keywords: project.tags,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Projects', path: '/projects' },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
        ]}
      />
      <PageHero
        label={project.category}
        title={project.title.toUpperCase()}
        text={project.description}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Projects', to: '/projects' },
          { label: project.title },
        ]}
      >
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a href={project.liveUrl} target="_blank" rel="noreferrer noopener" className="btn-gold">
            View Live Project
            <ExternalLink size={15} aria-hidden />
          </a>
          <Link to="/contact" className="btn-ghost">
            Start Something Similar
            <ArrowRight size={15} aria-hidden />
          </Link>
        </div>
      </PageHero>

      {/* UI preview */}
      <section className="pb-16 lg:pb-20">
        <Container>
          <Reveal>
            <BrowserFrame url={project.liveUrl.replace(/^https?:\/\//, '')}>
              <div className="flex min-h-[320px] items-center justify-center py-6 sm:min-h-[420px]">
                <ProjectMock kind={project.mockup} />
              </div>
            </BrowserFrame>
            <p className="mt-3 text-center text-xs text-[#666666]">
              Clean UI preview of the {project.title} interface — open the live demo to use the
              real product.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Overview + facts */}
      <section className="border-t border-[#E5E5E5] bg-[#F7F7F7] py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <SectionLabel>Overview</SectionLabel>
            <div className="mt-6 space-y-5">
              {project.overview?.map((para) => (
                <p key={para.slice(0, 24)} className="text-base leading-relaxed text-[#666666]">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card h-full divide-y divide-[#E5E5E5] p-8">
              <div className="pb-5">
                <p className="font-tech text-[10px] uppercase tracking-[0.25em] text-gold">
                  Category
                </p>
                <p className="mt-2 text-sm text-[#111111]">{project.category}</p>
              </div>
              <div className="py-5">
                <p className="font-tech text-[10px] uppercase tracking-[0.25em] text-gold">
                  Live demo
                </p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-2 inline-flex items-center gap-2 break-all text-sm text-[#111111] transition-colors hover:text-gold-bright"
                >
                  {project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  <ExternalLink size={13} className="shrink-0 text-gold" aria-hidden />
                </a>
              </div>
              <div className="pt-5">
                <p className="font-tech text-[10px] uppercase tracking-[0.25em] text-gold">
                  Built with
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionLabel>Features</SectionLabel>
            <SectionTitle className="mt-5 max-w-2xl text-[#111111]">
              What the <Gold>{project.title}</Gold> can do.
            </SectionTitle>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {project.features?.map((feature, i) => (
              <Reveal key={feature} delay={(i % 2) * 80}>
                <div className="card flex items-start gap-3 p-5 transition-all duration-300 hover:border-gold/45">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-gold/10">
                    <Check size={11} strokeWidth={3} className="text-gold-bright" aria-hidden />
                  </span>
                  <p className="text-sm leading-relaxed text-[#111111]">{feature}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        label="Like what you see?"
        title="HAVE A SIMILAR IDEA? LET'S BUILD YOURS."
        text="Tell us what this project should do for your users — we'll plan, design and build it with the same care."
      />
    </>
  );
}
