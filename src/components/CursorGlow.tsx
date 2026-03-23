import { useEffect, useRef, useState } from "react";

interface Trail {
  id: number;
  x: number;
  y: number;
}

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [trails, setTrails] = useState<Trail[]>([]);
  const [hovering, setHovering] = useState(false);
  const idRef = useRef(0);

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

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  // Clean old trails
  useEffect(() => {
    if (trails.length > 0) {
      const timer = setTimeout(() => setTrails((t) => t.slice(1)), 120);
      return () => clearTimeout(timer);
    }
  }, [trails]);

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
