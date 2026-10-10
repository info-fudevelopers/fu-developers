/**
 * The official FU DEVELOPERS logo (public/logo.jpg) is used exactly as provided —
 * never redrawn or distorted. For the navbar / footer we simply frame the
 * original artwork's own regions (monogram, or monogram + wordmark lockup)
 * with a CSS viewport crop, so proportions of the artwork stay untouched.
 *
 * Measured regions of the 1254×1254 source artwork (fractions):
 *   monogram : x 0.244–0.777 , y 0.218–0.523
 *   lockup   : x 0.116–0.889 , y 0.218–0.609  (monogram + FU DEVELOPERS wordmark)
 */

type Region = { x0: number; y0: number; x1: number; y1: number };

const MONOGRAM: Region = { x0: 0.235, y0: 0.208, x1: 0.786, y1: 0.532 };
const LOCKUP: Region = { x0: 0.108, y0: 0.208, x1: 0.897, y1: 0.618 };

const EDGE_FADE = 'radial-gradient(115% 115% at 50% 50%, #000 86%, transparent 100%)';

function LogoCrop({
  region,
  height,
  alt,
  className = '',
}: {
  region: Region;
  height: number;
  alt: string;
  className?: string;
}) {
  const w = region.x1 - region.x0;
  const h = region.y1 - region.y0;
  const width = height * (w / h);
  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <img
        src="/logo.jpg"
        alt={alt}
        draggable={false}
        decoding="async"
        className="absolute max-w-none select-none"
        style={{
          width: `${100 / w}%`,
          left: `${(-region.x0 / w) * 100}%`,
          top: `${(-region.y0 / h) * 100}%`,
          maskImage: EDGE_FADE,
          WebkitMaskImage: EDGE_FADE,
        }}
      />
    </span>
  );
}

/** FU monogram with the gold orbit — navbar / small placements. */
export function LogoMark({ height = 36, className }: { height?: number; className?: string }) {
  return (
    <LogoCrop region={MONOGRAM} height={height} className={className} alt="FU DEVELOPERS logo mark" />
  );
}

/** Monogram + FU DEVELOPERS wordmark — footer / brand placements. */
export function LogoLockup({ height = 62, className }: { height?: number; className?: string }) {
  return (
    <LogoCrop region={LOCKUP} height={height} className={className} alt="FU DEVELOPERS logo" />
  );
}

/** The complete official logo artwork, unmodified. */
export function LogoFull({ className = '' }: { className?: string }) {
  return (
    <img
      src="/logo.jpg"
      alt="Official FU DEVELOPERS logo — silver F and gold U monogram with gold orbit, wordmark and service icons"
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}
