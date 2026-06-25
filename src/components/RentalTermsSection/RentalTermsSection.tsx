import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SectionInner, SectionWrapper } from '../SectionWrapper/SectionWrapper'
import {
  InfoBlock,
  SectionHeading,
  SubHeading
} from '../InfoSection/InfoSectionElements'
import type { InfoCategory, CancellationTerm } from '../../i18n/types'

function CancellationCard () {
  const { t } = useTranslation()
  const cancellationTerms = t('rentalTerms.cancellation.terms', { returnObjects: true }) as CancellationTerm[]
  return (
    <InfoBlock title={t('rentalTerms.cancellation.title')}>
      {t('rentalTerms.cancellation.intro')}
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
        <strong>{t('rentalTerms.cancellation.refundLabel')}</strong>
        {t('rentalTerms.cancellation.refundText')}
      </Typography>
    </InfoBlock>
  )
}

export default function RentalTermsSection () {
  const { t } = useTranslation()
  const saleCategories = t('rentalTerms.categories', { returnObjects: true }) as InfoCategory[]
  return (
    <SectionWrapper id="betingelser" backgroundColor='paper'>
      <SectionInner sx={{ px: { xs: '24px', md: '32px' } }}>
        <SectionHeading
          eyebrow={t('rentalTerms.eyebrow')}
          title={t('rentalTerms.title')}
        />

        <Stack spacing={5}>
          <Box>
            <SubHeading>{t('rentalTerms.subHeading')}</SubHeading>
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
