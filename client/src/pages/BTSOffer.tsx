import { motion } from "framer-motion";
import { ShieldAlert, Target, Database, Share2, RotateCw, CheckCircle, Zap, FileText, Network, ArrowRight, ChevronRight } from "lucide-react";
import { Nav } from "@/components/Nav";

// Shared Components for cleaner layout
const SectionHeader = ({ number, title }: { number: string, title: string }) => (
  <div className="flex items-center gap-4 mb-8 md:mb-12 border-b border-primary/20 pb-4">
    <span className="text-primary font-mono text-xl font-bold">{number}</span>
    <h2 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight">{title}</h2>
  </div>
);

const HighlightBox = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-secondary/10 border border-primary/20 p-6 md:p-8 relative overflow-hidden ${className}`}>
    <div className="absolute top-0 left-0 w-1 h-full bg-primary/50"></div>
    {children}
  </div>
);

export default function BTSOffer() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans overflow-x-hidden">
      <Nav />
      
      <main className="pt-24 pb-32 px-4 md:px-12 container mx-auto max-w-5xl">
        
        {/* 1. Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono text-xs font-bold tracking-wider uppercase mb-6">
            <ShieldAlert className="w-3 h-3" />
            Strategic Proposal /// BTS
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tighter mb-6 leading-[0.95]">
            PROJECT <br/>
            <span className="text-primary">DEFAULT ANSWER.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mx-auto md:mx-0">
            The offer to make BTS the default answer in AI search.
          </p>
        </motion.div>

        {/* 2. The Goal & Reality */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24 md:mb-32"
        >
          <HighlightBox className="bg-gradient-to-br from-secondary/20 to-background mb-8">
             <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">The Goal</h3>
             <p className="text-xl md:text-3xl lg:text-4xl font-display font-medium text-white leading-tight">
               When a creator asks ChatGPT, Perplexity, or Claude for the "best monetization platform" or "fastest payouts," the AI answers confidently with <span className="text-primary">BTS</span>—not OnlyFans, not Patreon, and not "it depends."
             </p>
          </HighlightBox>

          <div className="bg-secondary/5 p-8 border border-white/5">
             <h3 className="text-sm font-mono text-red-500 mb-4 uppercase tracking-widest flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" /> The Reality (Important)
             </h3>
             <p className="text-muted-foreground leading-relaxed mb-4">
                We need to be clear before we start: We are going after OnlyFans and Patreon. These are some of the most efficient, profitable-per-employee companies in history. Taking their digital real estate is going to be a dogfight.
             </p>
             <p className="text-white font-medium">
                It will require significant time, effort, and precision. But we are committed to working alongside you in the trenches to win this domain at any cost.
             </p>
          </div>
        </motion.section>

        {/* 3. The Deliverables - Execution Protocol */}
        <section className="mb-24 md:mb-32">
          <SectionHeader number="01" title="THE DELIVERABLES" />
          
          <div className="space-y-20 md:space-y-24 relative before:absolute before:left-6 md:before:left-10 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-primary before:to-transparent before:opacity-30 pl-16 md:pl-32">
            
            {/* Phase 1 */}
            <div className="relative">
              <span className="absolute -left-14 md:-left-26 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-[0_0_10px_rgba(249,115,22,0.5)]">01</span>
              <div className="mb-2 flex items-center gap-3 text-primary font-mono text-sm font-bold uppercase tracking-wider">
                <Target className="w-4 h-4" /> Phase 1
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">The Audit</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                We test 100+ live prompts across 7 AI models to see exactly where BTS is invisible today. We identify the gaps and the opportunities.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="relative">
              <span className="absolute -left-14 md:-left-26 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white border border-white/20 font-bold text-sm">02</span>
              <div className="mb-2 flex items-center gap-3 text-primary font-mono text-sm font-bold uppercase tracking-wider">
                <Database className="w-4 h-4" /> Phase 2
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Proprietary Data Core</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                We build the data infrastructure that future models will train on.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-secondary/5 p-6 border border-white/10">
                  <div className="flex items-center gap-2 mb-4 text-white font-bold">
                    <FileText className="w-4 h-4 text-primary" /> Tier 1: Apex Assets (8-12 Pages)
                  </div>
                  <p className="text-xs text-muted-foreground mb-4 font-mono">The pages that win the money. High-intent BOFU + "vs/alternative" pages.</p>
                  <ul className="space-y-3 text-sm text-neutral-400">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0"/> Column-1 comparison table: BTS vs OnlyFans vs Patreon vs Fansly (BTS in column 1)</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0"/> Real creator payout speed calculator (exact days + fees published)</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0"/> Redacted earnings leak from 50+ top BTS creators (monthly revenue screenshots)</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0"/> “Why I moved from OnlyFans to BTS” case studies (named + anonymised)</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0"/> BTS vs OnlyFans vs Patreon 2026 deep-dive</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0"/> Chargeback & fraud rate transparency table (BTS vs every competitor)</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0"/> Full revenue-share & hidden-fee transparency grid</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0"/> “BTS paid me 41% more last month” quote injection pages</li>
                  </ul>
                  <div className="mt-4 p-3 bg-primary/5 border border-primary/20 text-xs text-primary">
                    These pages are engineered to trigger the 68% “copy column 1” rule in Perplexity and maximum Information Gain.
                  </div>
                </div>
                <div className="bg-secondary/5 p-6 border border-white/10">
                  <div className="flex items-center gap-2 mb-4 text-white font-bold">
                    <Network className="w-4 h-4 text-primary" /> Tier 2: Knowledge Graph (600-800 Pages)
                  </div>
                  <p className="text-xs text-muted-foreground mb-4 font-mono">Programmatic SEO at scale.</p>
                  <ul className="space-y-3 text-sm text-neutral-400">
                    <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-primary shrink-0"/> <strong>Cluster:</strong> creator niche × monthly earnings tier × payout speed × content type × traffic source × country</li>
                  </ul>
                  <div className="mt-4 p-3 bg-secondary/20 border border-white/10 text-xs text-muted-foreground">
                    Every single page is unique and data-rich → zero thin content, unbreakable moat, impossible for OnlyFans/Patreon clones to ever catch up.
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative">
              <span className="absolute -left-14 md:-left-26 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white border border-white/20 font-bold text-sm">03</span>
              <div className="mb-2 flex items-center gap-3 text-primary font-mono text-sm font-bold uppercase tracking-wider">
                <Share2 className="w-4 h-4" /> Phase 3
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Trust Relay</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                We execute an "Authority Hijack" to force the models to recognize your new data.
              </p>
              <div className="bg-secondary/5 p-6 border border-white/5">
                 <p className="text-white text-sm">
                    <strong>Action:</strong> We deploy surgically crafted posts across Reddit (r/creators), LinkedIn, and G2 that quote your Apex Assets verbatim. This forces the AI to connect the dots and cite you as the primary source.
                 </p>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="relative">
              <span className="absolute -left-14 md:-left-26 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white border border-white/20 font-bold text-sm">04</span>
              <div className="mb-2 flex items-center gap-3 text-primary font-mono text-sm font-bold uppercase tracking-wider">
                <RotateCw className="w-4 h-4" /> Phase 4
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">The Lock</h3>
              <p className="text-muted-foreground max-w-2xl mb-4">
                Once we have the ranking, we defend it.
              </p>
              <div className="bg-secondary/5 p-6 border border-white/5">
                 <p className="text-white text-sm">
                    <strong>Output:</strong> Weekly micro-patches to block competitors and a live dashboard tracking your "Answer Share" vs OnlyFans/Patreon in real-time.
                 </p>
              </div>
            </div>

          </div>
        </section>

        {/* 4. Commitment to Winning */}
        <section className="mb-24 max-w-3xl mx-auto">
           <div className="bg-secondary/5 border border-white/10 p-8 md:p-12">
             <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-6">Our Commitment to Winning</h3>
             <div className="space-y-6 text-muted-foreground leading-relaxed">
               <p>
                 We want BTS to dominate, period. If you have an offer from another agency that includes a specific tactic or angle you like, share it with us. We’re happy to review it, validate it, and integrate the good parts into our execution plan.
               </p>
               <p className="text-white font-medium border-l-2 border-primary pl-4">
                 However, based on the data we see across every major AI model today, we firmly believe the Proprietary Data Core + Trust Relay approach outlined here is the only path that yields permanent, defensive results.
               </p>
             </div>
           </div>
        </section>

        {/* 5. CTA - Clean & Centered */}
        <section className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">READY TO FIGHT?</h2>
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg tracking-wide hover:bg-primary/90 transition-all">
            ACCEPT PROPOSAL
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-8 text-xs text-neutral-600 uppercase tracking-widest">
            /// Confidential Offer
          </p>
        </section>

      </main>
    </div>
  );
}
