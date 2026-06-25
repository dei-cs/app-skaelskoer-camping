import Navbar from '../../components/Navbar/Navbar'
import PageHero from '../../components/PageHero/PageHero'
import RulesetSection from '../../components/RulesetSection/RulesetSection'
import RentalTermsSection from '../../components/RentalTermsSection/RentalTermsSection'
import PersonalDataPolicySection from '../../components/PersonalDataPolicySection/PersonalDataPolicySection'
import PageFooter from '../../components/PageFooter/PageFooter'
import PracticalNav from '../../components/PracticalNav/PracticalNav'
import heroPraktiskImg from '../../assets/images/decorate-noret.webp'
import { useTranslation } from 'react-i18next'

export default function PracticalInfoPage() {
  const { t } = useTranslation()
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title={t('pages.practical.title')}
          imageSrc={heroPraktiskImg}
          imageAlt={t('pages.practical.imageAlt')}
        />
        <PracticalNav />
        <RulesetSection />
        <RentalTermsSection />
        <PersonalDataPolicySection />
        <PageFooter />
      </main>
    </>
  )
}
