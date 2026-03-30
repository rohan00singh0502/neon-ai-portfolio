import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { ExternalLink, Star, Code2, Trophy, Award } from "lucide-react";

const profiles = [
  {
    platform: "LeetCode",
    username: "piyush_saini",
    icon: Code2,
    stats: [
      { label: "Problems Solved", value: "200+" },
      { label: "Contest Rating", value: "1500+" },
    ],
    color: "text-yellow-400",
    borderColor: "border-yellow-400/20",
    bgColor: "bg-yellow-400/5",
    link: "https://leetcode.com",
  },
  {
    platform: "GeeksforGeeks",
    username: "piyush_saini",
    icon: Code2,
    stats: [
      { label: "Problems Solved", value: "150+" },
      { label: "Score", value: "500+" },
    ],
    color: "text-green-400",
    borderColor: "border-green-400/20",
    bgColor: "bg-green-400/5",
    link: "https://geeksforgeeks.org",
  },
  {
    platform: "CodeChef",
    username: "piyush_saini",
    icon: Trophy,
    stats: [
      { label: "Stars", value: "3★" },
      { label: "Rating", value: "1600+" },
    ],
    color: "text-amber-500",
    borderColor: "border-amber-500/20",
    bgColor: "bg-amber-500/5",
    link: "https://codechef.com",
  },
  {
    platform: "HackerRank",
    username: "piyush_saini",
    icon: Award,
    stats: [
      { label: "Badges", value: "6" },
      { label: "Certificates", value: "4" },
    ],
    color: "text-emerald-400",
    borderColor: "border-emerald-400/20",
    bgColor: "bg-emerald-400/5",
    link: "https://hackerrank.com",
    skills: ["C++", "C", "Python", "Java", "SQL", "React"],
  },
];

const CodingProfilesSection = () => (
  <SectionWrapper id="coding-profiles">
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">
      Coding <span className="neon-text">Profiles</span>
    </h2>
    <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {profiles.map((p, i) => (
        <motion.div
          key={p.platform}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
          className="glass-card rounded-lg p-7 relative overflow-hidden group"
        >
          <div className={`w-full h-0.5 rounded-full bg-gradient-to-r ${p.color.replace("text-", "from-")}/50 to-transparent mb-5`} />

          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-lg ${p.bgColor} border ${p.borderColor} flex items-center justify-center`}>
              <p.icon className={p.color} size={18} />
            </div>
            <div>
              <h3 className="font-heading text-base font-semibold">{p.platform}</h3>
              <p className="text-xs text-muted-foreground font-mono">@{p.username}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {p.stats.map((s) => (
              <div key={s.label} className="bg-secondary/30 rounded-md px-3 py-2 text-center">
                <p className={`font-heading text-lg font-bold ${p.color}`}>{s.value}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>

          {/* HackerRank Skills */}
          {p.skills && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.skills.map((s) => (
                <span
                  key={s}
                  className={`text-[10px] px-2 py-0.5 rounded border ${p.borderColor} ${p.color}/80`}
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors font-heading text-xs uppercase tracking-wider"
          >
            <ExternalLink size={13} /> View Profile
          </a>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default CodingProfilesSection;
