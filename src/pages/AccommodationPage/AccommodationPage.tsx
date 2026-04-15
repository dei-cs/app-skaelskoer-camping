import Navbar from '../../components/Navbar/Navbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function AccommodationPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* pt: 106px, exact offset of the navbar height to ensure content starts just below it */}
        <Box sx={{ pt: '106px', px: { xs: 2, sm: 5 }, maxWidth: 1200, mx: 'auto' }}>
          {/* Content sections go here */}
        </Box>
      </main>
    </>
  )
}
