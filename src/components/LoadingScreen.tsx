import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const messages = [
  "Initializing System...",
  "Loading Modules...",
  "Establishing Connection...",
  "System Ready.",
];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 400);
          setTimeout(onComplete, 800);
          return 100;
        }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const idx = Math.min(Math.floor(progress / 28), messages.length - 1);
    setMsgIndex(idx);
  }, [progress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background"
        >
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

          {/* Progress bar */}
          <div className="w-64 md:w-80 h-1 rounded-full bg-secondary overflow-hidden mb-4">
            <motion.div
              className="h-full bg-primary rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Status text */}
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary/80 animate-flicker">
            {messages[msgIndex]}
          </p>
          <p className="font-heading text-xs text-muted-foreground mt-2 tabular-nums">{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
