import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import BenefitsSection from '../components/BenefitsSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialSection from '../components/TestimonialSection';
import CallToActionSection from '../components/CallToActionSection';
import LogoSection from '../components/LogoSection';
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <FeaturesSection />
      <TestimonialSection />
      <CallToActionSection />
      <LogoSection />
    </main>
  );
}