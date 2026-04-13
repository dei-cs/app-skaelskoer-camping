import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import SecondaryHeroSplit from '../../components/SecondaryHeroSplit/SecondaryHeroSplit'
import LocationSection from '../../components/LocationSection/LocationSection'
import NavActionGrid from '../../components/NavActionGrid/NavActionGrid'
import SecondaryHeroSplitImage from '../../assets/images/secondary-hero-split-img.webp'

export default function LandingPage () {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SecondaryHeroSplit
          title='Camping præcis som du kender det'
          paragraphs={[
            'Vi byder velkommen til en campingplads, der passer til alle. Uanset om du er en erfaren camper eller prøver det for første gang, finder du den perfekte plads hos os.',
            'Tag din campingvogn, telt eller autocamper med – eller lej et af vores hyggelige glampingtelte. Vi har plads til alle og tilbyder de bedste faciliteter for en uforglemmelig ferie.'
          ]}
          imageSrc={SecondaryHeroSplitImage}
          imageAlt='Campingpladsen set fra luften'
        />
        <NavActionGrid />
        <LocationSection
          title='Find os her'
          mapEmbedSrc='https://maps.google.com/maps?q=Sk%C3%A6lsk%C3%B8r+Nor+Camping&output=embed'
          openingHours={[
            { label: 'Sommer (1. jun – 31. aug)', hours: '08:00–22:00' },
            { label: 'Forår / Efterår', hours: '09:00–20:00' },
          ]}
          address='Kildehusvej 1, 4230 Skælskør'
          phone='20 20 41 00'
          email='info@skaelskoercamping.dk'
        />
      </main>
    </>
  )
}
