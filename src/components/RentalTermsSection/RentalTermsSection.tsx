import { Box, Stack, Typography } from '@mui/material'
import { SectionInner, SectionWrapper } from '../SectionWrapper/SectionWrapper'
import {
  InfoBlock,
  SectionHeading,
  SubHeading
} from '../InfoSection/InfoSectionElements'

const saleCategories = [
  {
    title: 'Booking og Betaling',
    content:
      'Alle priser er angivet i danske kroner (DKK) inkl. moms og gældende afgifter, medmindre andet er oplyst.\n\nVed online booking betales opholdet fuldt ud ved reservation. Bookingen er først bindende, når betalingen er gennemført, og gæsten har modtaget en bookingbekræftelse pr. e-mail. Hvis betalingen ikke gennemføres, annulleres reservationen automatisk.'
  },
  {
    title: 'Bookingbekræftelse',
    content:
      'Efter gennemført booking modtager gæsten en bekræftelse via e-mail. Det er gæstens ansvar at kontrollere, at oplysningerne i bekræftelsen er korrekte. Hvis bookingbekræftelsen ikke modtages kort tid efter bookingen, bedes gæsten kontakte Skælskør Nor Camping.'
  },
  {
    title: 'Ankomst og afrejse',
    content:
      'Ankomst- og afrejsetidspunkter fremgår af bookingbekræftelsen eller campingpladsens hjemmeside. Bookinger med ankomst samme dag skal foretages senest kl. 13.00 via hjemmesiden. Herefter kan booking kun ske telefonisk og forudsætter betaling inden ankomst.'
  },
  {
    title: 'Udeblivelse',
    content:
      'Hvis gæsten ikke møder op på ankomstdagen uden forudgående afbestilling, betragtes reservationen som udeblevet. Der ydes ingen refusion ved udeblivelse. Reservationen kan annulleres af Skælskør Nor Camping efter første nat uden fremmøde.'
  },
  {
    title: 'Opholdet',
    content:
      'Skælskør Nor Camping bestræber sig på, at oplysninger på hjemmesiden og i bookingsystemet er korrekte.\n\nEventuelle fejl eller mangler ved pladsen, hytten eller faciliteterne skal meddeles hurtigst muligt efter ankomst, så forholdet kan vurderes og eventuelt afhjælpes. Ved afrejse skal hytter, pladser og inventar afleveres i ryddelig og ordentlig stand. Hvis ekstra rengøring eller udbedring af skader er nødvendig som følge af gæstens brug, kan Skælskør Nor Camping opkræve betaling herfor.'
  },
  {
    title: 'Henvendelser vedrørende opholdet',
    content:
      'Hvis gæsten oplever fejl eller mangler under opholdet, bedes dette meddelt til Skælskør Nor Camping hurtigst muligt, så forholdet kan vurderes og eventuelt afhjælpes. Undlader gæsten at gøre opmærksom på forholdet under opholdet, kan dette begrænse muligheden for senere at fremsætte krav vedrørende forholdet.'
  },
  {
    title: 'Prisregulering',
    content:
      'Skælskør Nor Camping forbeholder sig retten til at regulere priserne, så de afspejler den almindelige prisudvikling og ændringer i underliggende omkostninger. Dette omfatter blandt andet tilfælde, hvor energiselskaber eller andre leverandører hæver deres priser.'
  },
  {
    title: 'Ansvar',
    content:
      'Skælskør Nor Camping kan ikke holdes ansvarlig for forhold uden for campingpladsens kontrol, herunder strømsvigt, vejrlig, myndighedspåbud, naturbegivenheder eller andre forhold, som campingpladsen ikke har indflydelse på.\n\nCampingpladsen hæfter ikke for gæsternes medbragte ejendele, køretøjer eller værdigenstande.'
  },
  {
    title: 'Personoplysninger',
    content:
      'Skælskør Nor Camping registrerer de oplysninger, som er nødvendige for at gennemføre reservationen og administrere opholdet. Oplysningerne behandles fortroligt og i overensstemmelse med gældende databeskyttelseslovgivning og videregives ikke til tredjemand, medmindre dette er nødvendigt for at gennemføre betalingen eller følger af lovgivningen.',
  },
  {
    title: 'Kontakt',
    content:
      'Har du spørgsmål til din booking eller disse betingelser, kan du kontakte Skælskør Nor Camping på telefon +45 58 19 43 84 eller e-mail info@solskinscamping.dk.',
  },
]

const cancellationTerms = [
  {
    days: 'Mere end 30 dage før ankomst',
    refund: '100% refusion',
    fee: '− kr. 250,00 administrationsgebyr'
  },
  { days: '30–14 dage før ankomst', refund: '50% refusion', fee: '' },
  { days: 'Mindre end 14 dage før ankomst', refund: 'Ingen refusion', fee: '' },
  {
    days: 'Ved udeblivelse eller afbrudt ophold',
    refund: 'Ingen refusion',
    fee: ''
  }
]

function CancellationCard () {
  return (
    <InfoBlock title='Fortrydelsesret og refusion'>
      Afbestilling skal ske skriftligt via e-mail eller gennem det anvendte
      bookingsystem. Ved afbestilling gælder følgende vilkår:
      <Stack spacing={1.25} sx={{ mt: 2 }}>
        {cancellationTerms.map(term => (
          <Box
            key={term.days}
            sx={theme => ({
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: 1,
              py: 1,
              borderBottom: `1px solid ${theme.palette.brand.sand}`,
              '&:last-of-type': { borderBottom: 'none' }
            })}
          >
            <Typography
              component='span'
              sx={theme => ({
                fontSize: '15px',
                color: theme.palette.brand.earth
              })}
            >
              {term.days}
            </Typography>
            <Typography
              component='span'
              sx={theme => ({
                fontSize: '15px',
                fontWeight: 600,
                color: theme.palette.brand.fjord
              })}
            >
              {term.refund}
              {term.fee && (
                <Box
                  component='span'
                  sx={theme => ({
                    ml: 1,
                    fontWeight: 400,
                    color: theme.palette.brand.bark
                  })}
                >
                  {term.fee}
                </Box>
              )}
            </Typography>
          </Box>
        ))}
      </Stack>
      <Typography
        sx={theme => ({
          mt: 2,
          fontSize: '15px',
          lineHeight: 1.75,
          color: theme.palette.brand.bark
        })}
      >
        <strong>Refunderinger:</strong> Tilbageføres til samme betalingsmiddel,
        som blev anvendt ved bookingen.
      </Typography>
    </InfoBlock>
  )
}

export default function RentalTermsSection () {
  return (
    <SectionWrapper id="betingelser" backgroundColor='paper'>
      <SectionInner sx={{ px: { xs: '24px', md: '32px' } }}>
        <SectionHeading
          eyebrow='Det med småt'
          title='Salgs-, handels- og afbestillingsbetingelser'
        />

        <Stack spacing={5}>
          {/* <Box>
            <SubHeading>Lejebetingelser</SubHeading>
            <Stack spacing={4} sx={{ mt: 3 }}>
              {rentalCategories.map(category => (
                <InfoBlock key={category.title} title={category.title}>
                  {category.content}
                </InfoBlock>
              ))}
            </Stack>
          </Box> */}

          <Box>
            <SubHeading>Salgs- og leveringsbetingelser</SubHeading>
            <Stack spacing={4} sx={{ mt: 3 }}>
              <InfoBlock title={saleCategories[0].title}>
                {saleCategories[0].content}
              </InfoBlock>
              <InfoBlock title={saleCategories[1].title}>
                {saleCategories[1].content}
              </InfoBlock>
              <InfoBlock title={saleCategories[2].title}>
                {saleCategories[2].content}
              </InfoBlock>
              <CancellationCard />
              <InfoBlock title={saleCategories[3].title}>
                {saleCategories[3].content}
              </InfoBlock>
              <InfoBlock title={saleCategories[4].title}>
                {saleCategories[4].content}
              </InfoBlock>
              <InfoBlock title={saleCategories[5].title}>
                {saleCategories[5].content}
              </InfoBlock>
              <InfoBlock title={saleCategories[6].title}>
                {saleCategories[6].content}
              </InfoBlock>
              <InfoBlock title={saleCategories[7].title}>
                {saleCategories[7].content}
              </InfoBlock>
              <InfoBlock title={saleCategories[8].title}>
                {saleCategories[8].content}
              </InfoBlock>
              <InfoBlock title={saleCategories[9].title}>
                {saleCategories[9].content}
              </InfoBlock>
            </Stack>
          </Box>
        </Stack>
      </SectionInner>
    </SectionWrapper>
  )
}
