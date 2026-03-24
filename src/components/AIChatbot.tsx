import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import Typewriter from "./Typewriter";

interface Message {
  id: number;
  role: "user" | "ai";
  text: string;
  typing?: boolean;
}

const responses: Record<string, string> = {
  skills:
    "Piyush is proficient in C++, Python, JavaScript, React, Next.js, Node.js, TensorFlow, Docker, and more. His strongest domains are AI/ML and Full-Stack Development.",
  projects:
    "Key projects include EcoPlay (AI learning platform), Optimus Event (event management system), and a Sign Language Detection System using computer vision.",
  experience:
    "Piyush is a B.Tech CSE student at LPU with hands-on experience in AI/ML, full-stack development, and competitive programming with 200+ DSA problems solved.",
  education:
    "B.Tech in Computer Science & Engineering from Lovely Professional University. Schooling from Army Public School with distinction in both 10th and 12th.",
  achievements:
    "Smart India Hackathon qualifier, strong LeetCode ranking, and 200+ DSA problems solved across platforms.",
  contact:
    "You can reach Piyush via LinkedIn, GitHub, or email. Check the Contact section below!",
  hello: "Hello! I'm Piyush's AI assistant. Ask me about his skills, projects, education, or achievements!",
  hi: "Hey there! I'm the system AI. Try asking about Piyush's skills, projects, or experience.",
};

const quickActions = ["Skills", "Projects", "Experience", "Achievements"];

const findResponse = (input: string): string => {
  const lower = input.toLowerCase();
  for (const key of Object.keys(responses)) {
    if (lower.includes(key)) return responses[key];
  }
  return "I can tell you about Piyush's skills, projects, education, achievements, or contact info. What would you like to know?";
};

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "ai", text: "System AI online. Ask me about Piyush." },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(1);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: idRef.current++, role: "user", text };
    const aiId = idRef.current++;
    setMessages((m) => [...m, userMsg, { id: aiId, role: "ai", text: "", typing: true }]);
    setInput("");

    setTimeout(() => {
      setMessages((m) =>
        m.map((msg) => (msg.id === aiId ? { ...msg, text: findResponse(text), typing: false } : msg))
      );
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        animate={{
          boxShadow: [
            "0 0 15px hsl(342 100% 59% / 0.3)",
            "0 0 30px hsl(342 100% 59% / 0.5)",
            "0 0 15px hsl(342 100% 59% / 0.3)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg"
      >
        {open ? <X size={22} /> : <MessageSquare size={22} />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-[60] w-80 sm:w-96 glass-card rounded-xl overflow-hidden flex flex-col"
            style={{ maxHeight: "70vh" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border/30">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot size={16} className="text-primary" />
              </div>
              <div>
                <p className="font-heading text-xs uppercase tracking-widest text-foreground">System AI</p>
                <p className="text-[10px] text-primary/60 font-mono">status: online</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[45vh]">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-lg text-sm ${
                      msg.role === "user"
                        ? "bg-primary/20 text-foreground border border-primary/20"
                        : "bg-secondary/50 text-muted-foreground border border-border/30"
                    }`}
                  >
                    {msg.typing ? (
                      <span className="flex gap-1 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </span>
                    ) : msg.role === "ai" ? (
                      <Typewriter text={msg.text} speed={15} className="leading-relaxed" />
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick actions */}
            <div className="flex gap-2 px-4 pb-2 flex-wrap">
              {quickActions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-[10px] px-2.5 py-1 rounded border border-primary/20 text-primary/70 hover:bg-primary/10 hover:border-primary/40 transition-all font-mono uppercase tracking-wider"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 px-4 py-3 border-t border-border/30"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Piyush..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none font-mono"
              />
              <button type="submit" className="text-primary hover:text-primary/80 transition-colors active:scale-90">
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
