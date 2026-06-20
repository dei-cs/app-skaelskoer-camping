import { Box, Stack, Typography } from '@mui/material'
import { SectionInner, SectionWrapper } from '../SectionWrapper/SectionWrapper'
import { InfoBlock, SectionHeading, SubHeading } from '../InfoSection/InfoSectionElements'

const rentalCategories = [
  {
    title: 'Generelt',
    content:
      'Solskinscamping indestår for rigtigheden af ovenstående beskrivelse af det udlejede. Ved fejl og mangler skal vi informeres hurtigst muligt efter ankomst, således, at vi kan drage omsorg herfor.\n\nVi påtager os intet ansvar for pludseligt opståede skader, men vil drage omsorg for, at skaden udbedres hurtigst muligt efter anmeldelsen.\n\nVed fraflytning skal såvel hytter og pladser og inventaret i disse afleveres i samme ryddelige stand som ved overtagelsen. Evt. nødvendig ekstrarengøring vil kunne foretages for lejers regning, hvis denne ikke har indhentet udlejers godkendelse inden afrejsen.',
  },
]

const saleCategories = [
  {
    title: 'Betaling',
    content:
      'Alle priser oplyst i Solskinscampings online bookingsystemet er ligesom alle andre steder på hjemmesiden oplyst i danske kroner inklusive moms og alle afgifter med mindre andet er oplyst og klart fremgår i den pågældende situation.\n\nBetaling foregår ved at benytte et af de godkendte betalingskort/kreditkort i online booking, herunder blandt andet Dankort, Visa, Mastercard, og flere andre betalingskort. Efter betaling, vil beløbet blive trukket på kundens konto 1-2 dage efter betalingen er foretaget.',
  },
  {
    title: 'Informationer om handel på Internettet',
    content:
      'Du kan trygt handle på Internettet gennem vores online bookingsystem. Du er som forbruger som udgangspunkt sikret i forhold til eventuel misbrug af dit kreditkort på nettet, derfor er der ikke nogen selvrisiko ved misbrug af dit betalingskort via Internettet. Du kan læse mere om, hvordan du som forbruger skal forholde dig til betalinger på nettet på følgende hjemmesider: www.betaling.dk, www.fdih.dk.\n\nAlle retsforhold, der udspringer af rammeaftalen og af alle indgående kontraktmoduler mellem den kontraherende part og Skælskør Nor Camping er underlagt lovgivningen i Danmark.',
  },
  {
    title: 'Forsendelse og levering',
    content:
      'Du vil ved online booking og betaling af en hytte, et udlejningstelt, en plads til eget telt, eller en plads til egen campingvogn eller autocamper få forevist en kontrakt fra solskinscamping, hvori regnskabet for dit køb fremgår. Kontrakten fremsendes via e-mail umiddelbart efter købet, hvis korrekt e-mailadresse er oplyst af køber.\n\nLevering af det bestilte produkt sker ved ankomst på solskinscamping Skælskør på ankomstdagen (og afsluttes på afrejsedagen). Begge disse tidspunkter oplyses i bookingen.',
  },
  {
    title: 'Registrering af oplysninger',
    content:
      'Solskinscamping registrerer dit navn, din adresse, din e-mail samt andre oplysninger afgivet i forbindelse med købet i sit kundekartotek. Oplysningerne videregives ikke, men vi beholder registreringen i 5 år.\n\nSolskinscamping anvender serverside cookies og en sikker forbindelse til at skabe sikkerheden om de oplysninger, som du afgiver på siden. Ved betaling med kreditkort sker registreringen via en sikker server, hvor oplysningerne krypteres før de sendes over Internettet.',
  },
  {
    title: 'Reklamationsbehandling',
    content:
      'Hvis du af en eller anden grund ikke modtager din kontrakt, som bekræfter dit køb, og du ikke har modtaget en fejlmeddelelse fra systemet, så kan du skrive til nedenstående adresse eller ringe på telefonnummer, 58194384.\n\nDer er ikke reklamationsret, grundet det er en service ydelse der leveres.',
  },
]

const cancellationTerms = [
  { days: 'Mere end 30 dage før ankomst', refund: '100% refusion', fee: '− kr. 400,00 administrationsgebyr' },
  { days: '30–14 dage før ankomst', refund: '50% refusion', fee: '' },
  { days: 'Mindre end 14 dage før ankomst', refund: 'Ingen refusion', fee: '' },
]

function CancellationCard() {
  return (
    <InfoBlock title="Fortrydelsesret og refusion">
      Du har mulighed for at annullere din booking på følgende vilkår:
      <Stack spacing={1.25} sx={{ mt: 2 }}>
        {cancellationTerms.map((term) => (
          <Box
            key={term.days}
            sx={(theme) => ({
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: 1,
              py: 1,
              borderBottom: `1px solid ${theme.palette.brand.sand}`,
              '&:last-of-type': { borderBottom: 'none' },
            })}
          >
            <Typography component="span" sx={(theme) => ({ fontSize: '15px', color: theme.palette.brand.earth })}>
              {term.days}
            </Typography>
            <Typography
              component="span"
              sx={(theme) => ({ fontSize: '15px', fontWeight: 600, color: theme.palette.brand.fjord })}
            >
              {term.refund}
              {term.fee && (
                <Box
                  component="span"
                  sx={(theme) => ({ ml: 1, fontWeight: 400, color: theme.palette.brand.bark })}
                >
                  {term.fee}
                </Box>
              )}
            </Typography>
          </Box>
        ))}
      </Stack>
      <Typography sx={(theme) => ({ mt: 2, fontSize: '15px', lineHeight: 1.75, color: theme.palette.brand.bark })}>
        <strong>Ved påbegyndt ferie:</strong> Den bookede periode er bindende og kan ikke overdrages til andre.
      </Typography>
      <Typography sx={(theme) => ({ mt: 1, fontSize: '15px', lineHeight: 1.75, color: theme.palette.brand.bark })}>
        <strong>Afbestillingsforsikring:</strong> Vi anbefaler, at I tegner en afbestillingsforsikring hos jeres
        forsikringsselskab.
      </Typography>
    </InfoBlock>
  )
}

export default function RentalTermsSection() {
  return (
    <SectionWrapper backgroundColor="paper">
      <SectionInner sx={{ px: { xs: '24px', md: '32px' } }}>
        <SectionHeading eyebrow="Det med småt" title="Leje- og handelsbetingelser" />

        <Stack spacing={5}>
          <Box>
            <SubHeading>Lejebetingelser</SubHeading>
            <Stack spacing={4} sx={{ mt: 3 }}>
              {rentalCategories.map((category) => (
                <InfoBlock key={category.title} title={category.title}>
                  {category.content}
                </InfoBlock>
              ))}
            </Stack>
          </Box>

          <Box>
            <SubHeading>Salgs- og leveringsbetingelser</SubHeading>
            <Stack spacing={4} sx={{ mt: 3 }}>
              <InfoBlock title={saleCategories[0].title}>{saleCategories[0].content}</InfoBlock>
              <InfoBlock title={saleCategories[1].title}>{saleCategories[1].content}</InfoBlock>
              <InfoBlock title={saleCategories[2].title}>{saleCategories[2].content}</InfoBlock>
              <CancellationCard />
              <InfoBlock title={saleCategories[3].title}>{saleCategories[3].content}</InfoBlock>
              <InfoBlock title={saleCategories[4].title}>{saleCategories[4].content}</InfoBlock>
            </Stack>
          </Box>
        </Stack>
      </SectionInner>
    </SectionWrapper>
  )
}
