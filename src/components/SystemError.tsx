import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const glitchMessages = [
  "SYSTEM ERROR",
  "ACCESS DENIED",
  "MEMORY OVERFLOW",
  "SIGNAL LOST",
  "RECALIBRATING...",
];

const SystemError = () => {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const trigger = () => {
      const delay = 15000 + Math.random() * 30000; // 15-45 seconds
      setTimeout(() => {
        setMsg(glitchMessages[Math.floor(Math.random() * glitchMessages.length)]);
        setShow(true);
        setTimeout(() => setShow(false), 200 + Math.random() * 300);
        trigger();
      }, delay);
    };
    trigger();
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.05 }}
          className="fixed inset-0 z-[99998] pointer-events-none flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-primary/5" />
          <p className="font-heading text-2xl md:text-5xl font-bold text-primary/60 glitch-text animate-shake" data-text={msg}>
            {msg}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SystemError;
