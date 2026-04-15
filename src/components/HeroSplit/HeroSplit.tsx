import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import BookingButton from '../BookingButton/BookingButton'
import PhoneButton from '../PhoneButton/PhoneButton'
import { SectionWrapper, SectionInner } from '../SectionWrapper/SectionWrapper'

interface HeroSplitProps {
  title: string
  paragraphs: string[]
  imageSrc: string
  imageAlt?: string
  showActions?: boolean
  backgroundColor?: 'default' | 'paper'
}

export default function HeroSplit({ title, paragraphs, imageSrc, imageAlt = '', showActions = true, backgroundColor = 'default' }: HeroSplitProps) {
  return (
    <SectionWrapper backgroundColor={backgroundColor}>
      <Section>
        <ImagePane>
          <img src={imageSrc} alt={imageAlt} />
        </ImagePane>
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
      </Section>
    </SectionWrapper>
  )
}

const Section = styled(SectionInner)({
  display: 'flex',
  alignItems: 'stretch',
  minHeight: 480,
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
})

const ImagePane = styled('div')({
  width: '50%',
  maxWidth: '600px',
  borderRadius: '15px',
  overflow: 'hidden',
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

const TextPane = styled('div')({
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '48px',
  gap: '16px',
  '@media (max-width: 768px)': {
    width: '100%',
    padding: '40px 24px',
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
