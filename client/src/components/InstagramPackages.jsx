import { useState } from 'react'

/* ── Package categories ─────────────────────────────────────────── */
const categories = [
  {
    id: 'engagement',
    label: 'Engagement',
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    color: '#EC4899',
    desc: 'Boost your post engagement with real likes, views & reach across 10 posts.',
    packages: [
      { name: 'Starter', price: '$200', popular: false, metrics: { likes: '1,000', views: '10,000', reach: '10,000', impressions: '10,000', posts: '10' } },
      { name: 'Growth',  price: '$300', popular: false, metrics: { likes: '2,000', views: '20,000', reach: '10,000', impressions: '10,000', posts: '10' } },
      { name: 'Pro',     price: '$400', popular: true,  metrics: { likes: '3,000', views: '30,000', reach: '10,000', impressions: '10,000', posts: '10' } },
      { name: 'Elite',   price: '$500', popular: false, metrics: { likes: '4,000', views: '40,000', reach: '10,000', impressions: '10,000', posts: '10' } },
      { name: 'Max',     price: '$600', popular: false, metrics: { likes: '5,000', views: '50,000', reach: '10,000', impressions: '10,000', posts: '10' } },
    ],
  },
  {
    id: 'followers',
    label: 'Followers',
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    color: '#8B5CF6',
    desc: 'Grow your follower count with real, targeted Instagram followers.',
    packages: [
      { name: 'Starter', price: '€200', popular: false, metrics: { followers: '5,000',  likes: '1,000', posts: '10' } },
      { name: 'Growth',  price: '€300', popular: false, metrics: { followers: '10,000', likes: '2,000', posts: '10' } },
      { name: 'Pro',     price: '€400', popular: true,  metrics: { followers: '15,000', likes: '3,000', posts: '10' } },
      { name: 'Elite',   price: '€500', popular: false, metrics: { followers: '20,000', likes: '4,000', posts: '10' } },
    ],
  },
  {
    id: 'premium',
    label: 'Premium',
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    color: '#6366f1',
    desc: 'Premium engagement package for a drastic profile transformation and maximum reach.',
    packages: [
      { name: 'Starter', price: '€200', popular: false, metrics: { likes: '2,000', views: '10,000', reach: '10,000', impressions: '10,000', posts: '10' } },
      { name: 'Growth',  price: '€300', popular: false, metrics: { likes: '4,000', views: '20,000', reach: '10,000', impressions: '10,000', posts: '10' } },
      { name: 'Pro',     price: '€400', popular: true,  metrics: { likes: '6,000', views: '30,000', reach: '10,000', impressions: '10,000', posts: '10' } },
      { name: 'Elite',   price: '€500', popular: false, metrics: { likes: '8,000', views: '40,000', reach: '10,000', impressions: '10,000', posts: '10' } },
    ],
  },
  {
    id: 'reels',
    label: 'Unlimited Reels',
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
      </svg>
    ),
    color: '#F59E0B',
    desc: 'Unlimited reel promotion for multiple months — maximum viral exposure.',
    packages: [
      { name: '2 Months', price: '$350', popular: false, metrics: { likes: '3,000',  views: '100,000', reach: '10,000', impressions: '10,000', reels: '2 Months' } },
      { name: '3 Months', price: '$500', popular: true,  metrics: { likes: '5,000',  views: '200,000', reach: '10,000', impressions: '10,000', reels: '3 Months' } },
      { name: '4 Months', price: '$650', popular: false, metrics: { likes: '7,000',  views: '300,000', reach: '10,000', impressions: '10,000', reels: '4 Months' } },
      { name: '5 Months', price: '$800', popular: false, metrics: { likes: '10,000', views: '400,000', reach: '10,000', impressions: '10,000', reels: '5 Months' } },
    ],
  },
  {
    id: 'youtube',
    label: 'YouTube',
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
    color: '#EF4444',
    desc: 'Boost your YouTube videos with real likes and views across 10 videos.',
    packages: [
      { name: 'Starter', price: '€200', popular: false, metrics: { likes: '1,000', views: '10,000',  videos: '10' } },
      { name: 'Growth',  price: '€320', popular: false, metrics: { likes: '2,000', views: '20,000',  videos: '10' } },
      { name: 'Pro',     price: '€430', popular: true,  metrics: { likes: '3,000', views: '30,000',  videos: '10' } },
      { name: 'Elite',   price: '€600', popular: false, metrics: { likes: '4,000', views: '40,000',  videos: '10' } },
    ],
  },
]

/* ── Metric row ─────────────────────────────────────────────────── */
const metricConfig = {
  followers:    { icon: '👥', label: 'Followers' },
  likes:        { icon: '❤️', label: 'Likes' },
  views:        { icon: '▶️', label: 'Views' },
  reach:        { icon: '📡', label: 'Reach' },
  impressions:  { icon: '👁',  label: 'Impressions' },
  posts:        { icon: '🖼',  label: 'Posts' },
  videos:       { icon: '🎬', label: 'Videos' },
  reels:        { icon: '⏱',  label: 'Unlimited Reels' },
}

/* ── Single package card ────────────────────────────────────────── */
function PackageCard({ pkg, color, index }) {
  const metrics = Object.entries(pkg.metrics)

  const whatsapp = () => {
    const msg = encodeURIComponent(`Hi Aadil! I'm interested in the ${pkg.name} package at ${pkg.price}. Can you help me?`)
    window.open(`https://wa.me/+919999999999?text=${msg}`, '_blank')
  }

  return (
    <div
      className="scroll-reveal"
      data-delay={index * 80}
      style={{
        background: pkg.popular
          ? `linear-gradient(135deg, ${color}18, ${color}09)`
          : 'rgba(255,255,255,0.025)',
        border: pkg.popular
          ? `1px solid ${color}50`
          : '1px solid rgba(255,255,255,0.07)',
        borderRadius: 20,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: pkg.popular ? `0 0 32px ${color}22` : 'none',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px)'
        e.currentTarget.style.boxShadow = `0 16px 48px ${color}22`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = pkg.popular ? `0 0 32px ${color}22` : 'none'
      }}
    >
      {/* Top accent line */}
      <div style={{
        height: 2,
        background: pkg.popular
          ? `linear-gradient(90deg, ${color}, ${color}88)`
          : `${color}40`,
        borderRadius: '20px 20px 0 0',
      }} />

      <div style={{ padding: '22px 22px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>

        {/* Tier name + badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <span style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '0.07em',
            textTransform: 'uppercase',
            color: pkg.popular ? color : 'rgba(242,241,239,0.45)',
            fontFamily: 'Geist Sans, Inter, sans-serif',
          }}>{pkg.name}</span>
          {pkg.popular && (
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.05em',
              textTransform: 'uppercase',
              background: `${color}20`,
              border: `1px solid ${color}45`,
              color, borderRadius: 100,
              padding: '3px 9px',
              fontFamily: 'Geist Sans, Inter, sans-serif',
            }}>⭐ Popular</span>
          )}
        </div>

        {/* Price */}
        <div style={{ marginBottom: 18 }}>
          <span style={{
            fontFamily: 'General Sans, system-ui, sans-serif',
            fontSize: 36, fontWeight: 800,
            color: 'white',
            lineHeight: 1,
          }}>{pkg.price}</span>
          <div style={{
            fontSize: 11, color: 'rgba(242,241,239,0.35)',
            marginTop: 3, fontFamily: 'Geist Sans, Inter, sans-serif',
          }}>one-time payment</div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 16 }} />

        {/* Metrics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9, flex: 1 }}>
          {metrics.map(([key, value]) => {
            const cfg = metricConfig[key] || { icon: '•', label: key }
            return (
              <div key={key} style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', gap: 8,
              }}>
                <span style={{
                  fontSize: 12, color: 'rgba(242,241,239,0.45)',
                  fontFamily: 'Geist Sans, Inter, sans-serif',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  <span style={{ fontSize: 13 }}>{cfg.icon}</span>
                  {cfg.label}
                </span>
                <span style={{
                  fontSize: 12, fontWeight: 700,
                  color: 'rgba(242,241,239,0.85)',
                  fontFamily: 'Geist Sans, Inter, sans-serif',
                  textAlign: 'right',
                }}>{value}</span>
              </div>
            )
          })}
        </div>

        {/* Guarantees */}
        <div style={{
          marginTop: 16, paddingTop: 14,
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', flexDirection: 'column', gap: 5,
        }}>
          {['Real & Organic', 'Refill Guarantee', 'Safe & Secure'].map(g => (
            <div key={g} style={{
              fontSize: 11, color: 'rgba(242,241,239,0.38)',
              fontFamily: 'Geist Sans, Inter, sans-serif',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{ color: '#10B981', fontSize: 11 }}>✓</span> {g}
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={whatsapp}
          style={{
            marginTop: 18, width: '100%',
            padding: '11px 16px', borderRadius: 11,
            background: pkg.popular ? color : `${color}14`,
            border: pkg.popular ? 'none' : `1px solid ${color}35`,
            color: pkg.popular ? 'white' : color,
            fontSize: 13, fontWeight: 700,
            cursor: 'pointer',
            fontFamily: 'Geist Sans, Inter, sans-serif',
            transition: 'opacity 0.2s, transform 0.15s',
            boxShadow: pkg.popular ? `0 8px 24px ${color}40` : 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          Get Started →
        </button>
      </div>
    </div>
  )
}

/* ── Section ─────────────────────────────────────────────────────── */
export default function InstagramPackages() {
  const [activeId, setActiveId] = useState('engagement')
  const active = categories.find(c => c.id === activeId)

  return (
    <section
      id="instagram"
      className="py-16 md:py-24 px-4 md:px-6"
      style={{ background: 'hsl(260, 87%, 3%)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-badge scroll-reveal">Social Media Growth</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 scroll-reveal"
            data-delay="100"
            style={{ fontFamily: 'General Sans, system-ui, sans-serif', color: 'hsl(40,6%,95%)' }}
          >
            Choose Your <span className="gradient-text-hero">Growth Package</span>
          </h2>
          <p
            className="mt-3 text-base max-w-xl mx-auto scroll-reveal"
            data-delay="180"
            style={{ color: 'hsl(40,6%,66%)', fontFamily: 'Geist Sans, Inter, sans-serif' }}
          >
            Real, organic growth across every major platform. Select a category below.
          </p>
        </div>

        {/* Tab bar */}
        <div
          className="scroll-reveal"
          data-delay="240"
          style={{
            display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          {categories.map(c => {
            const isActive = c.id === activeId
            return (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  padding: '9px 18px', borderRadius: 100,
                  border: isActive ? `1px solid ${c.color}55` : '1px solid rgba(255,255,255,0.1)',
                  background: isActive ? `${c.color}18` : 'rgba(255,255,255,0.03)',
                  color: isActive ? c.color : 'rgba(242,241,239,0.5)',
                  fontSize: 13, fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'Geist Sans, Inter, sans-serif',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = `${c.color}35`
                    e.currentTarget.style.color = 'rgba(242,241,239,0.8)'
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.color = 'rgba(242,241,239,0.5)'
                  }
                }}
              >
                <span style={{ color: isActive ? c.color : 'inherit' }}>{c.icon}</span>
                {c.label}
              </button>
            )
          })}
        </div>

        {/* Active category description */}
        <p
          key={activeId + '-desc'}
          style={{
            textAlign: 'center', fontSize: 14, marginBottom: 28,
            color: 'rgba(242,241,239,0.45)',
            fontFamily: 'Geist Sans, Inter, sans-serif',
            maxWidth: 520, margin: '0 auto 28px',
          }}
        >
          {active.desc}
        </p>

        {/* Package grid */}
        <div
          key={activeId}
          style={{
            display: 'grid',
            gridTemplateColumns: active.packages.length === 5
              ? 'repeat(5, 1fr)'
              : 'repeat(4, 1fr)',
            gap: 14,
          }}
          className="pkg-grid"
        >
          {active.packages.map((pkg, i) => (
            <PackageCard key={pkg.name} pkg={pkg} color={active.color} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="text-center mt-8 text-sm"
          style={{
            color: 'rgba(242,241,239,0.28)',
            fontFamily: 'Geist Sans, Inter, sans-serif',
          }}
        >
          All packages include real & organic engagement only. Refill guarantee on all plans. No password required.
        </p>
      </div>

      {/* Responsive grid */}
      <style>{`
        @media (max-width: 1280px) { .pkg-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 900px)  { .pkg-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px)  { .pkg-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
