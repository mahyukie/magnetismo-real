import { CountdownBanner } from "@/components/CountdownBanner";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StorySection } from "@/components/sections/StorySection";
import { MethodSection } from "@/components/sections/MethodSection";
import { DeliverablesSection } from "@/components/sections/DeliverablesSection";
import { BonusSection } from "@/components/sections/BonusSection";
import { WhyOthersFail } from "@/components/sections/WhyOthersFail";
import { ObjectionsSection } from "@/components/sections/ObjectionsSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { AuthorSection } from "@/components/sections/AuthorSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { FuturePacingSection } from "@/components/sections/FuturePacingSection";
import { NotForYouSection } from "@/components/sections/NotForYouSection";
import { ValueStackSection } from "@/components/sections/ValueStackSection";
import { CostOfInactionSection } from "@/components/sections/CostOfInactionSection";
import { PSSection } from "@/components/sections/PSSection";
import { FloatingCTA } from "@/components/FloatingCTA";
import { SocialProofPopup } from "@/components/SocialProofPopup";
import { WhatsappProofSection } from "@/components/sections/WhatsappProofSection";
import { OfferSection } from "@/components/sections/OfferSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background pt-14">
      <CountdownBanner />
      <HeroSection />
      <PainPointsSection />
      <FuturePacingSection />
      <TestimonialsSection />
      <WhatsappProofSection />
      <StorySection />
      <MethodSection />
      <DeliverablesSection />
      <BonusSection />
      <WhyOthersFail />
      <ObjectionsSection />
      <NotForYouSection />
      <CostOfInactionSection />
      <ValueStackSection />
      <BenefitsSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <AuthorSection />
      <PSSection />
      <FooterSection />
      <FloatingCTA />
      <SocialProofPopup />
    </main>
  );
};

export default Index;
