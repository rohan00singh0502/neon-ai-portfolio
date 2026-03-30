import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface Project {
  title: string;
  desc: string;
  tech: string[];
  features?: string[];
  images?: string[];
}

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = project?.images ?? [
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  ];

  const nextSlide = useCallback(() => setCurrentSlide((p) => (p + 1) % images.length), [images.length]);
  const prevSlide = useCallback(() => setCurrentSlide((p) => (p - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (!project) return;
    setCurrentSlide(0);
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [project, nextSlide]);

  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [project, onClose, nextSlide, prevSlide]);

  const features = project?.features ?? [
    "Real-time data processing",
    "Responsive dashboard UI",
    "Authentication & authorization",
    "API integration",
  ];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-background/85 backdrop-blur-lg p-4 md:p-8"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, filter: "blur(12px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            exit={{ scale: 0.85, opacity: 0, filter: "blur(12px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card neon-trace rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative scan-line"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full border border-primary/20 bg-background/60 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <X size={16} />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Image Carousel */}
              <div className="relative aspect-video md:aspect-auto md:min-h-[480px] overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={images[currentSlide]}
                    alt={`${project.title} screenshot ${currentSlide + 1}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                {/* Navigation arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/50 backdrop-blur border border-border/50 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 transition-all z-10"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/50 backdrop-blur border border-border/50 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 transition-all z-10"
                >
                  <ChevronRight size={16} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === currentSlide ? "bg-primary w-6" : "bg-foreground/30 hover:bg-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right: Project Details */}
              <div className="p-8 md:p-10 flex flex-col">
                <div className="w-full h-1 rounded-full bg-gradient-to-r from-primary/60 to-transparent mb-6" />

                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
                  <span className="neon-text">{project.title}</span>
                </h2>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded border border-primary/20 text-primary/80 bg-primary/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.desc}</p>

                {/* Features */}
                <div className="mb-8 flex-1">
                  <h4 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {features.map((f, i) => (
                      <motion.li
                        key={f}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.08 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-1 text-xs">▸</span>
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
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
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
