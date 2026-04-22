import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { SectionWrapper, SectionInner } from '../SectionWrapper/SectionWrapper'

interface OpeningHourEntry {
  label: string
  hours: string
}

interface LocationSectionProps {
  mapEmbedSrc: string
  title?: string
  openingHours?: OpeningHourEntry[]
  phone?: string
  email?: string
  address?: string
  backgroundColor?: 'default' | 'paper'
}

export default function LocationSection({
  mapEmbedSrc,
  title,
  openingHours,
  phone,
  email,
  address,
  backgroundColor = 'default',
}: LocationSectionProps) {
  const hasContact = address || phone || email
  const hasOpeningHours = openingHours && openingHours.length > 0

  return (
    <SectionWrapper backgroundColor={backgroundColor}>
      <Section>
        <MapPane>
          <iframe
            src={mapEmbedSrc}
            width='100%'
            height='100%'
            style={{ border: 0 }}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title={title ?? 'Kort'}
          />
        </MapPane>
        <InfoPane>
          {title && <Typography variant='h4'>{title}</Typography>}
          {/* <Typography variant='h4'>Kontakt Informationer</Typography> */}
          {hasOpeningHours && (
            <InfoGroup>
              <InfoRow>
                {/* <ScheduleIcon fontSize='small' color='primary' /> */}
                <Typography variant='body1' fontWeight={600}>
                  Åbningstider
                </Typography>
              </InfoRow>
              {openingHours!.map((entry, i) => (
                <HoursRow key={i}>
                  <Typography variant='body1'>{entry.label}</Typography>
                  <Typography variant='body1' color='text.secondary'>
                    {entry.hours}
                  </Typography>
                </HoursRow>
              ))}
            </InfoGroup>
          )}

          {hasOpeningHours && hasContact && <Divider />}

          {hasContact && (
            <InfoGroup>
              <InfoRow>
                <Typography variant='body1' fontWeight={600}>
                  Kontakt
                </Typography>
              </InfoRow>
              {address && (
                <InfoRow>
                  <LocationOnIcon fontSize='small' color='primary' />
                  <Typography variant='body1'>{address}</Typography>
                </InfoRow>
              )}
              {phone && (
                <InfoRow>
                  <PhoneIcon fontSize='small' color='primary' />
                  <Typography
                    variant='body1'
                    component='a'
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    {phone}
                  </Typography>
                </InfoRow>
              )}
              {email && (
                <InfoRow>
                  <EmailIcon fontSize='small' color='primary' />
                  <Typography
                    variant='body1'
                    component='a'
                    href={`mailto:${email}`}
                    sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    {email}
                  </Typography>
                </InfoRow>
              )}
            </InfoGroup>
          )}
        </InfoPane>
      </Section>
    </SectionWrapper>
  )
}

const Section = styled(SectionInner)({
  display: 'flex',
  alignItems: 'stretch',
  minHeight: 480,
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
})

const MapPane = styled('div')({
  width: '50%',
  maxWidth: '600px',
  borderRadius: '5px',
  overflow: 'hidden',
  '& iframe': {
    display: 'block',
  },
  '@media (max-width: 768px)': {
    width: '100%',
    minHeight: 300,
    maxWidth: '100%',
    borderRadius: 0,
  },
})

const InfoPane = styled('div')({
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '48px',
  gap: '16px',
  '@media (max-width: 768px)': {
    width: '100%',
    padding: '40px 24px',
  },
})

const InfoGroup = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

const InfoRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '12px',
})

const HoursRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '12px',
  paddingLeft: '28px',
})
