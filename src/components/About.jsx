const specs = [
  {label:'Size',value:'650-675 Sq.Ft.'},{label:'Floors',value:'40 Storeys'},
  {label:'Towers',value:'2 Iconic'},{label:'Furnished',value:'Fully'},
  {label:'Starting',value:'Rs.1 Cr+'},{label:'Township',value:'250 Acres'},
]
const bullets = [
  'Fully Furnished Studio Apartments',
  'Branded Hotel inside the township',
  "Luxury Mall - NCR's biggest destination",
  'Massive parking for 8,000 cars',
]
export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold text-center mb-3">The Project</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-center font-bold text-dark mb-4">Luxury Studio Living</h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-14 leading-relaxed">
          Fully furnished, centrally air-conditioned serviced studio apartments at Gaur Yamuna City,
          just 25 minutes from Noida International Airport.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-20">
          {specs.map(s => (
            <div key={s.label} className="text-center border border-gray-100 rounded-lg py-6 px-2 hover:border-gold transition-all">
              <p className="font-serif text-lg font-bold text-dark mb-1">{s.value}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl bg-slate-100 aspect-[4/3] relative flex items-center justify-center overflow-hidden">
            <img src="/img/studio.jpg" alt="Studio" className="w-full h-full object-cover" onError={e=>{e.currentTarget.style.display='none'}} />
            <p className="absolute text-gray-400 text-sm">Add studio.jpg to public/img/</p>
          </div>
          <div>
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold mb-3">Part of 250 Acres</p>
            <h3 className="font-serif text-2xl font-bold text-dark mb-5">Integrated Township - Gaur Yamuna City</h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              Gaur Yamuna City is a 250+ acre integrated township on the Yamuna Expressway, near the upcoming
              Noida International Airport. A self-sustained urban destination with strong investment potential.
            </p>
            <ul className="space-y-3">
              {bullets.map(b => (
                <li>
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
