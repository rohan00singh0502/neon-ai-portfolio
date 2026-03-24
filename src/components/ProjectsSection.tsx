import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

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

const ProjectCard = ({ p, i }: { p: typeof projects[0]; i: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        scale: 1.04,
        rotateY: 2,
        rotateX: -1,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setExpanded(!expanded)}
      className="glass-card rounded-lg p-8 flex flex-col relative scan-line neon-trace overflow-hidden group cursor-pointer"
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
    >
      {/* Holographic overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[2]"
        animate={{
          background: [
            "linear-gradient(45deg, transparent 0%, hsla(342,100%,59%,0.03) 50%, transparent 100%)",
            "linear-gradient(45deg, transparent 0%, hsla(180,100%,50%,0.02) 50%, transparent 100%)",
            "linear-gradient(45deg, transparent 0%, hsla(342,100%,59%,0.03) 50%, transparent 100%)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="w-full h-1 rounded-full bg-gradient-to-r from-primary/60 to-transparent mb-6" />
      <h3 className="font-heading text-xl font-bold mb-3 group-hover:animate-shake">{p.title}</h3>

      <motion.div animate={{ height: expanded ? "auto" : "3.2rem" }} className="overflow-hidden mb-5 flex-1">
        <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
      </motion.div>

      <div className="flex flex-wrap gap-2 mb-6">
        {p.tech.map((t, ti) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 + ti * 0.05 }}
            className="text-xs px-2.5 py-1 rounded border border-primary/20 text-primary/80 hover:bg-primary/10 hover:border-primary/40 transition-all"
          >
            {t}
          </motion.span>
        ))}
      </div>
      <div className="flex gap-3 relative z-10">
        <a
          href="#"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors active:scale-95"
        >
          <ExternalLink size={14} /> Live Demo
        </a>
        <a
          href="#"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors active:scale-95"
        >
          <Github size={14} /> GitHub
        </a>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">
      My <span className="neon-text">Projects</span>
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <ProjectCard key={p.title} p={p} i={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
