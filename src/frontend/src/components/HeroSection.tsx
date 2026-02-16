const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/generated/bg-hero.dim_1600x2400.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Large AI Monogram */}
          <div className="mb-8 opacity-20">
            <h1 className="text-[12rem] sm:text-[16rem] lg:text-[20rem] font-display font-bold leading-none tracking-tighter text-foreground/30">
              AI
            </h1>
          </div>

          {/* Main Heading */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 text-glow">
                AI Image
                <br />
                Generator
              </h2>
              <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">
                Transform your imagination into stunning visuals with the power of artificial
                intelligence
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-crimson rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
