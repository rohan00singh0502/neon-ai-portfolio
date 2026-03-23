import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "EcoPlay",
    desc: "An AI-based interactive learning platform that gamifies environmental education with real-time feedback and adaptive difficulty.",
    tech: ["React", "Python", "TensorFlow", "Node.js"],
  },
  {
    title: "Optimus Event",
    desc: "Full-featured event management system with real-time scheduling, ticketing, and analytics dashboard for organizers.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
  },
  {
    title: "Sign Language Detection",
    desc: "Real-time sign language detection system using computer vision and deep learning to bridge communication gaps.",
    tech: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">
      My <span className="neon-text">Projects</span>
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.25 },
          }}
          className="glass-card rounded-lg p-8 flex flex-col relative scan-line neon-trace overflow-hidden group"
        >
          <div className="w-full h-1 rounded-full bg-gradient-to-r from-primary/60 to-transparent mb-6" />
          <h3 className="font-heading text-xl font-bold mb-3 group-hover:animate-shake">{p.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {p.tech.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded border border-primary/20 text-primary/80">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3 relative z-10">
            <a href="#" className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors active:scale-95">
              <ExternalLink size={14} /> Live Demo
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors active:scale-95">
              <Github size={14} /> GitHub
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
