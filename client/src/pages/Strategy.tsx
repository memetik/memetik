import { motion } from "framer-motion";
import { ShieldAlert, Lock, FileText, CheckCircle2 } from "lucide-react";
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
            THE PROTOCOL: <br/>
            <span className="text-muted-foreground">OPERATIONAL BLUEPRINT</span>
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
               01. EXECUTIVE SUMMARY
             </h2>
             <p className="mb-4">
               This document outlines the proprietary methodology Memetik uses to dominate Generative Engine Optimization (GEO). Unlike traditional SEO, which targets keywords, our approach targets the semantic understanding of Large Language Models.
             </p>
             <p>
               We do not just optimize for search; we optimize for *truth*. By embedding your brand into the training data and knowledge graphs of major AI models, we ensure you are the mathematical answer to your customer's problem.
             </p>
          </section>

          {/* Phase 1 */}
          <section>
             <h2 className="text-xl font-display font-bold text-white mb-6 border-b border-border pb-2 inline-block">
               02. PHASE I: ENTITY ESTABLISHMENT
             </h2>
             <div className="grid gap-6">
               <div className="flex gap-4 items-start">
                 <div className="mt-1 min-w-[24px] min-h-[24px] bg-primary/20 flex items-center justify-center rounded text-primary text-xs font-bold">01</div>
                 <div>
                   <h3 className="text-white font-bold mb-2">Knowledge Graph Injection</h3>
                   <p className="text-muted-foreground">We systematically create and update authoritative sources (Wikidata, Crunchbase, specialized industry directories) to force an association between your Brand Entity and specific Problem Entities.</p>
                 </div>
               </div>
               <div className="flex gap-4 items-start">
                 <div className="mt-1 min-w-[24px] min-h-[24px] bg-primary/20 flex items-center justify-center rounded text-primary text-xs font-bold">02</div>
                 <div>
                   <h3 className="text-white font-bold mb-2">Semantic Density Optimization</h3>
                   <p className="text-muted-foreground">Restructuring your site's content to maximize "information gain." We remove fluff and increase the density of unique facts, figures, and relationships that LLMs crave for training data.</p>
                 </div>
               </div>
             </div>
          </section>

          {/* Phase 2 */}
          <section>
             <h2 className="text-xl font-display font-bold text-white mb-6 border-b border-border pb-2 inline-block">
               03. PHASE II: CITATION VELOCITY
             </h2>
             <div className="grid gap-6">
               <div className="flex gap-4 items-start">
                 <div className="mt-1 min-w-[24px] min-h-[24px] bg-primary/20 flex items-center justify-center rounded text-primary text-xs font-bold">03</div>
                 <div>
                   <h3 className="text-white font-bold mb-2">Digital PR & Co-Occurrence</h3>
                   <p className="text-muted-foreground">We secure placements in high-authority domains that frequently appear in training datasets (Common Crawl). The goal is not just a link, but "brand co-occurrence" with industry keywords.</p>
                 </div>
               </div>
               <div className="flex gap-4 items-start">
                 <div className="mt-1 min-w-[24px] min-h-[24px] bg-primary/20 flex items-center justify-center rounded text-primary text-xs font-bold">04</div>
                 <div>
                   <h3 className="text-white font-bold mb-2">Review Sentiment Engineering</h3>
                   <p className="text-muted-foreground">LLMs read reviews to determine "quality." We implement systems to aggregate and structure positive user sentiment in formats that are easily parsed by crawlers.</p>
                 </div>
               </div>
             </div>
          </section>
          
          {/* CTA Footer */}
          <div className="mt-16 pt-8 border-t border-border flex flex-col items-center text-center gap-6">
             <p className="text-accent font-bold">
               /// END OF PROTOCOL SUMMARY
             </p>
             <button className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-lg hover:bg-primary/90 transition-all w-full md:w-auto">
               INITIATE PARTNERSHIP
             </button>
          </div>

        </motion.div>
      </main>
    </div>
  );
}
