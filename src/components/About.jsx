const specs = [
  { label: 'Size',       value: '650–675 Sq.Ft.' },
  { label: 'Floors',     value: '40 Storeys'      },
  { label: 'Towers',     value: '2 Iconic'        },
  { label: 'Furnished',  value: 'Fully'           },
  { label: 'Starting',   value: '₹1 Cr+'          },
  { label: 'Township',   value: '250 Acres'       },
]

const offerings = [
  'Fully Furnished Studio Apartments',
  'Branded Hotel',
  'Luxury Mall',
  'Massive Parking Space for 8,000 Cars',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold text-center mb-3">
          The Project
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-center font-bold text-dark mb-3">
          Luxury Studio Apartments — Codename Bento
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-14 leading-relaxed">
          Project is a part of the 250 Acre Integrated Township — Gaur Yamuna City, located on the
          Yamuna Expressway. A modern glass building with 2 iconic towers, 40 storeys each.
        </p>

        {/* Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-20">
          {specs.map(s => (
            <div key={s.label}
              className="text-center border border-gray-100 rounded-lg py-6 px-2 hover:border-gold transition-all">
              <p className="font-serif text-lg font-bold text-dark mb-1">{s.value}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Image + text */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl bg-slate-100 aspect-[4/3] relative flex items-center justify-center overflow-hidden">
            <img
              src="/img/studio.jpg"
              alt="Bento Studio Apartment"
              className="w-full h-full object-cover"
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
            <p className="absolute text-gray-400 text-sm text-center px-4">
              Add studio.jpg to public/img/
            </p>
          </div>
          <div>
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold mb-3">
              Three Worlds. One Address.
            </p>
            <h3 className="font-serif text-2xl font-bold text-dark mb-5">
              An Icon in the Making
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              Gaur Yamuna City is a 250+ acre integrated township on the fast-growing Yamuna Expressway,
              near the upcoming Noida International Airport. Home to 15,000 residents — a thriving,
              self-sustained urban destination with world-class infrastructure and strong investment potential.
            </p>
            <ul className="space-y-3">
              {offerings.map(b => (
                <li key={b} className="flex items-start gap-3 text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
