import SectionWrapper from "./SectionWrapper";
import { Brain, Code, Lightbulb, User } from "lucide-react";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";

const highlights = [
  { icon: Brain, title: "AI/ML Enthusiast", desc: "Passionate about machine learning, deep learning, and building intelligent systems." },
  { icon: Code, title: "Full-Stack Developer", desc: "Crafting end-to-end solutions with modern frameworks and clean architecture." },
  { icon: Lightbulb, title: "Problem Solver", desc: "200+ DSA problems solved with a focus on efficient, elegant solutions." },
];

const AboutSection = () => {
  const parallax = useParallax(0.015);

  return (
    <SectionWrapper id="about">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
        About <span className="neon-text">Me</span>
      </h2>

      {/* Profile Image */}
      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          style={{ x: parallax.x, y: parallax.y }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="relative group"
        >
          {/* Outer glow ring */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/60 via-primary/20 to-primary/60 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-neon" />
          
          {/* Image container */}
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-primary/40 group-hover:border-primary/80 transition-all duration-300 neon-glow">
            {/* Placeholder — replace src with your image */}
            <div className="w-full h-full bg-gradient-to-br from-secondary to-card flex items-center justify-center">
              <User className="text-primary/40" size={64} />
            </div>
            {/* Uncomment and replace with your image:
            <img
              src="/your-photo.jpg"
              alt="Piyush Saini"
              className="w-full h-full object-cover"
            />
            */}
          </div>

          {/* Scan line on image */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
            initial={false}
          >
            <motion.div
              className="absolute inset-x-0 h-px bg-primary/50"
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14" style={{ textWrap: "pretty" }}>
        I'm a passionate developer and AI/ML enthusiast pursuing B.Tech in Computer Science. I love turning complex problems into simple, beautiful, and intuitive solutions.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
              y: -8,
              rotateX: 3,
              transition: { duration: 0.25 },
            }}
            style={{ perspective: 800, transformStyle: "preserve-3d" }}
            className="glass-card rounded-lg p-8 text-center scan-line neon-trace overflow-hidden"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5"
            >
              <h.icon className="text-primary" size={28} />
            </motion.div>
            <h3 className="font-heading text-lg font-semibold mb-3">{h.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
