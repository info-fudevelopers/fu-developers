import { SITE, waLink } from '../data/site';

const MESSAGE =
  "Hi FU DEVELOPERS, I'm interested in your digital development services. I'd like to discuss my project.";

/** WhatsApp glyph (lucide-react ships no brand icons, so it is inlined — no new dependency). */
function WhatsAppGlyph({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.21 4.24-9.45 9.46-9.45 2.52 0 4.9.98 6.68 2.77a9.4 9.4 0 0 1 2.76 6.69c0 5.21-4.24 9.45-9.42 9.45zM20.52 3.45A11.4 11.4 0 0 0 12.04 0C5.74 0 .61 5.12.61 11.42c0 2.01.53 3.98 1.53 5.71L.5 23.5l6.5-1.7a11.4 11.4 0 0 0 5.04 1.2h.01c6.3 0 11.43-5.13 11.43-11.43 0-3.05-1.19-5.92-3.34-8.07z" />
    </svg>
  );
}

/** Persistent bottom-right WhatsApp button, mounted once in the global Layout. */
export default function FloatingWhatsApp() {
  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7">
      <a
        href={waLink(MESSAGE)}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat with FU DEVELOPERS on WhatsApp"
        title="Chat on WhatsApp"
        data-whatsapp-number={SITE.whatsappIntl}
        className="whatsapp-float group pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full border border-gold-bright/60 bg-gold-grad text-ink-950 shadow-gold transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-bright"
      >
        <WhatsAppGlyph />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md border border-line bg-ink-900 px-3 py-1.5 font-tech text-[10px] uppercase tracking-[0.2em] text-silver opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
        >
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
