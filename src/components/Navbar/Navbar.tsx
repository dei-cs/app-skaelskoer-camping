import { useState, useEffect } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, alpha, useTheme } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import BookingButton from '../BookingButton/BookingButton'
import logoBadge from '../../assets/images/logo-badge.webp'

const NAV_ITEMS = [
  { to: '/', label: 'FORSIDE' },
  { to: '/kort', label: 'PLADSOVERSIGT' },
  // { to: '/overnatning', label: 'Overnatning' },
  // { to: '#faciliteter', label: 'Faciliteter' },
  // { to: '#priser', label: 'Priser' },
  { to: '/praktisk', label: 'PRAKTISK' },
  { to: '/kontakt', label: 'KONTAKT' },
] as const

const PHONE = '+45 58 19 43 84'
const EMAIL = 'info@solskinscamping.dk'
const FACEBOOK = 'https://www.facebook.com/p/Sk%C3%A6lsk%C3%B8r-Nor-Camping-Hytteudlejning-100039831829895/'
const INSTAGRAM = 'https://www.instagram.com/skaelskornor/'

export default function Navbar () {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const { pathname } = useLocation()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  // Mobile/tablet: navbar always solid + pushes content down.
  // Exception — landing page keeps the transparent overlay (it has a hero).
  const isLanding = pathname === '/'
  const forceSolid = isMobile && !isLanding
  const solid = scrolled || forceSolid

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
    <>
    <Box position='fixed' top={0} left={0} right={0} sx={{ zIndex: 1100 }}>
      <Box
        sx={{
          background: theme.palette.brand.fjord,
          height: 35,
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
          <Link href={`tel:${PHONE.replace(/\s/g, '')}`} sx={linkSx}>
            <PhoneIcon sx={{ fontSize: 13 }} />
            {PHONE}
          </Link>
          <Link
            href={`mailto:${EMAIL}`}
            sx={{ ...linkSx, display: { xs: 'none', sm: 'inline-flex' } }}
          >
            <EmailIcon sx={{ fontSize: 13 }} />
            {EMAIL}
          </Link>
          <Link href={FACEBOOK} target='_blank' rel='noopener noreferrer' sx={linkSx}>
            <FacebookIcon sx={{ fontSize: 16 }} />
          </Link>
          <Link href={INSTAGRAM} target='_blank' rel='noopener noreferrer' sx={linkSx}>
            <InstagramIcon sx={{ fontSize: 16 }} />
          </Link>
        </Stack>
      </Box>

      <AppBar
        position='static'
        elevation={0}
        sx={{
          background: solid ? alpha(theme.palette.background.default, 0.97) : 'transparent',
          backdropFilter: solid ? 'blur(8px)' : 'none',
          boxShadow: solid ? '0 1px 8px rgba(0,0,0,0.1)' : 'none',
          transition: 'background 0.3s ease, box-shadow 0.3s ease'
        }}
      >
        <Toolbar
          sx={{
            px: { xs: '16px', md: '40px' },
            py: '4px',
            minHeight: '80px !important',
            position: 'relative',
          }}
        >
          {/* Mobile/tablet — hamburger */}
          <IconButton
            onClick={() => setOpen(true)}
            aria-label='Åbn menu'
            aria-expanded={open}
            sx={{
              display: { xs: 'inline-flex', md: 'none' },
              mr: 1,
              ml: -1,
              color: solid ? 'black' : '#fff',
              textShadow: solid ? 'none' : '0 1px 4px rgba(0,0,0,0.4)',
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop — inline links */}
          <Stack
            direction='row'
            gap={3.5}
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {NAV_ITEMS.map(({ to, label }) => (
              <NavLink sx={{ fontWeight: "700" }} key={to} to={to} $scrolled={scrolled}>
                {label}
              </NavLink>
            ))}
          </Stack>
          <Box sx={{ ml: 'auto' }}>
            <BookingButton />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile/tablet drawer */}
      <Drawer
        anchor='right'
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { width: { xs: '82vw', sm: 360 }, maxWidth: 400 } } }}
      >
        <DrawerInner>
          <DrawerHeader>
            <DrawerBrand>
              <img src={logoBadge} alt='' aria-hidden='true' />
              <span>Skælskør Nor Camping</span>
            </DrawerBrand>
            <IconButton onClick={() => setOpen(false)} aria-label='Luk menu' edge='end'>
              <CloseIcon />
            </IconButton>
          </DrawerHeader>

          <Stack component='nav' aria-label='Hovedmenu' sx={{ mt: 1 }}>
            {NAV_ITEMS.map(({ to, label }) => (
              <DrawerLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                $active={pathname === to}
              >
                {label}
              </DrawerLink>
            ))}
          </Stack>

          <Box sx={{ flex: 1 }} />

          <Divider sx={{ borderColor: alpha(theme.palette.brand.sand, 0.6) }} />

          <DrawerEyebrow>Kontakt</DrawerEyebrow>
          <Stack gap={1.25} sx={{ mb: 2.5 }}>
            <Link href={`tel:${PHONE.replace(/\s/g, '')}`} sx={drawerContactSx(theme)}>
              <PhoneIcon sx={{ fontSize: 17 }} />
              {PHONE}
            </Link>
            <Link href={`mailto:${EMAIL}`} sx={drawerContactSx(theme)}>
              <EmailIcon sx={{ fontSize: 17 }} />
              {EMAIL}
            </Link>
          </Stack>

          <Stack direction='row' gap={1.5} sx={{ mb: 2.5 }}>
            <Link href={FACEBOOK} target='_blank' rel='noopener noreferrer'
              aria-label='Facebook' sx={drawerSocialSx(theme)}>
              <FacebookIcon sx={{ fontSize: 18 }} />
            </Link>
            <Link href={INSTAGRAM} target='_blank' rel='noopener noreferrer'
              aria-label='Instagram' sx={drawerSocialSx(theme)}>
              <InstagramIcon sx={{ fontSize: 18 }} />
            </Link>
          </Stack>

          <Box onClick={() => setOpen(false)} sx={{ '& a, & button': { width: '100%' } }}>
            <BookingButton />
          </Box>
        </DrawerInner>
      </Drawer>
    </Box>
    {/* In-flow spacer pushes content below the solid navbar (mobile/tablet, non-landing) */}
    {forceSolid && <Box sx={{ height: 115 }} aria-hidden='true' />}
    </>
  )
}

const drawerContactSx = (theme: Theme) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '15px',
  textDecoration: 'none',
  color: theme.palette.brand.earth,
  transition: 'color 0.2s',
  '& svg': { color: theme.palette.brand.fjord },
  '&:hover': { color: theme.palette.brand.fjord },
})

const drawerSocialSx = (theme: Theme) => ({
  display: 'inline-flex',
  padding: '8px',
  borderRadius: '50%',
  color: theme.palette.brand.fjord,
  border: `1px solid ${alpha(theme.palette.brand.sand, 0.6)}`,
  transition: 'color 0.2s, border-color 0.2s',
  '&:hover': { color: theme.palette.brand.fjord, borderColor: theme.palette.brand.fjord },
})

const DrawerInner = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '20px 24px 28px',
  boxSizing: 'border-box',
})

const DrawerHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
})

const DrawerBrand = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  '& img': { width: 40, height: 'auto' },
  '& span': {
    fontFamily: "'Raleway', Georgia, serif",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 1.2,
    color: theme.palette.brand.ink,
  },
}))

const DrawerEyebrow = styled('span')(({ theme }) => ({
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '4px',
  textTransform: 'uppercase',
  color: theme.palette.brand.fjord,
  margin: '20px 0 12px',
}))

const DrawerLink = styled(RouterLink, {
  shouldForwardProp: prop => prop !== '$active',
})<{ $active: boolean }>(({ theme, $active }) => ({
  display: 'block',
  padding: '14px 0',
  fontSize: 18,
  fontWeight: 700,
  letterSpacing: '0.04em',
  textDecoration: 'none',
  color: $active ? theme.palette.brand.fjord : theme.palette.brand.ink,
  borderBottom: `1px solid ${alpha(theme.palette.brand.sand, 0.45)}`,
  transition: 'color 0.2s',
  '&:hover': { color: theme.palette.brand.fjord },
}))

const NavLink = styled(RouterLink, {
  shouldForwardProp: prop => prop !== '$scrolled',
})<{ $scrolled: boolean }>(({ $scrolled }) => ({
  //color: $scrolled ? theme.palette.primary.main : theme.palette.primary.contrastText,
  color: $scrolled ? "black" : "#fff",
  textDecoration: 'none',
  fontSize: 16,
  fontWeight: 700,
  letterSpacing: '0.04em',
  textTransform: 'none',
  textShadow: $scrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.4)',
  transition: 'opacity 0.2s, color 0.3s',
  display: 'inline-flex',
  alignItems: 'center',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -2,
    left: 0,
    right: 0,
    height: '1.5px',
    backgroundColor: 'currentColor',
    transform: 'scaleX(0)',
    transformOrigin: 'left center',
    transition: 'transform 0.25s ease',
  },
  '&:hover': { opacity: 1 },
  '&:hover::after': { transform: 'scaleX(1)' },
  '@media (max-width: 900px)': { fontSize: 11 }
}))
