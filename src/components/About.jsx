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
    <section id="about" className="py-16 sm:py-24 bg-white">
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

        {/* Studio interior image + text */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-14 sm:mb-20">
          <div className="rounded-xl overflow-hidden bg-slate-100 aspect-[4/3] sm:aspect-[4/3] relative">
            <img
              src="/img/studio.jpg"
              alt="Bento Studio Interior"
              className="w-full h-full object-cover"
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
          </div>
          <div>
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold text-left mb-3">
              Theree Worlds, One Address
            </p>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-dark mb-4 sm:mb-5">
              An Icon in the Making
            </h3>
            <p className="text-gray-600 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
              Three worlds in one iconic destination— Luxury Studio Aprtments, Premium Hotel, and Luxury Mall. 
The luxury studio apartments redefine smart, compact living with intelligent design and premium finishes, seamlessly integrated within a vibrant hospitality and retail ecosystem. Designed for high rental potential and long-term appreciation, this project brings together convenience, connectivity, and contemporary urban lifestyle in a single address.
            </p>
            <ul className="space-y-2">
              {offerings.map(b => (
                <li>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Township aerial image */}
        <div className="rounded-2xl overflow-hidden relative aspect-[16/9] sm:aspect-[21/8] bg-slate-200">
          <img
            src="/img/township.jpg"
            alt="Gaur Yamuna City Township Aerial View"
            className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
          <div className="absolute inset-0 bg-dark/40 flex flex-col items-center justify-center text-center px-4">
            <p className="text-gold text-xs tracking-widest uppercase mb-1">Part of</p>
            <h3 className="font-serif text-xl sm:text-3xl font-bold text-white mb-1">
              250 Acres Integrated Township
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">Gaur Yamuna City</p>
          </div>
        </div>

      </div>
    </section>
  )
}
