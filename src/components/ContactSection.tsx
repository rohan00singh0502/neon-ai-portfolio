import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, FormEvent } from "react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Mail, label: "Email", href: "mailto:piyush@example.com" },
];

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
          <div>
            <label className="block text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2">Name</label>
            <input
              required
              type="text"
              className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2">Email</label>
            <input
              required
              type="email"
              className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2">Message</label>
            <textarea
              required
              rows={4}
              className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
              placeholder="Your message..."
            />
          </div>
          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-heading text-sm uppercase tracking-wider font-semibold neon-glow hover:neon-glow-strong transition-all duration-300"
          >
            {sent ? "Message Sent!" : <><Send size={16} /> Send Message</>}
          </motion.button>
        </form>

        <div className="flex items-center justify-center gap-6 mt-10">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 active:scale-95"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
