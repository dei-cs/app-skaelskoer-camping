import { styled } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import { SectionInner } from '../SectionWrapper/SectionWrapper'
import Typography from '@mui/material/Typography'
import NightShelterOutlinedIcon from '@mui/icons-material/NightShelterOutlined'
import SellOutlinedIcon from '@mui/icons-material/SellOutlined'
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import type { SvgIconComponent } from '@mui/icons-material'

interface NavActionGridProps {
  backgroundColor?: 'default' | 'paper'
}

interface NavItem {
  label: string
  to: string
  Icon: SvgIconComponent
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Overnatning', to: '/overnatning', Icon: NightShelterOutlinedIcon },
  { label: 'Priser',      to: '#priser',      Icon: SellOutlinedIcon         },
  { label: 'Praktisk',   to: '#praktisk',    Icon: ChecklistOutlinedIcon    },
  { label: 'Kontakt',    to: '#kontakt',      Icon: MailOutlineIcon          },
]

// Swap icons → images later by replacing GridItem internals with an <img> background.
export default function NavActionGrid({ backgroundColor = 'default' }: NavActionGridProps) {
  return (
    <Wrapper $backgroundColor={backgroundColor}>
      <Inner>
        <Grid container spacing={4}>
          {NAV_ITEMS.map(({ label, to, Icon }) => (
            <Grid key={to} size={{ xs: 6, sm: 3 }}>
              <GridItem to={to}>
                <Icon sx={{ fontSize: 48 }} />
                <Typography variant='subtitle1' fontWeight={700}>
                  {label}
                </Typography>
              </GridItem>
            </Grid>
          ))}
        </Grid>
      </Inner>
    </Wrapper>
  )
}

// Styled components
const Wrapper = styled('section')<{ $backgroundColor: 'default' | 'paper' }>(
  ({ theme, $backgroundColor }) => ({
    backgroundColor:
      $backgroundColor === 'paper'
        ? theme.palette.background.paper
        : theme.palette.background.default,
    width: '100%',
  })
)

const Inner = styled(SectionInner)({
  padding: '48px 0px',
  '@media (max-width: 768px)': {
    padding: '24px 0px',
  },
})

const GridItem = styled(RouterLink)(({ theme }) => ({
  width: '100%',
  aspectRatio: '1',
  borderRadius: "5px",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[6],
  },
}))
