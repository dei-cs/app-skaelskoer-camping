import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Navbar from './components/Navbar'
import Hero from './components/HeroLanding/Hero'
import HeroSplit from './components/HeroSplit/HeroSplit'

const BelowFold = styled('section')({
  padding: '80px 40px',
  textAlign: 'center',
  maxWidth: 800,
  margin: '0 auto',
})

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HeroSplit />
        <BelowFold>
          <Typography variant="h2" gutterBottom>
            Velkommen til Skælskør Camping
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Mere indhold kommer snart.
          </Typography>
        </BelowFold>
      </main>
    </>
  )
}

export default App
