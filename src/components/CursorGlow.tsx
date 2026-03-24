import { useEffect, useRef, useState, useCallback } from "react";

interface Trail {
  id: number;
  x: number;
  y: number;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [trails, setTrails] = useState<Trail[]>([]);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [hovering, setHovering] = useState(false);
  const idRef = useRef(0);
  const rippleIdRef = useRef(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      idRef.current++;
      setTrails((prev) => [...prev.slice(-6), { id: idRef.current, x: e.clientX, y: e.clientY }]);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [role='button'], input, textarea"));
    };

    const click = (e: MouseEvent) => {
      rippleIdRef.current++;
      setRipples((prev) => [...prev.slice(-3), { id: rippleIdRef.current, x: e.clientX, y: e.clientY }]);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("click", click);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("click", click);
    };
  }, []);

  // Clean old trails
  useEffect(() => {
    if (trails.length > 0) {
      const timer = setTimeout(() => setTrails((t) => t.slice(1)), 120);
      return () => clearTimeout(timer);
    }
  }, [trails]);

  // Clean old ripples
  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => setRipples((r) => r.slice(1)), 700);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  return (
    <div className="hidden md:block">
      {/* Trails */}
      {trails.map((t, i) => (
        <div
          key={t.id}
          className="fixed pointer-events-none rounded-full z-[9998]"
          style={{
            left: t.x,
            top: t.y,
            width: 8 + i * 2,
            height: 8 + i * 2,
            background: `radial-gradient(circle, hsl(342 100% 59% / ${0.15 + i * 0.03}) 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.2s",
          }}
        />
      ))}

      {/* Click ripples */}
      {ripples.map((r) => (
        <div
          key={r.id}
          className="fixed pointer-events-none z-[9998] rounded-full animate-[ripple-expand_0.6s_ease-out_forwards]"
          style={{
            left: r.x,
            top: r.y,
            width: 10,
            height: 10,
            transform: "translate(-50%, -50%)",
            border: "1px solid hsl(342 100% 59% / 0.6)",
            boxShadow: "0 0 8px hsl(342 100% 59% / 0.3)",
          }}
        />
      ))}

      {/* Main glow */}
      <div
        className="cursor-glow"
        style={{
          left: pos.x,
          top: pos.y,
          width: hovering ? 400 : 300,
          height: hovering ? 400 : 300,
          transition: "width 0.3s ease-out, height 0.3s ease-out, opacity 0.3s",
        }}
      />
    </div>
  );
};

export default CursorGlow;
