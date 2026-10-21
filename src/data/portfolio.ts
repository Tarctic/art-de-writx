// Home page portfolio. Each photo shows under the tab matching its category.
export type Category = 'live' | 'custom' | 'workshop';

export const categories: { key: Category; tab: string; label: string; more: { label: string; href: string } }[] = [
  { key: 'live', tab: 'Live Events', label: 'Live Event', more: { label: 'See more live events', href: '/live-events/' } },
  { key: 'custom', tab: 'Custom Art', label: 'Custom Art', more: { label: 'See more custom art', href: '/custom-art/' } },
  { key: 'workshop', tab: 'Workshops', label: 'Workshop', more: { label: 'See more workshops', href: '/workshops/' } },
];

export const portfolio: { src: string; cat: Category; alt: string }[] = [
  { src: '/images/live-notebooks-gold-silver.jpg', cat: 'live', alt: 'A row of black notebooks personalised live with guests’ names in Arabic and English, in gold and silver ink' },
  { src: '/images/custom-burgundy-verse.jpg', cat: 'custom', alt: 'Gold Arabic calligraphy verse on a deep burgundy canvas, hung in an elegant living room' },
  { src: '/images/live-gift-bag.jpg', cat: 'live', alt: 'Black gift bag hand-decorated with white and gold Arabic calligraphy at a brand event' },
  { src: '/images/custom-pink-canvas.jpg', cat: 'custom', alt: 'Canvas with pink Arabic calligraphy strokes on a red and cream painted background' },
  { src: '/images/live-gold-name-notebook.jpg', cat: 'live', alt: 'Gold Arabic name calligraphy written live on a black notebook cover' },
  { src: '/images/custom-perfume-sunset.jpg', cat: 'custom', alt: 'Perfume bottle hand-painted with a pink sunset sky, roses and a white garden fence' },
  { src: '/images/live-gift-boxes.jpg', cat: 'live', alt: 'Branded gift boxes personalised with gold Arabic calligraphy at a brand activation' },
  { src: '/images/live-caps-totes-table.jpg', cat: 'live', alt: 'Caps and tote bags personalised with colourful Arabic calligraphy at a live activation table' },
  { src: '/images/live-watch-box.jpg', cat: 'live', alt: 'Watch box personalised with gold Arabic calligraphy for a brand activation' },
  { src: '/images/custom-kaaba-canvas.jpg', cat: 'custom', alt: 'Calligraphy canvas in black, silver and gold inspired by the Kaaba cover' },
  { src: '/images/custom-perfume-peonies.jpg', cat: 'custom', alt: 'Glass perfume bottle hand-painted with pink peonies and olive leaves' },
  { src: '/images/custom-lavender-name.jpg', cat: 'custom', alt: 'Round canvas with an Arabic name in purple surrounded by painted lavender' },
  { src: '/images/workshop-participants-painting.jpg', cat: 'workshop', alt: 'Workshop participants painting gold and red calligraphy canvases around a shared table' },
  { src: '/images/workshop-table-easels.jpg', cat: 'workshop', alt: 'Workshop table set with blank canvases on easels, paints and calligraphy practice sheets' },
  { src: '/images/workshop-red-canvases.jpg', cat: 'workshop', alt: 'Red canvases painted with gold Arabic calligraphy next to practice sheets' },
  { src: '/images/workshop-practice-sheet.jpg', cat: 'workshop', alt: 'Calligraphy practice sheet on grid paper with repeated letter strokes' },
  { src: '/images/workshop-certificate.jpg', cat: 'workshop', alt: 'Certificate of completion beside a black and gold calligraphy canvas and a calligraphy gift bag' },
  { src: '/images/workshop-group.jpg', cat: 'workshop', alt: 'Workshop participants gathered around a table of calligraphy materials' },
];

export const testimonials = [
  { quote: 'The guests absolutely loved the personalised calligraphy. It became such a beautiful part of the event.', author: 'Bride, Wedding Event' },
  { quote: 'Hajara brought such elegance and creativity to our brand activation. The live personalisation was the highlight.', author: 'Event Manager, Luxury Brand' },
  { quote: 'The workshop was incredibly inspiring. Hajara’s knowledge and patience made learning calligraphy accessible and enjoyable.', author: 'Workshop Attendee' },
  { quote: 'Professional, creative, and truly passionate about her craft. Highly recommend for any celebration.', author: 'Corporate Client, UAE' },
];
