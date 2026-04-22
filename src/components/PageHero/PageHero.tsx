import Typography from '@mui/material/Typography'
import { styled, alpha, useTheme } from '@mui/material/styles'

interface PageHeroProps {
  title: string
  subtitle?: string
  imageSrc: string
  imageAlt?: string
}

export default function PageHero({ title, subtitle, imageSrc, imageAlt = '' }: PageHeroProps) {
  const theme = useTheme()

  return (
    <HeroSection>
      <ImageBackground src={imageSrc} alt={imageAlt} />
      <HeroContent>
        <Typography
          variant="h1"
          sx={{
            color: theme.palette.primary.contrastText,
            fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 64px)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            lineHeight: 1.05,
            mb: 2,
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="subtitle1"
            sx={{
              color: alpha(theme.palette.primary.contrastText, 0.9),
              fontSize: 'clamp(14px, 2vw, 20px)',
              letterSpacing: '0.08em',
              textShadow: '0 1px 6px rgba(0,0,0,0.4)',
            }}
          >
            {subtitle}
          </Typography>
        )}
      </HeroContent>

      <WaveContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '140px' }}
        >
          <defs>
            <linearGradient id="pageHeroWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={theme.palette.primary.main} stopOpacity={1} />
              <stop offset="100%" stopColor={theme.palette.background.default} stopOpacity={1} />
            </linearGradient>
          </defs>
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,140 L0,140 Z"
            fill="url(#pageHeroWaveGradient)"
          />
        </svg>
      </WaveContainer>
    </HeroSection>
  )
}

const HeroSection = styled('section')({
  height: '60vh',
  width: '100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
})

const ImageBackground = styled('img')({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 0,
  filter: 'grayscale(0.05) brightness(0.95) contrast(0.85)',
})

const HeroContent = styled('div')({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  padding: '0 24px',
})

const WaveContainer = styled('div')({
  position: 'absolute',
  bottom: -1,
  left: 0,
  right: 0,
  lineHeight: 0,
  zIndex: 2,
})
