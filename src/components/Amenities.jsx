const clubhouse = [
  'Swimming Pool', 'Gymnasium', 'Spa and Salon',
  'Restaurant', 'Theater', 'Office Lounge',
]
const landscape = [
  'Rolling Lawns', 'Meandering Pathways', 'Stepping Stones',
  'Sculpture Court', 'Seating Pods', 'Outdoor Dining Space',
]

export default function Amenities() {
  return (
    <section id="amenities" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold text-center mb-3">
          The Convenience Story
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-center font-bold text-dark mb-3">
          45,000 Sq.Ft. Luxury Clubhouse
        </h2>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-10 sm:mb-14 text-sm sm:text-base">
          Designed as a social and wellness hub, it brings together leisure, fitness, recreation, and relaxation under one roof.
From curated lounges to premium indoor amenities, every space reflects comfort and sophistication.
It’s not just an add-on - it’s the heartbeat of a vibrant, community-driven living experience.
        </p>

        {/* Clubhouse image banner */}
        <div className="rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/8] bg-slate-200 mb-10 sm:mb-12 relative">
          <img
            src="/img/clubhouse.jpg"
            alt="45000 Sqft Luxury Clubhouse"
            className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
          <div className="absolute inset-0 bg-dark/50 flex items-end p-5 sm:p-8">
            <div>
              <p className="text-gold text-xs tracking-widest uppercase mb-1">Amenities</p>
              <h3 className="font-serif text-lg sm:text-2xl text-white font-bold">
                45,000 Sq.Ft. Lavish Clubhouse
              </h3>
            </div>
          </div>
        </div>

        {/* Amenity cards: Clubhouse + Podium */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">

          {/* Clubhouse card */}
          <div className="bg-dark rounded-2xl p-6 sm:p-8 text-white">
            <p className="text-gold text-xs tracking-widest uppercase mb-2">Clubhouse</p>
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-white mb-5">
              Clubhouse Amenities
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-3">
              {clubhouse.map(a => (
                <li>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="text-gold text-xs mt-6 tracking-widest uppercase font-semibold">
              + Many More
            </p>
          </div>

          {/* Podium Level card */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8">
            <p className="text-gold text-xs tracking-widest uppercase mb-2">Podium Level</p>
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-dark mb-5">
              Podium Level Landscape
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-3">
              {landscape.map(a => (
                <li key={a} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="text-gold text-xs mt-6 tracking-widest uppercase font-semibold">
              + Many More
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            { value: '45,000', label: 'Sq.Ft. Clubhouse'   },
            { value: '8,000',  label: 'Car Parking Spaces' },
            { value: '40',     label: 'Storeys per Tower'  },
            { value: '250+',   label: 'Acres Township'     },
          ].map(s => (
            <div key={s.label}
              className="text-center border border-gray-100 rounded-xl py-5 px-3 hover:border-gold transition-all">
              <p className="font-serif text-xl sm:text-2xl font-bold text-dark mb-1">{s.value}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
