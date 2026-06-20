import { Stack, Typography } from '@mui/material'
import { SectionInner, SectionWrapper } from '../SectionWrapper/SectionWrapper'
import { SectionHeading } from '../InfoSection/InfoSectionElements'

const paragraphs = [
  'Når du bestiller et ophold eller andre ydelser på hjemmesiden, pr. telefon eller ved personlig henvendelse, vil de personoplysninger, som du giver, såsom bl.a. navn, eller særlig information om din helbredstilstand i forbindelse med opholdet, blive behandlet af Skælskør Nor Camping.',
  'Vi vil også behandle nødvendige personoplysninger, som du oplyser om personer i din reservation. Hvis du ved bestilling af opholdet giver personoplysninger om andre personer, skal du være sikker på, at disse personer samtykker, og at du har tilladelse til at udlevere oplysningerne. Hvis det er relevant, bør du også sikre dig, at de forstår, hvordan deres personoplysninger bliver brugt af os.',
  'Skælskør Nor Camping, som du skal henvende dig med spørgsmål og med hensyn til udøvelse af dine rettigheder.',
  'Vi kan også benytte dine personoplysninger og mail til at give dig forskellige tilbud på produkter og nyhedsbrev. Du kan til enhver tid afmelde denne form for markedsføring ved at kontakte os.',
  'Skælskør Nor Camping behandler alle personoplysninger ifølge gældende lov. Vi værner om din integritet og ønsker at være transparente med, hvordan dine personoplysninger bliver behandlet. Dine personoplysninger tilhører dig.',
]

export default function PersonalDataPolicySection() {
  return (
    <SectionWrapper>
      <SectionInner sx={{ px: { xs: '24px', md: '32px' } }}>
        <SectionHeading eyebrow="Privatliv" title="Persondatapolitik" />

        <Stack spacing={2.5} sx={{ maxWidth: 820 }}>
          {paragraphs.map((text, idx) => (
            <Typography
              key={idx}
              sx={(theme) => ({
                fontFamily: "'Raleway', sans-serif",
                fontSize: '16px',
                lineHeight: 1.8,
                color: theme.palette.brand.bark,
              })}
            >
              {text}
            </Typography>
          ))}
        </Stack>
      </SectionInner>
    </SectionWrapper>
  )
}
