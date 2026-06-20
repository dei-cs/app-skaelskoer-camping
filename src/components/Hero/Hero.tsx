import { styled } from '@mui/material/styles'
import heroVideo from '../../assets/videos/hero-waterfront-comp.mp4'
import logoBadge from '../../assets/images/logo-badge.webp'

export default function Hero() {

  return (
    <HeroSection>
      <VideoBackground autoPlay muted loop playsInline src={heroVideo} />
      <HeroContent>
        <img
          src={logoBadge}
          alt="Skælskør Nor Camping"
          style={{
            width: 'clamp(120px, 20vw, 550px)',
            filter: 'brightness(0) invert(1)',
            opacity: 0.9
          }}
        />
      </HeroContent>
    </HeroSection>
  )
}

const HeroSection = styled('section')(() => ({
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
