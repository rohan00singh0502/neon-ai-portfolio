import { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const fontSize = 14;
    let columns: number;
    let drops: number[];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1).map(() => Math.random() * -100);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 18, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Primary neon color with varying opacity
        const opacity = 0.15 + Math.random() * 0.2;
        ctx.fillStyle = `hsla(342, 100%, 59%, ${opacity})`;
        ctx.fillText(char, x, y);

        // Occasionally brighter character
        if (Math.random() > 0.98) {
          ctx.fillStyle = `hsla(342, 100%, 75%, 0.8)`;
          ctx.fillText(char, x, y);
        }

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-40"
    />
  );
};

export default MatrixRain;
