import HeroSection from "@/components/HeroSection";
import ProblemStatement from "@/components/ProblemStatement";
import LiteratureSurvey from "@/components/LiteratureSurvey";
import LiveMetrics from "@/components/LiveMetrics";
import KeyFeatures from "@/components/KeyFeatures";
import SystemArchitecture from "@/components/SystemArchitecture";
import TechnologyStack from "@/components/TechnologyStack";
import ResultsImpact from "@/components/ResultsImpact";
import HardwareConnection from "@/components/HardwareConnection";
import Footer from "@/components/Footer";
import DockNavigation from "@/components/DockNavigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="w-full">
        <HeroSection />
        <ProblemStatement />
        <LiteratureSurvey />
        <LiveMetrics />
        <KeyFeatures />
        <SystemArchitecture />
        <TechnologyStack />
        <ResultsImpact />
        <HardwareConnection />
      </main>
      <Footer />
      <DockNavigation />
    </div>
  );
}
