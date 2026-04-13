import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import campingSpotMap from '../../assets/images/camping-spot-map.webp'
import BookingButton from '../BookingButton/BookingButton'
import PhoneButton from '../PhoneButton/PhoneButton'
import { Phone } from '@mui/icons-material'

const TITLE = 'Priser'

const PRICE_CATEGORIES = [
  {
    heading: 'Overnatning',
    entries: [
      { label: 'Telt (1–2 pers.)', price: '150 kr/nat' },
      { label: 'Campingvogn / Autocamper', price: '180 kr/nat' },
      { label: 'Glamping telt', price: '350 kr/nat', note: 'Inkl. sengetøj' },
      { label: 'Feriehytte', price: '500 kr/nat', note: 'Op til 4 pers.' }
    ]
  },
  {
    heading: 'Tilkøb',
    entries: [
      { label: 'Strøm', price: '40 kr/nat' },
      { label: 'Ekstra person', price: '50 kr/pers.' },
      { label: 'Hund', price: '25 kr/nat' }
    ]
  },
  {
    heading: 'Faciliteter',
    entries: [
      { label: 'Kano', price: '40 kr/time' },
      { label: 'Kajak', price: '50 kr/time' },
      { label: 'Paddle Board', price: '25 kr/time' }
    ]
  }
]

interface CampingMapSectionProps {
  backgroundColor?: 'default' | 'paper'
  showActions?: boolean
}

export default function CampingMapSection ({
  backgroundColor = 'default',
  showActions = false
}: CampingMapSectionProps) {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <Section>
        <MapPane>
          <img src={campingSpotMap} alt='Kort over campingpladsen' />
        </MapPane>
        <PricePane>
          <Typography variant='h4'>{TITLE}</Typography>
          {PRICE_CATEGORIES.map((category, ci) => (
            <>
              {ci > 0 && <Divider key={`divider-${ci}`} />}
              <PriceGroup key={ci}>
                <Typography variant='body1' fontWeight={600}>
                  {category.heading}
                </Typography>
                {category.entries.map((entry, ei) => (
                  <PriceRow key={ei}>
                    <div>
                      <Typography variant='body1'>{entry.label}</Typography>
                      {entry.note && (
                        <Typography variant='body2' color='text.secondary'>
                          {entry.note}
                        </Typography>
                      )}
                    </div>
                    <Typography
                      variant='body1'
                      color='text.secondary'
                      sx={{ whiteSpace: 'nowrap' }}
                    >
                      {entry.price}
                    </Typography>
                  </PriceRow>
                ))}
              </PriceGroup>
            </>
          ))}
          {showActions && (
            <ActionsRow>
              <BookingButton />
              <PhoneButtonLight>
                <PhoneButton />
              </PhoneButtonLight>
            </ActionsRow>
          )}
        </PricePane>
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled('div', {
  shouldForwardProp: prop => prop !== 'backgroundColor'
})<{ backgroundColor: 'default' | 'paper' }>(({ theme, backgroundColor }) => ({
  background: theme.palette.background[backgroundColor],
  paddingTop: '25px',
  paddingBottom: '25px'
}))

const Section = styled('section')({
  display: 'flex',
  alignItems: 'stretch',
  maxWidth: '1200px',
  margin: '0 auto',
  '@media (max-width: 768px)': {
    flexDirection: 'column'
  }
})

const MapPane = styled('div')(({ theme }) => ({
  flex: '1.2',
  borderRadius: '25px',
  overflow: 'hidden',
  background: theme.palette.background.paper,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'block'
  },
  '@media (max-width: 768px)': {
    minHeight: 300,
    borderRadius: 0,
    order: 1
  }
}))

const PricePane = styled('div')({
  flex: '0.8',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '48px',
  gap: '16px',
  '@media (max-width: 768px)': {
    width: '100%',
    padding: '40px 24px',
    order: 0
  }
})

const PriceGroup = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
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
