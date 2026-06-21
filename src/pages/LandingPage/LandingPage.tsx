import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import IntroSection from '../../components/IntroSection/IntroSection'
import PhotoCollage from '../../components/PhotoCollage/PhotoCollage'
import PageFooter from '../../components/PageFooter/PageFooter'

export default function LandingPage () {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <PhotoCollage />
        <PageFooter />
      </main>
    </>
  )
}
