import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { styled } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SectionWrapper, SectionInner } from '../SectionWrapper/SectionWrapper'
import type { AccommodationCard } from '../../i18n/types'

import actionCampingvogn from '../../assets/images/action-campingvogn.webp'
import actionAutocamper from '../../assets/images/action-autocamper.webp'
import actionTelt from '../../assets/images/action-telt.webp'
import actionCabin from '../../assets/images/action-cabin.webp'

const CARD_ASSETS: { href: string; imageSrc: string; zoomImage?: boolean }[] = [
  { href: '/overnatning/campingvogn', imageSrc: actionCampingvogn, zoomImage: true },
  { href: '/overnatning/autocamper', imageSrc: actionAutocamper },
  { href: '/overnatning/telt', imageSrc: actionTelt },
  { href: '/overnatning/hytter', imageSrc: actionCabin, zoomImage: true },
]

export default function AccommodationCardGrid() {
  const { t } = useTranslation()
  const cards = t('accommodation.cards', { returnObjects: true }) as AccommodationCard[]
  return (
    <SectionWrapper backgroundColor="default">
      <Inner>
        <Grid container spacing={3}>
          {CARD_ASSETS.map((asset, i) => (
            <Grid key={asset.href} size={{ xs: 12, sm: 6, md: 3 }}>
              <StyledCard>
                <StyledCardActionArea component={RouterLink} to={asset.href}>
                  <Box sx={{ height: 240, overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={asset.imageSrc}
                      alt={cards[i].imageAlt}
                      sx={{
                        filter: 'grayscale(0.05) brightness(0.95) contrast(0.85)',
                        ...(asset.zoomImage && { transform: 'scale(1.20)' }),
                      }}
                    />
                  </Box>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, p: 2.5 }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {cards[i].title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, lineHeight: 1.6 }}>
                      {cards[i].description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                      <MereInfoBadge>
                        {t('accommodation.moreInfo')}
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
  border: 'none',
  borderRadius: 12,
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 16px 40px rgba(44,95,110,0.14)',
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
  backgroundColor: 'transparent',
  color: theme.palette.primary.main,
  fontSize: 13,
  fontWeight: 600,
  padding: 0,
  paddingBottom: '2px',
  borderRadius: 0,
  borderBottom: `1.5px solid ${theme.palette.primary.main}`,
  letterSpacing: '0.04em',
  gap: 4,
  transition: 'color 0.2s, border-bottom-color 0.2s',
  '.MuiCardActionArea-root:hover &': {
    color: theme.palette.primary.dark,
    borderBottomColor: theme.palette.primary.dark,
  },
}))
