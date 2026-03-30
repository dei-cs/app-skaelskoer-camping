import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import heroImage from '../../assets/images/asc-waterfront-hero.webp'
import PhoneButton from '../PhoneButton'
import BookingButton from '../BookingButton'

export default function Hero() {
  return (
    <HeroSection $bg={heroImage}>
      <HeroContent>
        <Typography
          variant="h1"
          sx={{
            color: '#fff',
            fontWeight: 800,
            fontSize: 'clamp(48px, 8vw, 96px)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            lineHeight: 1.05,
            mb: 2,
          }}
        >
          Skælskør<br />Camping
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: 'clamp(16px, 2vw, 22px)',
            letterSpacing: '0.08em',
            textShadow: '0 1px 6px rgba(0,0,0,0.4)',
          }}
        >
          Naturskønt ved vandet — Syd for Sjælland
        </Typography>
        <ButtonRow>
          <PhoneButton />
          <BookingButton />
        </ButtonRow>
      </HeroContent>

      <WaveContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '80px' }}
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            style={{ fill: '#fff' }}
          />
        </svg>
      </WaveContainer>
    </HeroSection>
  )
}

const HeroSection = styled('section', {
  shouldForwardProp: (prop) => prop !== '$bg',
})<{ $bg: string }>(({ $bg }) => ({
  height: '100dvh',
  width: '100%',
  backgroundImage: `url(${$bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(20, 50, 50, 0.35) 0%, rgba(10, 30, 30, 0.15) 45%, rgba(10, 40, 40, 0.55) 100%)',
  },
}))

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
