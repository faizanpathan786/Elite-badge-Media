const stats = [
  { value: '5,000+', label: 'Clients Served' },
  { value: '50+',    label: 'Top Publications' },
  { value: '4.9★',   label: 'Average Rating' },
  { value: '100%',   label: 'Satisfaction' },
]

const gradientText = {
  color: 'white',
}

export default function CTA() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Aadil! I'm interested in your services. Can you help me?")
    window.open(`https://wa.me/+919999999999?text=${msg}`, '_blank')
  }

  const handleEmail = () => {
    window.location.href = 'mailto:contact@aadilsayyed.com?subject=Service Inquiry'
  }

  return (
    <section
      id="contact"
      style={{ background: 'hsl(260, 87%, 3%)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Dot-grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(139,92,246,0.18) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      {/* Top edge glow line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.55), rgba(99,102,241,0.4), transparent)',
      }} />

      {/* Faded "AS" monogram — decorative watermark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', right: '-2%', top: '50%', transform: 'translateY(-50%)',
          fontSize: 'clamp(180px, 30vw, 420px)',
          fontWeight: 900, letterSpacing: '-0.04em',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(139,92,246,0.07)',
          fontFamily: 'General Sans, system-ui, sans-serif',
          lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
        }}
      >AS</div>

      {/* Left edge ambient glow */}
      <div style={{
        position: 'absolute', left: -80, top: '30%',
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 relative" style={{ zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* ── LEFT: Brand pitch ── */}
          <div className="reveal-left">
            <div className="section-badge mb-6 w-fit">Let's Work Together</div>

            <h2 style={{
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: 'clamp(30px, 4.5vw, 54px)',
              fontWeight: 700, lineHeight: 1.1, margin: 0,
              color: 'hsl(40,6%,95%)',
            }}>
              Let's build your<br />
              <span style={gradientText}>digital empire.</span>
            </h2>

            <p style={{
              color: 'hsl(40,6%,68%)', marginTop: 20,
              fontSize: 15, lineHeight: 1.75, maxWidth: 400,
              fontFamily: 'Geist Sans, Inter, sans-serif',
            }}>
              From Instagram growth to Forbes features — I build the digital authority that opens doors for entrepreneurs, brands, and public figures.
            </p>

            {/* Stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '20px 40px', marginTop: 36,
            }}>
              {stats.map((s, i) => (
                <div key={s.label} className="scroll-reveal" data-delay={i * 80}>
                  <div style={{
                    fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800,
                    fontFamily: 'General Sans, system-ui, sans-serif',
                    ...gradientText,
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontSize: 12, color: 'rgba(242,241,239,0.4)',
                    marginTop: 3, fontFamily: 'Geist Sans, Inter, sans-serif',
                    letterSpacing: '0.03em',
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Aadil signature line */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              marginTop: 36, paddingTop: 28,
              borderTop: '1px solid rgba(255,255,255,0.07)',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                background: 'linear-gradient(135deg,#8B5CF6,#EC4899)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 900, fontSize: 12, color: 'white',
                fontFamily: 'General Sans, system-ui, sans-serif',
              }}>AS</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'hsl(40,6%,95%)', fontFamily: 'General Sans, sans-serif' }}>
                  Aadil Sayyed
                </div>
                <div style={{ fontSize: 11, color: 'rgba(242,241,239,0.4)', fontFamily: 'Geist Sans, sans-serif' }}>
                  Digital Growth Expert · Available worldwide
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Contact cards ── */}
          <div className="reveal-right" data-delay="120" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

            {/* WhatsApp card */}
            <button
              onClick={handleWhatsApp}
              style={{
                background: 'linear-gradient(135deg, rgba(37,211,102,0.1), rgba(37,211,102,0.04))',
                border: '1px solid rgba(37,211,102,0.22)',
                borderRadius: 20, padding: '24px 28px',
                display: 'flex', alignItems: 'center', gap: 18,
                cursor: 'pointer', textAlign: 'left', width: '100%',
                transition: 'all 0.22s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(37,211,102,0.16), rgba(37,211,102,0.08))'
                e.currentTarget.style.borderColor = 'rgba(37,211,102,0.4)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(37,211,102,0.1), rgba(37,211,102,0.04))'
                e.currentTarget.style.borderColor = 'rgba(37,211,102,0.22)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                width: 50, height: 50, borderRadius: 14, flexShrink: 0,
                background: '#25D366',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(37,211,102,0.35)',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontWeight: 700, fontSize: 16, color: 'hsl(40,6%,95%)',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                }}>Chat on WhatsApp</div>
                <div style={{
                  fontSize: 13, color: 'rgba(37,211,102,0.7)', marginTop: 3,
                  fontFamily: 'Geist Sans, Inter, sans-serif',
                }}>Usually replies within 2 hours</div>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(37,211,102,0.5)" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

            {/* Email card */}
            <button
              onClick={handleEmail}
              style={{
                background: 'rgba(99,102,241,0.05)',
                border: '1px solid rgba(99,102,241,0.15)',
                borderRadius: 20, padding: '24px 28px',
                display: 'flex', alignItems: 'center', gap: 18,
                cursor: 'pointer', textAlign: 'left', width: '100%',
                transition: 'all 0.22s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(99,102,241,0.1)'
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(99,102,241,0.05)'
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.15)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                width: 50, height: 50, borderRadius: 14, flexShrink: 0,
                background: 'rgba(99,102,241,0.15)',
                border: '1px solid rgba(99,102,241,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontWeight: 700, fontSize: 16, color: 'hsl(40,6%,95%)',
                  fontFamily: 'General Sans, system-ui, sans-serif',
                }}>Send an Email</div>
                <div style={{
                  fontSize: 13, color: 'rgba(242,241,239,0.38)', marginTop: 3,
                  fontFamily: 'Geist Sans, Inter, sans-serif',
                }}>contact@aadilsayyed.com</div>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

            {/* Social proof pill */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '14px 20px', marginTop: 2,
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 14,
            }}>
              {/* Stacked avatar circles */}
              <div style={{ display: 'flex', flexShrink: 0 }}>
                {[
                  { bg: 'linear-gradient(135deg,#8B5CF6,#6366f1)', l: 'E' },
                  { bg: 'linear-gradient(135deg,#EC4899,#f43f5e)', l: 'B' },
                  { bg: 'linear-gradient(135deg,#F59E0B,#f97316)', l: 'C' },
                  { bg: 'linear-gradient(135deg,#10B981,#06B6D4)', l: 'P' },
                ].map((a, i) => (
                  <div key={i} style={{
                    width: 26, height: 26, borderRadius: '50%',
                    background: a.bg,
                    border: '2px solid hsl(260,87%,3%)',
                    marginLeft: i > 0 ? -8 : 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 9, color: 'white', fontWeight: 700,
                  }}>{a.l}</div>
                ))}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: 12, color: 'rgba(242,241,239,0.5)',
                  fontFamily: 'Geist Sans, Inter, sans-serif', lineHeight: 1.4,
                }}>
                  Trusted by <span style={{ color: 'rgba(242,241,239,0.75)', fontWeight: 600 }}>5,000+ entrepreneurs</span>,
                  celebrities & brands worldwide
                </div>
              </div>
              {/* Live indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
                <div style={{
                  width: 6, height: 6, borderRadius: '50%', background: '#25D366',
                  boxShadow: '0 0 6px rgba(37,211,102,0.8)',
                  animation: 'tikDualSpin 2s ease-in-out infinite',
                }} />
                <span style={{ fontSize: 10, color: 'rgba(37,211,102,0.7)', fontWeight: 600, letterSpacing: '0.04em' }}>ONLINE</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom edge line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(to right, transparent, rgba(99,102,241,0.2), transparent)',
      }} />
    </section>
  )
}
