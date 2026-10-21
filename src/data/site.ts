// Contact details and links used across the site. Change them here once.
export const site = {
  name: 'Art De Writx',
  tagline: 'Live Arabic Calligraphy Artist',
  strapline: 'Weddings • Brand Activations • Exclusive Events Across UAE',
  email: 'artdewritx@gmail.com',
  phoneDisplay: '+971 54 761 3161',
  whatsapp: 'https://wa.me/971547613161',
  instagramHandle: '@art_de_writx',
  instagram: 'https://instagram.com/art_de_writx',
};

export const services = [
  { key: 'live', label: 'Live Events', href: '/live-events/' },
  { key: 'custom', label: 'Custom Art', href: '/custom-art/' },
  { key: 'workshops', label: 'Workshops', href: '/workshops/' },
] as const;

export type PageKey = 'home' | (typeof services)[number]['key'];

/** A WhatsApp link with a pre-filled message. */
export const whatsappWith = (text: string) => `${site.whatsapp}?text=${encodeURIComponent(text)}`;

/** A mailto link with a pre-filled subject. */
export const mailtoWith = (subject: string) => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
