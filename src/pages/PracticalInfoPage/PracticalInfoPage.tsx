import Navbar from '../../components/Navbar/Navbar'
import PageHero from '../../components/PageHero/PageHero'
import RulesetSection from '../../components/RulesetSection/RulesetSection'
import RentalTermsSection from '../../components/RentalTermsSection/RentalTermsSection'
import PersonalDataPolicySection from '../../components/PersonalDataPolicySection/PersonalDataPolicySection'
import PageFooter from '../../components/PageFooter/PageFooter'
import PracticalNav from '../../components/PracticalNav/PracticalNav'
import heroPraktiskImg from '../../assets/images/decorate-noret.webp'

export default function PracticalInfoPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Praktisk Information"
          imageSrc={heroPraktiskImg}
          imageAlt="Campingplads ved kilde"
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
