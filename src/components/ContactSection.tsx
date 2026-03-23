import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, FormEvent } from "react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Mail, label: "Email", href: "mailto:piyush@example.com" },
];

const inputClass =
  "w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus:shadow-[0_0_16px_hsl(342_100%_59%/0.2)] focus:scale-[1.01] transition-all duration-300 origin-center";

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [ripple, setRipple] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <SectionWrapper id="contact">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">
        Get In <span className="neon-text">Touch</span>
      </h2>
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="glass-card rounded-lg p-8 space-y-5">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <label className="block text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2">Name</label>
            <input required type="text" className={inputClass} placeholder="Your name" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <label className="block text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2">Email</label>
            <input required type="email" className={inputClass} placeholder="your@email.com" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <label className="block text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2">Message</label>
            <textarea required rows={4} className={`${inputClass} resize-none`} placeholder="Your message..." />
          </motion.div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            animate={
              !sent
                ? {
                    boxShadow: [
                      "0 0 15px hsl(342 100% 59% / 0.4)",
                      "0 0 25px hsl(342 100% 59% / 0.6)",
                      "0 0 15px hsl(342 100% 59% / 0.4)",
                    ],
                  }
                : {}
            }
            transition={!sent ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
            className={`relative w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-heading text-sm uppercase tracking-wider font-semibold overflow-hidden transition-all duration-300 ${
              ripple ? "after:absolute after:inset-0 after:bg-primary-foreground/20 after:animate-[pulse-scale_0.6s_ease-out]" : ""
            }`}
          >
            {sent ? "Message Sent!" : <><Send size={16} /> Send Message</>}
          </motion.button>
        </form>

        <div className="flex items-center justify-center gap-6 mt-10">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_16px_hsl(342_100%_59%/0.3)] transition-all duration-200"
            >
              <s.icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
