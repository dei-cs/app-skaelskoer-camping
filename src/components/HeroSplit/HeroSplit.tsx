import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const Section = styled('section')({
  display: 'flex',
  minHeight: 480,
  '@media (max-width: 768px)': {
    flexDirection: 'column'
  }
})

const ImagePane = styled('div')({
  width: '50%',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  },
  '@media (max-width: 768px)': {
    width: '100%',
    minHeight: 300
  }
})

const TextPane = styled('div')({
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '48px',
  background: '#fff',
  gap: '16px',
  '@media (max-width: 768px)': {
    width: '100%',
    padding: '40px 24px'
  }
})

export default function HeroSplit () {
  return (
    <Section sx={{ display: "flex", alignItems: 'center', mx: 'auto', maxWidth: '1200px' }}>
      <ImagePane sx={{ maxWidth: "600px", maxHeight: "600px" }}>
        <img src='https://placehold.co/600x600' alt='Placeholder billede' />
      </ImagePane>
      <TextPane>
        {/* <Typography variant='h3'>Velkommen til Skælskør Nor Camping</Typography> */}
        <Typography variant='body1' sx={{ textAlign: "justify", fontSize: 20 }}>
          Elsker du om at vågne op til frisk luft og skøn natur? Eller friheden
          ved at tage på campingferie i dit helt eget tempo? På vores
          campingplads har vi plads til alle – både de helt garvede campister
          eller dig, der gerne vil prøve det for første gang. Book med det samme
          her. (link til booking) Tag din campingvogn, telt eller autocamper med
          eller lej et af vores hyggelige glampingtelte eller feriehytter. Du
          kan komme for en enkelt nat, en dejlig lang sommerferie eller få din
          faste plads og nyde campinglivet hele året rundt. Skælskør Nor Camping
          ligger i et idyllisk område lige ved Noret i Skælskør, samt Skælskør
          Lystskov, her mulighed for gode vandreture eller tag en Kano/Kajak tur
          på Noret. Kobæk Strand er vores nabo (1,2 km) hvor du finder en af de
          bedste badestrande med fantastisk badebro (Blåflag)Her kan du slappe
          af ved Stranden, tage på opdagelse i den hyggelige havneby, Skælskør
          eller nyde solnedgangen direkte fra campingpladsen.
        </Typography>
        {/* CTA-knap (aktiver ved behov):
        <Button variant="contained" size="large" sx={{ alignSelf: 'flex-start', mt: 1 }}>
          Læs mere
        </Button>
        */}
      </TextPane>
    </Section>
  )
}
