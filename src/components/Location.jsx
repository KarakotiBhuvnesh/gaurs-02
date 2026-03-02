const points = [
  {
    icon: '✈',
    label: 'Near Upcoming Noida International Airport',
    note: 'Jewar Airport — 24 km away, commercial ops expected 2026',
  },
  {
    icon: '🛣',
    label: 'Right on Yamuna Expressway',
    note: 'Near Exit 2C, Sector-19 — direct expressway access',
  },
  {
    icon: '🏎',
    label: 'Opposite F1 Track',
    note: 'Buddh International Circuit — located directly opposite',
  },
  {
    icon: '🏫',
    label: 'Proximity to Multiple Universities',
    note: 'Leading universities within close range — strong rental demand',
  },
  {
    icon: '🏭',
    label: 'Industrial Hubs, Business Zones and MNCs',
    note: 'Surrounded by major commercial and industrial corridors',
  },
  {
    icon: '🏘',
    label: 'Thriving Township — 15,000 Residents',
    note: 'Established community with schools, malls and hospitals',
  },
]

export default function Location() {
  return (
    <section id="location" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold text-center mb-3">
          Where We Are
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-center font-bold text-dark mb-3">
          Prime Location
        </h2>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-14">
          Near Exit 2C, Sector-19, Yamuna Expressway, Greater Noida —
          at the heart of NCR's fastest growing corridor, next to India's largest upcoming airport.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-md aspect-video bg-slate-200">
            <iframe
              title="Gaur Yamuna City Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.2!2d77.882!3d28.408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea627b46b8e1%3A0x4afae55a37b0e2be!2sGaur%20Yamuna%20City!5e0!3m2!1sen!2sin!4v1680000000000"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Points */}
          <div className="space-y-4">
            {points.map(r => (
              <div key={r.label}
                className="flex items-start gap-4 bg-white rounded-xl px-5 py-4 border border-gray-100 hover:border-gold transition-colors">
                <span className="text-2xl flex-shrink-0 mt-0.5">{r.icon}</span>
                <div>
                  <p className="font-semibold text-dark text-sm">{r.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{r.note}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
