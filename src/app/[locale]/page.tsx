import { Benefits } from "@/components/home/benefits";
import FAQSection from "@/components/home/faq-section";
import FellowshipHonorsSection from "@/components/home/fellowship";
import FinalCallSection from "@/components/home/final-call-section";
import { HeroSection } from "@/components/home/hero-section";
import HowItWorksSection from "@/components/home/how-it-works-section";
import { SpecialOpportunitySection } from "@/components/home/opputunity/oppurtunity-main";
import { Stories } from "@/components/home/stories-pastors";
import VisionHeroSection from "@/components/home/vision-hero-section";
import PastorsJoiningSection from "@/components/home/why-pastors-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PastorsJoiningSection />
      <HowItWorksSection />
      <Benefits />
      <Stories />
      <FellowshipHonorsSection />
      <FAQSection />
      <VisionHeroSection />
      <SpecialOpportunitySection />
      <FinalCallSection />
    </div>
  );
}
