import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { styled, alpha } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import { SectionWrapper, SectionInner } from '../SectionWrapper/SectionWrapper'

import actionCampingvogn from '../../assets/images/action-campingvogn.webp'
import actionAutocamper from '../../assets/images/action-autocamper.webp'
import actionTelt from '../../assets/images/action-telt.webp'
import actionCabin from '../../assets/images/action-cabin.webp'

interface CardItem {
  title: string
  description: string
  href: string
  imageSrc: string
  imageAlt: string
  zoomImage?: boolean
}

const CARDS: CardItem[] = [
  {
    title: 'Campingvogn',
    description: 'Se priser og udvalg af pladser til campingvogn.',
    href: '/overnatning/campingvogn',
    imageSrc: actionCampingvogn,
    imageAlt: 'Se priser og udvalg af pladser til campingvogn.',
    zoomImage: true,
  },
  {
    title: 'Autocamper',
    description: 'Se priser og udvalg af pladser til autocamper.',
    href: '/overnatning/autocamper',
    imageSrc: actionAutocamper,
    imageAlt: 'Se priser og udvalg af pladser til autocamper.',
  },
  {
    title: 'Telt',
    description: 'Se priser og udvalg af pladser til telte.',
    href: '/overnatning/telt',
    imageSrc: actionTelt,
    imageAlt: 'Se priser og udvalg af pladser til telte.',
  },
  {
    title: 'Hytter',
    description: 'Se priser og udvalg af hyggelige ferie-hytter.',
    href: '/overnatning/hytter',
    imageSrc: actionCabin,
    imageAlt: 'Se priser og udvalg af hyggelige ferie-hytter.',
    zoomImage: true,
  },
]

export default function AccommodationCardGrid() {
  return (
    <SectionWrapper backgroundColor="default">
      <Inner>
        <Grid container spacing={3}>
          {CARDS.map(card => (
            <Grid key={card.href} size={{ xs: 12, sm: 6, md: 3 }}>
              <StyledCard>
                <StyledCardActionArea component={RouterLink} to={card.href}>
                  <Box sx={{ height: 200, overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={card.imageSrc}
                      alt={card.imageAlt}
                      sx={{
                        filter: 'grayscale(0.05) brightness(0.95) contrast(0.85)',
                        ...(card.zoomImage && { transform: 'scale(1.20)' }),
                      }}
                    />
                  </Box>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, p: 2.5 }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, lineHeight: 1.6 }}>
                      {card.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                      <MereInfoBadge>
                        Mere info
                        <ArrowForwardIcon sx={{ fontSize: 14, ml: 0.5 }} />
                      </MereInfoBadge>
                    </Box>
                  </CardContent>
                </StyledCardActionArea>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Inner>
    </SectionWrapper>
  )
}

const Inner = styled(SectionInner)({
  padding: '48px 24px',
  '@media (max-width: 768px)': {
    padding: '32px 16px',
  },
})

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
  borderRadius: 8,
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: theme.shadows[6],
  },
}))

const StyledCardActionArea = styled(CardActionArea)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  height: '100%',
  textDecoration: 'none',
}) as typeof CardActionArea

const MereInfoBadge = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: 13,
  fontWeight: 700,
  padding: '5px 10px',
  borderRadius: 4,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
}))
