import { motion } from "framer-motion";
import { ArrowDown, Download, Terminal } from "lucide-react";
import Typewriter from "./Typewriter";
import { useParallax } from "@/hooks/useParallax";

const statusLines = [
  { label: "SYSTEM", value: "ONLINE", color: "text-green-400" },
  { label: "NEURAL_NET", value: "ACTIVE", color: "text-green-400" },
  { label: "PROJECTS", value: "3 LOADED", color: "text-primary" },
  { label: "SKILLS", value: "12 MODULES", color: "text-primary" },
];

const HeroSection = () => {
  const parallax = useParallax(0.02);

  return (
    <section id="home" className="relative z-10 min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left: Main content */}
          <motion.div
            className="lg:col-span-3 text-center lg:text-left"
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ x: parallax.x * 0.5, y: parallax.y * 0.5 }}
          >
            <p className="text-primary/50 font-mono text-xs mb-6 tracking-wider">
              <Typewriter text="> system.portfolio.init() — access_granted" speed={30} delay={800} />
            </p>

            <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4 animate-flicker">
              Welcome to my portfolio
            </p>

            <motion.h1
              whileHover={{ x: [0, -3, 3, -2, 2, 0] }}
              transition={{ duration: 0.4 }}
              className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-6 cursor-default"
            >
              <span className="text-foreground glitch-text" data-text="PIYUSH">PIYUSH</span>{" "}
              <span className="neon-text glitch-text" data-text="SAINI">SAINI</span>
            </motion.h1>

            <motion.p
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ x: parallax.x * -0.3, y: parallax.y * -0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-3"
            >
              AI/ML Developer · Full Stack Developer
            </motion.p>
            <p className="text-muted-foreground max-w-md mx-auto lg:mx-0 mb-10 text-sm" style={{ textWrap: "pretty" as any }}>
              Building intelligent systems and crafting pixel-perfect interfaces that push boundaries.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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
            </div>
          </motion.div>

          {/* Right: System Status Terminal */}
          <motion.div
            className="lg:col-span-2 hidden lg:block"
            initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ x: parallax.x * -0.8, y: parallax.y * -0.5 }}
          >
            <div className="glass-card rounded-lg overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/40 bg-secondary/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground ml-2 flex items-center gap-1.5">
                  <Terminal size={10} /> system_status.sh
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-xs space-y-3">
                <div className="text-muted-foreground/60">
                  <Typewriter text="$ cat /sys/status" speed={40} delay={1200} />
                </div>

                <div className="space-y-2 mt-3">
                  {statusLines.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8 + i * 0.3 }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-muted-foreground">{s.label}</span>
                      <span className={`${s.color} font-semibold`}>{s.value}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.2 }}
                  className="pt-3 border-t border-border/30"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">▶</span>
                    <span className="text-muted-foreground/70">All systems operational</span>
                  </div>
                </motion.div>

                {/* Blinking cursor */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5 }}
                  className="flex items-center gap-1 text-muted-foreground/40 pt-1"
                >
                  <span>$</span>
                  <span className="animate-pulse text-primary">▌</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

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
