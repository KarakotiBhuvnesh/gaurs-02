const specs = [
  { label: 'Size',      value: '650–675 Sq.Ft.' },
  { label: 'Storeys',    value: '40'       },
  { label: 'Furnished', value: 'Fully'           },
  { label: 'Starting',  value: '₹1 Cr+'          },
  { label: 'Towers',    value: '2 Iconic'        },
  { label: 'Clubhouse', value: '45,000 Sq.Ft.'   },
]

const offerings = [
  'Fully Furnished Studio Apartments',
  'Branded Hotel',
  'Luxury Mall',
  '45,000 Sq.Ft. Luxury Clubhouse',
]

export default function About() {
  return (
    <section id="about" className="py-10 sm:py-10  bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold text-center mb-3">
          The Project
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-center font-bold text-dark mb-3">
          Luxury Studio Apartments
        </h2>
        <h2 className="font-serif text-xl sm:text-xl md:text-2xl text-center font-bold text-dark mb-3">
          Codename: Bento
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed text-sm sm:text-base">
          For over three decades, this NCR-based real estate developer has shaped the region’s skyline with a vision anchored in scale, trust, and timely delivery. With landmark developments accross, it has consistently transformed emerging corridors into thriving urban destinations and is now coming up with luxury studio apartments, expanding its legacy into refined, future-ready living spaces.
        </p>

        {/* Specs bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-14 sm:mb-20">
          {specs.map(s => (
            <div key={s.label}
              className="text-center border border-gray-100 rounded-lg py-4 px-2 hover:border-gold transition-all">
              <p className="font-serif text-base sm:text-lg font-bold text-dark mb-1">{s.value}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>




      </div>
    </section>
  )
}
