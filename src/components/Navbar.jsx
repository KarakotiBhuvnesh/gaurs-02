import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Home',        href: '#hero'      },
    { label: 'About',       href: '#about'     },
    { label: 'Amenities',   href: '#amenities' },
    { label: 'Location',    href: '#location'  },
    { label: 'Enquire Now', href: '#enquire'   },
  ]

  const tc = scrolled ? 'text-charcoal' : 'text-white'
  const bc = scrolled ? 'bg-charcoal'   : 'bg-white'

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#hero" className={`font-serif font-bold text-lg ${tc}`}>
          BENTO<span className="text-gold">.</span>
        </a>
        <nav className="hidden md:flex gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className={`text-sm font-medium hover:text-gold transition-colors ${tc}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)}>
          <span className={`block w-6 h-0.5 ${bc}`} />
          <span className={`block w-6 h-0.5 ${bc}`} />
          <span className={`block w-6 h-0.5 ${bc}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="text-sm font-medium text-charcoal hover:text-gold">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
