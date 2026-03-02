export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 20% 80%,#C9A84C,transparent 50%),radial-gradient(circle at 80% 20%,#C9A84C,transparent 50%)'}} />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold mb-6">Gaur Yamuna City &middot; Yamuna Expressway</p>
        <h1 className="font-serif text-6xl sm:text-7xl font-bold text-gold mb-4">BENTO</h1>
        <p className="font-serif text-xl text-gray-300 mb-2">Luxury Studio Apartments</p>
        <p className="font-serif text-2xl font-semibold text-white mb-8">Three Worlds. One Address.</p>
        <p className="text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed text-sm">
          Fully furnished &amp; serviced studio apartments starting at <span className="text-white font-semibold">&#8377;1 Cr onwards</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#enquire" className="bg-gold text-dark font-semibold px-10 py-3 text-sm tracking-widest hover:bg-yellow-500 transition-colors">ENQUIRE NOW</a>
          <a href="#about" className="border border-white text-white px-10 py-3 text-sm tracking-widest hover:bg-white hover:text-dark transition-colors">EXPLORE</a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white opacity-40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white animate-pulse" />
      </div>
    </section>
  )
}
