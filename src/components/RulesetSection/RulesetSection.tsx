import { Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SectionInner, SectionWrapper } from '../SectionWrapper/SectionWrapper'
import { InfoBlock, SectionHeading } from '../InfoSection/InfoSectionElements'
import type { InfoCategory } from '../../i18n/types'

export default function RulesetSection() {
  const { t } = useTranslation()
  const ruleCategories = t('rules.categories', { returnObjects: true }) as InfoCategory[]
  return (
    <SectionWrapper id="reglement">
      <SectionInner sx={{ px: { xs: '24px', md: '32px' } }}>
        <SectionHeading
          eyebrow={t('rules.eyebrow')}
          title={t('rules.title')}
          intro={t('rules.intro')}
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
