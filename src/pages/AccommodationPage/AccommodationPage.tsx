import Navbar from '../../components/Navbar/Navbar'
import PageHero from '../../components/PageHero/PageHero'
import AccommodationCardGrid from '../../components/AccommodationCardGrid/AccommodationCardGrid'
import heroKilde from '../../assets/images/hero-kilde.png'

export default function AccommodationPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Overnatning"
          subtitle="Find din plads ved vandet"
          imageSrc={heroKilde}
          imageAlt="Campingpladser ved Skælskør Nor"
        />
        <AccommodationCardGrid />
      </main>
    </>
  )
}
