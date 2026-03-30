import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { BookOpen, Clock, Building2 } from "lucide-react";

const trainings = [
  {
    title: "DSA with C++",
    org: "Splen Technology",
    duration: "3 Months",
    desc: "Comprehensive training covering arrays, linked lists, trees, graphs, dynamic programming, and advanced algorithmic techniques.",
  },
  {
    title: "Full Stack Web Development",
    org: "Online Certification",
    duration: "6 Months",
    desc: "End-to-end web development covering React, Node.js, databases, authentication, and deployment pipelines.",
  },
  {
    title: "Machine Learning & AI",
    org: "Coursera / NPTEL",
    duration: "4 Months",
    desc: "Supervised and unsupervised learning, neural networks, computer vision, and natural language processing fundamentals.",
  },
  {
    title: "Python for Data Science",
    org: "Self-Paced Learning",
    duration: "2 Months",
    desc: "Data manipulation with Pandas, visualization with Matplotlib, and statistical analysis for real-world datasets.",
  },
];

const TrainingsSection = () => (
  <SectionWrapper id="trainings">
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">
      Trainings & <span className="neon-text">Learning</span>
    </h2>
    <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {trainings.map((t, i) => (
        <motion.div
          key={t.title}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6, boxShadow: "0 0 30px hsl(342 100% 59% / 0.15)", transition: { duration: 0.25 } }}
          className="glass-card rounded-lg p-7 relative overflow-hidden group"
        >
          {/* Accent line */}
          <div className="w-full h-0.5 rounded-full bg-gradient-to-r from-primary/50 to-transparent mb-5" />

          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <BookOpen className="text-primary" size={18} />
            </div>
            <div>
              <h3 className="font-heading text-base font-semibold group-hover:text-primary transition-colors">
                {t.title}
              </h3>
              <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Building2 size={11} /> {t.org}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={11} /> {t.duration}
                </span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default TrainingsSection;
