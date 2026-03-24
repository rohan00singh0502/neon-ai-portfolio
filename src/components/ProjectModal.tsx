import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  desc: string;
  tech: string[];
}

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: Props) => (
  <AnimatePresence>
    {project && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[70] flex items-center justify-center bg-background/80 backdrop-blur-md p-4"
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0, filter: "blur(8px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          exit={{ scale: 0.85, opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="glass-card neon-trace rounded-xl p-8 md:p-12 max-w-2xl w-full relative overflow-hidden scan-line"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all z-10"
          >
            <X size={16} />
          </button>

          {/* Holographic sweep */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: [
                "linear-gradient(105deg, transparent 40%, hsl(342 100% 59% / 0.06) 50%, transparent 60%)",
                "linear-gradient(105deg, transparent 60%, hsl(342 100% 59% / 0.06) 70%, transparent 80%)",
                "linear-gradient(105deg, transparent 40%, hsl(342 100% 59% / 0.06) 50%, transparent 60%)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <div className="w-full h-1 rounded-full bg-gradient-to-r from-primary/60 to-transparent mb-8" />

          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            <span className="neon-text">{project.title}</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-8">{project.desc}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1.5 rounded border border-primary/20 text-primary/80 bg-primary/5"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-heading text-xs uppercase tracking-wider font-semibold hover:bg-primary/90 transition-colors"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-primary/30 text-primary font-heading text-xs uppercase tracking-wider font-semibold hover:bg-primary/10 transition-colors"
            >
              <Github size={14} /> Source Code
            </a>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ProjectModal;
