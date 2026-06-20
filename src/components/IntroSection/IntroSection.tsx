import { Box, Typography, Grid } from '@mui/material'
import BookingButton from '../BookingButton/BookingButton'

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3C14 3 6 10 6 17a8 8 0 0 0 16 0C22 10 14 3 14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
        <path d="M14 11v8M11 16l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'NATUR & RO',
    text: 'Skov og vand få skridt fra din plads.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 20L14 6l10 14H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
        <path d="M10 20v-5h8v5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M3 20h22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'OVERNATNING',
    text: 'Camping, telt, glamping og hyggelige hytter.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="10" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 22c0-3.314 2.686-6 6-6h8c3.314 0 6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'FÆLLESSKAB',
    text: 'Et åbent og imødekommende fællesskab med plads til alle.',
  },
]

const fadeUp = `
  @keyframes introFadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`

export default function IntroSection() {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        py: { xs: 2.5, md: 5 },
        px: { xs: 3, md: 6 },
        textAlign: 'center',
        overflow: 'hidden',
      })}
    >
      <style>{fadeUp}</style>

      {/* Eyebrow */}
      <Typography
        component="span"
        sx={(theme) => ({
          display: 'block',
          fontFamily: "'Raleway', sans-serif",
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '4px',
          color: theme.palette.brand.fjord,
          mb: 2.5,
          animation: 'introFadeUp 0.7s ease both',
          animationDelay: '0.05s',
        })}
      >
        MERE END EN OVERNATNING
      </Typography>

      {/* Display heading */}
      <Typography
        component="h2"
        sx={(theme) => ({
          fontFamily: "'Raleway', Georgia, serif",
          fontWeight: 700,
          fontSize: 'clamp(34px, 5.5vw, 62px)',
          letterSpacing: '-0.5px',
          lineHeight: 1.08,
          color: theme.palette.brand.ink,
          mb: 4,
          animation: 'introFadeUp 0.7s ease both',
          animationDelay: '0.15s',
        })}
      >
        OPLEV SKÆLSKØR NOR
      </Typography>

      {/* Body text */}
      <Typography
        sx={(theme) => ({
          fontFamily: "'Raleway', sans-serif",
          fontSize: '17px',
          lineHeight: 1.75,
          color: theme.palette.brand.earth,
          maxWidth: '620px',
          mx: 'auto',
          mb: 2,
          animation: 'introFadeUp 0.7s ease both',
          animationDelay: '0.25s',
        })}
      >
        Skælskør Nor Camping er mere end en overnatning. Det er stedet, hvor hverdagens tempo sænkes og naturen, nærværet og fællesskabet får plads. Mærk brisen fra Noret og vågn op til fuglesang.
      </Typography>

      {/* Booking CTA */}
      <Box
        sx={{
          mb: 5,
          animation: 'introFadeUp 0.7s ease both',
          animationDelay: '0.32s',
        }}
      >
        <BookingButton />
      </Box>

      {/* Decorative rule */}
      <Box
        sx={(theme) => ({
          width: '52px',
          height: '1px',
          backgroundColor: theme.palette.brand.sand,
          mx: 'auto',
          mb: 5,
          animation: 'introFadeUp 0.7s ease both',
          animationDelay: '0.42s',
        })}
      />

      {/* Feature pillars */}
      <Grid
        container
        spacing={{ xs: 5, md: 4 }}
        justifyContent="center"
        sx={{ maxWidth: '860px', mx: 'auto' }}
      >
        {pillars.map((pillar, i) => (
          <Grid
            key={pillar.label}
            size={{ xs: 12, sm: 4 }}
            sx={{
              animation: 'introFadeUp 0.7s ease both',
              animationDelay: `${0.42 + i * 0.1}s`,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}>
              <Box sx={(theme) => ({ mb: 0.5, color: theme.palette.primary.main })}>{pillar.icon}</Box>
              <Typography
                component="span"
                sx={(theme) => ({
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '3px',
                  color: theme.palette.brand.fjord,
                })}
              >
                {pillar.label}
              </Typography>
              <Typography
                sx={(theme) => ({
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '14.5px',
                  lineHeight: 1.7,
                  color: theme.palette.brand.bark,
                  maxWidth: '220px',
                })}
              >
                {pillar.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
