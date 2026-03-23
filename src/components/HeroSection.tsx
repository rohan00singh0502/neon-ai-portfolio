import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="relative z-10 min-h-screen flex items-center justify-center pt-16">
    <div className="container mx-auto px-4 md:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4">
          Welcome to my portfolio
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
          <span className="text-foreground">PIYUSH</span>{" "}
          <span className="neon-text">SAINI</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-3" style={{ textWrap: "balance" }}>
          AI/ML Developer · Full Stack Developer
        </p>
        <p className="text-muted-foreground max-w-md mx-auto mb-10 text-sm" style={{ textWrap: "pretty" }}>
          Building intelligent systems and crafting pixel-perfect interfaces that push boundaries.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase font-semibold neon-glow hover:neon-glow-strong transition-all duration-300 active:scale-[0.97]"
        >
          View Projects <ArrowDown size={16} />
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-md border border-primary/40 text-primary font-heading text-sm tracking-wider uppercase font-semibold hover:bg-primary/10 transition-all duration-300 active:scale-[0.97]"
        >
          Download Resume <Download size={16} />
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-primary/30 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
