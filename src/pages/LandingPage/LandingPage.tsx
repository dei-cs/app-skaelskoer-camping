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
          title='Camping direkte ved Noret'
          paragraphs={[
            'Elsker du at vågne op til frisk luft og smuk natur? Eller friheden ved at tage på campingferie i dit helt eget tempo?',
            'Hos os er der plads til alle - både de erfarne campister og dig, der vil prøve campinglivet for første gang.',
            'Tag din campingvogn, telt eller autocamper med – eller forkæl dig selv med et ophold i et af vores hyggelige glampingtelte eller feriehytter. Uanset om du kommer for en enkelt nat, en skøn sommerferie eller ønsker en fast plads hele sæsonen, har vi de perfekte naturskønne rammer.',
            'Skælskør Nor Camping ligger i et idyllisk område direkte ved Noret og tæt på Skælskør Lystskov, hvor du kan nyde dejlige vandreture eller tage på kano- og kajakture. Kun 1,2 km fra pladsen finder du Kobæk Strand – en af områdets bedste badestrande med Blå Flag og en fantastisk badebro.'
          ]}
          imageSrc={SecondaryHeroSplitImage}
          imageAlt='Campingpladsen set fra luften'
        />
        <NavActionGrid />
        <LocationSection
          mapEmbedSrc='https://maps.google.com/maps?q=Sk%C3%A6lsk%C3%B8r+Nor+Camping&output=embed'
          openingHours={[
            { label: 'Sommer (1. jun – 31. aug)', hours: '' },
            { label: 'Hverdage', hours: '09:00–20:00' },
            { label: 'Weekend', hours: '09:00–20:00' },
          ]}
          address='Kildehusvej 1, 4230 Skælskør'
          phone='20 20 41 00'
          email='info@skaelskoercamping.dk'
        />
      </main>
    </>
  )
}
