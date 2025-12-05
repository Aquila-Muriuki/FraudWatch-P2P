import RevealProvider from "@/app/Landing/components/layout/ReavealProvider";

// Sections

import CaseStudy from "@/app/Landing/components/CaseStudy";
import ComplianceBadges from "@/app/Landing/components/ComplianceBadges";
import CTA from "@/app/Landing/components/cta";
import FAQ from "@/app/Landing/components/FAQ";
import Features from "@/app/Landing/components/Features";
import Footer from "@/app/Landing/components/Footer";
import Hero from "@/app/Landing/components/Hero";
import HowItWorks from "@/app/Landing/components/HowItWorks";
import IFMISIntegration from "@/app/Landing/components/IFMISintergration";
import ImpactMetrics from "@/app/Landing/components/ImpactMetrics";
import Navbar from "@/app/Landing/components/navbar";
import Whitepaper from "@/app/Landing/components/Whitepaper";
import WhyUS from "@/app/Landing/components/WhyUS";

export default function Home() {
  return (
    <RevealProvider>
      <div className="bg-slate-950 min-h-screen text-white">
         <Navbar />
        <div className="reveal-section"><Hero /></div>
        <div className="reveal-section"><Features /></div>
        <div className="reveal-section"><HowItWorks /></div>
        <div className="reveal-section"><WhyUS /></div>
        <div className="reveal-section"><IFMISIntegration /></div>
        <div className="reveal-section"><ImpactMetrics /></div>
        <div className="reveal-section"><CaseStudy /></div>
        <div className="reveal-section"><ComplianceBadges /></div>
        <div className="reveal-section"><Whitepaper /></div>
        <div className="reveal-section"><FAQ /></div>
        <div className="reveal-section"><CTA /></div>

        <Footer />
      </div>
    </RevealProvider>
  );
}
