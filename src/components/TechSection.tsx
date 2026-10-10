import { Container, SectionLabel, SectionTitle } from './ui';
import Reveal from './Reveal';
import { TECHNOLOGIES } from '../data/process';

export default function TechSection() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionLabel>Technology</SectionLabel>
          <SectionTitle className="mt-5 max-w-2xl text-[#111111]">
            Tools we work with <span className="bg-gold-text bg-clip-text text-transparent">every day.</span>
          </SectionTitle>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#666666]">
            No inflated skill bars, no buzzwords — just the technologies we actually use to ship
            websites, applications and software.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {TECHNOLOGIES.map((tech, i) => (
            <Reveal key={tech} delay={i * 45}>
              <div className="card flex items-center gap-3 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45">
                <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden />
                <span className="font-tech text-xs font-semibold tracking-[0.18em] text-[#111111]">
                  {tech}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
