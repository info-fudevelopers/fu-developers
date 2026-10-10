export const SITE = {
  name: 'FU DEVELOPERS',
  tagline: 'WE BUILD DIGITAL SOLUTIONS.',
  logoTagline: 'BUILDING DIGITAL EXPERIENCES',
  email: 'info.fudevelopers@gmail.com',
  whatsappDisplay: '0335 0387417',
  whatsappIntl: '923350387417',
  instagram: '@fu_developers',
  instagramUrl: 'https://www.instagram.com/fu_developers',
  portfolio: 'https://uzairali943.netlify.app',
  location: 'Karachi, Pakistan',
  offerPrice: 'Rs. 15,000',
  offerDelivery: '7 Days',
} as const;

export const waLink = (message?: string): string =>
  `https://wa.me/${SITE.whatsappIntl}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/process', label: 'Process' },
  { to: '/contact', label: 'Contact' },
] as const;
