import { useTranslation } from 'react-i18next'
import Navbar from '../../components/Navbar/Navbar'
import PageHero from '../../components/PageHero/PageHero'
import CampingMapSection from '../../components/CampingMapSection/CampingMapSection'
import PageFooter from '../../components/PageFooter/PageFooter'
import heroImg from '../../assets/images/decorate-noret.webp'

export default function MapPage() {
  const { t } = useTranslation()
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title={t('pages.prices.title')}
          imageSrc={heroImg}
          imageAlt={t('pages.prices.imageAlt')}
        />
        <CampingMapSection />
        <PageFooter />
      </main>
    </>
  )
}
