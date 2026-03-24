import SectionWrapper from "./SectionWrapper";
import { motion, useMotionValue, useTransform } from "framer-motion";

const categories = [
  { title: "Languages", skills: ["C++", "Python", "JavaScript", "C"] },
  { title: "Frameworks", skills: ["React", "Next.js", "Node.js", "Express"] },
  { title: "Tools & Platforms", skills: ["Docker", "GitHub", "Prisma", "Vercel"] },
];

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
      <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-primary mb-6">{cat.title}</h3>
      <div className="flex flex-wrap gap-3">
        {cat.skills.map((s, si) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: ci * 0.1 + si * 0.05 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 16px hsl(342 100% 59% / 0.5)",
            }}
            className="px-4 py-2 rounded-md border border-primary/20 text-sm text-foreground bg-primary/5 hover:bg-primary/15 hover:border-primary/50 transition-all duration-200 active:scale-95 cursor-default"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">
      My <span className="neon-text">Skills</span>
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {categories.map((cat, ci) => (
        <TiltCard key={cat.title} cat={cat} ci={ci} />
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
