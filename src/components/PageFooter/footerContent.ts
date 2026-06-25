export interface OpeningHourEntry {
  label: string
  hours: string
}

export interface NavLinkEntry {
  to: string
  key: string
}

// Non-translatable site data. Display text (tagline, nav labels, opening hours)
// lives in the i18n token files (see src/i18n/locales/*.json).
export const FOOTER_CONTENT = {
  name: 'Skælskør Nor Camping',
  phone: '+45 58 19 43 84',
  email: 'info@solskinscamping.dk',
  address: 'Kildehusvej 1, 4230 Skælskør',
  facebook:
    'https://www.facebook.com/p/Sk%C3%A6lsk%C3%B8r-Nor-Camping-Hytteudlejning-100039831829895/',
  instagram: 'https://www.instagram.com/skaelskornor/',
  navLinks: [
    { to: '/', key: 'home' },
    { to: '/priser', key: 'prices' },
    { to: '/praktisk', key: 'practical' },
    { to: '/kontakt', key: 'contact' },
  ] as NavLinkEntry[],
}
