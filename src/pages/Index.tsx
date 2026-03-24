import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";
import CursorGlow from "@/components/CursorGlow";
import LoadingScreen from "@/components/LoadingScreen";
import MatrixRain from "@/components/MatrixRain";
import FloatingParticles from "@/components/FloatingParticles";
import SystemError from "@/components/SystemError";
import AIChatbot from "@/components/AIChatbot";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {!loaded && <LoadingScreen onComplete={handleComplete} />}
      <MatrixRain />
      <GridBackground />
      <FloatingParticles />
      <CursorGlow />
      <ScrollProgress />
      {loaded && <SystemError />}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
