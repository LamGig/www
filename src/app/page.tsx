import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { MobileAppBenefitsSection } from "@/components/MobileAppBenefitsSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <HeroSection />
      <HowItWorksSection />
      <MobileAppBenefitsSection />
      <WhyUsSection />
      <SiteFooter />
    </>
  );
}
