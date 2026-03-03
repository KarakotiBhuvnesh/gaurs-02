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
        {/* Dark overlay so text is readable */}
        <div className="absolute inset-0 bg-dark/50" />
      </div>

      {/* Subtle gold glow accents */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 80%,#C9A84C,transparent 50%),radial-gradient(circle at 80% 20%,#C9A84C,transparent 50%)' }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        <h1 className="font-serif text-6xl sm:text-7xl font-bold text-gold mb-3"> INTRODUCING</h1>
        <h1 className="font-serif text-6xl sm:text-7xl font-bold text-white mb-3"> LUXURY STUDIO APARTMENTS</h1>
        <h1 className="font-serif text-6xl sm:text-5xl font-bold text-gold mb-3">BENTO</h1>

        <p className="text-gray-300 max-w-lg mx-auto mb-4 text-xl leading-relaxed">
          Yamuna Expressway
        </p>
        <p className="text-white font-semibold text-lg mb-10">
          Starting &#8377;1 Cr Onwards
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#enquire"
            className="bg-gold text-dark font-semibold px-10 py-3 text-sm tracking-widest hover:bg-yellow-500 transition-colors">
            ENQUIRE NOW
          </a>
          <a href="#about"
            className="border border-white text-white px-10 py-3 text-sm tracking-widest hover:bg-white hover:text-dark transition-colors">
            EXPLORE
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white opacity-40">
        <span className="text-xs tracking-widest uppercase"></span>
        <div className="w-px h-8 bg-white animate-pulse" />
      </div>
    </section>
  )
}
