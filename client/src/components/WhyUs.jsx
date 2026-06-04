/* Icons */
const ShieldCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
)
const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
)
const LockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
)
const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)
const RefreshIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </svg>
)
const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)
const TargetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)
const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const reasons = [
  { Icon: ShieldCheck, color: '#10B981', title: 'Proven Ethical Methods', desc: 'Sustainable white-hat strategies with a reputation-first approach.' },
  { Icon: UsersIcon, color: '#8B5CF6', title: '5M+ Real Users', desc: 'Access to an active network of over 5 million real people. Zero bots.' },
  { Icon: LockIcon, color: '#6366f1', title: 'Confidential Handling', desc: 'Sensitive work handled with full discretion and privacy.' },
  { Icon: ClockIcon, color: '#F59E0B', title: 'Fast Replies', desc: 'Usually respond in under 2 hours with 24/7 client support available.' },
  { Icon: RefreshIcon, color: '#EC4899', title: 'Refill Guarantee', desc: 'Free refills if followers drop — no expiry, no extra cost.' },
  { Icon: ShieldIcon, color: '#06B6D4', title: 'Safe & Secure', desc: 'We never ask for passwords — account safety is our priority.' },
  { Icon: TargetIcon, color: '#a855f7', title: 'Tailored Strategy', desc: 'Custom plans built for your niche, goals and audience.' },
  { Icon: StarIcon, color: '#F59E0B', title: 'Satisfaction', desc: 'We do not stop until you are satisfied — results are our reputation.' },
]

const stats = [
  { value: '5M+', label: 'Reach network' },
  { value: '24/7', label: 'Client support' },
  { value: '4.9', label: 'Average rating' },
]

export default function WhyUs() {
  return (
    <section
      id="why"
      className="py-16 md:py-24 px-4 md:px-6"
      style={{
        background: 'radial-gradient(circle at top left, rgba(139,92,246,0.14), transparent 30%), radial-gradient(circle at top right, rgba(236,72,153,0.12), transparent 28%), hsl(260, 70%, 4%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '72px 72px', opacity: 0.18 }} />

      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-start">
          <div>
            <span className="section-badge">Why Us</span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-5"
              style={{ fontFamily: 'General Sans, system-ui, sans-serif', lineHeight: 1.05, letterSpacing: '-0.03em' }}
            >
              Why Clients Choose <span className="gradient-text-hero">Aadil Sayyed</span>
            </h2>
            <p
              className="mt-5 text-sm md:text-base"
              style={{ color: 'rgba(242,241,239,0.48)', fontFamily: 'Geist Sans, Inter, sans-serif', maxWidth: 560, lineHeight: 1.75 }}
            >
              Eight commitments that guide our work — transparent, proven, and built to scale your influence without compromising your brand.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
              {stats.map((stat) => (
                <div key={stat.label} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 14 }}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: 'hsl(40,6%,95%)', fontFamily: 'General Sans, system-ui, sans-serif' }}>
                    {stat.value}
                  </div>
                  <div style={{ marginTop: 4, fontSize: 12, color: 'rgba(242,241,239,0.42)', letterSpacing: '0.02em' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ marginBottom: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: 12, color: 'rgba(242,241,239,0.38)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Key commitments
              </div>
              <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg, rgba(139,92,246,0.6), rgba(236,72,153,0.2), transparent)' }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {reasons.map((r, index) => (
                <div
                  key={r.title}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    gap: 14,
                    paddingBottom: 18,
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)' }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(135deg, ${r.color}33, ${r.color}11)`, color: r.color, boxShadow: `0 0 0 1px ${r.color}22 inset` }}>
                    <r.Icon />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                      <div style={{ fontWeight: 700, color: 'hsl(40,6%,95%)', fontFamily: 'General Sans, system-ui, sans-serif', fontSize: 15 }}>
                        {r.title}
                      </div>
                      <div style={{ width: 8, height: 8, borderRadius: 999, background: r.color, boxShadow: `0 0 14px ${r.color}` }} />
                    </div>
                    <div style={{ marginTop: 7, color: 'rgba(242,241,239,0.62)', fontSize: 13, lineHeight: 1.7, maxWidth: 470 }}>
                      {r.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
