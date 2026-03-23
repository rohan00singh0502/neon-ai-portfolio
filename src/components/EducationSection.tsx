import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const education = [
  { period: "2022 – 2026", title: "B.Tech CSE", institution: "Lovely Professional University", detail: "Specialization in AI & ML" },
  { period: "2020 – 2022", title: "12th (CBSE)", institution: "Army Public School", detail: "Science stream – PCM" },
  { period: "2018 – 2020", title: "10th (CBSE)", institution: "Army Public School", detail: "Scored with distinction" },
];

const EducationSection = () => (
  <SectionWrapper id="education">
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">
      <span className="neon-text">Education</span>
    </h2>
    <div className="relative max-w-2xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

      {education.map((e, i) => (
        <motion.div
          key={e.title}
          initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`relative pl-12 md:pl-0 mb-12 last:mb-0 md:w-1/2 ${
            i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
          }`}
        >
          {/* Dot */}
          <div className="absolute left-2.5 md:left-auto top-1.5 w-3 h-3 rounded-full bg-primary neon-glow md:right-auto"
            style={i % 2 === 0 ? { right: "-6.5px", left: "auto" } : { left: "-6.5px" }}
          />

          <span className="text-primary text-xs font-heading tracking-widest uppercase">{e.period}</span>
          <h3 className="font-heading text-lg font-semibold mt-1">{e.title}</h3>
          <p className="text-muted-foreground text-sm">{e.institution}</p>
          <p className="text-muted-foreground/60 text-xs mt-1">{e.detail}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default EducationSection;
