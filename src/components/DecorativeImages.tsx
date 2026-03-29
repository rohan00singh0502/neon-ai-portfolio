import { motion } from "framer-motion";
import decoHex from "@/assets/deco-hex.png";
import decoOrb from "@/assets/deco-orb.png";
import decoCircuit from "@/assets/deco-circuit.png";

const floats = [
  { src: decoHex, className: "top-[15%] left-[-5%] w-64 md:w-80", duration: 18, rotate: 15 },
  { src: decoOrb, className: "top-[45%] right-[-8%] w-48 md:w-64", duration: 22, rotate: -10 },
  { src: decoCircuit, className: "top-[75%] left-[-3%] w-72 md:w-96", duration: 25, rotate: 8 },
  { src: decoOrb, className: "top-[5%] right-[5%] w-32 md:w-44", duration: 20, rotate: 20 },
  { src: decoHex, className: "top-[90%] right-[2%] w-40 md:w-56", duration: 16, rotate: -12 },
];

const DecorativeImages = () => (
  <>
    {floats.map((f, i) => (
      <motion.img
        key={i}
        src={f.src}
        alt=""
        loading="lazy"
        width={512}
        height={512}
        animate={{
          y: [0, -20, 0],
          rotate: [0, f.rotate, 0],
        }}
        transition={{
          duration: f.duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`fixed ${f.className} opacity-[0.06] pointer-events-none z-0 blur-sm select-none`}
      />
    ))}
  </>
);

export default DecorativeImages;
