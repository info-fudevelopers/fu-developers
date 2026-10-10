import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import ServiceCard from '../components/ServiceCard';
import { Container, Gold, SectionLabel, SectionTitle } from '../components/ui';
import { SERVICES } from '../data/services';
import { usePageMeta } from '../lib/seo';

const CUSTOMER_PRODUCTS = ['web-development', 'web-applications', 'mobile-apps', 'games'];

export default function Services() {
  usePageMeta({
    title: 'Web Development Services | Websites, Apps & AI | FU DEVELOPERS',
    description:
      'Explore FU DEVELOPERS services including websites, web apps, mobile apps, software solutions and AI development for businesses in Karachi and across Pakistan.',
  });

  return (
    <>
      <PageHero
        label="Capabilities"
        title={
          <>
            WHAT WE <Gold>BUILD</Gold>
          </>
        }
        text="From a first customer-facing website to the software behind your daily operations, choose the kind of product you need — then explore how we can shape it around your business."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      <section className="py-16 lg:py-24">
        <Container className="space-y-16 lg:space-y-24">
          <div>
            <Reveal>
              <SectionLabel>For your customers</SectionLabel>
              <SectionTitle className="mt-5 max-w-2xl text-[#111111]">
                Digital experiences people can use.
              </SectionTitle>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#666666] sm:text-base">
                Make it easier to discover your business, use your service or engage with your
                product across the screens your audience already uses.
              </p>
            </Reveal>
            <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {SERVICES.filter((service) => CUSTOMER_PRODUCTS.includes(service.slug)).map(
                (service, index) => (
                  <Reveal key={service.slug} delay={(index % 2) * 70}>
                    <ServiceCard service={service} />
                  </Reveal>
                ),
              )}
            </div>
          </div>

          <div>
            <Reveal>
              <SectionLabel>For your business</SectionLabel>
              <SectionTitle className="mt-5 max-w-2xl text-[#111111]">
                Software shaped around your work.
              </SectionTitle>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#666666] sm:text-base">
                Connect tools, streamline repeatable tasks or build the custom software your
                workflow needs — with scope and estimates based on the actual requirements.
              </p>
            </Reveal>
            <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.filter((service) => !CUSTOMER_PRODUCTS.includes(service.slug)).map(
                (service, index) => (
                  <Reveal key={service.slug} delay={(index % 2) * 70}>
                    <ServiceCard service={service} />
                  </Reveal>
                ),
              )}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        label="Not sure which one?"
        title="DESCRIBE YOUR IDEA — WE'LL MAP IT TO THE RIGHT SERVICE."
        text="One message is enough. We'll reply with the service that fits, a clear plan and an honest estimate."
      />
    </>
  );
}
