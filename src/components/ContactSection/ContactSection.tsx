import { Box, Grid, Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import type { SvgIconComponent } from '@mui/icons-material'
import { SectionInner, SectionWrapper } from '../SectionWrapper/SectionWrapper'
import { SectionHeading } from '../InfoSection/InfoSectionElements'
import { FOOTER_CONTENT as SITE } from '../PageFooter/footerContent'

interface ContactCard {
  icon: SvgIconComponent
  label: string
  value: string
  href: string
  external?: boolean
}

export default function ContactSection() {
  const { phone, email, address, openingHours } = SITE
  const mapsQuery = encodeURIComponent(`${SITE.name}, ${address}`)
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`
  const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`

  const cards: ContactCard[] = [
    {
      icon: PhoneIcon,
      label: 'Ring op',
      value: phone,
      href: `tel:${phone.replace(/\s/g, '')}`,
    },
    {
      icon: EmailIcon,
      label: 'Skriv til os',
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: LocationOnIcon,
      label: 'Besøg os',
      value: address,
      href: mapsLink,
      external: true,
    },
  ]

  return (
    <SectionWrapper>
      <SectionInner sx={{ px: { xs: '24px', md: '32px' } }}>
        <SectionHeading
          eyebrow="Kontakt os"
          title="Kontakt information"
          intro="Har du spørgsmål om booking, faciliteter eller vejen hertil? Vi kan altid træffes på telefonen, også uden for anviste åbningstider."
        />

        {/* Action cards */}
        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {cards.map(({ icon: Icon, label, value, href, external }) => (
            <Grid key={label} size={{ xs: 12, md: 4 }}>
              <Box
                component="a"
                href={href}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                sx={(theme) => ({
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                  height: '100%',
                  p: { xs: 3, md: 3.5 },
                  textDecoration: 'none',
                  borderRadius: '14px',
                  backgroundColor: theme.palette.background.default,
                  border: `1px solid ${theme.palette.brand.sand}`,
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  '& .contact-arrow': {
                    transition: 'transform 0.25s ease, opacity 0.25s ease',
                    opacity: 0,
                    transform: 'translate(-4px, 4px)',
                  },
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 18px 40px -24px rgba(8, 6, 13, 0.45)',
                    borderColor: theme.palette.brand.fjord,
                  },
                  '&:hover .contact-arrow': {
                    opacity: 0.9,
                    transform: 'translate(0, 0)',
                  },
                  '@media (prefers-reduced-motion: reduce)': {
                    transition: 'none',
                    '&:hover': { transform: 'none' },
                  },
                })}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box
                    sx={(theme) => ({
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      color: theme.palette.brand.fjord,
                      backgroundColor: theme.palette.brand.sandLight,
                    })}
                  >
                    <Icon sx={{ fontSize: 24 }} />
                  </Box>
                  <NorthEastIcon
                    className="contact-arrow"
                    sx={(theme) => ({ fontSize: 20, color: theme.palette.brand.fjord })}
                  />
                </Box>
                <Typography
                  component="span"
                  sx={(theme) => ({
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: theme.palette.brand.fjord,
                  })}
                >
                  {label}
                </Typography>
                <Typography
                  component="span"
                  sx={(theme) => ({
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    color: theme.palette.brand.ink,
                  })}
                >
                  {value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Opening hours + map */}
        <Grid container spacing={{ xs: 2.5, md: 3 }} sx={{ mt: { xs: 1, md: 2 } }}>
          {/* Opening hours */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={(theme) => ({
                height: '100%',
                p: { xs: 3, md: 4 },
                borderRadius: '14px',
                backgroundColor: theme.palette.brand.fjord,
                color: '#ffffff',
              })}
            >
              <Typography
                component="span"
                sx={(theme) => ({
                  display: 'block',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '4px',
                  textTransform: 'uppercase',
                  color: theme.palette.brand.sand,
                  mb: 2.5,
                })}
              >
                Åbningstider
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                {openingHours.map((entry, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: 2,
                      ...(entry.hours
                        ? {}
                        : {
                            fontWeight: 700,
                            mt: i === 0 ? 0 : 1,
                            mb: 0.5,
                          }),
                    }}
                  >
                    <Typography component="span" sx={{ fontSize: '15px', lineHeight: 1.5 }}>
                      {entry.label}
                    </Typography>
                    {entry.hours && (
                      <Typography
                        component="span"
                        sx={{ fontSize: '14px', whiteSpace: 'nowrap', opacity: 0.85 }}
                      >
                        {entry.hours}
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Map */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={(theme) => ({
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                borderRadius: '14px',
                overflow: 'hidden',
                border: `1px solid ${theme.palette.brand.sand}`,
              })}
            >
              <Box
                component="iframe"
                src={mapsEmbed}
                title={`Kort over ${SITE.name}, ${address}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
              />
            </Box>
          </Grid>
        </Grid>
      </SectionInner>
    </SectionWrapper>
  )
}
