import { motion } from "framer-motion";
import { Search, Cpu, Globe, ArrowUpRight } from "lucide-react";
import React, { useRef } from "react";

const services = [
  {
    id: "01",
    icon: <Cpu className="w-12 h-12" />,
    title: "LLM SEO",
    description: "We reverse-engineer the training data. Your brand becomes the primary citation for ChatGPT, Claude, and Gemini.",
    tags: ["Training Data Injection", "Citation Optimization", "Brand Entity Connection"]
  },
  {
    id: "02",
    icon: <Search className="w-12 h-12" />,
    title: "ANSWER ENGINE OPTIMIZATION",
    description: "Traditional SEO is dying. We structure content for semantic density that AI agents prioritize over keyword stuffing.",
    tags: ["Semantic Architecture", "Answer Engine Optimization", "Structured Data"]
  },
  {
    id: "03",
    icon: <Globe className="w-12 h-12" />,
    title: "SAAS & ECOM DOMINANCE",
    description: "High-intent visibility for complex B2B sales cycles and massive product catalogs. We capture the 'How do I...' queries.",
    tags: ["Programmatic SEO", "Technical Scale", "Revenue Attribution"]
  }
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative flex flex-col justify-between min-h-[400px] md:h-[500px] p-6 md:p-10 border-b md:border-b-0 md:border-r border-border/50 bg-background hover:bg-secondary/5 transition-colors duration-500 overflow-hidden last:border-b-0 md:last:border-r-0"
    >
      {/* Top Section */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6 md:mb-8">
          <span className="font-mono text-sm tracking-widest text-muted-foreground group-hover:text-primary transition-colors duration-300">
            /{service.id}
          </span>
          <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300 transform group-hover:rotate-45 group-hover:scale-110">
             <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>
        
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-[0.95] tracking-tighter text-foreground mb-6 group-hover:text-primary transition-colors duration-300 break-words hyphens-auto">
          {service.title}
        </h3>

        {/* Description - Always visible on mobile, reveal on desktop */}
        <div className="md:mt-auto relative z-10">
          <div className="mb-6 md:transform md:translate-y-4 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 ease-out">
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 md:transform md:translate-y-4 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
            {service.tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-2 py-1 text-[10px] md:text-xs font-mono border border-border rounded-full text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Icon */}
      <div className="absolute -bottom-8 -right-8 text-foreground/5 group-hover:text-primary/5 transition-colors duration-500 transform scale-150 group-hover:scale-[1.6] group-hover:-rotate-12 transition-transform duration-700 pointer-events-none z-0">
        {React.cloneElement(service.icon as React.ReactElement, { className: "w-48 h-48 md:w-64 md:h-64" })}
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section className="bg-background text-foreground border-y border-border relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
