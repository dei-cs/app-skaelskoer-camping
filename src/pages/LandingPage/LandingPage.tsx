import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import HeroSplit from '../../components/HeroSplit/HeroSplit'
import SecondaryHeroSplit from '../../components/SecondaryHeroSplit/SecondaryHeroSplit'
import heroSplitImage from '../../assets/images/hero-split-img.webp'

const BelowFold = styled('section')({
  padding: '80px 40px',
  textAlign: 'center',
  maxWidth: 800,
  margin: '0 auto'
})

export default function LandingPage () {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HeroSplit
          title='Hvad kan du forvente?'
          paragraphs={[
            'Elsker du at vågne op til frisk luft og skøn natur? Eller friheden ved at tage på campingferie i dit helt eget tempo? På vores campingplads har vi plads til alle – både de helt garvede campister eller dig, der gerne vil prøve det for første gang.',
            'Tag din campingvogn, telt eller autocamper med, eller lej et af vores hyggelige glampingtelte eller feriehytter. Du kan komme for en enkelt nat, en dejlig lang sommerferie eller få din faste plads og nyde campinglivet hele året rundt.',
            'Skælskør Nor Camping ligger i et idyllisk område lige ved Noret i Skælskør, samt Skælskør Lystskov, her mulighed for gode vandreture eller tag en Kano/Kajak tur på Noret. Kobæk Strand er vores nabo (1,2 km) hvor du finder en af de bedste badestrande med fantastisk badebro (Blåflag). Her kan du slappe af ved Stranden, tage på opdagelse i den hyggelige havneby, Skælskør eller nyde solnedgangen direkte fra campingpladsen.'
          ]}
          imageSrc={heroSplitImage}
          imageAlt='Placeholder billede'
          showActions={false}
        />
        <SecondaryHeroSplit
          backgroundColor='paper'
          title='Camping præcis som du kender det'
          paragraphs={[
            'Vi byder velkommen til en campingplads, der passer til alle. Uanset om du er en erfaren camper eller prøver det for første gang, finder du den perfekte plads hos os.',
            'Tag din campingvogn, telt eller autocamper med – eller lej et af vores hyggelige glampingtelte. Vi har plads til alle og tilbyder de bedste faciliteter for en uforglemmelig ferie.'
          ]}
          imageSrc={heroSplitImage}
          imageAlt='Campingpladsen set fra luften'
        />
        <BelowFold>
          <Typography variant='h2' gutterBottom>
            Velkommen til Skælskør Camping
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            Mere indhold kommer snart.
          </Typography>
        </BelowFold>
      </main>
    </>
  )
}
