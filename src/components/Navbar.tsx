import { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <Box position="fixed" top={0} left={0} right={0} sx={{ zIndex: 1100 }}>
      <InfoBar>
        <InfoLeft>
          {/* TMP Disabled, untill we have reviews */}
          {/* <a href="#anmeldelser">Anmeldelser ★</a> */}
        </InfoLeft>
        <InfoRight>
          <a href="tel:56891234">
            <PhoneIcon sx={{ fontSize: 13 }} />
            56 89 12 34
          </a>
          <a href="mailto:mail@skaelskoer-camping.dk">
            <EmailIcon sx={{ fontSize: 13 }} />
            mail@skaelskoer-camping.dk
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon sx={{ fontSize: 16 }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon sx={{ fontSize: 16 }} />
          </a>
        </InfoRight>
      </InfoBar>

      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.1)' : 'none',
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <Toolbar sx={{ px: { xs: '16px', md: '40px' }, py: '4px', minHeight: '68px !important' }}>
          <LogoBadge href="/" $scrolled={scrolled}>
            <span className="badge-top">Skælskør</span>
            <span className="badge-main">SC</span>
            <span className="badge-bottom">Camping</span>
          </LogoBadge>

          <NavLinks $scrolled={scrolled}>
            <li><a href="#overnatning">Overnatning</a></li>
            <li><a href="#faciliteter">Faciliteter</a></li>
            <li><a href="#priser">Priser</a></li>
            <li>
              <a href="#praktisk">
                Praktisk <ExpandMoreIcon sx={{ fontSize: 16, ml: '-2px' }} />
              </a>
            </li>
            <li><a href="#kontakt">Kontakt</a></li>
          </NavLinks>

          <Button
            variant="contained"
            color="primary"
            startIcon={<CalendarMonthIcon />}
            sx={{
              ml: { xs: 'auto', md: 2 },
              borderRadius: '4px',
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '0.08em',
              px: 2.5,
              py: 1,
              fontSize: '14px',
              boxShadow: 'none',
              flexShrink: 0,
              '&:hover': { boxShadow: 'none' },
            }}
          >
            Booking
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const InfoBar = styled('div')({
  background: '#1a1a1a',
  height: 38,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 40px',
  fontSize: 12,
  color: 'rgba(255, 255, 255, 0.75)',
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5,
    transition: 'color 0.2s',
    '&:hover': { color: '#fff' },
  },
  '@media (max-width: 640px)': {
    padding: '0 16px',
    fontSize: 11,
  },
})

const InfoLeft = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})

const InfoRight = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})

const LogoBadge = styled('a', {
  shouldForwardProp: (prop) => prop !== '$scrolled',
})<{ $scrolled: boolean }>(({ $scrolled }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 60,
  height: 60,
  borderRadius: '50%',
  border: `2px solid ${$scrolled ? '#2e7d7d' : 'rgba(255,255,255,0.85)'}`,
  textDecoration: 'none',
  color: $scrolled ? '#2e7d7d' : '#fff',
  lineHeight: 1.2,
  textAlign: 'center',
  padding: 4,
  flexShrink: 0,
  transition: 'border-color 0.3s, color 0.3s',
  '& .badge-top':    { fontSize: 7,  letterSpacing: '0.1em',  textTransform: 'uppercase', fontWeight: 500 },
  '& .badge-main':   { fontSize: 12, fontWeight: 800,          letterSpacing: '0.04em',   textTransform: 'uppercase' },
  '& .badge-bottom': { fontSize: 7,  letterSpacing: '0.08em', fontWeight: 500 },
}))

// Styled Components:
const NavLinks = styled('ul', {
  shouldForwardProp: (prop) => prop !== '$scrolled',
})<{ $scrolled: boolean }>(({ $scrolled }) => ({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  gap: 28,
  flex: 1,
  justifyContent: 'center',
  '& li': {
    display: 'flex',
    alignItems: 'center',
  },
  '& a': {
    color: $scrolled ? '#2e7d7d' : '#fff',
    textDecoration: 'none',
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    textShadow: $scrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.4)',
    transition: 'opacity 0.2s, color 0.3s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    '&:hover': { opacity: 0.75 },
  },
  '@media (max-width: 900px)': {
    gap: 16,
    '& a': { fontSize: 11 },
  },
  '@media (max-width: 640px)': {
    display: 'none',
  },
}))
