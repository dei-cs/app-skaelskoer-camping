import { Box, Typography } from '@mui/material'
import type { ReactNode } from 'react'

const fadeUp = `
  @keyframes infoFadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`

interface SectionHeadingProps {
  eyebrow: string
  title: string
  intro?: ReactNode
}

/** Eyebrow + display heading + optional intro, matching the landing page rhythm. */
export function SectionHeading({ eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <Box sx={{ maxWidth: 720, mb: { xs: 4, md: 5 } }}>
      <style>{fadeUp}</style>
      <Typography
        component="span"
        sx={(theme) => ({
          display: 'block',
          fontFamily: "'Raleway', sans-serif",
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: theme.palette.brand.fjord,
          mb: 2,
          animation: 'infoFadeUp 0.6s ease both',
        })}
      >
        {eyebrow}
      </Typography>
      <Typography
        component="h2"
        sx={(theme) => ({
          fontFamily: "'Raleway', Georgia, serif",
          fontWeight: 700,
          fontSize: 'clamp(22px, 5.5vw, 48px)',
          letterSpacing: '-0.5px',
          lineHeight: 1.1,
          // Break very long Danish compounds rather than overflow the page.
          color: theme.palette.brand.ink,
          mb: intro ? 3 : 0,
          animation: 'infoFadeUp 0.6s ease both',
          animationDelay: '0.08s',
        })}
      >
        {title}
      </Typography>
      {intro && (
        <Typography
          sx={(theme) => ({
            fontFamily: "'Raleway', sans-serif",
            fontSize: '17px',
            lineHeight: 1.75,
            color: theme.palette.brand.earth,
            animation: 'infoFadeUp 0.6s ease both',
            animationDelay: '0.16s',
          })}
        >
          {intro}
        </Typography>
      )}
    </Box>
  )
}

interface SubHeadingProps {
  children: ReactNode
}

/** A grouping label that sits above a cluster of InfoBlocks. */
export function SubHeading({ children }: SubHeadingProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
      <Typography
        component="h3"
        sx={(theme) => ({
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 700,
          // Smaller floor so long single words (e.g. "leveringsbetingelser")
          // fit narrow phones without overflowing the page.
          fontSize: 'clamp(15px, 4vw, 22px)',
          letterSpacing: '0.2px',
          color: theme.palette.brand.fjord,
          // Phones: let long headings wrap instead of overflowing the page
          // (the overflow shifts the fixed navbar off-screen). Keep on one
          // line from sm up, where the divider sits beside it.
          whiteSpace: { xs: 'normal', sm: 'nowrap' },
        })}
      >
        {children}
      </Typography>
      <Box
        sx={(theme) => ({
          flex: 1,
          height: '1px',
          backgroundColor: theme.palette.brand.sand,
          opacity: 0.6,
        })}
      />
    </Box>
  )
}

interface InfoBlockProps {
  title: string
  children: ReactNode
}

/** A single sub-section: a title sitting above flowing body text. */
export function InfoBlock({ title, children }: InfoBlockProps) {
  return (
    <Box component="article" sx={{ maxWidth: 760 }}>
      <Typography
        component="h4"
        sx={(theme) => ({
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 700,
          fontSize: '17px',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: theme.palette.brand.fjord,
          mb: 1.5,
        })}
      >
        {title}
      </Typography>
      <Box
        sx={(theme) => ({
          fontFamily: "'Raleway', sans-serif",
          fontSize: '16px',
          lineHeight: 1.8,
          color: theme.palette.brand.bark,
          whiteSpace: 'pre-wrap',
          '& strong': { color: theme.palette.brand.earth, fontWeight: 600 },
        })}
      >
        {children}
      </Box>
    </Box>
  )
}
