export interface OpeningHourEntry {
  label: string
  hours: string
}

export interface NavLinkEntry {
  to: string
  label: string
}

export const FOOTER_CONTENT = {
  name: 'Skælskør Nor Camping',
  tagline: 'Naturnær camping ved Noret, med fokus på fred, ro og hygge.',
  phone: '+45 58 19 43 84',
  email: 'info@solskinscamping.dk',
  address: 'Kildehusvej 1, 4230 Skælskør',
  facebook:
    'https://www.facebook.com/p/Sk%C3%A6lsk%C3%B8r-Nor-Camping-Hytteudlejning-100039831829895/',
  instagram: 'https://www.instagram.com/skaelskornor/',
  navLinks: [
    { to: '/', label: 'Forside' },
    { to: '/priser', label: 'Priser' },
    { to: '/praktisk', label: 'Praktisk' },
    { to: '/kontakt', label: 'Kontakt' },
  ] as NavLinkEntry[],
  openingHours: [
    { label: 'Sæson (22. Marts - 4. Oktober)', hours: '' },
    { label: 'Mandag - Lørdag', hours: '10:00–12:00 & 14:00–16:00' },
    { label: 'Søndag', hours: '09:00–12:00' },
  ] as OpeningHourEntry[],
}
