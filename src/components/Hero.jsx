export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/img/hero-bg.jpg"
          alt="Bento Luxury Studio Apartments"
          className="w-full h-full object-cover object-center"
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/50" />

      {/* Gold glow accents */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 80%,#C9A84C,transparent 50%),radial-gradient(circle at 80% 20%,#C9A84C,transparent 50%)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-2 sm:mb-3">
          INTRODUCING
        </h1>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-3">
          LUXURY STUDIO APARTMENTS
        </h1>


        <p className="text-gray-300 max-w-lg mx-auto mb-3 text-base sm:text-xl leading-relaxed">
          Near Noida International Airport
        </p>
        <p className="text-white font-semibold text-base sm:text-lg mb-8">
          Starting &#8377;1 Cr Onwards
        </p>

        
        <div className="inline-flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-10 bg-gold hidden sm:block" />
          <div className="px-6 py-2 border border-gold text-gold text-xs sm:text-sm tracking-[0.35em] uppercase">
            PRE LAUNCH
          </div>
          <span className="h-px w-10 bg-gold hidden sm:block" />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
          <a
            href="#enquire"
            className="bg-gold text-dark font-semibold px-5 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm tracking-widest hover:bg-yellow-500 transition-colors rounded-sm"
          >
            ENQUIRE NOW
          </a>

          <a
            href="#about"
            className="border border-white text-white px-5 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm tracking-widest hover:bg-white hover:text-dark transition-colors rounded-sm"
          >
            EXPLORE
          </a>
        </div>
        </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white opacity-40">
        <span className="text-xs tracking-widest uppercase"></span>
        <div className="w-px h-8 bg-white animate-pulse" />
      </div>
    </section>
  )
}
