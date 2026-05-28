import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import campingSpotMap from '../../assets/images/camping-spot-map.webp'
import BookingButton from '../BookingButton/BookingButton'
import PhoneButton from '../PhoneButton/PhoneButton'
import { SectionWrapper, SectionInner } from '../SectionWrapper/SectionWrapper'

const TITLE = 'Priser'

interface PriceEntry {
  label: string
  price: string
  note?: string
}

interface PriceSubsection {
  subheading: string
  entries: PriceEntry[]
}

interface PriceCategory {
  heading: string
  entries?: PriceEntry[]
  subsections?: PriceSubsection[]
}

const PRICE_CATEGORIES: PriceCategory[] = [
  {
    heading: 'Autocamper',
    entries: [
      { label: 'Plads A-D', price: '140 kr/nat', note: 'Inkl. 1 person og strøm' },
      { label: 'Plads 1-28', price: '180 kr/nat', note: 'Inkl. 1 person og strøm' },
      { label: 'Plads 29-57', price: '240 kr/nat', note: 'Inkl. 1 person og strøm' },
      { label: 'Ekstra overnattende gæst', price: '90 kr/nat', note: 'Børn 0-11 år er gratis' },
      { label: 'Hund', price: '20 kr/nat' }
    ]
  },
  {
    heading: 'Campingvogn',
    entries: [
      { label: 'Plads 1-28', price: '180 kr/nat', note: 'Inkl. 1 person og strøm' },
      { label: 'Plads 29-68', price: '240 kr/nat', note: 'Inkl. 1 person og strøm' },
      { label: 'Ekstra overnattende gæst', price: '90 kr/nat', note: 'Børn 0-11 år er gratis' },
      { label: 'Hund', price: '20 kr/nat' }
    ]
  },
  {
    heading: 'Telt',
    entries: [
      { label: 'Plads 69-72', price: '125 kr/nat', note: 'Inkl. 1 person og strøm' },
      { label: 'Plads 1-7', price: '165 kr/nat', note: 'Inkl. 1 person og strøm' },
      { label: 'Plads 40-57', price: '225 kr/nat', note: 'Inkl. 1 person og strøm' },
      { label: 'Ekstra overnattende gæst', price: '90 kr/nat', note: 'Børn 0-11 år er gratis' },
      { label: 'Hund', price: '20 kr/nat' }
    ]
  },
  {
    heading: 'Hytte',
    entries: [
      { label: 'Hytte', price: '495 kr/nat', note: 'Inkl. 1 person og strøm' },
      { label: 'Ekstra overnattende gæst', price: '90 kr/nat', note: 'Børn 0-11 år er gratis' },
      { label: 'Hund p. ophold', price: '200 kr' }
    ]
  },
  {
    heading: 'Ferielejligheder',
    entries: [
      { label: 'Ferielejlighed inkl. 1 person, strøm og rengøring', price: '595 kr' },
      { label: 'Ekstra overnattende gæst', price: '90 kr', note: 'Børn 0-11 år er gratis' },    ]
  },
  {
    heading: 'Andet',
    entries: [
      { label: 'Dagsgæst (kl. 8–23)', price: '30 kr' },
      { label: 'Overnattende gæst', price: '90 kr' },
      { label: 'Strømpakke 100 (Fastliggere)', price: '100 kr', note: '4,5 kr/kWh · Gyldig i en måned' },
      { label: 'Strømpakke 250 (Fastliggere)', price: '250 kr', note: '4,5 kr/kWh · Gyldig i en måned' },
      { label: 'Strømpakke 500 (Fastliggere)', price: '500 kr', note: '4,5 kr/kWh · Gyldig i en måned' },
      { label: 'Bad – 2,5 min.', price: '5 kr' }
    ]
  },
  {
    heading: 'Fastligger-pladser',
    subsections: [
      {
        subheading: 'Forårssæson 22/3 – 29/6 2026',
        entries: [
          { label: 'Alm. plads', price: '6.450 kr' },
          { label: 'Vandplads 29-49', price: '6.750 kr' },
          { label: 'El-tilslutning', price: '175 kr' },
          { label: 'Hund', price: '150 kr' }
        ]
      },
      {
        subheading: 'Helsæson 22/3 – 4/10 2026',
        entries: [
          { label: 'Alm. plads', price: '11.400 kr' },
          { label: 'Vandplads 29-49', price: '12.200 kr' },
          { label: 'El-tilslutning', price: '175 kr' },
          { label: 'Hund', price: '300 kr' }
        ]
      },
      {
        subheading: 'Efterårssæson 28/7 – 4/10 2026',
        entries: [
          { label: 'Alm. plads', price: '4.150 kr' },
          { label: 'Vandplads 29-49', price: '4.450 kr' },
          { label: 'El-tilslutning', price: '175 kr' },
          { label: 'Hund', price: '150 kr' }
        ]
      }
    ]
  },
]

// Top row: map + first 3 categories alongside
// Bottom row: remaining categories in two 50/50 columns
const TOP_COUNT = 3

interface CampingMapSectionProps {
  backgroundColor?: 'default' | 'paper'
  showActions?: boolean
}

function EntryRows({ entries }: { entries: PriceEntry[] }) {
  return (
    <>
      {entries.map((entry, ei) => (
        <PriceRow key={ei}>
          <div>
            <Typography variant='body1'>{entry.label}</Typography>
            {entry.note && (
              <Typography variant='body2' color='text.secondary'>
                {entry.note}
              </Typography>
            )}
          </div>
          <Typography variant='body1' color='text.secondary' sx={{ whiteSpace: 'nowrap' }}>
            {entry.price}
          </Typography>
        </PriceRow>
      ))}
    </>
  )
}

function CategoryList({ categories, skipFirstDivider = false }: { categories: PriceCategory[], skipFirstDivider?: boolean }) {
  return (
    <>
      {categories.map((category, i) => (
        <div key={i}>
          {(i > 0 || !skipFirstDivider) && <Divider sx={{ my: 1.5 }} />}
          <PriceGroup>
            <Typography variant='body1' fontWeight={600}>
              {category.heading}
            </Typography>
            {category.entries && <EntryRows entries={category.entries} />}
            {category.subsections && category.subsections.map((sub, si) => (
              <SubsectionGroup key={si}>
                <Typography variant='body2' fontWeight={600} color='text.secondary'>
                  {sub.subheading}
                </Typography>
                <EntryRows entries={sub.entries} />
              </SubsectionGroup>
            ))}
          </PriceGroup>
        </div>
      ))}
    </>
  )
}

export default function CampingMapSection({
  backgroundColor = 'default',
  showActions = false
}: CampingMapSectionProps) {
  const topCategories = PRICE_CATEGORIES.slice(0, TOP_COUNT)
  const bottomCategories = PRICE_CATEGORIES.slice(TOP_COUNT)
  const bottomLeft = bottomCategories.slice(0, 3)   // Hytte, Ferielejligheder, Andet
  const bottomRight = bottomCategories.slice(3)      // Fastligger-pladser

  return (
    <SectionWrapper backgroundColor={backgroundColor}>
      <Section>

        {/* Top: map (large) + first 3 categories */}
        <TopRow>
          <MapPane>
            <img src={campingSpotMap} alt='Kort over campingpladsen' />
          </MapPane>
          <TopPrices>
            {/* <Typography variant='h4' sx={{ mb: 1 }}>{TITLE}</Typography> */}
            <CategoryList categories={topCategories} skipFirstDivider />
          </TopPrices>
        </TopRow>

        <Divider sx={{ my: 2 }} />

        {/* Bottom: remaining categories in two equal columns */}
        <BottomRow>
          <HalfColumn>
            <CategoryList categories={bottomLeft} skipFirstDivider />
          </HalfColumn>
          <ColumnDivider />
          <HalfColumn>
            <CategoryList categories={bottomRight} skipFirstDivider />
            {showActions && (
              <ActionsRow>
                <BookingButton />
                <PhoneButtonLight>
                  <PhoneButton />
                </PhoneButtonLight>
              </ActionsRow>
            )}
          </HalfColumn>
        </BottomRow>

      </Section>
    </SectionWrapper>
  )
}

const Section = styled(SectionInner)({
  padding: '40px 48px 56px',
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  '@media (max-width: 900px)': {
    padding: '24px 24px 40px',
  }
})

const TopRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  gap: '48px',
  '@media (max-width: 900px)': {
    flexDirection: 'column',
    gap: '24px',
  }
})

const MapPane = styled('div')(({ theme }) => ({
  flex: '0 0 60%',
  borderRadius: '20px',
  overflow: 'hidden',
  background: theme.palette.background.paper,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'block'
  },
  '@media (max-width: 900px)': {
    flex: 'unset',
    width: '100%',
    maxHeight: 320,
    '& img': {
      height: '100%',
      objectFit: 'cover',
    }
  }
}))

const TopPrices = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  minWidth: 0,
})

const BottomRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '0',
  alignItems: 'flex-start',
  '@media (max-width: 900px)': {
    flexDirection: 'column',
  }
})

const HalfColumn = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  minWidth: 0,
})

const ColumnDivider = styled('div')({
  width: '1px',
  alignSelf: 'stretch',
  background: 'rgba(0,0,0,0.08)',
  margin: '0 40px',
  flexShrink: 0,
  '@media (max-width: 900px)': {
    display: 'none',
  }
})

const PriceGroup = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
})

const SubsectionGroup = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  paddingLeft: '12px',
  // borderLeft: '2px solid',
  borderColor: 'rgba(0,0,0,0.08)',
  marginTop: '4px'
})

const PriceRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '12px',
  paddingLeft: '12px'
})

const ActionsRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '12px',
  marginTop: '8px'
})

const PhoneButtonLight = styled('div')(({ theme }) => ({
  '& .MuiButton-root': {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    '&:hover': {
      borderColor: theme.palette.primary.dark,
      background: theme.palette.action.hover
    }
  }
}))
