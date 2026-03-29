import SectionWrapper from "./SectionWrapper";
import { motion, useMotionValue, useTransform } from "framer-motion";

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "C", level: 75 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 80 },
      { name: "Node.js", level: 78 },
      { name: "Express", level: 76 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Docker", level: 70 },
      { name: "GitHub", level: 90 },
      { name: "Prisma", level: 72 },
      { name: "Vercel", level: 85 },
    ],
  },
];

const EnergyBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="space-y-1.5">
    <div className="flex items-center justify-between">
      <span className="text-sm text-foreground font-medium">{name}</span>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.5 }}
        className="text-xs font-heading text-primary tabular-nums"
      >
        {level}%
      </motion.span>
    </div>
    <div className="h-2 rounded-full bg-secondary/80 overflow-hidden border border-border/50">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        className="h-full rounded-full relative"
        style={{
          background: `linear-gradient(90deg, hsl(342 100% 59% / 0.6), hsl(342 100% 59%))`,
          boxShadow: level > 80
            ? "0 0 12px hsl(342 100% 59% / 0.6), 0 0 24px hsl(342 100% 59% / 0.3)"
            : "0 0 8px hsl(342 100% 59% / 0.4)",
        }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent 0%, hsl(0 0% 100% / 0.15) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["-200% 0", "200% 0"] }}
          transition={{ duration: 2, repeat: Infinity, delay: delay + 1.2, ease: "linear" }}
        />
      </motion.div>
    </div>
  </div>
);

const TiltCard = ({ cat, ci }: { cat: typeof categories[0]; ci: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const resetMouse = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      style={{ perspective: 800, rotateX, rotateY }}
      whileHover={{ y: -10 }}
      className="glass-card rounded-lg p-8 scan-line neon-trace overflow-hidden"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 rounded-full bg-primary animate-dot-pulse" />
        <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-primary">{cat.title}</h3>
      </div>
      <div className="space-y-4">
        {cat.skills.map((s, si) => (
          <EnergyBar key={s.name} name={s.name} level={s.level} delay={ci * 0.1 + si * 0.1} />
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
      My <span className="neon-text">Skills</span>
    </h2>
    <p className="text-muted-foreground text-center text-sm mb-14 font-mono">
      &gt; system.skills.scan() — proficiency_levels_loaded
    </p>
    <div className="grid md:grid-cols-3 gap-8">
      {categories.map((cat, ci) => (
        <TiltCard key={cat.title} cat={cat} ci={ci} />
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
