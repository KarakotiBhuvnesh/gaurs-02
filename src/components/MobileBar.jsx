export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-dark border-t border-white/10 flex">

      {/* Call button */}
      <a
        href="tel:+919999999999"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-white text-sm font-medium hover:bg-white/5 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        Call Us
      </a>

      <div className="w-px bg-white/10" />

      {/* Enquire button */}
      <a
        href="#enquire"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-gold text-dark text-sm font-semibold hover:bg-yellow-500 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        Enquire Now
      </a>

    </div>
  )
}
