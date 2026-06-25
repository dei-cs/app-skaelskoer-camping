import { useTranslation } from 'react-i18next'
import Navbar from '../../components/Navbar/Navbar'
import PageHero from '../../components/PageHero/PageHero'
import ContactSection from '../../components/ContactSection/ContactSection'
import PageFooter from '../../components/PageFooter/PageFooter'
import heroKontaktImg from '../../assets/images/decorate-noret.webp'

export default function KontaktPage() {
  const { t } = useTranslation()
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title={t('pages.contact.title')}
          imageSrc={heroKontaktImg}
          imageAlt={t('pages.contact.imageAlt')}
        />
        <ContactSection />
        <PageFooter />
      </main>
    </>
  )
}
