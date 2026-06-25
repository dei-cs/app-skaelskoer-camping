import { Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SectionInner, SectionWrapper } from '../SectionWrapper/SectionWrapper'
import { SectionHeading } from '../InfoSection/InfoSectionElements'

export default function PersonalDataPolicySection() {
  const { t } = useTranslation()
  const paragraphs = t('privacy.paragraphs', { returnObjects: true }) as string[]
  return (
    <SectionWrapper id="persondatapolitik">
      <SectionInner sx={{ px: { xs: '24px', md: '32px' } }}>
        <SectionHeading eyebrow={t('privacy.eyebrow')} title={t('privacy.title')} />

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
