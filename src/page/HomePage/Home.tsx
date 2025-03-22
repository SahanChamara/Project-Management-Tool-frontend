// App.jsx - Main component
import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/Hero";
import FeaturesSection from "@/components/HomePage Features/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorkSection/HowItWorkSection";
import CtaSection from "@/components/CTASection/CtaSection";
import Footer from "@/components/Footer/Footer";

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