import { Stack } from '@mui/material'
import { SectionInner, SectionWrapper } from '../SectionWrapper/SectionWrapper'
import { InfoBlock, SectionHeading } from '../InfoSection/InfoSectionElements'

const ruleCategories = [
  {
    title: 'Ophold på pladsen',
    content:
      'Lejrchefen og hans assistent(er) har ansvaret for ro og orden og er til rådighed, hvis der opstår problemer. Lejrchefens anvisninger skal altid følges.\n\nVi beder dig vise andre campinggæster hensyn og gør opmærksom på, at støjende adfærd ikke er tilladt. I tidsrummet kl. 23-07 skal der være ro på pladsen.\n\nUnder opholdet skal al kørsel indskrænkes til det mest nødvendige, og denne nødvendige kørsel skal altid foregå i skridttempo (under 15 km/t).',
  },
  {
    title: 'Telte og campingvogne',
    content:
      'Kun almindelige telte og fortelte til campingvogne må benyttes. Telthuse med faste vægge, vinduer og døre er ikke tilladt. Campingvogne skal være mobile, dvs. indregistreret til kørsel efter færdselsloven eller være forsynet med Campingrådets grønne ID-nr.\n\nDet er efter lejrchefens anvisning tilladt at opsætte et opbevarings-telt på ca. 3 m². De i handlen normalt forekomne læsejl må opstilles – privat hegning herudover af enhedspladsens er ikke tilladt. Gravning på enhedspladsen må kun finde sted efter aftale med lejrchefen.',
  },
  {
    title: 'Forbud og regler',
    content:
      'Brug af enhver form for våben og fyrværkeri er forbudt på pladsen.\n\nHendel på pladsen accepteres kun, hvis lejrchefens tilladelse foreligger.\n\nFællesfaciliteter, dvs. toiletter, vaskerum, køkken o.l., skal efterlades i samme stand, som du ønsker at forefinde dem, dvs. rene og ryddelige.\n\nDe på pladsen opstillede affaldsbeholdere skal altid benyttes og kun til husholdningsaffald, alt andet skal i selv bortskaffe. Bilvask må ikke finde sted.',
  },
  {
    title: 'Leg og boldspil',
    content:
      'De fleste campingpladser har egen legeplads og boldbane. Hjælp dine børn med at finde de steder, hvor der må leges eller spilles bold. Boldspil må ikke finde sted mellem telte og campingvogne.',
  },
  {
    title: 'Hunde',
    content:
      'Hunde skal føres i kort line. De må ikke gø og støje unødigt, og luftning skal finde sted uden for pladsens område. Hav altid en plasticpose med, hvis uheldet alligevel er ude.',
  },
  {
    title: 'Afrejse',
    content:
      'Du skal meddele lejrchefen dit afrejsetidspunkt i så god tid som muligt, især i perioder med kø.\n\nMed mindre andet er aftalt med lejrchefen, skal din plads eller hytte være ryddet og rengjort senest kl. 12 af hensyn til nyankomne gæster.',
  },
  {
    title: 'Ansvar',
    content:
      'Campingpladsejer og lejrchef påtager sig intet ansvar for beskadigelse eller bortkomst af campinggæsternes ejendele. Den, der beskadiger bygninger, materiel eller medcampisters ejendele, kan gøres ansvarlig efter de almindelige erstatningsregler. De fleste camping gæster er naturligvis hensynsfulde i deres optræden. Sanktioner mod de få, der ikke overholder pladsens reglement, kan være bortvisning.',
  },
  {
    title: 'Natur og miljø',
    content:
      'Vi er beliggende midt i naturen, og vi beder dig vise hensyn og værne om både natur og miljø – begge dele er afhængig af din beskyttelse.',
  },
  {
    title: 'Sæsonpladser',
    content:
      'For campinggæster, der med campingpladsen har indgået aftale om leje af sæsonplads, gælder mere udførlige regler for campingvognenes mobilitet, enhedspladsernes indretning og ID-nr.-ordning.',
  },
  {
    title: 'El-bil opladning',
    content:
      'Det er kun tilladt at oplade på pladsens anførte opladningsplads. Alle øvrige steder er det strengt forbudt at oplade sin el-bil på pladsen. Dette skyldes vores installation ikke er dimensioneret til det.',
  },
]

export default function RulesetSection() {
  return (
    <SectionWrapper id="reglement">
      <SectionInner sx={{ px: { xs: '24px', md: '32px' } }}>
        <SectionHeading
          eyebrow="Godt at vide"
          title="Reglement"
          intro="På en campingplads bor mange mennesker på et begrænset areal. De har forskellige vaner, og det er netop en del af charmen ved camping. Men det betyder også, at der nødvendigvis må gælde nogle få, enkle regler, så man undgår, at nogle campister er til gene for andre."
        />

        <Stack spacing={{ xs: 4, md: 5 }}>
          {ruleCategories.map((category) => (
            <InfoBlock key={category.title} title={category.title}>
              {category.content}
            </InfoBlock>
          ))}
        </Stack>
      </SectionInner>
    </SectionWrapper>
  )
}
