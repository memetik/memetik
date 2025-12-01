import { motion } from "framer-motion";

export function Marquee() {
  return (
    <div className="w-full py-4 bg-black text-white overflow-hidden flex items-center">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-4">
            <span className="text-8xl font-display font-bold tracking-tighter opacity-80">
              VIRAL ENGINEERING
            </span>
            <span className="text-xl font-mono">★</span>
            <span className="text-8xl font-display font-bold tracking-tighter opacity-80">
              MEMETIC RESONANCE
            </span>
            <span className="text-xl font-mono">★</span>
            <span className="text-8xl font-display font-bold tracking-tighter opacity-80">
              CULTURAL IMPACT
            </span>
            <span className="text-xl font-mono">★</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
