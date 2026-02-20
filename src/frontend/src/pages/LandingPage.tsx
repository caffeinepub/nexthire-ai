import HeroSection from '../components/HeroSection';
import EarlyAccessForm from '../components/EarlyAccessForm';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import HowItWorksSection from '../components/HowItWorksSection';
import BenefitsSection from '../components/BenefitsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';

export default function LandingPage() {
  return (
    <main className="w-full">
      <HeroSection />
      <EarlyAccessForm />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
    </main>
  );
}
