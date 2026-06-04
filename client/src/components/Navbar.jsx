import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Publications', href: '#publications' },
    { label: 'Digital ID', href: '#digital' },
    { label: 'ORM', href: '#orm' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <nav
      style={{
        background: scrolled ? 'rgba(11,11,15,0.96)' : 'rgba(11,11,15,0.82)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.05)',
        backdropFilter: 'blur(16px)',
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center font-black text-white text-sm">AS</div>
          <div>
            <div className="font-bold text-white text-base leading-tight">Aadil Sayyed</div>
            <div className="text-[10px] text-[#8B5CF6] font-medium tracking-wide">DIGITAL GROWTH EXPERT</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/+919999999999"
            target="_blank"
            rel="noreferrer"
            className="btn-outline text-white text-sm font-medium px-4 py-2 rounded-lg"
          >
            💬 WhatsApp
          </a>
          <a
            href="#services"
            className="btn-gradient text-white text-sm font-semibold px-5 py-2 rounded-lg"
          >
            Get Started →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0D0D14] px-6 py-5 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-white font-medium">{l.label}</a>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <a href="https://wa.me/+919999999999" target="_blank" rel="noreferrer" className="btn-outline text-center text-white text-sm font-medium px-4 py-2.5 rounded-lg">💬 WhatsApp</a>
            <a href="#services" onClick={() => setMobileOpen(false)} className="btn-gradient text-center text-white text-sm font-semibold px-4 py-2.5 rounded-lg">Get Started →</a>
          </div>
        </div>
      )}
    </nav>
  )
}
