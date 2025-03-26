// App.jsx - Main component
import Header from "@/components/Home Page All Components/Header/Header";
import HeroSection from "@/components/Home Page All Components/Hero/Hero";
import FeaturesSection from "@/components/Home Page All Components/HomePage Features/FeaturesSection";
import HowItWorksSection from "@/components/Home Page All Components/HowItWorkSection/HowItWorkSection";
import CtaSection from "@/components/Home Page All Components/CTASection/CtaSection";
import Footer from "@/components/Home Page All Components/Footer/Footer";

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