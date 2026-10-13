import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import IntroSection from '../../components/IntroSection/IntroSection'
import SeasonalClosed from '../../components/SeasonalClosed/SeasonalClosed'
import PhotoCollage from '../../components/PhotoCollage/PhotoCollage'
import PageFooter from '../../components/PageFooter/PageFooter'

// Season toggle: true shows the regular intro, false shows the winter-closed notice.
const Open = false

export default function LandingPage () {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {Open ? <IntroSection /> : <SeasonalClosed />}
        <PhotoCollage />
        <PageFooter />
      </main>
    </>
  )
}
