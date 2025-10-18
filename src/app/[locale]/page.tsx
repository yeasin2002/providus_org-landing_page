import Footer from "@/components/footer/footer";
import { HeroSection } from "@/components/home/hero-section";
import { Navbar } from "@/components/navbar/navbar";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("about");

  return (
    <div>
      <HeroSection />
    </div>
  );
}
