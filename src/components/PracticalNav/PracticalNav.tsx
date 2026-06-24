import { useEffect, useState } from 'react'
import { styled, alpha } from '@mui/material/styles'

const sections = [
  { id: 'reglement', eyebrow: 'Godt at vide', label: 'Reglement' },
  { id: 'betingelser', eyebrow: 'Det med småt', label: 'Betingelser' },
  { id: 'persondatapolitik', eyebrow: 'Privatliv', label: 'Persondatapolitik' },
] as const

const SECTION_IDS: string[] = sections.map((s) => s.id)

const NAVBAR_OFFSET = 115
const SCROLL_PADDING = 24
const STEPPER_HEIGHT = 56
const RAIL_BREAKPOINT = '(min-width: 1620px)'

function useActiveSection() {
  const [active, setActive] = useState<string>(SECTION_IDS[0])

  useEffect(() => {
    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        })
        // Pick the lowest section currently in the band so the active item
        // advances as soon as the next section enters, not when the previous
        // one finally leaves.
        let current: string | undefined
        for (const id of SECTION_IDS) if (visible.has(id)) current = id
        if (current) setActive(current)
      },
      { rootMargin: '-130px 0px -65% 0px', threshold: 0 },
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return active
}

function scrollToSection(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
  const el = document.getElementById(id)
  if (!el) return
  event.preventDefault()

  const onStepper = !window.matchMedia(RAIL_BREAKPOINT).matches
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const offset = NAVBAR_OFFSET + SCROLL_PADDING + (onStepper ? STEPPER_HEIGHT : 0)
  const top = el.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' })
}

export default function PracticalNav() {
  const active = useActiveSection()
  const activeIndex = SECTION_IDS.indexOf(active)

  return (
    <>
      <RailWrapper>
        <RailNav aria-label="Sektioner på siden">
          <RailHeading>På denne side</RailHeading>
          <RailList>
            {sections.map((section, index) => {
              const isActive = section.id === active
              return (
                <RailItem key={section.id}>
                  {index < sections.length - 1 && (
                    <Connector data-filled={index < activeIndex} />
                  )}
                  <Dot data-on={index <= activeIndex} />
                  <RailLink
                    href={`#${section.id}`}
                    data-active={isActive}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={(e) => scrollToSection(e, section.id)}
                  >
                    <RailEyebrow>{section.eyebrow}</RailEyebrow>
                    <RailLabel>{section.label}</RailLabel>
                  </RailLink>
                </RailItem>
              )
            })}
          </RailList>
        </RailNav>
      </RailWrapper>

      <StepperWrapper aria-label="Sektioner på siden">
        <StepperInner>
          {sections.map((section) => {
            const isActive = section.id === active
            return (
              <StepperLink
                key={section.id}
                href={`#${section.id}`}
                data-active={isActive}
                aria-current={isActive ? 'true' : undefined}
                onClick={(e) => scrollToSection(e, section.id)}
              >
                {section.label}
              </StepperLink>
            )
          })}
        </StepperInner>
      </StepperWrapper>
    </>
  )
}

/* ---- Vertical trail rail (wide screens, lives in the left gutter) ---- */

const RailWrapper = styled('div')(() => ({
  position: 'fixed',
  top: '50%',
  left: 0,
  transform: 'translateY(-50%)',
  width: 'calc((100vw - 1180px) / 2)',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingLeft: '16px',
  // Gap to the text grows with the gutter: ~0 right after the rail first fits,
  // up to a 100px cap when there is room to spare.
  paddingRight: 'clamp(0px, calc((100vw - 1180px) / 2 - 216px), 180px)',
  zIndex: 1000,
  pointerEvents: 'none',
  '@media (max-width: 1619px)': { display: 'none' },
}))

const RailNav = styled('nav')({
  pointerEvents: 'auto',
  maxWidth: 200,
})

const RailHeading = styled('p')(({ theme }) => ({
  margin: '0 0 20px',
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '3px',
  textTransform: 'uppercase',
  color: theme.palette.brand.bark,
}))

const RailList = styled('ol')({
  listStyle: 'none',
  margin: 0,
  padding: 0,
})

const RailItem = styled('li')({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '14px 1fr',
  columnGap: 16,
  paddingBottom: 30,
  '&:last-of-type': { paddingBottom: 0 },
})

const Connector = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 6,
  top: 16,
  bottom: -14,
  width: 2,
  borderRadius: 2,
  background: theme.palette.brand.sand,
  transition: 'background-color 0.3s ease',
  "&[data-filled='true']": { background: theme.palette.brand.fjord },
  '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
}))

const Dot = styled('span')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  width: 14,
  height: 14,
  marginTop: 3,
  borderRadius: '50%',
  background: theme.palette.background.paper,
  border: `2px solid ${theme.palette.brand.sand}`,
  transition: 'background-color 0.3s ease, border-color 0.3s ease',
  "&[data-on='true']": {
    background: theme.palette.brand.fjord,
    borderColor: theme.palette.brand.fjord,
  },
  '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
}))

const RailLink = styled('a')(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  cursor: 'pointer',
  marginTop: -2,
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.brand.fjord}`,
    outlineOffset: 4,
    borderRadius: 2,
  },
}))

const RailEyebrow = styled('span')(({ theme }) => ({
  display: 'block',
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: '2px',
  textTransform: 'uppercase',
  color: theme.palette.brand.bark,
  marginBottom: 3,
}))

const RailLabel = styled('span')(({ theme }) => ({
  display: 'block',
  fontFamily: "'Raleway', sans-serif",
  fontSize: 15,
  fontWeight: 600,
  lineHeight: 1.3,
  color: theme.palette.brand.earth,
  transition: 'color 0.25s ease',
  "[data-active='true'] &": {
    color: theme.palette.brand.fjord,
  },
  '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
}))

/* ---- Horizontal stepper (narrow screens, sticky under the navbar) ---- */

const StepperWrapper = styled('nav')(({ theme }) => ({
  position: 'sticky',
  top: NAVBAR_OFFSET,
  zIndex: 1050,
  background: alpha(theme.palette.background.default, 0.97),
  backdropFilter: 'blur(8px)',
  borderBottom: `1px solid ${alpha(theme.palette.brand.sand, 0.5)}`,
  // Shown on phones and tablets; replaced by the vertical rail on wide screens.
  '@media (min-width: 1620px)': { display: 'none' },
}))

const StepperInner = styled('div')({
  maxWidth: 1200,
  margin: '0 auto',
  display: 'flex',
  gap: 28,
  overflowX: 'auto',
  padding: '0 24px',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': { display: 'none' },
  '@media (min-width: 600px)': { padding: '0 32px' },
})

const StepperLink = styled('a')(({ theme }) => ({
  position: 'relative',
  flex: '0 0 auto',
  padding: '15px 2px',
  fontFamily: "'Raleway', sans-serif",
  fontSize: 14,
  fontWeight: 600,
  letterSpacing: '0.3px',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  cursor: 'pointer',
  color: theme.palette.brand.earth,
  transition: 'color 0.25s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 2,
    background: theme.palette.brand.fjord,
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.25s ease',
  },
  '&:hover': { color: theme.palette.brand.fjord },
  "&[data-active='true']": { color: theme.palette.brand.fjord },
  "&[data-active='true']::after": { transform: 'scaleX(1)' },
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.brand.fjord}`,
    outlineOffset: -2,
    borderRadius: 2,
  },
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none',
    '&::after': { transition: 'none' },
  },
}))
