import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Award, Code, Trophy } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Smart India Hackathon", desc: "Qualified for SIH — one of India's largest hackathon programs." },
  { icon: Code, title: "200+ DSA Problems", desc: "Consistently solving data structures & algorithms challenges across platforms." },
  { icon: Award, title: "LeetCode Ranking", desc: "Achieved competitive ranking on LeetCode with focus on optimization." },
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements">
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">
      <span className="neon-text">Achievements</span>
    </h2>
    <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {achievements.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-lg p-8 text-center"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5 animate-glow-pulse">
            <a.icon className="text-primary" size={22} />
          </div>
          <h3 className="font-heading text-base font-semibold mb-2">{a.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AchievementsSection;
