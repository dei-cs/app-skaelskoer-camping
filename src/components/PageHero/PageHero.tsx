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
    </HeroSection>
  )
}

const HeroSection = styled('section')(({ theme }) => ({
  minHeight: '30vh',
  maxHeight: '40vh',
  width: '100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  // No page hero on tablet/mobile — only landing page keeps a hero
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

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
