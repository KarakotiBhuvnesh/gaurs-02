export default function Location() {
  return (
    <section id="location" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold text-center mb-3">Where We Are</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-center font-bold text-dark mb-4">Prime Location</h2>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-14">
          Near Exit 2C, Sector-19, Yamuna Expressway, Greater Noida — at the heart of NCR's fastest growing corridor.
        </p>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md aspect-video bg-slate-200 flex items-center justify-center">
            <iframe
              title="Gaur Yamuna City Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.243!2d77.8827!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjAiTiA3N8KwNTInNTcuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div className="space-y-5">
            {[
              {icon:'✈', label:'Noida International Airport', note:'Jewar Airport - 24 km'},
              {icon:'🛣', label:'Yamuna Expressway',           note:'Direct access - Exit 2C'},
              {icon:'🏎', label:'Buddh International Circuit', note:'F1 Track - right opposite'},
              {icon:'🏫', label:'Multiple Universities',       note:'Within close proximity'},
              {icon:'🏭', label:'Industrial & Business Hubs', note:'MNCs and IT parks nearby'},
              {icon:'🏘', label:'Established Community',      note:'15,000+ residents already living'},
            ].map(r => (
              <div key={r.label} className="flex items-start gap-4 bg-white rounded-xl px-5 py-4 border border-gray-100 hover:border-gold transition-colors">
                <span className="text-2xl flex-shrink-0">{r.icon}</span>
                <div>
                  <p className="font-semibold text-dark text-sm">{r.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{r.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
