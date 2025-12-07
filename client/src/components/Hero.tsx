import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-background text-foreground pt-20">
      
      <div className="relative z-10 container px-6 md:px-12 flex flex-col gap-8 items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6 max-w-5xl"
        >
           
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight text-foreground leading-[1.05]">
            Visibility & Analytics from AI Search — and <span className="text-primary">the actions to drive growth</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Capture millions of clicks from customers discovering new products and brands through ChatGPT
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
           <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-all shadow-sm flex items-center gap-2">
             Start for free
             <ArrowRight className="w-5 h-5" />
           </button>
           <button className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground border border-border font-medium text-lg hover:bg-secondary/90 transition-colors">
             Book a Demo
           </button>
        </motion.div>
      </div>
      
    </section>
  );
}
