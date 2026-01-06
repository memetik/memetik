import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "@assets/generated_images/abstract_ai_search_visualization_with_data_nodes_and_connections_in_light_theme_colors.png";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background text-foreground">
      {/* Background Image with Overlay - Parallax Effect */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
        <img
          src={heroBg}
          alt="AI Search Network Visualization"
          className="w-full h-full object-cover grayscale contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
      </motion.div>
      
      {/* Subtle data grid instead of construction lines */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.03]"></div>

      <div className="relative z-10 container px-6 md:px-12 flex flex-col gap-10 pt-32">
        {/* Decorative 'Stamp' Container - Hidden on small screens, can keep or remove if we want to mimic the image exactly. 
            The image doesn't show this 'LAB' stamp in the same place, but I will keep it for now as "cool brand stuff" unless it conflicts. 
            Actually, the image shows a cleaner top area. I'll comment it out to match the clean reference more. */}
        {/* <div className="absolute top-24 right-6 md:right-12 border-2 border-primary p-4 hidden lg:block opacity-60 rotate-2">
            <div className="border border-primary p-2">
                <div className="font-display font-bold text-4xl text-primary leading-none text-center">LAB</div>
                <div className="font-mono text-[10px] text-center mt-1 tracking-widest">ADVANCED TECH OPS</div>
            </div>
        </div> */}

        <div className="max-w-5xl relative mx-auto text-center md:text-left md:mx-0">
          
          {/* Chevron Pattern */}
          <div className="w-full overflow-hidden whitespace-nowrap mb-2 select-none opacity-80" aria-hidden="true">
            <span className="font-mono text-xl tracking-tight text-foreground font-bold">
              &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
            </span>
          </div>

          {/* MEMETIK Label with Line */}
          <div className="flex items-center gap-4 mb-8">
             <div className="h-[2px] w-8 bg-foreground"></div>
             <span className="font-mono font-bold text-sm tracking-widest text-foreground uppercase">MEMETIK</span>
             <div className="h-[1px] flex-grow bg-foreground/30"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-display font-black leading-[0.85] tracking-tighter text-foreground drop-shadow-sm select-none uppercase mb-6 break-words">
            Be the Brand <br/>
            AI recommends.
          </h1>
          
          <div className="w-full border-b border-foreground mb-8"></div>

          <p className="text-xl sm:text-2xl md:text-4xl font-serif text-foreground leading-tight tracking-tight mb-12">
            We engineer visibility across LLMs, search engines, and agents.
          </p>
          
          <div className="flex flex-col md:flex-row gap-0 border-2 border-foreground bg-foreground text-background">
             <div className="flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-background/20 relative group cursor-default bg-[#111] text-[#E3E7DE]">
                <div className="w-8 h-8 border border-[#E3E7DE] flex items-center justify-center relative">
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[120%] h-[1px] bg-[#E3E7DE] rotate-45"></div>
                      <div className="w-[120%] h-[1px] bg-[#E3E7DE] -rotate-45"></div>
                   </div>
                </div>
             </div>
             
             <div className="flex-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-background/20 font-mono text-sm md:text-base font-bold tracking-wider uppercase hover:bg-background/10 transition-colors cursor-default bg-[#111] text-[#E3E7DE]">
                LLM OPTIMIZATION
             </div>
             
             <div className="flex-1 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-background/20 font-mono text-sm md:text-base font-bold tracking-wider uppercase hover:bg-background/10 transition-colors cursor-default bg-[#111] text-[#E3E7DE]">
                SEARCH ENGINE OPS
             </div>
             
             <div className="flex-1 flex items-center justify-center p-4 font-mono text-sm md:text-base font-bold tracking-wider uppercase hover:bg-background/10 transition-colors cursor-default bg-[#111] text-[#E3E7DE]">
                AI INTEGRATION
             </div>
          </div>

          <div className="mt-12 flex justify-center md:justify-start">
             <a href="https://cal.com/memetik/letstalk" className="group relative px-10 py-5 bg-transparent text-foreground font-mono font-bold text-sm overflow-hidden rounded-none border-2 border-foreground shadow-[6px_6px_0px_0px_var(--color-foreground)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-100 inline-block uppercase tracking-widest">
               <div className="absolute inset-0 bg-foreground/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
               <div className="relative flex items-center gap-4">
                 <span>LET'S TALK</span>
                 <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
               </div>
             </a>
          </div>

        </div>
      </div>
      
    </section>
  );
}


