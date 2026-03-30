import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative z-10 border-t border-border/30 py-12">
    <div className="container mx-auto px-4 md:px-8">
      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-lg md:text-xl font-heading font-semibold mb-8"
      >
        <span className="neon-text">Turning ideas into intelligent systems</span>
        <span className="text-muted-foreground"> — one project at a time.</span>
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
        <div className="flex items-center gap-2">
          <span className="text-green-400 animate-pulse">●</span>
          <span>SYS_ONLINE</span>
          <span className="text-border">|</span>
          <span>user@portfolio:~$</span>
          <span className="text-primary animate-pulse">▌</span>
        </div>
        <p>© {new Date().getFullYear()} Piyush Saini — All rights reserved</p>
      </div>
    </div>
  </footer>
);

export default Footer;
