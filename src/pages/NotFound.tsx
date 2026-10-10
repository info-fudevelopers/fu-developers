import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container, Gold } from '../components/ui';
import { usePageMeta } from '../lib/seo';

export default function NotFound() {
  usePageMeta({
    title: 'Page not found | FU DEVELOPERS',
    description: 'This page could not be found. Return to FU DEVELOPERS — digital development agency.',
    indexable: false,
  });

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <Container className="relative text-center">
        <p className="font-tech text-6xl font-bold text-gold/40 sm:text-8xl">404</p>
        <h1 className="heading mt-6 text-3xl text-[#111111] sm:text-4xl">
          THIS PAGE <Gold>DOESN&apos;T EXIST.</Gold>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[#666666]">
          The link may be old or mistyped. Everything we build lives under Services, Projects and
          Process — or start straight from the home page.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/" className="btn-gold">
            Back to Home
            <ArrowRight size={15} aria-hidden />
          </Link>
          <Link to="/contact" className="btn-ghost">
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  );
}
