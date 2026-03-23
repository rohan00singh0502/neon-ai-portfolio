import SectionWrapper from "./SectionWrapper";
import { Brain, Code, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: Brain, title: "AI/ML Enthusiast", desc: "Passionate about machine learning, deep learning, and building intelligent systems." },
  { icon: Code, title: "Full-Stack Developer", desc: "Crafting end-to-end solutions with modern frameworks and clean architecture." },
  { icon: Lightbulb, title: "Problem Solver", desc: "200+ DSA problems solved with a focus on efficient, elegant solutions." },
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
      About <span className="neon-text">Me</span>
    </h2>
    <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14" style={{ textWrap: "pretty" }}>
      I'm a passionate developer and AI/ML enthusiast pursuing B.Tech in Computer Science. I love turning complex problems into simple, beautiful, and intuitive solutions.
    </p>
    <div className="grid md:grid-cols-3 gap-6">
      {highlights.map((h, i) => (
        <motion.div
          key={h.title}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-lg p-8 text-center"
        >
          <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <h.icon className="text-primary" size={28} />
          </div>
          <h3 className="font-heading text-lg font-semibold mb-3">{h.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AboutSection;
