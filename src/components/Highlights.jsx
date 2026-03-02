const items = [
  {
    num: 'I',
    title: 'Right on Yamuna Expressway',
    desc: 'Near Exit 2C in Sector-19 — prime frontage with direct expressway access.',
  },
  {
    num: 'II',
    title: 'Near Upcoming Noida International Airport',
    desc: 'Located just 24 km from Jewar Airport — India\'s largest upcoming airport.',
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
  },
]

export default function Highlights() {
  return (
    <section id="highlights" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold text-center mb-3">
          Why Invest
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-center font-bold text-dark mb-4">
          Location Advantages
        </h2>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-14">
          A project by one of the top developers in real estate with a track record of 3 decades —
          Invest Now. Starting INR 1 Cr Onwards.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(it => (
            <div key={it.num}
              className="bg-white rounded-xl p-8 border border-gray-100 hover:border-gold hover:shadow-md transition-all">
              <p className="font-serif text-3xl font-bold text-gold mb-4">{it.num}</p>
              <h3 className="font-semibold text-dark mb-2 text-sm leading-snug">{it.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
