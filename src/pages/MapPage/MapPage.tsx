import Navbar from '../../components/Navbar/Navbar'
import PageHero from '../../components/PageHero/PageHero'
import CampingMapSection from '../../components/CampingMapSection/CampingMapSection'
import PageFooter from '../../components/PageFooter/PageFooter'
import heroImg from '../../assets/images/decorate-noret.webp'

export default function MapPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Campingkortet"
          imageSrc={heroImg}
          imageAlt="Skælskør Nor Camping"
        />
        <CampingMapSection />
        <PageFooter />
      </main>
    </>
  )
}
