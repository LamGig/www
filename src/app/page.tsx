import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { MobileAppBenefitsSection } from "@/components/MobileAppBenefitsSection";
import { PriceSectionSimple } from "@/components/PriceSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { CTASection } from "@/components/CTASection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <HeroSection />
      <MobileAppBenefitsSection />
      <PriceSectionSimple />
      <HowItWorksSection />
      <WhyUsSection />
      <CTASection />
      <SiteFooter />
    </>
  );
}
