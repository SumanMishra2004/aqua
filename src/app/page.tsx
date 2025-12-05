import HeroSection from "@/components/HeroSection";
import ProjectSummary from "@/components/ProjectSummary";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import ProblemStatement from "@/components/ProblemStatement";
import LiteratureSurvey from "@/components/LiteratureSurvey";
import LiveMetrics from "@/components/LiveMetrics";
import KeyFeatures from "@/components/KeyFeatures";
import SystemArchitecture from "@/components/SystemArchitecture";
import SystemModules from "@/components/SystemModules";
import TechnologyStack from "@/components/TechnologyStack";
import ResultsImpact from "@/components/ResultsImpact";
// import ResearchTeam from "@/components/ResearchTeam";
import SupervisorsFutureScope from "@/components/SupervisorsFutureScope";
import DownloadsContact from "@/components/DownloadsContact";
import HardwareConnection from "@/components/HardwareConnection";
import Footer from "@/components/Footer";
import DockNavigation from "@/components/DockNavigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="w-full">
        <HeroSection />
        <ProjectSummary />
        <ExecutiveSummary />
        <ProblemStatement />
        <LiteratureSurvey />
        <LiveMetrics />
        <KeyFeatures />
        <SystemArchitecture />
        <SystemModules />
        <TechnologyStack />
        <ResultsImpact />
  
        {/* <SupervisorsFutureScope />
        <DownloadsContact /> */}
        <HardwareConnection />
      </main>
      <Footer />
      <DockNavigation />
    </div>
  );
}
