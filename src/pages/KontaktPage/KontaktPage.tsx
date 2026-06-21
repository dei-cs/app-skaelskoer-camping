import Navbar from '../../components/Navbar/Navbar'
import PageHero from '../../components/PageHero/PageHero'
import ContactSection from '../../components/ContactSection/ContactSection'
import PageFooter from '../../components/PageFooter/PageFooter'
import heroKontaktImg from '../../assets/images/decorate-noret.webp'

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Kontakt"
          imageSrc={heroKontaktImg}
          imageAlt="Kildehuset på Skælskør Nor Camping"
        />
        <ContactSection />
        <PageFooter />
      </main>
    </>
  )
}
