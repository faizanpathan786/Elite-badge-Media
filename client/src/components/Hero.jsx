import { useRef, useEffect, useState } from 'react'

/* ── Chevron icon ── */
const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M6 9l6 6 6-6"/>
  </svg>
)

/* ── Marquee logos ── */
const brands = [
  { letter: 'I',  name: 'Instagram', color: '#EC4899' },
  { letter: 'F',  name: 'Forbes',    color: '#F59E0B' },
  { letter: 'Y',  name: 'YouTube',   color: '#EF4444' },
  { letter: 'G',  name: 'Google',    color: '#6366f1' },
  { letter: 'T',  name: 'TikTok',    color: '#06B6D4' },
  { letter: 'S',  name: 'Spotify',   color: '#10B981' },
  { letter: 'GQ', name: 'GQ',        color: '#a855f7' },
  { letter: 'V',  name: 'Vogue',     color: '#F59E0B' },
]

function LogoItem({ letter, name, color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
      <div
        className="liquid-glass"
        style={{
          width: 28, height: 28, borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: `${color}18`, color,
          fontSize: 11, fontWeight: 700,
          fontFamily: 'General Sans, system-ui, sans-serif',
          flexShrink: 0,
        }}
      >
        {letter}
      </div>
      <span style={{
        fontSize: 14, fontWeight: 600,
        color: 'rgba(242,241,239,0.7)',
        fontFamily: 'Geist Sans, Inter, sans-serif',
        whiteSpace: 'nowrap',
      }}>
        {name}
      </span>
    </div>
  )
}

export default function Hero() {
  const videoRef = useRef(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  /* Video fade-in / fade-out loop */
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const FADE_MS = 500
    let rafId = null
    let fadeStart = null
    let fadingOut = false

    const animFadeIn = (ts) => {
      if (!fadeStart) fadeStart = ts
      const t = Math.min((ts - fadeStart) / FADE_MS, 1)
      video.style.opacity = t
      if (t < 1) rafId = requestAnimationFrame(animFadeIn)
      else fadeStart = null
    }

    const animFadeOut = (ts) => {
      if (!fadeStart) fadeStart = ts
      const t = Math.min((ts - fadeStart) / FADE_MS, 1)
      video.style.opacity = 1 - t
      if (t < 1) rafId = requestAnimationFrame(animFadeOut)
      else fadeStart = null
    }

    const onTimeUpdate = () => {
      if (!video.duration) return
      const remaining = video.duration - video.currentTime
      if (!fadingOut && remaining > 0 && remaining <= FADE_MS / 1000 + 0.05) {
        fadingOut = true
        cancelAnimationFrame(rafId)
        fadeStart = null
        rafId = requestAnimationFrame(animFadeOut)
      }
    }

    const onEnded = () => {
      fadingOut = false
      video.style.opacity = 0
      setTimeout(() => {
        video.currentTime = 0
        fadeStart = null
        video.play().then(() => {
          rafId = requestAnimationFrame(animFadeIn)
        }).catch(() => {})
      }, 100)
    }

    video.style.opacity = 0
    video.muted = true
    video.playsInline = true
    video.preload = 'auto'
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)
    video.play().then(() => {
      fadeStart = null
      rafId = requestAnimationFrame(animFadeIn)
    }).catch(() => {})

    return () => {
      cancelAnimationFrame(rafId)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
    }
  }, [])

  const navLinks = [
    { label: 'Services',   href: '#services',  dropdown: true  },
    { label: 'Instagram',  href: '#instagram', dropdown: false },
    { label: 'Digital ID', href: '#digital',   dropdown: false },
    { label: 'ORM',        href: '#orm',        dropdown: false },
    { label: 'Contact',    href: '#contact',   dropdown: true  },
  ]

  const allBrands = [...brands, ...brands]

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'visible',
        background: 'hsl(260, 87%, 3%)',
      }}
    >
      {/* Background video */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4"
          muted playsInline preload="auto"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0 }}
        />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

        {/* ── Navbar ── */}
        <nav>
          <div className="flex items-center justify-between px-4 md:px-8 py-5 max-w-7xl mx-auto w-full">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 no-underline flex-shrink-0">
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'linear-gradient(135deg,#8B5CF6,#EC4899)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 900, fontSize: 12, color: 'white',
                fontFamily: 'General Sans, system-ui, sans-serif', flexShrink: 0,
              }}>AS</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'hsl(40,6%,95%)', fontFamily: 'General Sans, sans-serif', lineHeight: 1.15 }}>
                  Aadil Sayyed
                </div>
                <div style={{ fontSize: 9, color: '#8B5CF6', fontWeight: 600, letterSpacing: '0.08em', fontFamily: 'Geist Sans, sans-serif' }}>
                  DIGITAL GROWTH EXPERT
                </div>
              </div>
            </a>

            {/* Desktop center nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} className="hero-nav-link" style={{ textDecoration: 'none' }}>
                  {l.label}
                  {l.dropdown && <ChevronDown />}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a href="#contact" className="btn-hero-secondary hidden md:inline-block"
              style={{ borderRadius: 9999, padding: '8px 20px', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
              Get Started
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMobileNavOpen(o => !o)}
              style={{ background: 'none', border: 'none', color: 'hsl(40,6%,95%)', cursor: 'pointer', padding: 6 }}
              aria-label="Toggle menu"
            >
              {mobileNavOpen
                ? <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                : <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
              }
            </button>
          </div>

          {/* Mobile dropdown */}
          {mobileNavOpen && (
            <div
              className="md:hidden"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(5,4,18,0.97)',
                backdropFilter: 'blur(20px)',
                padding: '16px 24px 24px',
              }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setMobileNavOpen(false)}
                    style={{ textDecoration: 'none', padding: '10px 12px', borderRadius: 8, fontSize: 15, fontWeight: 500, color: 'rgba(242,241,239,0.85)', display: 'block' }}>
                    {l.label}
                  </a>
                ))}
              </div>
              <a href="#contact" onClick={() => setMobileNavOpen(false)}
                className="btn-hero-secondary"
                style={{ marginTop: 16, display: 'block', textAlign: 'center', borderRadius: 9999, padding: '12px 20px', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                Get Started
              </a>
            </div>
          )}

          {/* Divider */}
          <div style={{
            height: 1,
            background: 'linear-gradient(to right, transparent, rgba(242,241,239,0.12), transparent)',
            marginTop: 3, maxWidth: 1280, margin: '3px auto 0',
            width: 'calc(100% - 32px)',
          }} />
        </nav>

        {/* ── Hero content ── */}
        <div className="flex-1 flex items-center justify-center relative px-4 md:px-8 py-12 md:py-16">

          {/* Backdrop blur — responsive size */}
          <div style={{
            position: 'absolute',
            width: 'min(984px, 92vw)', height: 'min(527px, 46vw)',
            minHeight: 200,
            background: 'rgb(3, 7, 18)', opacity: 0.88,
            filter: 'blur(82px)',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none', borderRadius: '50%',
          }} />

          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%', maxWidth: 900 }}>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 'clamp(36px, 10vw, 220px)',
              fontWeight: 400,
              lineHeight: 1.02,
              letterSpacing: '-0.024em',
              margin: 0,
              color: 'hsl(40, 6%, 95%)',
            }}>
              <span style={{ color: 'hsl(40, 6%, 95%)' }}>Build </span>
              <span style={{
                backgroundImage: 'linear-gradient(to left, #6366f1, #a855f7, #fcd34d)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Authority.
              </span>
            </h1>

            {/* Subtitle */}
            <p style={{
              color: 'hsl(40, 6%, 82%)',
              fontSize: 'clamp(14px, 2vw, 18px)',
              lineHeight: 1.8,
              maxWidth: 420,
              margin: '12px auto 0',
              opacity: 0.82,
              fontFamily: 'Geist Sans, Inter, sans-serif',
            }}>
              PR features, Instagram growth, SEO & reputation<br className="hidden sm:block" />
              management for brands & public figures worldwide.
            </p>

            {/* CTAs */}
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href="#contact" className="btn-hero-secondary w-full sm:w-auto"
                style={{ borderRadius: 9999, padding: '14px 28px', fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'block', textAlign: 'center' }}>
                Schedule a Consult
              </a>
              <a href="#services"
                style={{
                  borderRadius: 9999, padding: '14px 28px', fontSize: 14, fontWeight: 600,
                  textDecoration: 'none', display: 'block', textAlign: 'center', width: '100%',
                  background: 'linear-gradient(135deg,#8B5CF6,#EC4899)', color: 'white',
                  transition: 'opacity 0.2s, transform 0.2s',
                }}
                className="sm:w-auto"
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Explore Services →
              </a>
            </div>

          </div>
        </div>

        {/* ── Logo marquee ── */}
        <div className="pb-8 md:pb-10 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">

            {/* On small screens: just the marquee. On md+: side text + divider + marquee */}
            <div className="flex items-center gap-6 md:gap-12">

              {/* Static text — hidden on small screens */}
              <div className="hidden sm:block flex-shrink-0">
                <p style={{ fontSize: 12, color: 'rgba(242,241,239,0.42)', lineHeight: 1.5, margin: 0, fontFamily: 'Geist Sans, Inter, sans-serif' }}>
                  Featured on &<br />trusted by
                </p>
              </div>

              {/* Divider — hidden on small screens */}
              <div className="hidden sm:block w-px h-8 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }} />

              {/* Scrolling marquee */}
              <div className="flex-1 overflow-hidden relative">
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0, width: 40, zIndex: 2,
                  background: 'linear-gradient(to right, hsl(260,87%,3%), transparent)',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  position: 'absolute', right: 0, top: 0, bottom: 0, width: 40, zIndex: 2,
                  background: 'linear-gradient(to left, hsl(260,87%,3%), transparent)',
                  pointerEvents: 'none',
                }} />
                <div className="marquee-track" style={{ gap: '2.5rem' }}>
                  {allBrands.map((b, i) => <LogoItem key={`${b.name}-${i}`} {...b} />)}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
