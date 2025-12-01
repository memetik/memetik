import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "THE VIRAL LOOP",
    client: "NEXUS CORP",
    category: "Strategy",
    year: "2024",
  },
  {
    id: "02",
    title: "COGNITIVE RESONANCE",
    client: "AURA INC",
    category: "Campaign",
    year: "2024",
  },
  {
    id: "03",
    title: "MEMETIC WARFARE",
    client: "[REDACTED]",
    category: "Research",
    year: "2023",
  },
  {
    id: "04",
    title: "SIGNAL / NOISE",
    client: "BROADCAST",
    category: "Identity",
    year: "2023",
  },
];

export function ProjectGrid() {
  return (
    <section id="work" className="py-24 md:py-32 bg-background text-foreground px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-border pb-6">
        <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter">
          SELECTED WORKS
        </h2>
        <span className="font-mono text-sm text-muted-foreground mb-2">
          (2023 — 2024)
        </span>
      </div>

      <div className="grid grid-cols-1 gap-0">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative border-b border-border py-12 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900 cursor-pointer"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
              <span className="col-span-1 font-mono text-xs text-muted-foreground">
                /{project.id}
              </span>
              <h3 className="col-span-1 md:col-span-6 text-3xl md:text-5xl font-display font-medium tracking-tight group-hover:pl-4 transition-all duration-300">
                {project.title}
              </h3>
              <div className="col-span-2 md:col-span-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {project.client}
              </div>
              <div className="col-span-2 md:col-span-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {project.category}
              </div>
              <div className="col-span-1 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <button className="font-mono text-sm border-b border-black pb-1 hover:pb-2 transition-all">
            VIEW ARCHIVE
        </button>
      </div>
    </section>
  );
}
