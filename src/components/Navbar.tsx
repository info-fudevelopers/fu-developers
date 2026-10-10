import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { LogoMark } from './Logo';
import { NAV_LINKS, SITE, waLink } from '../data/site';
import { SERVICES } from '../data/services';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open
          ? 'border-b border-line bg-ink-950'
          : scrolled
            ? 'border-b border-line bg-ink-950/95 backdrop-blur-xl'
            : 'border-b border-white/10 bg-ink-950/90 backdrop-blur-xl'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link
          to="/"
          className="brand-enter group flex items-center gap-3"
          aria-label="FU DEVELOPERS — home"
        >
          <LogoMark height={34} />
          <span className="font-tech text-[13px] font-bold tracking-[0.28em] text-[#111111] transition-colors group-hover:text-gold-bright sm:text-[15px]">
            FU&nbsp;DEVELOPERS
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) =>
            link.to === '/services' ? (
              <div key={link.to} className="group relative">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `nav-link inline-flex items-center gap-1.5 ${isActive ? 'active' : ''}`
                  }
                >
                  {link.label}
                  <ChevronDown
                    size={12}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </NavLink>
                <div className="nav-dropdown invisible absolute left-0 top-full z-50 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="max-h-[min(70vh,24rem)] w-[264px] overflow-y-auto rounded-xl border border-white/15 bg-[#0B0B0B] p-2 shadow-card backdrop-blur-xl">
                    {SERVICES.map((s) => (
                      <NavLink
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className={({ isActive }) =>
                          `flex items-center gap-3 rounded-lg border px-3 py-2.5 text-[13px] font-medium transition-colors ${
                            isActive
                              ? 'border-white/10 bg-white/10 text-white'
                              : 'border-transparent text-silver hover:border-white/10 hover:bg-white/5 hover:text-white'
                          } focus-visible:border-white/10 focus-visible:bg-white/10 focus-visible:text-white`
                        }
                      >
                        <s.icon
                          size={15}
                          className="shrink-0 text-[#A1A1AA]"
                          aria-hidden
                        />
                        {s.navTitle}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-gold hidden !px-5 !py-2.5 md:inline-flex">
            Start a Project
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-[#E5E5E5] bg-[#F7F7F7] lg:hidden"
          >
            <span
              className={`absolute h-px w-5 bg-silver transition-all duration-300 ${
                open ? 'rotate-45' : '-translate-y-[3.5px]'
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-silver transition-all duration-300 ${
                open ? '-rotate-45' : 'translate-y-[3.5px]'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-all duration-500 ease-out lg:hidden ${
          open ? 'grid-rows-[1fr] opacity-100' : 'pointer-events-none grid-rows-[0fr] opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="min-h-0 overflow-hidden">
        <nav
          className="container-x flex h-[calc(100dvh-64px)] flex-col overflow-y-auto pb-10 pt-4"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link, index) => (
            <div key={link.to} className="border-b border-[#E5E5E5]">
              {link.to === '/services' ? (
                <>
                  <div className="flex items-center justify-between">
                    <NavLink
                      to={link.to}
                      tabIndex={open ? 0 : -1}
                      style={{ transitionDelay: open ? `${index * 35}ms` : '0ms' }}
                      className={({ isActive }) =>
                        `mobile-menu-item flex-1 py-4 font-display text-xl font-semibold uppercase tracking-[0.12em] ${
                          isActive ? 'text-gold-bright' : 'text-[#111111]'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                    <button
                      type="button"
                      tabIndex={open ? 0 : -1}
                      style={{ transitionDelay: open ? `${index * 35}ms` : '0ms' }}
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-label="Toggle services list"
                      aria-expanded={servicesOpen}
                      className="mobile-menu-item flex h-10 w-10 items-center justify-center text-gold"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      servicesOpen ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                    aria-hidden={!servicesOpen}
                  >
                    {SERVICES.map((s, serviceIndex) => (
                      <Link
                        key={s.slug}
                        tabIndex={open && servicesOpen ? 0 : -1}
                        style={{
                          transitionDelay: open && servicesOpen ? `${serviceIndex * 24}ms` : '0ms',
                        }}
                        to={`/services/${s.slug}`}
                        className="mobile-menu-item flex items-center gap-3 py-2.5 pl-4 text-sm text-[#666666] transition-colors hover:text-gold-bright"
                      >
                        <s.icon size={14} className="text-gold" aria-hidden />
                        {s.navTitle}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  tabIndex={open ? 0 : -1}
                  style={{ transitionDelay: open ? `${index * 35}ms` : '0ms' }}
                  className={({ isActive }) =>
                    `mobile-menu-item flex items-center justify-between py-4 font-display text-xl font-semibold uppercase tracking-[0.12em] ${
                      isActive ? 'text-gold-bright' : 'text-[#111111]'
                    }`
                  }
                >
                  {link.label}
                  <ArrowUpRight size={16} className="text-gold/60" aria-hidden />
                </NavLink>
              )}
            </div>
          ))}

          <Link
            to="/contact"
            tabIndex={open ? 0 : -1}
            className="btn-gold mobile-menu-item mt-8 w-full"
            style={{ transitionDelay: open ? `${NAV_LINKS.length * 35}ms` : '0ms' }}
          >
            Start a Project
          </Link>
          <div className="mt-6 flex flex-col gap-2 text-sm text-[#666666]">
            <a href={waLink()} className="transition-colors hover:text-gold-bright">
              WhatsApp: {SITE.whatsappDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-gold-bright">
              {SITE.email}
            </a>
          </div>
        </nav>
        </div>
      </div>
    </header>
  );
}
