import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const categories = [
  { title: "Languages", skills: ["C++", "Python", "JavaScript", "C"] },
  { title: "Frameworks", skills: ["React", "Next.js", "Node.js", "Express"] },
  { title: "Tools & Platforms", skills: ["Docker", "GitHub", "Prisma", "Vercel"] },
];

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">
      My <span className="neon-text">Skills</span>
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {categories.map((cat, ci) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-lg p-8"
        >
          <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-primary mb-6">{cat.title}</h3>
          <div className="flex flex-wrap gap-3">
            {cat.skills.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-md border border-primary/20 text-sm text-foreground bg-primary/5 hover:bg-primary/15 hover:border-primary/50 transition-all duration-200 active:scale-95"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
