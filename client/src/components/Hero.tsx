import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/abstract_digital_noise_texture_for_hero_background.png";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src={heroBg}
          alt="Digital Noise Texture"
          className="w-full h-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      <div className="relative z-10 container px-6 md:px-12 flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-9xl font-display font-bold leading-[0.85] tracking-tighter">
            WE ENGINEER
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
              CULTURE.
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl flex flex-col gap-6"
        >
          <p className="text-lg md:text-xl font-mono text-neutral-400">
            / The premier agency for viral memetics and digital resonance.
          </p>
          
          <div className="flex gap-4 mt-4">
             <button className="px-8 py-3 bg-white text-black font-mono font-bold text-sm hover:bg-neutral-200 transition-colors">
               START PROJECT
             </button>
             <button className="px-8 py-3 border border-white/20 text-white font-mono font-bold text-sm hover:bg-white/10 transition-colors">
               OUR METHOD
             </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 text-xs font-mono text-neutral-500"
      >
        SCROLL TO EXPLORE
      </motion.div>
    </section>
  );
}
