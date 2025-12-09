import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { MethodologySummary } from "@/components/MethodologySummary";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { BrandManifesto } from "@/components/BrandManifesto";

export default function Home() {
  return (
      <div className="min-h-screen w-full bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
          <Nav />
          <main>
            <Hero />
            <Marquee />
            
            <section id="agency" className="py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center bg-background border-b border-border">
                <div>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-mono text-xs font-bold mb-6 tracking-widest border border-primary/20 rounded-full">
                      THE SHIFT
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-8 text-foreground uppercase">
                        AI has collapsed search <br/>into answers.
                    </h2>
                    <div className="w-24 h-2 bg-primary mt-8"></div>
                </div>
                <div className="font-serif text-lg md:text-xl text-muted-foreground space-y-6 leading-relaxed border-l-2 border-primary pl-8">
                    <p>
                        <span className="text-foreground font-bold">71% of commercial queries now end inside ChatGPT-style models.</span>
                    </p>
                    <p>
                        Google traffic is eroding. LLMs decide winners before a user ever clicks a link. If your brand isn't in the model's answer layer—you don't exist.
                    </p>
                    <p className="text-foreground font-medium italic">
                        We build Answer Engine Optimization (AEO) systems that force LLMs to cite you.
                    </p>
                </div>
            </section>

            <BrandManifesto />
            <Services />
            <MethodologySummary />
            
            <footer className="bg-secondary text-white py-24 px-6 md:px-12 border-t border-border">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-8 text-white">MEMETIK</h2>
                        <p className="font-mono text-sm text-muted-foreground max-w-md border-l-2 border-accent pl-4">The first agency engineered for AI-native search.</p>
                    </div>
                    <div className="col-span-1 flex flex-col gap-4 font-mono text-sm text-muted-foreground">
                        <span className="text-white font-bold mb-2">LOCATIONS</span>
                        <span>SAN FRANCISCO</span>
                        <span>NEW YORK</span>
                        <span>TOKYO</span>
                    </div>
                    <div className="col-span-1 flex flex-col gap-4 font-mono text-sm text-muted-foreground">
                        <span className="text-white font-bold mb-2">CONNECT</span>
                        <a href="#" className="hover:text-primary transition-colors">TWITTER</a>
                        <a href="#" className="hover:text-primary transition-colors">INSTAGRAM</a>
                        <a href="#" className="hover:text-primary transition-colors">LINKEDIN</a>
                    </div>
                </div>
                <div className="mt-24 pt-8 border-t border-border flex justify-between font-mono text-xs text-muted-foreground">
                    <span>© 2025 MEMETIK AGENCY</span>
                    <span className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                       SYSTEMS OPERATIONAL
                    </span>
                </div>
            </footer>
          </main>
      </div>
  );
}
