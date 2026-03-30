import SectionWrapper from "./SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ZoomIn } from "lucide-react";
import { useState } from "react";

const certificates = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "NPTEL",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910auj7?w=600&q=80",
  },
  {
    title: "Python for Everybody",
    issuer: "Coursera",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
  },
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
  },
  {
    title: "React Advanced Patterns",
    issuer: "Frontend Masters",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
  },
  {
    title: "Cloud Computing Fundamentals",
    issuer: "NPTEL",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
  },
];

const CertificatesSection = () => {
  const [selected, setSelected] = useState<typeof certificates[0] | null>(null);

  return (
    <>
      <SectionWrapper id="certificates">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">
          <span className="neon-text">Certificates</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificates.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() => setSelected(c)}
              className="glass-card rounded-lg overflow-hidden cursor-pointer group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="text-primary" size={28} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-sm font-semibold mb-1 group-hover:text-primary transition-colors">
                  {c.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Award size={12} className="text-primary/60" /> {c.issuer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-background/85 backdrop-blur-lg p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 w-9 h-9 rounded-full border border-primary/20 bg-background/60 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
              >
                <X size={16} />
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full rounded-xl border border-border/50"
              />
              <div className="mt-4 text-center">
                <h3 className="font-heading text-lg font-semibold neon-text">{selected.title}</h3>
                <p className="text-sm text-muted-foreground">{selected.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CertificatesSection;
