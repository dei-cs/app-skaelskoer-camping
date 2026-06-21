import { styled } from '@mui/material/styles'
import DecorateGlamping from '../../assets/images/decorate-glamping.webp'
import DecorateKildehuset from '../../assets/images/decorate-kildehuset.webp'
import DecorateNoret from '../../assets/images/decorate-noret.webp'
import DecorateHytter from '../../assets/images/decorate-hytter.webp'

export default function PhotoCollage () {
  return (
    <CollageWrapper>
      <CollageGrid>
        <CollageCell sx={{ gridColumn: '1 / 4' }}>
          <CollageImage src={DecorateHytter} alt="Camping vista" />
        </CollageCell>
        <CollageCell sx={{ gridColumn: '4 / 11' }}>
          <CollageImage src={DecorateGlamping} alt="Kilde House" />
        </CollageCell>
        <CollageCell sx={{ gridColumn: '1 / 8' }}>
          <CollageImage src={DecorateNoret} alt="Hero landscape" />
        </CollageCell>
        <CollageCell sx={{ gridColumn: '8 / 11' }}>
          <CollageImage src={DecorateKildehuset} alt="Cabin accommodation" />
        </CollageCell>
      </CollageGrid>
    </CollageWrapper>
  )
}

const CollageWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  //padding: '10px',
  boxSizing: 'border-box',
  backgroundColor: theme.palette.background.default,
  marginBottom: "40px"
}))

const CollageGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridTemplateRows: '350px 350px',
  gap: '40px',
  maxWidth: '100%',
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto',
  },
})

const CollageCell = styled('div')({
  overflow: 'hidden',
  position: 'relative',
  '@media (max-width: 768px)': {
    gridColumn: '1 / -1 !important',
    height: '250px',
  },
})

const CollageImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'grayscale(0.05) brightness(0.95) contrast(0.85)',
  transition: 'transform 0.5s ease',
  display: 'block',
})
