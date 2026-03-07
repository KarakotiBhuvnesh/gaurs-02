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
  const bc = scrolled ? 'bg-white'      : 'bg-white'

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* Main bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        {/* Logo */}
        <a href="#hero" className={`font-serif font-bold text-base sm:text-lg ${tc}`}>
          <span className="text-gold">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 lg:gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className={`text-sm font-medium hover:text-gold transition-colors ${tc}`}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 ${scrolled ? 'bg-charcoal' : 'bg-white'} transition-all`} />
          <span className={`block w-6 h-0.5 ${scrolled ? 'bg-charcoal' : 'bg-white'} transition-all`} />
          <span className={`block w-6 h-0.5 ${scrolled ? 'bg-charcoal' : 'bg-white'} transition-all`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg px-4 sm:px-6 py-4 flex flex-col gap-3 z-50">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-charcoal hover:text-gold py-1.5 border-b border-gray-100 last:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
