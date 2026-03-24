import { useState, useEffect } from "react";

interface Props {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onDone?: () => void;
}

const Typewriter = ({ text, speed = 40, delay = 0, className = "", onDone }: Props) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) {
      onDone?.();
      return;
    }
    const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
    return () => clearTimeout(t);
  }, [started, displayed, text, speed, onDone]);

  return (
    <span className={className}>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="animate-pulse text-primary">▌</span>
      )}
    </span>
  );
};

export default Typewriter;
