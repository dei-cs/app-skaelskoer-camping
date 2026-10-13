import { Box, Button, Typography } from '@mui/material'
import type { Theme } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import { FOOTER_CONTENT as SITE } from '../PageFooter/footerContent'

// Closed period (inclusive). Months are 0-indexed.
const CLOSED_FROM = new Date(2026, 9, 4)
const CLOSED_UNTIL = new Date(2027, 2, 20)

const fadeUp = `
  @keyframes closedFadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes closedTrackDraw {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
`

const reveal = (delay: number) => ({
  animation: 'closedFadeUp 0.7s ease both',
  animationDelay: `${delay}s`,
  '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
})

// First day of every month the closed period touches, e.g. Oct → Mar.
function monthsBetween(from: Date, until: Date) {
  const months: Date[] = []
  const cursor = new Date(from.getFullYear(), from.getMonth(), 1)
  while (cursor <= until) {
    months.push(new Date(cursor))
    cursor.setMonth(cursor.getMonth() + 1)
  }
  return months
}

const toIsoDate = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

function DateMark({ label, date, locale, align }: {
  label: string
  date: Date
  locale: string
  align: 'left' | 'right'
}) {
  const monthYear = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(date)
  return (
    <Box sx={{ textAlign: align, minWidth: { md: 120 } }}>
      <Typography
        component="span"
        sx={(theme) => ({
          display: 'block',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: theme.palette.brand.bark,
          mb: 0.75,
        })}
      >
        {label}
      </Typography>
      <Box component="time" dateTime={toIsoDate(date)} sx={{ display: 'block' }}>
        <Typography
          component="span"
          sx={(theme) => ({
            display: 'block',
            fontWeight: 700,
            fontSize: { xs: '44px', md: '56px' },
            lineHeight: 1,
            letterSpacing: '-1px',
            color: theme.palette.brand.ink,
            fontVariantNumeric: 'lining-nums',
          })}
        >
          {date.getDate()}.
        </Typography>
        <Typography
          component="span"
          sx={(theme) => ({
            display: 'block',
            mt: 0.75,
            fontSize: '15px',
            fontWeight: 600,
            color: theme.palette.brand.earth,
            '&::first-letter': { textTransform: 'uppercase' },
          })}
        >
          {monthYear}
        </Typography>
      </Box>
    </Box>
  )
}

function WinterTrack({ locale }: { locale: string }) {
  const months = monthsBetween(CLOSED_FROM, CLOSED_UNTIL)
  const short = new Intl.DateTimeFormat(locale, { month: 'short' })
  const last = months.length - 1

  return (
    <Box aria-hidden="true" sx={{ gridArea: 'track', px: { xs: 0.5, md: 1 } }}>
      {/* Line with endpoints: hollow = closing, filled = season returns */}
      <Box sx={{ position: 'relative', height: 14, display: 'flex', alignItems: 'center' }}>
        <Box
          sx={(theme) => ({
            position: 'absolute',
            left: 7,
            right: 7,
            borderTop: `2px dashed ${theme.palette.brand.sand}`,
            transformOrigin: 'left center',
            animation: 'closedTrackDraw 1.4s cubic-bezier(0.65, 0, 0.35, 1) both',
            animationDelay: '0.6s',
            '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
          })}
        />
        <Box
          sx={(theme) => ({
            position: 'relative',
            width: 14,
            height: 14,
            borderRadius: '50%',
            border: `2px solid ${theme.palette.brand.sand}`,
            backgroundColor: theme.palette.background.default,
          })}
        />
        <Box sx={{ flex: 1 }} />
        <Box
          sx={(theme) => ({
            position: 'relative',
            width: 14,
            height: 14,
            borderRadius: '50%',
            backgroundColor: theme.palette.brand.fjord,
            boxShadow: `0 0 0 4px ${theme.palette.brand.sandLight}`,
            ...reveal(1.9),
          })}
        />
      </Box>

      {/* Month ticks */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1.25 }}>
        {months.map((m, i) => (
          <Typography
            key={m.toISOString()}
            component="span"
            sx={(theme) => ({
              flex: '0 0 auto',
              width: 14,
              display: 'flex',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              color: i === last ? theme.palette.brand.fjord : theme.palette.brand.bark,
              opacity: i === 0 || i === last ? 1 : 0.7,
            })}
          >
            {short.format(m).replace('.', '')}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}

const contactButtonSx = (theme: Theme) => ({
  px: 2.5,
  py: 1.25,
  borderWidth: '2px',
  borderRadius: 0,
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  overflowWrap: 'anywhere',
  borderColor: theme.palette.brand.fjord,
  color: theme.palette.brand.fjord,
  '&:hover': {
    borderWidth: '2px',
    color: '#ffffff',
    backgroundColor: theme.palette.brand.fjord,
    borderColor: theme.palette.brand.fjord,
  },
})

export default function SeasonalClosed() {
  const { t, i18n } = useTranslation()
  const locale = i18n.resolvedLanguage ?? 'da'
  const { phone, email } = SITE

  return (
    <Box
      component="section"
      aria-labelledby="season-closed-title"
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
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '4px',
          color: theme.palette.brand.fjord,
          mb: 2.5,
          ...reveal(0.05),
        })}
      >
        {t('seasonClosed.eyebrow')}
      </Typography>

      {/* Display heading */}
      <Typography
        id="season-closed-title"
        component="h2"
        sx={(theme) => ({
          fontFamily: "'Raleway', Georgia, serif",
          fontWeight: 700,
          fontSize: 'clamp(34px, 5.5vw, 62px)',
          letterSpacing: '-0.5px',
          lineHeight: 1.08,
          color: theme.palette.brand.ink,
          mb: 4,
          ...reveal(0.15),
        })}
      >
        {t('seasonClosed.title')}
      </Typography>

      {/* Thank-you note */}
      <Typography
        sx={(theme) => ({
          fontSize: '17px',
          lineHeight: 1.75,
          color: theme.palette.brand.earth,
          maxWidth: '620px',
          mx: 'auto',
          mb: { xs: 4, md: 5 },
          ...reveal(0.25),
        })}
      >
        {t('seasonClosed.body')}
      </Typography>

      {/* Closed period */}
      <Box
        sx={(theme) => ({
          maxWidth: '760px',
          mx: 'auto',
          p: { xs: 3, md: 4 },
          borderRadius: '14px',
          border: `1px solid ${theme.palette.brand.sand}`,
          backgroundColor: theme.palette.background.default,
          ...reveal(0.35),
        })}
      >
        <Typography
          component="h3"
          sx={(theme) => ({
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: theme.palette.brand.fjord,
            mb: { xs: 3, md: 3.5 },
          })}
        >
          {t('seasonClosed.closedLabel')}
        </Typography>

        <Box
          sx={{
            display: 'grid',
            alignItems: 'center',
            columnGap: { xs: 2, md: 4 },
            rowGap: 3,
            gridTemplateColumns: { xs: '1fr 1fr', md: 'auto 1fr auto' },
            gridTemplateAreas: {
              xs: '"from until" "track track"',
              md: '"from track until"',
            },
          }}
        >
          <Box sx={{ gridArea: 'from' }}>
            <DateMark label={t('seasonClosed.closedFrom')} date={CLOSED_FROM} locale={locale} align="left" />
          </Box>
          <WinterTrack locale={locale} />
          <Box sx={{ gridArea: 'until' }}>
            <DateMark label={t('seasonClosed.closedUntil')} date={CLOSED_UNTIL} locale={locale} align="right" />
          </Box>
        </Box>

        <Typography
          sx={(theme) => ({
            mt: { xs: 3, md: 3.5 },
            pt: { xs: 2.5, md: 3 },
            borderTop: `1px solid ${theme.palette.brand.sandLight}`,
            fontSize: '15px',
            lineHeight: 1.7,
            color: theme.palette.brand.bark,
          })}
        >
          {t('seasonClosed.closedNote')}
        </Typography>
      </Box>

      {/* Contact */}
      <Box sx={{ mt: { xs: 4, md: 5 }, ...reveal(0.5) }}>
        <Typography
          component="h3"
          sx={(theme) => ({
            fontSize: { xs: '20px', md: '24px' },
            fontWeight: 700,
            color: theme.palette.brand.ink,
            mb: 1,
          })}
        >
          {t('seasonClosed.contactHeading')}
        </Typography>
        <Typography
          sx={(theme) => ({
            fontSize: '16px',
            lineHeight: 1.7,
            color: theme.palette.brand.earth,
            maxWidth: '520px',
            mx: 'auto',
            mb: 3,
          })}
        >
          {t('seasonClosed.contactText')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Button
            href={`tel:${phone.replace(/\s/g, '')}`}
            variant="outlined"
            startIcon={<PhoneIcon />}
            aria-label={`${t('seasonClosed.callUs')} ${phone}`}
            sx={contactButtonSx}
          >
            {phone}
          </Button>
          <Button
            href={`mailto:${email}`}
            variant="outlined"
            startIcon={<EmailIcon />}
            aria-label={`${t('seasonClosed.writeUs')} ${email}`}
            sx={contactButtonSx}
          >
            {email}
          </Button>
        </Box>
      </Box>

      {/* Sign-off */}
      <Typography
        sx={(theme) => ({
          mt: { xs: 4, md: 5 },
          fontSize: '17px',
          fontStyle: 'italic',
          color: theme.palette.brand.fjord,
          ...reveal(0.6),
        })}
      >
        {t('seasonClosed.signoff')}
      </Typography>

      <Box
        sx={(theme) => ({
          width: '52px',
          height: '1px',
          backgroundColor: theme.palette.brand.sand,
          mx: 'auto',
          mt: 3,
          ...reveal(0.65),
        })}
      />
    </Box>
  )
}
