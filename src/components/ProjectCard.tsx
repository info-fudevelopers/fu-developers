import { Link } from 'react-router-dom';
import { ArrowUpRight, FileText } from 'lucide-react';
import { ProjectMock } from './mockups/Mockups';
import type { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-gold">
      <div className="relative border-b border-line bg-ink-950/70 p-5 sm:p-7">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="project-card-preview relative flex min-h-[210px] items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
          <ProjectMock kind={project.mockup} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="label-tech !tracking-[0.28em]">{project.category}</p>
        {project.slug ? (
          <Link
            to={`/projects/${project.slug}`}
            className="mt-3 font-display text-xl font-bold text-[#111111] transition-colors hover:text-gold-bright"
          >
            {project.title}
          </Link>
        ) : (
          <h3 className="mt-3 font-display text-xl font-bold text-[#111111]">{project.title}</h3>
        )}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#666666]">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 font-tech text-[10px] font-semibold uppercase tracking-[0.25em] text-gold transition-colors hover:text-gold-bright"
          >
            View Project
            <ArrowUpRight size={13} aria-hidden />
          </a>
          {project.slug && (
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 font-tech text-[10px] font-semibold uppercase tracking-[0.25em] text-[#666666] transition-colors hover:text-[#111111]"
            >
              <FileText size={13} aria-hidden />
              Case Details
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
