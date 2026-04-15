import { styled } from '@mui/material/styles'

export const SectionWrapper = styled('div', {
  shouldForwardProp: prop => prop !== 'backgroundColor',
})<{ backgroundColor?: 'default' | 'paper' }>(({ theme, backgroundColor = 'default' }) => ({
  background: theme.palette.background[backgroundColor],
  paddingTop: '25px',
  paddingBottom: '25px',
}))

export const SectionInner = styled('div')({
  maxWidth: 1200,
  margin: '0 auto',
})
