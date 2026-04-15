import Typography from '@mui/material/Typography'
import { styled, alpha, useTheme } from '@mui/material/styles'
import heroVideo from '../../assets/videos/hero-waterfront-comp.mp4'
import PhoneButton from '../PhoneButton/PhoneButton'
import BookingButton from '../BookingButton/BookingButton'

export default function Hero() {
  const theme = useTheme()

  return (
    <HeroSection>
      <VideoBackground autoPlay muted loop playsInline src={heroVideo} />
      <HeroContent>
        <Typography
          variant="h1"
          sx={{
            color: theme.palette.primary.contrastText,
            fontWeight: 800,
            fontSize: 'clamp(48px, 8vw, 96px)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            lineHeight: 1.05,
            mb: 2,
          }}
        >
          Skælskør<br />Nor<br />Camping
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: alpha(theme.palette.primary.contrastText, 0.9),
            fontSize: 'clamp(16px, 2vw, 22px)',
            letterSpacing: '0.08em',
            textShadow: '0 1px 6px rgba(0,0,0,0.4)',
          }}
        >
          FRED, RO & HYGGE
        </Typography>
        <ButtonRow>
          <PhoneButton />
          <BookingButton />
        </ButtonRow>
      </HeroContent>

      <WaveContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '140px' }}
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={theme.palette.primary.main} stopOpacity={1} />
              <stop offset="100%" stopColor={theme.palette.background.default} stopOpacity={1} />
            </linearGradient>
          </defs>
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,140 L0,140 Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </WaveContainer>
    </HeroSection>
  )
}

const HeroSection = styled('section')(({ theme }) => ({
  height: '100dvh',
  width: '100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'none',
  },
}))

const VideoBackground = styled('video')({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 0,
  filter: 'sepia(0.2) saturate(1.1) brightness(0.95)',
})

const HeroContent = styled('div')({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  padding: '0 24px',
})

const ButtonRow = styled('div')({
  display: 'flex',
  gap: 16,
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginTop: 36,
})

const WaveContainer = styled('div')({
  position: 'absolute',
  bottom: -1,
  left: 0,
  right: 0,
  lineHeight: 0,
  zIndex: 2,
})
