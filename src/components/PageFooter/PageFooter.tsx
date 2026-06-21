import Typography from '@mui/material/Typography'
import { styled, alpha } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import NorthIcon from '@mui/icons-material/North'
import logoBadge from '../../assets/images/logo-badge.webp'
import { FOOTER_CONTENT as SITE } from './footerContent'

export default function PageFooter() {
  const { phone, email, address, navLinks, openingHours } = SITE
  const year = new Date().getFullYear()

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <Footer>
      <Inner>
        <Top>
          {/* Brand */}
          <Brand>
            <BrandLogo src={logoBadge} alt={SITE.name} />
            <BrandName>{SITE.name}</BrandName>
            <Tagline>{SITE.tagline}</Tagline>
            <Socials>
              <SocialLink
                href={SITE.facebook}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Skælskør Nor Camping på Facebook'
              >
                <FacebookIcon sx={{ fontSize: 18 }} />
              </SocialLink>
              <SocialLink
                href={SITE.instagram}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Skælskør Nor Camping på Instagram'
              >
                <InstagramIcon sx={{ fontSize: 18 }} />
              </SocialLink>
            </Socials>
          </Brand>

          {/* Navigation */}
          <Column>
            <Eyebrow>Navigation</Eyebrow>
            {navLinks.map(({ to, label }) => (
              <NavItem key={to} to={to}>
                {label}
              </NavItem>
            ))}
          </Column>

          {/* Contact */}
          <Column>
            <Eyebrow>Kontakt</Eyebrow>
            <ContactRow>
              <LocationOnIcon sx={{ fontSize: 16, mt: '2px', color: 'inherit' }} />
              <span>{address}</span>
            </ContactRow>
            <ContactLink href={`tel:${phone.replace(/\s/g, '')}`}>
              <ContactRow>
                <PhoneIcon sx={{ fontSize: 16, mt: '2px', color: 'inherit' }} />
                <span>{phone}</span>
              </ContactRow>
            </ContactLink>
            <ContactLink href={`mailto:${email}`}>
              <ContactRow>
                <EmailIcon sx={{ fontSize: 16, mt: '2px', color: 'inherit' }} />
                <span>{email}</span>
              </ContactRow>
            </ContactLink>
          </Column>

          {/* Opening hours */}
          <Column>
            <Eyebrow>Åbningstider</Eyebrow>
            {openingHours.map((entry, i) => (
              <HoursRow key={i} $heading={!entry.hours}>
                <span>{entry.label}</span>
                {entry.hours && <HoursValue>{entry.hours}</HoursValue>}
              </HoursRow>
            ))}
          </Column>
        </Top>

        <Rule />

        <BottomBar>
          <Typography component='span' sx={{ fontSize: '13px', opacity: 0.7 }}>
            © {year} {SITE.name}
          </Typography>
          <ToTop type='button' onClick={toTop}>
            Til toppen
            <NorthIcon sx={{ fontSize: 14 }} />
          </ToTop>
        </BottomBar>
      </Inner>
    </Footer>
  )
}

const Footer = styled('footer')(({ theme }) => ({
  background: theme.palette.brand.fjord,
  color: alpha('#ffffff', 0.75),
  fontFamily: "'Raleway', sans-serif",
}))

const Inner = styled('div')({
  maxWidth: 1200,
  margin: '0 auto',
  padding: '64px 40px 32px',
  '@media (max-width: 600px)': {
    padding: '48px 16px 24px',
  },
})

const Top = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
  gap: '40px',
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr 1fr',
    gap: '40px 32px',
  },
  '@media (max-width: 600px)': {
    gridTemplateColumns: '1fr',
    gap: '32px',
  },
})

const Brand = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  '@media (max-width: 900px)': {
    gridColumn: '1 / -1',
  },
})

const Column = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
})

const BrandLogo = styled('img')({
  width: 60,
  height: 'auto',
  filter: 'brightness(0) invert(1)',
})

const BrandName = styled('div')({
  fontFamily: "'Raleway', Georgia, serif",
  fontWeight: 700,
  fontSize: '20px',
  letterSpacing: '-0.2px',
  color: '#ffffff',
})

const Tagline = styled('p')({
  fontSize: '15px',
  lineHeight: 1.7,
  maxWidth: 300,
})

const Socials = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginTop: '4px',
})

const SocialLink = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  padding: '8px',
  borderRadius: '50%',
  color: alpha('#ffffff', 0.8),
  border: `1px solid ${alpha(theme.palette.brand.sand, 0.4)}`,
  transition: 'color 0.2s, border-color 0.2s, transform 0.2s',
  '&:hover': {
    color: '#ffffff',
    borderColor: theme.palette.brand.sand,
    transform: 'translateY(-2px)',
  },
  '@media (prefers-reduced-motion: reduce)': {
    '&:hover': { transform: 'none' },
  },
}))

const Eyebrow = styled('span')(({ theme }) => ({
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '4px',
  textTransform: 'uppercase',
  color: theme.palette.brand.sand,
  marginBottom: '4px',
}))

const underlineHover = {
  position: 'relative' as const,
  textDecoration: 'none',
  color: 'inherit',
  width: 'fit-content',
  transition: 'color 0.2s',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -2,
    height: '1.5px',
    backgroundColor: 'currentColor',
    transform: 'scaleX(0)',
    transformOrigin: 'left center',
    transition: 'transform 0.25s ease',
  },
  '&:hover': { color: '#ffffff' },
  '&:hover::after': { transform: 'scaleX(1)' },
  '@media (prefers-reduced-motion: reduce)': {
    '&::after': { transition: 'none' },
  },
}

const NavItem = styled(RouterLink)({
  fontSize: '15px',
  ...underlineHover,
})

const ContactRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '10px',
  fontSize: '15px',
  lineHeight: 1.5,
  color: 'inherit',
  textDecoration: 'none',
  transition: 'color 0.2s',
  '&[href]:hover': { color: '#ffffff' },
})

const HoursRow = styled('div', {
  shouldForwardProp: (prop) => prop !== '$heading',
})<{ $heading?: boolean }>(({ $heading }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '12px',
  fontSize: '14px',
  lineHeight: 1.5,
  ...($heading && {
    fontWeight: 700,
    color: '#ffffff',
    marginTop: '2px',
  }),
}))

const HoursValue = styled('span')({
  opacity: 0.85,
  whiteSpace: 'nowrap',
})

const Rule = styled('div')(({ theme }) => ({
  height: 1,
  background: alpha(theme.palette.brand.sand, 0.35),
  margin: '40px 0 24px',
}))

const BottomBar = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
})

const ToTop = styled('button')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  font: 'inherit',
  fontSize: '13px',
  letterSpacing: '0.5px',
  color: alpha('#ffffff', 0.7),
  transition: 'color 0.2s',
  '&:hover': { color: '#ffffff' },
  '& svg': { transition: 'transform 0.2s' },
  '&:hover svg': { transform: 'translateY(-2px)' },
  '@media (prefers-reduced-motion: reduce)': {
    '&:hover svg': { transform: 'none' },
  },
})

const ContactLink = styled('a')({
  display: 'inline-flex',
  ...underlineHover,
})
