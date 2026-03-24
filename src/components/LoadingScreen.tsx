import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Typewriter from "./Typewriter";

const bootLogs = [
  "> Booting CyberOS v4.2.1...",
  "> Loading neural network modules...",
  "> Establishing secure connection...",
  "> Mounting filesystem...",
  "> Initializing GPU drivers...",
  "> System ready. Welcome, User.",
];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [logCount, setLogCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 500);
          setTimeout(onComplete, 900);
          return 100;
        }
        return p + 1.5;
      });
    }, 35);
    return () => clearInterval(interval);
  }, [onComplete]);

  // Add log lines as progress increases
  useEffect(() => {
    const idx = Math.min(Math.floor(progress / (100 / bootLogs.length)) + 1, bootLogs.length);
    setLogCount(idx);
  }, [progress]);

  const handleLogDone = useCallback(() => {}, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.08, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background"
        >
          {/* Scanlines overlay */}
          <div className="absolute inset-0 pointer-events-none scan-line opacity-30" />

          {/* Glitch title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-2xl md:text-4xl font-bold mb-8 glitch-text animate-flicker"
            data-text="PIYUSH SAINI"
          >
            <span className="text-foreground">PIYUSH</span>{" "}
            <span className="neon-text">SAINI</span>
          </motion.h1>

          {/* Terminal boot log */}
          <div className="w-72 md:w-96 mb-6 font-mono text-[10px] md:text-xs text-primary/70 space-y-1 max-h-32 overflow-hidden">
            {bootLogs.slice(0, logCount).map((log, i) => (
              <Typewriter
                key={i}
                text={log}
                speed={20}
                delay={i * 400}
                className="block"
                onDone={i === bootLogs.length - 1 ? handleLogDone : undefined}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-72 md:w-96 h-1.5 rounded-full bg-secondary overflow-hidden mb-3 border border-primary/10">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, hsl(342 100% 59%), hsl(342 100% 70%))",
                boxShadow: "0 0 12px hsl(342 100% 59% / 0.6)",
              }}
            />
          </div>

          {/* Percentage */}
          <p className="font-heading text-xs text-muted-foreground tabular-nums tracking-widest">
            [{Math.round(progress)}%] LOADING...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
