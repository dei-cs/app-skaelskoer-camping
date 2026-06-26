import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useTranslation } from 'react-i18next'
import { styled, alpha } from '@mui/material/styles'
import campingSpotMap from '../../assets/images/camping-spot-map.webp'
import BookingButton from '../BookingButton/BookingButton'
import PhoneButton from '../PhoneButton/PhoneButton'
import { SectionWrapper, SectionInner } from '../SectionWrapper/SectionWrapper'
import { SectionHeading } from '../InfoSection/InfoSectionElements'
import type { PriceEntry, PriceCategory } from '../../i18n/types'

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
        <PriceRow
          key={ei}
          {...(entry.link
            ? { as: 'a' as const, href: entry.link, target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          <div>
            <Typography variant='body1' sx={{ color: 'brand.earth' }}>{entry.label}</Typography>
            {entry.note && (
              <Typography variant='body2' sx={{ color: 'brand.bark' }}>
                {entry.note}
              </Typography>
            )}
          </div>
          <Typography variant='body1' fontWeight={600} sx={{ color: 'brand.fjord', whiteSpace: 'nowrap' }}>
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
          {(i > 0 || !skipFirstDivider) && <Divider sx={{ my: 1.5, borderColor: 'brand.sand', opacity: 0.5 }} />}
          <PriceGroup>
            <Typography variant='body1' fontWeight={600} sx={{ color: 'brand.fjord' }}>
              {category.heading}
            </Typography>
            {category.entries && <EntryRows entries={category.entries} />}
            {category.subsections && category.subsections.map((sub, si) => (
              <SubsectionGroup key={si}>
                <Typography variant='body2' fontWeight={600} sx={{ color: 'brand.fjord' }}>
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
  const { t } = useTranslation()
  const categories = t('prices.categories', { returnObjects: true }) as PriceCategory[]
  const topCategories = categories.slice(0, TOP_COUNT)
  const bottomCategories = categories.slice(TOP_COUNT)
  const bottomLeft = bottomCategories.slice(0, 3)   // Hytte, Glamping, Ferielejligheder, Andet
  const bottomRight = bottomCategories.slice(3, 6)      // Fastligger-pladser

  return (
    <SectionWrapper backgroundColor={backgroundColor}>
      <Section>

        <SectionHeading
          eyebrow={t('prices.eyebrow')}
          title={t('prices.title')}
          intro={t('prices.intro')}
        />

        {/* Top: map (large) + first 3 categories */}
        <TopRow>
          <MapPane>
            <img src={campingSpotMap} alt={t('prices.mapAlt')} />
          </MapPane>
          <TopPrices>
            {/* <Typography variant='h4' sx={{ mb: 1 }}>{TITLE}</Typography> */}
            <CategoryList categories={topCategories} skipFirstDivider />
          </TopPrices>
        </TopRow>

        <Divider sx={{ my: 2, borderColor: 'brand.sand', opacity: 0.5 }} />

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
  border: `1px solid ${alpha(theme.palette.brand.sand, 0.5)}`,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'block',
    filter: 'grayscale(0.05) brightness(0.95) contrast(0.85)',
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

const ColumnDivider = styled('div')(({ theme }) => ({
  width: '1px',
  alignSelf: 'stretch',
  background: alpha(theme.palette.brand.sand, 0.5),
  margin: '0 40px',
  flexShrink: 0,
  '@media (max-width: 900px)': {
    display: 'none',
  }
}))

const PriceGroup = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
})

const SubsectionGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  paddingLeft: '12px',
  borderLeft: `2px solid ${alpha(theme.palette.brand.sand, 0.5)}`,
  marginTop: '4px'
}))

const PriceRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '12px',
  paddingLeft: '12px',
  '&[href]': {
    textDecoration: 'none',
    cursor: 'pointer',
    borderRadius: '8px',
    margin: '-4px -8px',
    padding: '4px 8px 4px 12px',
    transition: 'background-color 0.15s ease',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
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
