import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
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
            fontWeight: 700,
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontFamily: "'Playfair Display', Georgia, serif",
            letterSpacing: '-0.01em',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            lineHeight: 1.05,
            mb: 2,
          }}
        >
          Skælskør<br />Nor<br />Camping
        </Typography>
        <Box sx={{ width: 60, height: '2px', backgroundColor: 'rgba(255,255,255,0.4)', mx: 'auto', my: 2 }} />
        <Typography
          variant="subtitle1"
          component="p"
          sx={{
            color: alpha(theme.palette.primary.contrastText, 0.9),
            fontSize: 'clamp(18px, 2.2vw, 26px)',
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: 'italic',
            letterSpacing: '0.12em',
            textShadow: '0 1px 6px rgba(0,0,0,0.4)',
          }}
        >
          Fred, ro & hygge
        </Typography>
        <ButtonRow>
          <BookingButton />
          <PhoneButton />
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
    zIndex: 1,
  },
}))

const VideoBackground = styled('video')({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 0,
  filter: 'grayscale(0.05) brightness(1.0) contrast(0.95)',
})

const HeroContent = styled('div')({
  position: 'relative',
  zIndex: 2,
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
  zIndex: 3,
})
