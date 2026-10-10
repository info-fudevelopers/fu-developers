import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check, Clock, MessageCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import ServiceHeroVisual from '../components/ServiceHeroVisual';
import { Container, Gold, SectionLabel, SectionTitle } from '../components/ui';
import { getService } from '../data/services';
import { waLink } from '../data/site';
import { usePageMeta } from '../lib/seo';
import { breadcrumbSchema, JsonLd, serviceSchema } from '../lib/structuredData';
import NotFound from './NotFound';

const SERVICE_META_DESCRIPTIONS: Record<string, string> = {
  'web-development':
    'Professional website development by FU DEVELOPERS for businesses in Karachi and across Pakistan. Discuss your site and get a clear project estimate.',
  'web-applications':
    'Professional web application development by FU DEVELOPERS for business dashboards, portals and workflows in Karachi and across Pakistan. Discuss your project for a clear estimate.',
  'mobile-apps':
    'Professional mobile app development by FU DEVELOPERS for cross-platform experiences and progressive web apps in Karachi and across Pakistan. Discuss your idea and get a clear estimate.',
  games:
    'Professional browser game development by FU DEVELOPERS for interactive, educational and arcade experiences in Karachi and across Pakistan. Discuss your concept for a clear estimate.',
  'ai-solutions':
    'Professional AI solution development by FU DEVELOPERS for business assistants and workflow automation in Karachi and across Pakistan. Discuss your use case and get a clear estimate.',
  software:
    'Professional custom software development by FU DEVELOPERS for desktop tools and business workflows in Karachi and across Pakistan. Discuss your requirements for a clear estimate.',
  'custom-development':
    'Professional custom development by FU DEVELOPERS for digital products shaped around your requirements in Karachi and across Pakistan. Discuss your idea and get a clear estimate.',
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug ?? '');

  usePageMeta({
    title: service ? `${service.title} | FU DEVELOPERS` : 'Service not found | FU DEVELOPERS',
    description: service
      ? SERVICE_META_DESCRIPTIONS[service.slug]
      : 'This service page could not be found.',
    indexable: Boolean(service),
  });

  if (!service) return <NotFound />;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            slug: service.slug,
            name: service.title,
            serviceType: service.navTitle,
            description: SERVICE_META_DESCRIPTIONS[service.slug],
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.navTitle, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      <PageHero
        label={`Service ${service.number}`}
        title={service.heroTitle}
        text={service.heroText}
        visual={<ServiceHeroVisual slug={service.slug} />}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.navTitle },
        ]}
      >
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link to="/contact" className="btn-gold">
            Start a Project
            <ArrowRight size={15} aria-hidden />
          </Link>
          <a href={waLink()} target="_blank" rel="noreferrer noopener" className="btn-ghost">
            <MessageCircle size={15} aria-hidden />
            Contact on WhatsApp
          </a>
        </div>
      </PageHero>

      {/* Overview + what we can build */}
      <section className="pb-20 lg:pb-28">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <SectionLabel>Overview</SectionLabel>
            <div className="mt-6 space-y-5">
              {service.description.map((para) => (
                <p key={para.slice(0, 24)} className="text-base leading-relaxed text-[#666666]">
                  {para}
                </p>
              ))}
            </div>
            {service.offer && (
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-xl border border-gold/30 bg-gold/10 px-6 py-5">
                <div>
                  <p className="font-tech text-[10px] uppercase tracking-[0.25em] text-[#666666]">
                    Starting from
                  </p>
                  <p className="mt-1 font-tech text-2xl font-bold text-gold-bright">
                    {service.offer.price}
                  </p>
                </div>
                <div className="h-10 w-px bg-gold/30" aria-hidden />
                <div>
                  <p className="font-tech text-[10px] uppercase tracking-[0.25em] text-[#666666]">
                    Delivery
                  </p>
                  <p className="mt-1 flex items-center gap-2 font-tech text-lg font-bold text-[#111111]">
                    <Clock size={15} className="text-gold" aria-hidden />
                    {service.offer.delivery}
                  </p>
                </div>
              </div>
            )}
          </Reveal>
          <Reveal delay={120}>
            <div className="card h-full p-8">
              <SectionLabel>What we can build</SectionLabel>
              <ul className="mt-6 space-y-3.5">
                {service.build.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#111111]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-gold/10">
                      <Check size={11} strokeWidth={3} className="text-gold-bright" aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Features */}
      <section className="border-t border-[#E5E5E5] bg-[#F7F7F7] py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionLabel>Features</SectionLabel>
            <SectionTitle className="mt-5 max-w-2xl text-[#111111]">
              What comes standard with <Gold>{service.title.toLowerCase()}</Gold> from FU
              DEVELOPERS.
            </SectionTitle>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 3) * 80}>
                <div className="card group h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45">
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h3 className="font-display text-base font-bold text-[#111111]">{feature.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#666666]">{feature.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies */}
      <section className="py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionLabel>Technologies</SectionLabel>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {service.tech.map((t) => (
                <span key={t} className="chip !px-4 !py-2 !text-[11px]">
                  <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Development process */}
      <section className="border-t border-[#E5E5E5] bg-[#F7F7F7] py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionLabel>Development process</SectionLabel>
            <SectionTitle className="mt-5 max-w-2xl text-[#111111]">
              How your <Gold>{service.title.toLowerCase()}</Gold> project runs.
            </SectionTitle>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal key={step.step} delay={i * 90}>
                <div className="card h-full p-6">
                  <span className="font-tech text-2xl font-bold text-gold/70">{step.step}</span>
                  <h3 className="mt-4 font-display text-base font-bold text-[#111111]">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#666666]">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <p className="text-sm text-[#666666]">
              Want the full picture?{' '}
              <Link
                to="/process"
                className="font-semibold text-gold transition-colors hover:text-gold-bright"
              >
                See how we work from first message to launch →
              </Link>
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection
        label="Next step"
        title={`READY TO START YOUR ${service.title.toUpperCase()} PROJECT?`}
        text="Send a short brief — what you want to build and what it must do. You'll get a clear plan, timeline and quote."
      />
    </>
  );
}
