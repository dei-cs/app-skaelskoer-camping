import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import IntroSection from '../../components/IntroSection/IntroSection'
import PhotoCollage from '../../components/PhotoCollage/PhotoCollage'
import LocationSection from '../../components/LocationSection/LocationSection'

import { Box } from '@mui/material'

export default function LandingPage () {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <PhotoCollage />
        <LocationSection
          mapEmbedSrc='https://maps.google.com/maps?q=Sk%C3%A6lsk%C3%B8r+Nor+Camping&output=embed'
          openingHours={[
            { label: 'Sæson (22. Marts - 4. Oktober)', hours: '' },
            { label: 'Mandag - Lørdag', hours: '10:00–12:00 & 14:00–16:00' },
            { label: 'Søndag', hours: '09:00–12:00' },
          ]}
          address='Kildehusvej 1, 4230 Skælskør'
          phone='+45 58 19 43 84'
          email='info@solskinscamping.dk'
        />
        <Box sx={{ paddingBottom: 5 }}/>
      </main>
    </>
  )
}
