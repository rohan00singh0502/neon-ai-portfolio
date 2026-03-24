import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Typewriter from "./Typewriter";
import { useParallax } from "@/hooks/useParallax";

const HeroSection = () => {
  const parallax = useParallax(0.02);

  return (
    <section id="home" className="relative z-10 min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ x: parallax.x * 0.5, y: parallax.y * 0.5 }}
        >
          {/* System log text */}
          <p className="text-primary/50 font-mono text-xs mb-6 tracking-wider">
            <Typewriter text="> system.portfolio.init() — access_granted" speed={30} delay={800} />
          </p>

          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4 animate-flicker">
            Welcome to my portfolio
          </p>

          {/* Glitch heading */}
          <motion.h1
            whileHover={{ x: [0, -3, 3, -2, 2, 0] }}
            transition={{ duration: 0.4 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-6 cursor-default"
          >
            <span className="text-foreground glitch-text" data-text="PIYUSH">PIYUSH</span>{" "}
            <span className="neon-text glitch-text" data-text="SAINI">SAINI</span>
          </motion.h1>

          {/* Subtitle with parallax */}
          <motion.p
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ x: parallax.x * -0.3, y: parallax.y * -0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-3"
          >
            AI/ML Developer · Full Stack Developer
          </motion.p>
          <p className="text-muted-foreground max-w-md mx-auto mb-10 text-sm" style={{ textWrap: "pretty" as any }}>
            Building intelligent systems and crafting pixel-perfect interfaces that push boundaries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Pulsing CTA */}
          <motion.a
            href="#projects"
            animate={{
              boxShadow: [
                "0 0 15px hsl(342 100% 59% / 0.4), 0 0 30px hsl(342 100% 59% / 0.2)",
                "0 0 25px hsl(342 100% 59% / 0.6), 0 0 50px hsl(342 100% 59% / 0.3)",
                "0 0 15px hsl(342 100% 59% / 0.4), 0 0 30px hsl(342 100% 59% / 0.2)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.04 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase font-semibold transition-all duration-300"
          >
            View Projects <ArrowDown size={16} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.04, borderColor: "hsl(342 100% 59% / 0.8)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md border border-primary/40 text-primary font-heading text-sm tracking-wider uppercase font-semibold hover:bg-primary/10 transition-all duration-300"
          >
            Download Resume <Download size={16} />
          </motion.a>
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
};

export default HeroSection;
