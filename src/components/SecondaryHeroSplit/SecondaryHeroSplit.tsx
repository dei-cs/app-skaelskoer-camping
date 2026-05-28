import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import BookingButton from '../BookingButton/BookingButton'
import PhoneButton from '../PhoneButton/PhoneButton'
import { SectionWrapper, SectionInner } from '../SectionWrapper/SectionWrapper'

interface SecondaryHeroSplitProps {
  title: string
  paragraphs: string[]
  imageSrc: string
  imageAlt?: string
  showActions?: boolean
  backgroundColor?: 'default' | 'paper'
}

export default function SecondaryHeroSplit({ title, paragraphs, imageSrc, imageAlt = '', showActions = true, backgroundColor = 'default' }: SecondaryHeroSplitProps) {
  return (
    <SectionWrapper backgroundColor={backgroundColor}>
      <Section>
        {/* <TextBackground /> */}
        <TextPane>
          <Typography variant='h4'>{title}</Typography>
          {paragraphs.map((p, i) => (
            <Typography key={i} variant='body1' sx={{ textAlign: 'justify' }}>
              {p}
            </Typography>
          ))}
          {showActions && (
            <ButtonRow>
              <BookingButton />
              <PhoneButtonLight>
                <PhoneButton />
              </PhoneButtonLight>
            </ButtonRow>
          )}
        </TextPane>
        <ImagePane>
          <img src={imageSrc} alt={imageAlt} />
        </ImagePane>
      </Section>
    </SectionWrapper>
  )
}

const Section = styled(SectionInner)({
  display: 'flex',
  alignItems: 'stretch',
  minHeight: 480,
  position: 'relative',
  '@media (max-width: 768px)': {
    flexDirection: 'column-reverse',
  },
})

const TextBackground = styled('div')(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  width: '65%',
  height: 'calc(100% + 80px)',
  top: '-40px', 
  border: '0.5px solid black',
  backgroundColor: theme.palette.primary.light,
  zIndex: 0,
  '@media (max-width: 768px)': {
    display: 'none',
  },
}))

const TextPane = styled('div')({
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '48px',
  gap: '16px',
  position: 'relative',
  zIndex: 1,
  '@media (max-width: 768px)': {
    width: '100%',
    padding: '40px 24px',
  },
})

const ImagePane = styled('div')({
  width: '50%',
  maxWidth: '600px',
  borderRadius: '5px',
  overflow: 'hidden',
  position: 'relative',
  zIndex: 1,
  flexShrink: 0,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  '@media (max-width: 768px)': {
    width: '100%',
    minHeight: 300,
    maxWidth: '100%',
    borderRadius: 0,
  },
})

const ButtonRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '12px',
  flexWrap: 'wrap',
  marginTop: '8px',
})

const PhoneButtonLight = styled('div')(({ theme }) => ({
  '& .MuiButton-root': {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    '&:hover': {
      borderColor: theme.palette.primary.dark,
      background: theme.palette.action.hover,
    },
  },
}))
