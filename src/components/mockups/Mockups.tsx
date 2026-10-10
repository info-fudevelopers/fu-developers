import type { ReactNode } from 'react';
import {
  BrainCircuit,
  Check,
  Cloud,
  CloudSun,
  Globe,
  MapPin,
  PenTool,
  Plus,
  Search,
  Sun,
} from 'lucide-react';
import type { ProjectMockup } from '../../data/projects';

/* ---------- frames ---------- */

export function BrowserFrame({
  url,
  children,
  className = '',
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-ink-900 shadow-card ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line/70 bg-ink-800/60 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-gold/70" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-silver/40" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-line" aria-hidden />
        <span className="mx-2 flex-1 truncate rounded-md bg-ink-950/80 px-3 py-1 font-mono text-[9px] text-muted">
          {url}
        </span>
      </div>
      <div className="bg-ink-950/60 p-3 sm:p-5">{children}</div>
    </div>
  );
}

/* ---------- project UI mockups (clean previews, not screenshots) ---------- */

function TodoMockup() {
  const rows = [
    { label: 'Ship client landing page', done: true, priority: 'HIGH' },
    { label: 'Fix mobile navbar spacing', done: false, priority: 'MED' },
    { label: 'Draft AI assistant replies', done: false, priority: 'LOW' },
  ];
  return (
    <div className="w-full max-w-[320px] rounded-lg border border-line bg-ink-900 p-3 text-left">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-silver">Tasks — Daily Planner</span>
        <span className="text-[9px] text-muted">1 of 3 complete</span>
      </div>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-line">
        <div className="h-full w-1/3 bg-gold-grad" />
      </div>
      <div className="mt-2.5 flex gap-1.5">
        <div className="flex-1 truncate rounded-md border border-line bg-ink-950 px-2 py-1.5 text-[9px] text-muted/70">
          Add a new task…
        </div>
        <div className="rounded-md bg-gold-grad px-2.5 py-1.5 text-[9px] font-bold text-ink-950">Add</div>
      </div>
      <div className="mt-2.5 space-y-1.5">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-center gap-2 rounded-md border border-line/70 bg-ink-950/60 px-2 py-1.5"
          >
            {r.done ? (
              <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-sm bg-gold text-ink-950">
                <Check size={9} strokeWidth={3.5} aria-hidden />
              </span>
            ) : (
              <span className="h-3 w-3 shrink-0 rounded-sm border border-line" />
            )}
            <span className={`flex-1 truncate text-[9px] ${r.done ? 'text-muted line-through' : 'text-silver'}`}>
              {r.label}
            </span>
            <span className={`text-[8px] font-bold tracking-wider ${r.priority === 'HIGH' ? 'text-gold-bright' : 'text-muted'}`}>
              {r.priority}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex gap-1">
        {['All', 'Active', 'Completed'].map((f, i) => (
          <span
            key={f}
            className={`rounded border px-2 py-0.5 text-[8px] ${
              i === 0 ? 'border-gold/40 bg-gold/15 text-gold-bright' : 'border-line text-muted'
            }`}
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}

function CalculatorMockup() {
  const keys = ['AC', '⌫', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '−', '1', '2', '3', '+', '±', '0', '.', '='];
  const isOp = (k: string) => ['AC', '⌫', '%', '÷', '×', '−', '+', '±'].includes(k);
  return (
    <div className="w-full max-w-[210px] rounded-lg border border-line bg-ink-900 p-2.5">
      <div className="rounded-md border border-line bg-ink-950 px-3 py-2 text-right">
        <div className="font-tech text-[8px] tracking-[0.25em] text-muted">DEC</div>
        <div className="font-tech text-xl text-gold-bright">1,248</div>
      </div>
      <div className="mt-2 grid grid-cols-4 gap-1">
        {keys.map((k) => (
          <span
            key={k}
            className={`flex items-center justify-center rounded-md border py-1.5 text-[10px] ${
              k === '='
                ? 'border-transparent bg-gold-grad font-bold text-ink-950'
                : isOp(k)
                  ? 'border-gold/30 bg-gold/15 text-gold-bright'
                  : 'border-line bg-ink-950 text-silver'
            }`}
          >
            {k}
          </span>
        ))}
      </div>
    </div>
  );
}

function WeatherMockup() {
  const days = [
    { d: 'MON', icon: Sun, t: '26°' },
    { d: 'TUE', icon: CloudSun, t: '24°' },
    { d: 'WED', icon: Cloud, t: '23°' },
  ];
  return (
    <div className="w-full max-w-[240px] rounded-lg border border-line bg-ink-900 p-3 text-left">
      <div className="flex gap-1.5">
        <div className="flex flex-1 items-center gap-1.5 rounded-md border border-line bg-ink-950 px-2 py-1.5">
          <Search size={9} className="text-muted" aria-hidden />
          <span className="text-[9px] text-muted/70">Search city…</span>
        </div>
        <span className="flex items-center rounded-md border border-line bg-ink-950 px-1.5">
          <MapPin size={10} className="text-gold" aria-hidden />
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <div className="font-tech text-3xl text-white">24°</div>
          <div className="text-[9px] text-silver">Karachi, PK</div>
          <div className="text-[9px] text-gold">Partly cloudy</div>
        </div>
        <CloudSun size={44} strokeWidth={1.3} className="text-gold" aria-hidden />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {days.map((x) => (
          <div key={x.d} className="rounded-md border border-line bg-ink-950/60 px-2 py-1.5 text-center">
            <div className="text-[8px] tracking-wider text-muted">{x.d}</div>
            <x.icon size={12} className="mx-auto my-0.5 text-gold-bright" aria-hidden />
            <div className="text-[9px] text-silver">{x.t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortfolioMockup() {
  return (
    <div className="w-full max-w-[300px] rounded-lg border border-line bg-ink-900 p-3 text-left">
      <div className="flex items-center justify-between">
        <span className="font-tech text-[8px] font-bold tracking-[0.25em] text-gold">MU.ALI</span>
        <div className="flex gap-2.5 text-[8px] text-muted">
          <span>Work</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="mt-3 font-display text-[13px] font-bold text-white">Muhammad Uzair Ali</div>
      <div className="mt-0.5 font-mono text-[8px] text-gold">// Frontend Developer &amp; Web Craftsman</div>
      <div className="mt-2 flex gap-1.5">
        <span className="rounded bg-gold-grad px-2 py-1 text-[8px] font-bold text-ink-950">View My Work</span>
        <span className="rounded border border-line px-2 py-1 text-[8px] text-silver">Contact</span>
      </div>
      <div className="mt-2.5 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="relative h-10 overflow-hidden rounded-md border border-line bg-ink-950/70">
            <span className="absolute left-1.5 top-1.5 h-1 w-5 rounded-full bg-gold/60" />
            <span className="absolute left-1.5 top-4 h-1 w-8 rounded-full bg-line" />
            <span className="absolute left-1.5 top-6 h-1 w-6 rounded-full bg-line/70" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectMock({ kind, center = true }: { kind: ProjectMockup; center?: boolean }) {
  const map = {
    todo: <TodoMockup />,
    calculator: <CalculatorMockup />,
    weather: <WeatherMockup />,
    portfolio: <PortfolioMockup />,
  } as const;
  return <div className={center ? 'flex w-full items-center justify-center' : 'w-full'}>{map[kind]}</div>;
}

/* ---------- hero technology visual ---------- */

function CodeWindow() {
  return (
    <div className="rounded-lg border border-line/70 bg-ink-950 text-left">
      <div className="flex items-center gap-1.5 border-b border-line/70 px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-gold/70" aria-hidden />
        <span className="h-1.5 w-1.5 rounded-full bg-silver/40" aria-hidden />
        <span className="h-1.5 w-1.5 rounded-full bg-line" aria-hidden />
        <span className="ml-2 rounded bg-ink-900 px-2 py-0.5 font-mono text-[8px] text-muted">app.tsx</span>
      </div>
      <pre className="overflow-hidden p-3 font-mono text-[9px] leading-relaxed sm:p-4 sm:text-[10.5px]">
        <code>
          <span className="text-gold">const</span> <span className="text-silver">project</span>{' '}
          <span className="text-muted">=</span> <span className="text-gold">await</span>{' '}
          <span className="text-silver">fu</span>
          <span className="text-muted">.</span>
          <span className="text-gold-bright">build</span>
          <span className="text-muted">({'{'}</span>
          {'\n'}
          {'  '}
          <span className="text-silver">idea</span>
          <span className="text-muted">:</span> <span className="text-silver/70">&quot;your-business&quot;</span>
          <span className="text-muted">,</span>
          {'\n'}
          {'  '}
          <span className="text-silver">stack</span>
          <span className="text-muted">: [</span>
          <span className="text-silver/70">&quot;react&quot;</span>
          <span className="text-muted">,</span> <span className="text-silver/70">&quot;tailwind&quot;</span>
          <span className="text-muted">],</span>
          {'\n'}
          {'  '}
          <span className="text-silver">quality</span>
          <span className="text-muted">:</span> <span className="text-silver/70">&quot;premium&quot;</span>
          <span className="text-muted">,</span>
          {'\n'}
          {'  '}
          <span className="text-silver">delivery</span>
          <span className="text-muted">:</span> <span className="text-gold-bright">&quot;7 days&quot;</span>
          <span className="text-muted">,</span>
          {'\n'}
          <span className="text-muted">{'}'});</span>
        </code>
      </pre>
    </div>
  );
}

function PhoneFrame() {
  return (
    <div className="rounded-[1.3rem] border border-line bg-ink-900 p-1.5 shadow-card">
      <div className="mx-auto mb-1 h-1 w-8 rounded-full bg-line" aria-hidden />
      <div className="rounded-[1rem] border border-line/60 bg-ink-950 p-2">
        <div className="text-[8px] font-bold text-silver">Tasks</div>
        {[true, false, false].map((done, i) => (
          <div key={i} className="mt-1 flex items-center gap-1 rounded border border-line/60 bg-ink-900 px-1 py-1">
            {done ? (
              <span className="flex h-2 w-2 items-center justify-center rounded-[2px] bg-gold text-ink-950">
                <Check size={7} strokeWidth={4} aria-hidden />
              </span>
            ) : (
              <span className="h-2 w-2 rounded-[2px] border border-line" />
            )}
            <span className="h-0.5 flex-1 rounded-full bg-line" />
          </div>
        ))}
        <div className="mt-2 flex justify-end">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-grad text-ink-950">
            <Plus size={10} strokeWidth={3} aria-hidden />
          </span>
        </div>
      </div>
    </div>
  );
}

function FloatChip({
  icon: Icon,
  label,
  className = '',
  delay = 0,
}: {
  icon: typeof Globe;
  label: string;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute flex items-center gap-2 rounded-lg border border-white/10 bg-ink-900/85 px-3 py-2 shadow-card backdrop-blur ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon size={13} className="text-gold" aria-hidden />
      <span className="font-tech text-[9px] font-semibold tracking-[0.2em] text-silver">{label}</span>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[540px]" aria-hidden>
      {/* gold orbit echoing the logo */}
      <svg
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -inset-8 h-[calc(100%+4rem)] w-[calc(100%+4rem)] opacity-70 sm:-inset-12 sm:h-[calc(100%+6rem)] sm:w-[calc(100%+6rem)]"
      >
        <defs>
          <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#A3A3A3" stopOpacity="0" />
            <stop offset="0.5" stopColor="#F5F5F5" stopOpacity="0.8" />
            <stop offset="1" stopColor="#A3A3A3" stopOpacity="0" />
          </linearGradient>
        </defs>
        <ellipse
          cx="300"
          cy="300"
          rx="285"
          ry="95"
          fill="none"
          stroke="url(#orbitGrad)"
          strokeWidth="1.6"
          transform="rotate(-14 300 300)"
        />
      </svg>

      {/* laptop */}
      <div className="relative">
        <div className="rounded-t-2xl border border-line bg-ink-900 p-2 shadow-card sm:p-2.5">
          <CodeWindow />
        </div>
        <div className="relative left-1/2 h-3.5 w-[108%] -translate-x-1/2 rounded-b-xl border border-t-0 border-line bg-gradient-to-b from-ink-800 to-ink-900">
          <span className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b-md bg-line" />
        </div>
      </div>

      {/* phone */}
      <div className="absolute -bottom-12 -right-1 w-[112px] rotate-3 sm:-right-6 sm:w-[126px]">
        <PhoneFrame />
      </div>

      {/* floating chips */}
      <FloatChip icon={Globe} label="WEBSITES" className="-left-2 top-6 animate-float sm:-left-8" />
      <FloatChip
        icon={BrainCircuit}
        label="AI SOLUTIONS"
        className="-left-1 top-1/2 animate-float sm:-left-10"
        delay={900}
      />
      <FloatChip
        icon={PenTool}
        label="UI DESIGN"
        className="-top-6 right-6 animate-float"
        delay={1800}
      />
    </div>
  );
}
