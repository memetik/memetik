export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-background text-foreground">
      
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pt-24 pb-12">
        
        {/* Chevron Bar */}
        <div className="font-mono text-xs sm:text-sm md:text-base tracking-tighter text-foreground mb-8 overflow-hidden">
          &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.85] tracking-tight text-foreground uppercase mb-4">
          BE THE<br/>
          BRAND AI<br/>
          RECOMMENDS
        </h1>
        
        {/* Tagline */}
        <div className="mb-12 max-w-xl">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground mb-2">
            The future is one direct answer.
          </p>
          <p className="font-mono text-sm sm:text-base text-foreground/70">
            We engineer visibility across LLMs, search engines, and agents.
          </p>
        </div>

        {/* CTA */}
        <a 
          href="https://cal.com/memetik/letstalk" 
          className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-mono font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          LET'S TALK
          <span className="text-lg">→</span>
        </a>

      </div>
    </section>
  );
}
