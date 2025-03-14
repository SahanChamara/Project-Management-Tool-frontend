// App.jsx - Main component
import Header from "@/components/ui/Header/Header";
import HeroSection from "@/components/ui/Hero/Hero";
import FeaturesSection from "@/components/ui/HomePage Features/FeaturesSection";
import HowItWorksSection from "@/components/ui/HowItWorkSection/HowItWorkSection";
import CtaSection from "@/components/ui/CTASection/CtaSection";
import Footer from "@/components/ui/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9fafc] text-[#4a5568]">
      <Header/>
      <HeroSection/>
      <FeaturesSection/>
      <HowItWorksSection/>
      <CtaSection/>
      <Footer/>
    </div>
  );
}