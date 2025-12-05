import { motion } from "framer-motion";

export function Marquee() {
  return (
    <div className="w-full py-4 bg-primary text-primary-foreground overflow-hidden flex items-center border-y border-primary">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-4">
            <span className="text-6xl md:text-8xl font-display font-bold tracking-tighter opacity-90">
              LLM OPTIMIZATION
            </span>
            <span className="text-4xl font-display align-middle">///</span>
            <span className="text-6xl md:text-8xl font-display font-bold tracking-tighter opacity-90">
              GENERATIVE SEARCH
            </span>
            <span className="text-4xl font-display align-middle">///</span>
            <span className="text-6xl md:text-8xl font-display font-bold tracking-tighter opacity-90">
              AI VISIBILITY
            </span>
            <span className="text-4xl font-display align-middle">///</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
