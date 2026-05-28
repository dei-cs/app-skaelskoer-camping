import Navbar from '../../components/Navbar/Navbar'
import PageHero from '../../components/PageHero/PageHero'
import CampingMapSection from '../../components/CampingMapSection/CampingMapSection'
import heroImg from '../../assets/images/hero-kilde-huset.webp'

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
      </main>
    </>
  )
}
