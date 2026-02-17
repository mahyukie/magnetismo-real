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
import { FloatingCTA } from "@/components/FloatingCTA";
import { useVideoReveal } from "@/hooks/useVideoReveal";

const Index = () => {
  const { isRevealed, startRevealTimer } = useVideoReveal();

  return (
    <main className="min-h-screen bg-background pt-14">
      <CountdownBanner />
      <HeroSection onVideoInteraction={startRevealTimer} />
      
      <div
        className={`transition-all duration-1000 ease-out ${
          isRevealed
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none max-h-0 overflow-hidden"
        }`}
      >
        <PainPointsSection />
        <TestimonialsSection />
        <StorySection />
        <MethodSection />
        <DeliverablesSection />
        <BonusSection />
        <WhyOthersFail />
        <ObjectionsSection />
        <BenefitsSection />
        <FAQSection />
        <GuaranteeSection />
        <AuthorSection />
        <FooterSection />
      </div>
      
      {isRevealed && <FloatingCTA />}
    </main>
  );
};

export default Index;
