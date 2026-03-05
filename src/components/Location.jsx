const points = [
  {
    icon: '✈️',
    label: 'Near Upcoming Noida International Airport',
    note: 'Jewar Airport — 24 km away, commercial ops expected 2026',
  },
  {
    icon: '🛣️',
    label: 'Right on Yamuna Expressway',
    note: 'Near Exit 2C, Sector-19 — direct expressway access',
  },
  {
    icon: '🏎️',
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
    icon: '🏘️',
    label: 'Thriving Township — 15,000 Residents',
    note: 'Established community with schools, malls and hospitals',
  },
]

export default function Location() {
  return (
    <section id="location" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold text-center mb-3">
          Where We Are
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-center font-bold text-dark mb-3">
          Prime Location
        </h2>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-10 sm:mb-14 text-sm sm:text-base">
          Near Exit 2C, Sector-19, Yamuna Expressway, Greater Noida —
          at the heart of NCR's fastest growing corridor, next to India's largest upcoming airport.
        </p>

        {/* Map */}
        <div className="md:col-span-2 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-md w-full max-w-3xl h-[320px] md:h-[380px] bg-slate-200">
            <iframe
              title="Gaur Yamuna City Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.993493214769!2d77.5573145!3d28.3096069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea9b1d6a2d4d%3A0xXXXXXXXXXXXXX!2sGaur%20Yamuna%20City%2C%20Yamuna%20Expressway%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%2020203201!5e0!3m2!1sen!2sin!4v1680000000000"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

          {/* Location points */}
          {/* <ul className="space-y-4 sm:space-y-5">
            {points.map(p => (
              <li>
                <span className="text-xl sm:text-2xl flex-shrink-0 mt-0.5">{p.icon}</span>
                <div>
                  <p className="font-semibold text-dark text-sm sm:text-base leading-snug mb-0.5">
                    {p.label}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">{p.note}</p>
                </div>
              </li>
            ))}
          </ul> */}

      </div>
    </section>
  )
}
