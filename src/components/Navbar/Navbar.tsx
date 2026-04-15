import { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import { styled, alpha, useTheme } from '@mui/material/styles'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import BookingButton from '../BookingButton/BookingButton'
import logoSquare from '../../assets/images/logo-square.webp'

export default function Navbar () {
  const [scrolled, setScrolled] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const linkSx = {
    color: alpha(theme.palette.primary.contrastText, 0.75),
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    transition: 'color 0.2s',
    '&:hover': { color: theme.palette.primary.contrastText }
  }

  return (
    <Box position='fixed' top={0} left={0} right={0} sx={{ zIndex: 1100 }}>
      <Box
        sx={{
          background: theme.palette.primary.dark,
          height: 38,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: '16px', sm: '40px' },
          fontSize: { xs: 11, sm: 12 },
          color: alpha(theme.palette.primary.contrastText, 0.75)
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
          background: scrolled ? alpha(theme.palette.background.default, 0.97) : 'transparent',
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
          
          <Box sx={{ width: 200, height: 120, overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 190,
              height: 90,
              borderRadius: "5px",
              backgroundColor: scrolled ? 'transparent' : alpha(theme.palette.primary.contrastText, 0.65),
              transition: 'background-color 0.3s ease',
            }} />
            <img
              src={logoSquare}
              alt='Skælskør Camping Logo'
              style={{
                position: 'relative',
                width: '100%',
                height: 'auto',
                display: 'block',
                marginTop: '50%',
                transform: 'translateY(-70%)'
              }}
            />
          </Box>

          <Stack
            direction='row'
            gap={3.5}
            flex={1}
            justifyContent='center'
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            {[
              { href: '#overnatning', label: 'Overnatning' },
              // { href: '#faciliteter', label: 'Faciliteter' },
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
  shouldForwardProp: prop => prop !== '$scrolled',
})<{ $scrolled: boolean }>(({ theme, $scrolled }) => ({
  color: $scrolled ? theme.palette.primary.main : theme.palette.primary.contrastText,
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
  '@media (max-width: 900px)': { fontSize: 11 }
}))
