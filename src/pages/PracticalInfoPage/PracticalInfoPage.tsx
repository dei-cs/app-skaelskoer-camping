import Navbar from '../../components/Navbar/Navbar'
import PageHero from '../../components/PageHero/PageHero'
import RulesetSection from '../../components/RulesetSection/RulesetSection'
import RentalTermsSection from '../../components/RentalTermsSection/RentalTermsSection'
import PersonalDataPolicySection from '../../components/PersonalDataPolicySection/PersonalDataPolicySection'
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
        <RulesetSection />
        <RentalTermsSection />
        <PersonalDataPolicySection />
      </main>
    </>
  )
}
