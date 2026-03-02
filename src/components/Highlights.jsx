const items = [
  {num:'V',   title:'Opposite F1 Track',               desc:'Located opposite Buddh International Circuit - iconic address.'},
  {num:'VI',  title:'15,000 Residents Already',         desc:'A thriving township with established community and infrastructure.'},
]
export default function Highlights() {
  return (
    <section id="highlights" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold text-center mb-3">Why Invest</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-center font-bold text-dark mb-4">Location Advantages</h2>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-14">
          A project by one of the top developers in real estate with a track record of 3 decades.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(it => (
            <div key={it.num} className="bg-white rounded-xl p-8 border border-gray-100 hover:border-gold hover:shadow-md transition-all group">
              <p className="font-serif text-3xl font-bold text-gold mb-4">{it.num}</p>
              <h3 className="font-semibold text-dark mb-2 text-base">{it.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
