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
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold text-center mb-3">The Convenience Story</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-center font-bold text-dark mb-3">
          45,000 Sq.Ft. Luxury Clubhouse
        </h2>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-14">
          Three Worlds. One Address. — World-class amenities across clubhouse and podium level landscape.
        </p>

        {/* Clubhouse image banner */}
        <div className="rounded-2xl overflow-hidden aspect-[21/8] bg-slate-200 mb-12 relative">
          <img
            src="/img/clubhouse.jpg"
            alt="45000 Sqft Luxury Clubhouse"
            className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
          <div className="absolute inset-0 bg-dark/50 flex items-end p-8">
            <div>
              <p className="text-gold text-xs tracking-widest uppercase mb-1">Amenities</p>
              <h3 className="font-serif text-2xl text-white font-bold">45,000 Sq.Ft. Lavish Clubhouse</h3>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-dark rounded-2xl p-8 text-white">
            <p className="text-gold text-xs tracking-widest uppercase mb-2">Clubhouse</p>
            <h3 className="font-serif text-xl font-semibold text-white mb-6">Clubhouse Amenities</h3>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-3">
              {clubhouse.map(a => (
                <li>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="text-gold text-xs mt-8 tracking-widest uppercase font-semibold">+ Many More</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8">
            <p className="text-gold text-xs tracking-widest uppercase mb-2">Podium Level</p>
            <h3 className="font-serif text-xl font-semibold text-dark mb-6">Podium Level Landscape</h3>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-3">
              {landscape.map(a => (
                <li>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="text-gold text-xs mt-8 tracking-widest uppercase font-semibold">+ Many More</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: '45,000', label: 'Sq.Ft. Clubhouse'    },
            { value: '8,000',  label: 'Car Parking Spaces'  },
            { value: '40',     label: 'Storeys per Tower'   },
            { value: '250+',   label: 'Acres Township'      },
          ].map(s => (
            <div key={s.label} className="text-center bg-dark rounded-xl py-6 px-4">
              <p className="font-serif text-2xl font-bold text-gold mb-1">{s.value}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}