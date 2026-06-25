// Shapes for translation values read via t(key, { returnObjects: true }).

export interface OpeningHourEntry {
  label: string
  hours: string
}

export interface IntroPillar {
  label: string
  text: string
}

export interface PriceEntry {
  label: string
  price: string
  note?: string
}

export interface PriceSubsection {
  subheading: string
  entries: PriceEntry[]
}

export interface PriceCategory {
  heading: string
  entries?: PriceEntry[]
  subsections?: PriceSubsection[]
}

export interface InfoCategory {
  title: string
  content: string
}

export interface CancellationTerm {
  days: string
  refund: string
  fee: string
}

export interface PracticalNavSection {
  eyebrow: string
  label: string
}

export interface NavActionItem {
  label: string
}

export interface AccommodationCard {
  title: string
  description: string
  imageAlt: string
}
