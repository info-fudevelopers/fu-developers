import { useState, type FormEvent } from 'react';
import { Instagram, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { Container, Gold, SectionLabel } from '../components/ui';
import { SITE, waLink } from '../data/site';
import {
  buildWhatsAppInquiry,
  EMPTY_INQUIRY,
  sendProjectInquiry,
  type InquiryValues,
} from '../lib/contact';
import { usePageMeta } from '../lib/seo';
import { breadcrumbSchema, contactPageSchema, JsonLd } from '../lib/structuredData';

const PROJECT_TYPES = [
  'Website',
  'Web Application',
  'Mobile App',
  'Game',
  'AI Solution',
  'Desktop Software',
  'Custom Development',
  'Other',
];

const BUDGETS = [
  'Under Rs. 15,000',
  'Rs. 15,000 – Rs. 30,000',
  'Rs. 30,000 – Rs. 50,000',
  'Rs. 50,000+',
  'Not sure yet',
];

type Status =
  | { type: 'idle' }
  | { type: 'sending' }
  | { type: 'mailto' }
  | { type: 'emailjs' }
  | { type: 'error'; message: string };

export default function Contact() {
  usePageMeta({
    title: 'Contact FU DEVELOPERS | Start Your Digital Project',
    description:
      'Contact FU DEVELOPERS for websites, web apps, mobile apps, software and AI solutions. Share your idea and get a clear project estimate.',
  });

  const [values, setValues] = useState<InquiryValues>(EMPTY_INQUIRY);
  const [status, setStatus] = useState<Status>({ type: 'idle' });

  const set = (key: keyof InquiryValues) => (value: string) =>
    setValues((v) => ({ ...v, [key]: value }));

  const valid =
    values.name.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) &&
    values.message.trim().length > 5;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!valid || status.type === 'sending') return;
    setStatus({ type: 'sending' });
    try {
      const mode = await sendProjectInquiry(values);
      setStatus({ type: mode });
    } catch (err) {
      setStatus({
        type: 'error',
        message: err instanceof Error ? err.message : 'Something went wrong while sending.',
      });
    }
  }

  return (
    <>
      <JsonLd
        data={[
          contactPageSchema({
            name: 'Contact FU DEVELOPERS | Start Your Digital Project',
            description:
              'Contact FU DEVELOPERS for websites, web apps, mobile apps, software and AI solutions. Share your idea and get a clear project estimate.',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />
      <PageHero
        label="Contact"
        title={
          <>
            LET&apos;S BUILD SOMETHING <Gold>GREAT.</Gold>
          </>
        }
        text="Have a website, application, software or AI idea? Tell us about your project and let's discuss how we can turn it into a real digital product."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="pb-20 lg:pb-28">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Contact information */}
          <Reveal className="space-y-4">
            <a
              href={`mailto:${SITE.email}`}
              className="card group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold transition-colors group-hover:text-gold-bright">
                <Mail size={18} aria-hidden />
              </span>
              <span>
                <span className="block font-tech text-[10px] uppercase tracking-[0.25em] text-[#666666]">
                  Email
                </span>
                <span className="mt-1 block break-all text-sm text-[#111111] transition-colors group-hover:text-gold-bright">
                  {SITE.email}
                </span>
              </span>
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer noopener"
              className="card group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold transition-colors group-hover:text-gold-bright">
                <MessageCircle size={18} aria-hidden />
              </span>
              <span>
                <span className="block font-tech text-[10px] uppercase tracking-[0.25em] text-[#666666]">
                  WhatsApp
                </span>
                <span className="mt-1 block text-sm text-[#111111] transition-colors group-hover:text-gold-bright">
                  {SITE.whatsappDisplay}
                </span>
              </span>
            </a>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="card group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold transition-colors group-hover:text-gold-bright">
                <Instagram size={18} aria-hidden />
              </span>
              <span>
                <span className="block font-tech text-[10px] uppercase tracking-[0.25em] text-[#666666]">
                  Instagram
                </span>
                <span className="mt-1 block text-sm text-[#111111] transition-colors group-hover:text-gold-bright">
                  {SITE.instagram}
                </span>
              </span>
            </a>
            <div className="card flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                <MapPin size={18} aria-hidden />
              </span>
              <span>
                <span className="block font-tech text-[10px] uppercase tracking-[0.25em] text-[#666666]">
                  Based in
                </span>
                <span className="mt-1 block text-sm text-[#111111]">{SITE.location}</span>
              </span>
            </div>
            <p className="px-1 text-sm leading-relaxed text-[#666666]">
              Prefer to talk first? Send a few lines on WhatsApp — we&apos;ll reply with the next
              steps and a clear estimate.
            </p>
          </Reveal>

          {/* Inquiry form */}
          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="card p-7 sm:p-9" noValidate>
              <SectionLabel>Project inquiry</SectionLabel>
              <h2 className="heading mt-4 text-2xl text-[#111111]">Tell us about your project</h2>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block font-tech text-[10px] uppercase tracking-[0.22em] text-[#666666]">
                    Name *
                  </span>
                  <input
                    className="field"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={values.name}
                    onChange={(e) => set('name')(e.target.value)}
                    required
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block font-tech text-[10px] uppercase tracking-[0.22em] text-[#666666]">
                    Email *
                  </span>
                  <input
                    className="field"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={(e) => set('email')(e.target.value)}
                    required
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block font-tech text-[10px] uppercase tracking-[0.22em] text-[#666666]">
                    Phone / WhatsApp
                  </span>
                  <input
                    className="field"
                    type="tel"
                    name="phone"
                    placeholder="03XX XXXXXXX"
                    value={values.phone}
                    onChange={(e) => set('phone')(e.target.value)}
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block font-tech text-[10px] uppercase tracking-[0.22em] text-[#666666]">
                    Project Type
                  </span>
                  <select
                    className="field"
                    name="projectType"
                    value={values.projectType}
                    onChange={(e) => set('projectType')(e.target.value)}
                  >
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t} className="bg-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block font-tech text-[10px] uppercase tracking-[0.22em] text-[#666666]">
                    Budget
                  </span>
                  <select
                    className="field"
                    name="budget"
                    value={values.budget}
                    onChange={(e) => set('budget')(e.target.value)}
                  >
                    {BUDGETS.map((b) => (
                      <option key={b} value={b} className="bg-white">
                        {b}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block font-tech text-[10px] uppercase tracking-[0.22em] text-[#666666]">
                    Message *
                  </span>
                  <textarea
                    className="field min-h-[130px] resize-y"
                    name="message"
                    placeholder="What do you want to build? What must it do for your business or users?"
                    value={values.message}
                    onChange={(e) => set('message')(e.target.value)}
                    required
                  />
                </label>
              </div>

              <button type="submit" className="btn-gold mt-7 w-full" disabled={!valid || status.type === 'sending'}>
                {status.type === 'sending' ? 'Preparing…' : 'Send Project Request'}
                {status.type !== 'sending' && <Send size={15} aria-hidden />}
              </button>

              <div
                role="status"
                aria-live="polite"
                className={`form-status mt-4 min-h-[1.25rem] text-center ${
                  status.type === 'idle' || status.type === 'sending' ? '' : 'form-status--visible'
                }`}
              >
                {status.type === 'mailto' && (
                  <p className="text-sm text-[#111111]">
                    Your email client should now open with the request pre-filled. If it didn&apos;t,
                    email us directly or continue on WhatsApp below.
                  </p>
                )}
                {status.type === 'emailjs' && (
                  <p className="text-sm text-[#111111]">
                    Thank you! Your message has been sent successfully. We&apos;ll contact you soon.
                  </p>
                )}
                {status.type === 'error' && (
                  <p className="text-sm text-[#111111]">
                    Sending failed ({status.message}). Please use WhatsApp or email directly.
                  </p>
                )}
                {status.type === 'idle' && (
                  <p className="text-xs text-[#666666]">
                    Your message will be sent securely through EmailJS when you submit. If sending
                    fails, you can contact us directly below.
                  </p>
                )}
              </div>

              <div className="my-7 flex items-center gap-4" aria-hidden>
                <span className="h-px flex-1 bg-[#E5E5E5]" />
                <span className="font-tech text-[10px] uppercase tracking-[0.25em] text-[#666666]">
                  or reach us directly
                </span>
                <span className="h-px flex-1 bg-[#E5E5E5]" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={buildWhatsAppInquiry(values)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-ghost w-full"
                >
                  <MessageCircle size={15} aria-hidden />
                  Chat on WhatsApp
                </a>
                <a href={`mailto:${SITE.email}`} className="btn-ghost w-full">
                  <Mail size={15} aria-hidden />
                  Email Us
                </a>
              </div>
            </form>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
