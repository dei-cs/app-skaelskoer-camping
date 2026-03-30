import { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import { styled } from '@mui/material/styles'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import BookingButton from './BookingButton'

export default function Navbar () {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const linkSx = {
    color: 'rgba(255,255,255,0.75)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    transition: 'color 0.2s',
    '&:hover': { color: '#fff' }
  }

  return (
    <Box position='fixed' top={0} left={0} right={0} sx={{ zIndex: 1100 }}>
      <Box
        sx={{
          background: '#1a1a1a',
          height: 38,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: '16px', sm: '40px' },
          fontSize: { xs: 11, sm: 12 },
          color: 'rgba(255,255,255,0.75)'
        }}
      >
        {/* Left — reserved for reviews */}
        <Stack direction='row' alignItems='center' gap={2} />

        {/* Right — contact + socials */}
        <Stack direction='row' alignItems='center' gap={2}>
          <Link href='tel:56891234' sx={linkSx}>
            <PhoneIcon sx={{ fontSize: 13 }} />
            56 89 12 34
          </Link>
          <Link href='mailto:mail@skaelskoer-camping.dk' sx={linkSx}>
            <EmailIcon sx={{ fontSize: 13 }} />
            mail@skaelskoer-camping.dk
          </Link>
          <Link
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            sx={linkSx}
          >
            <FacebookIcon sx={{ fontSize: 16 }} />
          </Link>
          <Link
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            sx={linkSx}
          >
            <InstagramIcon sx={{ fontSize: 16 }} />
          </Link>
        </Stack>
      </Box>

      <AppBar
        position='static'
        elevation={0}
        sx={{
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.1)' : 'none',
          transition: 'background 0.3s ease, box-shadow 0.3s ease'
        }}
      >
        <Toolbar
          sx={{
            px: { xs: '16px', md: '40px' },
            py: '4px',
            minHeight: '68px !important'
          }}
        >
          <LogoBadge href='/' $scrolled={scrolled}>
            <span className='badge-top'>Skælskør</span>
            <span className='badge-main'>SC</span>
            <span className='badge-bottom'>Camping</span>
          </LogoBadge>

          <Stack
            direction='row'
            gap={3.5}
            flex={1}
            justifyContent='center'
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            {[
              { href: '#overnatning', label: 'Overnatning' },
              { href: '#faciliteter', label: 'Faciliteter' },
              { href: '#priser', label: 'Priser' },
              { href: '#praktisk', label: 'Praktisk' },
              { href: '#kontakt', label: 'Kontakt' }
            ].map(({ href, label }) => (
              <NavLink key={href} href={href} $scrolled={scrolled}>
                {label}
              </NavLink>
            ))}
          </Stack>
          <BookingButton />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const NavLink = styled(Link, {
  shouldForwardProp: prop => prop !== '$scrolled'
})<{ $scrolled: boolean }>(({ $scrolled }) => ({
  color: $scrolled ? '#2e7d7d' : '#fff',
  textDecoration: 'none',
  fontSize: 16,
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  textShadow: $scrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.4)',
  transition: 'opacity 0.2s, color 0.3s',
  display: 'inline-flex',
  alignItems: 'center',
  '&:hover': { opacity: 0.75 },
  '@media (max-width: 900px)': { fontSize: 11 },
}))

const LogoBadge = styled(Link, {
  shouldForwardProp: prop => prop !== '$scrolled'
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
  '& .badge-top': {
    fontSize: 7,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontWeight: 500
  },
  '& .badge-main': {
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: '0.04em',
    textTransform: 'uppercase'
  },
  '& .badge-bottom': { fontSize: 7, letterSpacing: '0.08em', fontWeight: 500 }
}))
