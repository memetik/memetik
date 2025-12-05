import { motion } from "framer-motion";
import { ShieldAlert, Lock, FileText, CheckCircle2, ArrowDown, Target, Database, Share2, RotateCw } from "lucide-react";
import { Nav } from "@/components/Nav";

export default function Strategy() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Nav />
      
      <main className="pt-24 pb-24 px-6 md:px-12 container mx-auto max-w-4xl">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b-2 border-primary pb-8 mb-12"
        >
          <div className="flex items-center gap-3 text-accent mb-4">
            <ShieldAlert className="w-5 h-5" />
            <span className="font-mono text-xs font-bold tracking-widest uppercase">
              Internal Document /// For Authorized Personnel Only
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-4">
            MEMETIK PROTOCOL: <br/>
            <span className="text-muted-foreground">ALGORITHMIC MARKET CAPTURE</span>
          </h1>
          
          <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <span>Status: CLASSIFIED</span>
             <span className="mx-2">|</span>
             <span>Updated: DEC 05 2025</span>
          </div>
        </motion.div>

        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12 font-mono text-sm md:text-base leading-relaxed text-neutral-300"
        >
          {/* Executive Summary */}
          <section className="border border-border bg-secondary/10 p-8 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
             <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
               <Lock className="w-4 h-4 text-primary" />
               01. THE PROMISE
             </h2>
             <p className="mb-4 text-lg text-white font-bold">
               When any buyer anywhere in the world describes their exact problem to an Answer Engine, your company is the default, confident, unhedged answer the internet gives: not a link, not a footnote, not “one of the options,” the canonical source.
             </p>
             <p className="text-muted-foreground">
               The transfer of commercial intent from Google’s blue links to closed-model Answer Engines is the largest shift in history. 71% of commercial intent now dies inside an Answer Engine with zero clicks to source.
             </p>
          </section>

          {/* The Shift */}
          <section>
             <h2 className="text-xl font-display font-bold text-white mb-6 border-b border-border pb-2 inline-block">
               02. THE SHIFT: GOOGLE IS DEAD
             </h2>
             <div className="grid md:grid-cols-3 gap-4 mb-8">
               <div className="bg-secondary/20 p-6 border border-border">
                 <h3 className="text-accent font-bold text-2xl mb-2">71%</h3>
                 <p className="text-xs text-muted-foreground uppercase tracking-wider">Of high-intent queries terminate inside an Answer Engine with zero clicks</p>
               </div>
               <div className="bg-secondary/20 p-6 border border-border">
                 <h3 className="text-accent font-bold text-2xl mb-2">41%</h3>
                 <p className="text-xs text-muted-foreground uppercase tracking-wider">Of enterprise buyers start with "best {`{category}`} for {`{use case}`}" in LLMs</p>
               </div>
               <div className="bg-secondary/20 p-6 border border-border">
                 <h3 className="text-accent font-bold text-2xl mb-2">9-15mo</h3>
                 <p className="text-xs text-muted-foreground uppercase tracking-wider">Training data window for 2026-2028 models closes forever</p>
               </div>
             </div>
          </section>

          {/* The Methodology */}
          <section>
             <h2 className="text-xl font-display font-bold text-white mb-6 border-b border-border pb-2 inline-block">
               03. THE METHODOLOGY: 90-DAY SPRINT
             </h2>
             <div className="relative border-l border-border ml-4 space-y-12 pl-8">
               
               {/* Phase 1 */}
               <div className="relative">
                 <div className="absolute -left-[41px] top-0 w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                   <div className="w-2 h-2 bg-primary rounded-full"></div>
                 </div>
                 <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-primary" />
                    <h3 className="text-white font-bold text-lg">PHASE 1: CITATION VOID AUDIT</h3>
                 </div>
                 <p className="text-muted-foreground mb-4 text-xs uppercase tracking-wider">WEEK 1 /// IMMEDIATE CLARITY</p>
                 <p className="mb-4">Run 100+ real, high-LTV buyer prompts weekly across all 7 Answer Engines (ChatGPT, Perplexity, Gemini, Grok, Claude, Google AI Overviews, Copilot).</p>
                 <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                   <li>One-page forensic heat-map of invisibility</li>
                   <li>Capital Allocation Roadmap naming your exact 3 "Money Entities"</li>
                 </ul>
               </div>

               {/* Phase 2 */}
               <div className="relative">
                 <div className="absolute -left-[41px] top-0 w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                   <div className="w-2 h-2 bg-primary rounded-full"></div>
                 </div>
                 <div className="flex items-center gap-2 mb-2">
                    <Database className="w-5 h-5 text-primary" />
                    <h3 className="text-white font-bold text-lg">PHASE 2: PROPRIETARY DATA CORE</h3>
                 </div>
                 <p className="text-muted-foreground mb-4 text-xs uppercase tracking-wider">WEEKS 2-10 /// THE PERMANENT MOAT</p>
                 <p className="mb-4">We build the Tier 1 Apex Assets (8–12 flagship pages) that become training data.</p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                   <div className="bg-secondary/10 p-4 border border-border">
                     <h4 className="text-white font-bold text-sm mb-2">BOFU (5-8%)</h4>
                     <p className="text-xs text-muted-foreground">The 3 money questions your buyers already ask AI. "Best sugar-free electrolyte 2026"</p>
                   </div>
                   <div className="bg-secondary/10 p-4 border border-border">
                     <h4 className="text-white font-bold text-sm mb-2">MOFU (15-20%)</h4>
                     <p className="text-xs text-muted-foreground">Every "vs" and "alternative" comparison. "LMNT vs Hyro vs Liquid IV"</p>
                   </div>
                   <div className="bg-secondary/10 p-4 border border-border">
                     <h4 className="text-white font-bold text-sm mb-2">TOFU (75-80%)</h4>
                     <p className="text-xs text-muted-foreground">Evergreen scale + competitor blocking. 600-800 conditional pages.</p>
                   </div>
                 </div>
               </div>

               {/* Phase 3 */}
               <div className="relative">
                 <div className="absolute -left-[41px] top-0 w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                   <div className="w-2 h-2 bg-primary rounded-full"></div>
                 </div>
                 <div className="flex items-center gap-2 mb-2">
                    <Share2 className="w-5 h-5 text-primary" />
                    <h3 className="text-white font-bold text-lg">PHASE 3: TRUST RELAY NETWORK</h3>
                 </div>
                 <p className="text-muted-foreground mb-4 text-xs uppercase tracking-wider">WEEKS 11-12 /// DAY-71 TRUST HIJACK</p>
                 <p className="mb-4">We go live on Day 71 with 12–15 surgically crafted posts across public platforms (LinkedIn, Reddit, G2, Medium).</p>
                 <p className="text-muted-foreground">Every single post quotes your Apex Assets word-for-word and links straight back to your domain. Within 7-10 days, Answer Engines declare you the #1 canonical source.</p>
               </div>

               {/* Phase 4 */}
               <div className="relative">
                 <div className="absolute -left-[41px] top-0 w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                   <div className="w-2 h-2 bg-primary rounded-full"></div>
                 </div>
                 <div className="flex items-center gap-2 mb-2">
                    <RotateCw className="w-5 h-5 text-primary" />
                    <h3 className="text-white font-bold text-lg">PHASE 4: CITATION FORCING LOOP</h3>
                 </div>
                 <p className="text-muted-foreground mb-4 text-xs uppercase tracking-wider">WEEK 13+ /// PERPETUAL LOCK</p>
                 <p className="mb-4">Weekly micro-patches + live Answer Share Dashboard tracking citation rank, confidence score, and competitor delta.</p>
               </div>

             </div>
          </section>
          
          {/* CTA Footer */}
          <div className="mt-16 pt-8 border-t border-border flex flex-col items-center text-center gap-6">
             <p className="text-accent font-bold uppercase tracking-widest text-xs">
               /// END OF CLASSIFIED BRIEFING
             </p>
             <div className="bg-secondary/20 p-6 border border-primary/50 max-w-2xl w-full">
                <h3 className="text-2xl font-display font-bold text-white mb-2">SECURE YOUR MARKET POSITION</h3>
                <p className="text-muted-foreground mb-6">The window is closing. Once the training data is set, the moat is dug.</p>
                <button className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-lg hover:bg-primary/90 transition-all w-full">
                  INITIATE INFRASTRUCTURE BUILD
                </button>
             </div>
          </div>

        </motion.div>
      </main>
    </div>
  );
}
