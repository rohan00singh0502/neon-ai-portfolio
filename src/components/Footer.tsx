import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative z-10 border-t border-border/30 py-10">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: terminal prompt */}
        <div className="font-mono text-xs text-muted-foreground/60 flex items-center gap-2">
          <span className="text-primary/40">user@portfolio:~$</span>
          <span>echo "Made with passion"</span>
          <span className="animate-pulse text-primary">▌</span>
        </div>

        {/* Center: branding */}
        <p className="text-muted-foreground text-xs tracking-wider">
          © {new Date().getFullYear()}{" "}
          <span className="neon-text font-heading">Piyush Saini</span>
          <span className="text-muted-foreground/40 mx-2">·</span>
          <span className="text-muted-foreground/50">v4.2.1</span>
        </p>

        {/* Right: system uptime */}
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 text-xs"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="font-mono text-muted-foreground/50">SYS_ONLINE</span>
        </motion.div>
      </div>
    </div>
  </footer>
);

export default Footer;
