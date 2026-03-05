const items = [
  {
    num: 'I',
    title: 'Right on Yamuna Expressway',
    desc: 'Near Exit 2C in Sector-19 — prime frontage with direct expressway access.',
  },
  {
    num: 'II',
    title: 'Near Upcoming Noida International Airport',
    desc: "Located just near the World's 4th Largest Airport -  Noida International Airport on Yamuna Expressway",
  },
  {
    num: 'III',
    title: 'Surrounded by Industrial Hubs, Business Zones and MNCs',
    desc: 'Strong commercial ecosystem ensures consistent rental and capital demand.',
  },
  {
    num: 'IV',
    title: 'Proximity to Multiple Universities',
    desc: 'Surrounded by leading universities — guaranteed rental demand from students and faculty.',
  },
  {
    num: 'V',
    title: 'Opposite F1 Track',
    desc: 'Located directly opposite the Buddh International Circuit — a truly iconic address.',
  },
  {
    num: 'VI',
    title: 'Thriving Township — Home to 15,000 Residents',
    desc: 'An established community with schools, malls, hospitals and sports facilities already operational.',
  }
]

const offerings = [
  'Fully Furnished Studio Apartments',
  'Branded Hotel',
  'Luxury Mall',
  '45,000 Sq.Ft. Luxury Clubhouse',
]

export default function Highlights() {
  return (
    <section id="highlights" className="py-16 sm:py-24 bg-slate-50">
      

      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">


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
              Three Worlds, One Address
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
        

        {/* Header */}
        <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold text-center pt-10 mb-3">
          Why Invest
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-center font-bold text-dark mb-4">
          Location Advantages
        </h2>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-10 sm:mb-14 text-sm sm:text-base">
          A project by one of the top developers in real estate with a track record of 3 decades —
          Invest Now. Starting INR 1 Cr Onwards.
        </p>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map(it => (
            <div key={it.num}
              className="bg-white rounded-xl p-5 sm:p-8 border border-gray-100 hover:border-gold hover:shadow-md transition-all">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-gold mb-3 sm:mb-4">
                {it.num}
              </p>
              <h3 className="font-semibold text-dark mb-2 text-sm sm:text-base leading-snug">
                {it.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
