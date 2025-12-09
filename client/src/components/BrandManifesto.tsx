import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";

export function BrandManifesto() {
  return (
    <section className="bg-background text-foreground overflow-hidden">
      {/* SECTION: WHY WE EXIST */}
      <div className="py-24 px-6 md:px-12 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs font-bold mb-6 tracking-widest border border-accent/20 rounded-full">
              WHY WE EXIST
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
              THE INDUSTRY IS BROKEN.
            </h2>
            <div className="font-serif text-xl md:text-2xl text-muted-foreground space-y-6 leading-relaxed border-l-2 border-primary pl-8">
              <p>
                Founders are paying "SEO agencies" who deliver nothing of value.
                Search is changing faster than agencies can keep up.
                Most still sell the same packages they offered in 2015.
              </p>
              <p className="text-foreground font-medium">
                Memetik was built as the antidote.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-6">
              <h3 className="font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4">The Old Way</h3>
              <ul className="space-y-4">
                {[
                  "Optimizing for rankings",
                  "Recycled 2018 playbooks",
                  "Guessing what works",
                  "Agency theatre"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground/60 line-through decoration-destructive/50">
                    <X className="w-5 h-5 text-destructive/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="font-mono text-sm tracking-widest text-primary uppercase mb-4">The Memetik Way</h3>
              <ul className="space-y-4">
                {[
                  "Optimizing for ANSWERS",
                  "First principles architectures",
                  "Strategies LLMs cannot ignore",
                  "Engineered dominance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <Check className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: BRAND VALUES */}
      <div className="py-24 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">OUR VALUES</h2>
            <p className="font-mono text-sm text-primary/80">THE OPERATING SYSTEM FOR DOMINANCE</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "FIRST PRINCIPLES",
                desc: "We rebuild strategy from scratch. No assumptions. No legacy baggage."
              },
              {
                title: "BOLD INNOVATION",
                desc: "Experimentation beats perfection. We embrace failure to find what truly works."
              },
              {
                title: "SPEED WINS",
                desc: "Execution velocity compounds. We move faster than the market."
              },
              {
                title: "LONG-TERM GAMES",
                desc: "We partner for outcomes, not tasks. We play for the decade, not the quarter."
              }
            ].map((value, i) => (
              <div key={i} className="p-8 border border-white/10 hover:border-primary/50 transition-colors bg-white/5 backdrop-blur-sm group">
                <div className="text-4xl md:text-5xl font-display font-bold text-white/10 group-hover:text-primary/20 transition-colors mb-6">0{i+1}</div>
                <h3 className="text-xl font-bold mb-4 text-primary">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION: WHO WE SERVE */}
      <div className="py-24 px-6 md:px-12 border-b border-border bg-secondary/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-12">WHO WE SERVE</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              "E-commerce founders scaling to 7–9 figures",
              "SaaS founders building category dominance",
              "High-IQ operators who invest in speed"
            ].map((item, i) => (
              <div key={i} className="p-8 bg-background border border-border shadow-sm flex flex-col items-center justify-center min-h-[200px]">
                <div className="w-12 h-1 bg-primary mb-6"></div>
                <p className="font-serif text-lg md:text-xl leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="inline-block p-8 border border-primary/20 bg-primary/5 rounded-2xl max-w-2xl mx-auto">
            <p className="font-mono text-sm text-muted-foreground mb-4 uppercase tracking-widest">The Requirement</p>
            <p className="text-lg md:text-xl font-medium text-foreground">
              We do not work with unqualified or low-budget companies. <br/>
              Our work requires <span className="text-primary font-bold">ambition</span> — and investment.
            </p>
          </div>
          
          <div className="mt-16">
            <button className="group relative px-10 py-5 bg-foreground text-background font-mono font-bold text-lg tracking-wide overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 inline-flex items-center gap-3">
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <div className="relative flex items-center gap-3">
                BOOK A STRATEGY CALL
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}