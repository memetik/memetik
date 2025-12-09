import { motion } from "framer-motion";
import { Target, Database, Share2, RotateCw, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const overviewPoints = [
  "AEO (Answer Engine Optimization)",
  "LLM content engineering",
  "First-principles SEO",
  "Parasite SEO across high-authority domains",
  "AI automation for scale",
  "Structured data designed for model ingestion",
  "Authority systems that create answer-share dominance"
];

const phases = [
  {
    id: "01",
    title: "THE LLM AUDIT",
    subtitle: "PHASE 1",
    description: "A complete visibility mapping across 7 major AI models. We establish your current Answer Share and identify the fastest paths to take it.",
    deliverables: [
      "100+ prompt tests across commercial queries",
      "Full hallucination report & Opportunity matrix",
      "Competitor visibility map",
      "SERP overlap analysis"
    ]
  },
  {
    id: "02",
    title: "PROPRIETARY DATA CORE",
    subtitle: "PHASE 2",
    description: "We construct the data infrastructure models prefer to ingest. Tier 1 'Apex Assets' and Tier 2 'Programmatic Clusters' that force citation.",
    deliverables: [
      "8–12 Apex Assets (Flagship Content)",
      "LLM-optimised comparison grids",
      "600–800 Programmatic Data Pages",
      "Zero filler content; engineered for long tail"
    ]
  },
  {
    id: "03",
    title: "AUTHORITY INJECTION",
    subtitle: "PHASE 3",
    description: "We force models to recognise your data by distributing it across high-trust surfaces and validating your authority.",
    deliverables: [
      "Parasite SEO on Reddit, Medium, LinkedIn",
      "50–100+ branded mentions per month",
      "DR70–90 backlinks to Apex Assets",
      "Link velocity campaigns"
    ]
  },
  {
    id: "04",
    title: "CONTINUOUS DEPLOYMENT",
    subtitle: "PHASE 4",
    description: "A long-term reinforcement system. We maintain the #1 slot across all relevant queries and prevent loss of visibility as models update.",
    deliverables: [
      "Weekly micro-patches to content",
      "Continuous prompt testing",
      "Competitor interdiction updates",
      "Live Answer Share Dashboard"
    ]
  }
];

export function MethodologySummary() {
  return (
    <section className="py-24 md:py-32 bg-background text-foreground px-6 md:px-12 border-b border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none" />
      
      <div className="flex flex-col items-center text-center mb-20 md:mb-32 border-b border-border/50 pb-12 max-w-5xl mx-auto">
        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs font-bold mb-6 tracking-widest border border-accent/20 rounded-full">
          EXECUTION PROTOCOL
        </div>
        <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter text-foreground mb-8">
          WHAT WE DO
        </h2>
        
        {/* Overview Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mt-4">
          {overviewPoints.map((point, i) => (
            <span key={i} className="px-4 py-2 bg-secondary/5 border border-border/50 rounded-full text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-default">
              {point}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-0">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative border-b border-border/50 py-16 md:py-24 transition-all hover:bg-secondary/5"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10">
              {/* Number & Subtitle */}
              <div className="col-span-1 md:col-span-2 flex flex-col justify-start pt-2">
                <span className="font-mono text-4xl text-primary/20 group-hover:text-primary transition-colors duration-500 font-bold block transform group-hover:-translate-y-1 origin-left">
                  {phase.id}
                </span>
                <span className="text-xs font-mono tracking-widest text-muted-foreground mt-2 uppercase">
                  {phase.subtitle}
                </span>
              </div>

              {/* Title & Description */}
              <div className="col-span-11 md:col-span-5 flex flex-col gap-6">
                <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors duration-300">
                  {phase.title}
                </h3>
                <p className="font-serif text-muted-foreground leading-relaxed text-lg md:text-xl pr-8">
                  {phase.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="col-span-12 md:col-span-5 pt-2 md:pl-8 border-l-0 md:border-l border-border/50 group-hover:border-primary/30 transition-colors duration-500 flex flex-col justify-center">
                <ul className="space-y-4">
                  {phase.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base font-mono text-muted-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-primary/50 group-hover:text-accent shrink-0 mt-0.5 transition-colors duration-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-24 flex justify-center">
        <Link href="/strategy" className="group relative px-10 py-5 bg-foreground text-background font-mono font-bold text-lg tracking-wide overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <div className="relative flex items-center gap-3">
              VIEW FULL STRATEGY
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
        </Link>
      </div>
    </section>
  );
}
