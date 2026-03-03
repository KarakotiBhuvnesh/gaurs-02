const navLinks = [
  { href: '#hero',      label: 'Home'        },
  { href: '#about',     label: 'About'       },
  { href: '#amenities', label: 'Amenities'   },
  { href: '#location',  label: 'Location'    },
  { href: '#enquire',   label: 'Enquire Now' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-400 pt-14 pb-28 md:pb-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid sm:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h4 className="font-serif text-white text-xl font-bold mb-1">
              BENTO<span className="text-gold">.</span>
            </h4>
            <p className="text-gold text-xs tracking-widest uppercase mb-4">
              Gaur Yamuna City
            </p>
            <p className="text-sm leading-relaxed">
              Luxury Studio Apartments on Yamuna Expressway.
              Part of the 250 Acre Integrated Township.
            </p>
            <p className="text-sm mt-4">
              Starting{' '}
              <span className="text-white font-semibold">&#8377;1 Cr Onwards</span>
            </p>
          </div>

          <div>
          {/* Contact */}
          </div>
            

          {/* Quick Links */}
          <div>
            <h5 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map(l => (
                <li>
                  <a href={l.href} className="hover:text-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>&copy; 2026 Bento — All rights reserved.</p>
          <p>
            A Project by{' '}
            <span className="text-gold font-semibold">Leading Developer</span>{' '}
            &mdash; 3 Decades of Trust & Legacy
          </p>
        </div>

      </div>
    </footer>
  )
}
