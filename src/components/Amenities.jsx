const clubhouse = [
  'Swimming Pool','Gymnasium','Spa & Salon',
  'Restaurant','Theater','Office Lounge',
]
const landscape = [
  'Rolling Lawns','Meandering Pathways','Stepping Stones',
  'Sculpture Court','Seating Pods','Outdoor Dining Space',
]
export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold text-center mb-3">Lifestyle</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-center font-bold text-dark mb-4">45,000 Sq.Ft. Luxury Clubhouse</h2>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-14">
          World-class amenities designed for comfort, wellness, and community living.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-dark rounded-2xl p-8 text-white">
            <h3 className="font-serif text-xl font-semibold text-gold mb-6">Clubhouse Amenities</h3>
            <ul className="grid grid-cols-2 gap-3">
              {clubhouse.map(a => (
                <li>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="text-gold text-xs mt-6 tracking-widest uppercase">+ Many More</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="font-serif text-xl font-semibold text-dark mb-6">Podium Level Landscape</h3>
            <ul className="grid grid-cols-2 gap-3">
              {landscape.map(a => (
                <li>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="text-gold text-xs mt-6 tracking-widest uppercase">+ Many More</p>
          </div>
        </div>
      </div>
    </section>
  )
}
