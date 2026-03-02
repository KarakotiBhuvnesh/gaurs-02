export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <h4 className="font-serif text-white text-lg font-bold mb-3">BENTO<span className="text-gold">.</span></h4>
            <p className="text-sm leading-relaxed">Luxury Studio Apartments at Gaur Yamuna City, Yamuna Expressway.</p>
          </div>
          <div>
            <h5 className="text-white text-sm font-semibold uppercase tracking-widest mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              {['#hero','#about','#amenities','#location','#enquire'].map((h,i) => (
                <li><a href={h} className="hover:text-gold transition-colors">
                  {['Home','About','Amenities','Location','Enquire Now'][i]}
                </a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white text-sm font-semibold uppercase tracking-widest mb-3">Contact</h5>
            <ul className="space-y-2 text-sm">
              <li>Gaur Yamuna City</li>
              <li>Sector-19, Yamuna Expressway</li>
              <li>Greater Noida, UP</li>
              <li><a href="tel:+919999999999" className="hover:text-gold transition-colors">+91 99999 99999</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>&copy; 2026 Bento - Gaur Yamuna City. All rights reserved.</p>
          <p>A Project by <span className="text-gold">Gaursons India</span> &mdash; 3 Decades of Trust</p>
        </div>
      </div>
    </footer>
  )
}
