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

const Index = () => (
  <div className="relative min-h-screen bg-background overflow-x-hidden">
    <GridBackground />
    <CursorGlow />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <EducationSection />
    <AchievementsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
