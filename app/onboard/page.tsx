import Navbar from '@/components/Navbar';
import OnboardingForm from './OnboardingForm'

export const metadata = {
  title: 'Artist Onboarding | Eventful',
  description: 'Submit your artist profile to be listed on Eventful',
}

export default function Page() {
  return(
    <div>
      <Navbar />
     <OnboardingForm />
    </div>
  );
}
