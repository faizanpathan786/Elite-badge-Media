/* ── Icons ──────────────────────────────────────────────────────── */
const BookIcon     = () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
const SearchIcon   = () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
const ShieldIcon   = () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
const CameraIcon   = () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
const MusicIcon    = () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
const FilmIcon     = () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>
const GlobeIcon    = () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
const BriefcaseIcon= () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
const StarIcon     = () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
const UserIcon     = () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
const CrownIcon    = () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path d="M2 17l2-9 5 5 3-8 3 8 5-5 2 9H2z"/><line x1="2" y1="21" x2="22" y2="21"/></svg>
const CheckIcon    = () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><polyline points="20 6 9 17 4 12"/></svg>

/* ── Service data ────────────────────────────────────────────────── */
const services = [
  {
    Icon: BookIcon,
    color: '#6366f1',
    gradient: 'linear-gradient(135deg,#6366f1,#8B5CF6)',
    name: 'Wikipedia Page',
    price: '$1,500', period: 'one-time',
    tat: '4 Weeks',
    desc: 'Policy-compliant, notable Wikipedia article for individuals and brands.',
    features: ['Notability research & sourcing', 'Policy-compliant creation', 'Ongoing edit monitoring'],
    badge: null,
  },
  {
    Icon: SearchIcon,
    color: '#4285F4',
    gradient: 'linear-gradient(135deg,#4285F4,#34A853)',
    name: 'Google Knowledge Panel',
    price: '$500', period: 'one-time',
    tat: '45–60 Days',
    desc: 'Get your Knowledge Panel created, verified and optimized on Google.',
    features: ['Knowledge Graph inclusion', 'Profile verification request', 'Search appearance boost'],
    badge: 'Popular',
  },
  {
    Icon: ShieldIcon,
    color: '#1877F2',
    gradient: 'linear-gradient(135deg,#1877F2,#166FE5)',
    name: 'Facebook Verification',
    price: '$2,500', period: 'one-time',
    tat: '4–6 Weeks',
    desc: 'Official blue badge verification for your Facebook profile or page.',
    features: ['Policy-compliant submission', 'Official blue badge', 'Priority account status'],
    badge: null,
  },
  {
    Icon: CameraIcon,
    color: '#C13584',
    gradient: 'linear-gradient(135deg,#833AB4,#C13584,#FD1D1D)',
    name: 'Instagram Verification',
    price: '$3,000', period: 'one-time',
    tat: '4–6 Weeks',
    desc: 'Secure the Instagram blue tick for your personal or brand account.',
    features: ['Official channel submission', 'Algorithm trust boost', 'Brand protection status'],
    badge: 'Premium',
  },
  {
    Icon: MusicIcon,
    color: '#1DB954',
    gradient: 'linear-gradient(135deg,#1DB954,#17A34A)',
    name: 'Spotify Verification',
    price: '$250', period: 'one-time',
    tat: '5 Days',
    desc: 'Get your artist verification badge on Spotify in just 5 days.',
    features: ['Official artist badge', 'Streaming credibility boost', 'Fast 5-day delivery'],
    badge: 'Fast',
  },
  {
    Icon: FilmIcon,
    color: '#F5C518',
    gradient: 'linear-gradient(135deg,#F5C518,#E5A00D)',
    name: 'IMDB Profile + Image',
    price: '$250', period: 'one-time',
    tat: '5 Days',
    desc: 'Official IMDB listing with professional image and credits.',
    features: ['Official IMDB listing', 'Professional image upload', 'Credits & bio included'],
    badge: 'Fast',
  },
  {
    Icon: GlobeIcon,
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg,#8B5CF6,#7C3AED)',
    name: 'Wikialpha (Verified)',
    price: '$100', period: 'one-time',
    tat: '5–7 Days',
    desc: 'Verified presence on Wikialpha, the open content encyclopedia.',
    features: ['Verified account status', 'Google indexed content', 'Quick 5–7 day delivery'],
    badge: null,
  },
  {
    Icon: BookIcon,
    color: '#EC4899',
    gradient: 'linear-gradient(135deg,#EC4899,#DB2777)',
    name: 'Wikitia Page',
    price: '$750', period: 'one-time',
    tat: '4 Weeks',
    desc: 'Comprehensive Wikitia page for enhanced online visibility.',
    features: ['SEO-optimized biography', 'Permanent online presence', 'Editorial quality content'],
    badge: null,
  },
  {
    Icon: BriefcaseIcon,
    color: '#0288D1',
    gradient: 'linear-gradient(135deg,#0288D1,#0275B8)',
    name: 'Crunchbase Profile',
    price: '$250', period: 'one-time',
    tat: '5 Days',
    desc: 'Professional Crunchbase listing for entrepreneurs and startups.',
    features: ['Investor-grade profile', 'Startup ecosystem presence', 'LinkedIn integration'],
    badge: 'Fast',
  },
  {
    Icon: StarIcon,
    color: '#a855f7',
    gradient: 'linear-gradient(135deg,#a855f7,#9333EA)',
    name: 'Fandom Page',
    price: '$250', period: 'one-time',
    tat: '5 Days',
    desc: 'Official Fandom page for artists, creators and entertainers.',
    features: ['Fan community presence', 'Entertainment credibility', 'Fast delivery'],
    badge: null,
  },
  {
    Icon: GlobeIcon,
    color: '#10B981',
    gradient: 'linear-gradient(135deg,#10B981,#059669)',
    name: 'Everybody Wiki',
    price: '$100', period: 'one-time',
    tat: '5 Days',
    desc: 'Verified biography page on Everybody Wiki, indexed by Google.',
    features: ['Verified biography', 'Google indexed', '5-day delivery'],
    badge: null,
  },
  {
    Icon: UserIcon,
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg,#F59E0B,#D97706)',
    name: 'Biography + 50 Images',
    price: '$300', period: 'one-time',
    tat: '5–7 Days',
    desc: 'Published biography on top Google websites with 50 images in search.',
    features: ['50 images in Google search', 'Top-site publication', 'SEO-optimized content'],
    badge: null,
  },
  {
    Icon: CrownIcon,
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg,#F59E0B,#a855f7)',
    name: 'Personal Branding VIP',
    price: '$1,000', period: '/month',
    tat: 'Ongoing Monthly',
    desc: 'Full-service monthly personal brand management and growth strategy.',
    features: ['Monthly strategy sessions', 'Cross-platform management', 'Dedicated brand manager'],
    badge: 'VIP',
  },
]

/* ── Card ────────────────────────────────────────────────────────── */
function ServiceCard({ svc, index }) {
  const isVip = svc.badge === 'VIP'

  const badgeStyles = {
    Popular:  { bg: 'rgba(99,102,241,0.15)',  border: 'rgba(99,102,241,0.35)',  color: '#A5B4FC' },
    Premium:  { bg: 'rgba(236,72,153,0.15)',  border: 'rgba(236,72,153,0.35)',  color: '#F9A8D4' },
    Fast:     { bg: 'rgba(16,185,129,0.15)',   border: 'rgba(16,185,129,0.35)',  color: '#6EE7B7' },
    VIP:      { bg: 'rgba(245,158,11,0.15)',   border: 'rgba(245,158,11,0.4)',   color: '#FCD34D' },
  }

  const bs = svc.badge ? badgeStyles[svc.badge] : null

  return (
    <div
      className="scroll-reveal"
      data-delay={Math.min(index * 55, 440)}
      style={{
        background: isVip
          ? 'linear-gradient(135deg,rgba(245,158,11,0.07),rgba(168,85,247,0.07))'
          : 'rgba(255,255,255,0.03)',
        border: isVip
          ? '1px solid rgba(245,158,11,0.3)'
          : '1px solid rgba(255,255,255,0.07)',
        borderRadius: 20,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px)'
        e.currentTarget.style.borderColor = isVip ? 'rgba(245,158,11,0.55)' : `${svc.color}44`
        e.currentTarget.style.boxShadow = `0 16px 48px ${svc.color}1A`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = isVip ? 'rgba(245,158,11,0.3)' : 'rgba(255,255,255,0.07)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Top accent line */}
      <div style={{ height: 2, background: svc.gradient, borderRadius: '20px 20px 0 0' }} />

      <div style={{ padding: '22px 22px 20px', display: 'flex', flexDirection: 'column', flex: 1, gap: 0 }}>

        {/* Icon row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: `${svc.color}18`,
            border: `1px solid ${svc.color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: svc.color, flexShrink: 0,
          }}>
            <svc.Icon />
          </div>
          {bs && (
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.06em',
              textTransform: 'uppercase',
              background: bs.bg, border: `1px solid ${bs.border}`,
              color: bs.color, borderRadius: 100, padding: '3px 10px',
            }}>
              {svc.badge}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 style={{
          fontFamily: 'General Sans, system-ui, sans-serif',
          fontWeight: 700, fontSize: 15,
          color: 'hsl(40,6%,95%)',
          lineHeight: 1.3, margin: 0,
        }}>
          {svc.name}
        </h3>

        {/* Price */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, marginTop: 10 }}>
          <span style={{
            fontSize: 26, fontWeight: 800,
            fontFamily: 'General Sans, system-ui, sans-serif',
            color: 'white',
          }}>
            {svc.price}
          </span>
          <span style={{ fontSize: 11, color: 'rgba(242,241,239,0.35)', fontFamily: 'Geist Sans, sans-serif' }}>
            {svc.period}
          </span>
        </div>

        {/* TAT pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 8,
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: 100, padding: '3px 10px',
          fontSize: 11, color: 'rgba(242,241,239,0.5)',
          fontFamily: 'Geist Sans, sans-serif', alignSelf: 'flex-start',
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          {svc.tat}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '16px 0' }} />

        {/* Description */}
        <p style={{
          fontSize: 12.5, color: 'rgba(242,241,239,0.48)',
          lineHeight: 1.65, margin: 0,
          fontFamily: 'Geist Sans, Inter, sans-serif',
        }}>
          {svc.desc}
        </p>

        {/* Feature bullets */}
        <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'flex', flexDirection: 'column', gap: 7 }}>
          {svc.features.map(f => (
            <li key={f} style={{
              display: 'flex', alignItems: 'flex-start', gap: 8,
              fontSize: 12, color: 'rgba(242,241,239,0.6)',
              fontFamily: 'Geist Sans, Inter, sans-serif', lineHeight: 1.4,
            }}>
              <span style={{ color: svc.color, flexShrink: 0, marginTop: 1 }}>✓</span>
              {f}
            </li>
          ))}
        </ul>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* CTA */}
        <a
          href="#contact"
          style={{
            display: 'block', textAlign: 'center', marginTop: 20,
            padding: '10px 16px', borderRadius: 10,
            background: `${svc.color}14`,
            border: `1px solid ${svc.color}30`,
            color: svc.color, fontSize: 13, fontWeight: 600,
            textDecoration: 'none',
            fontFamily: 'Geist Sans, Inter, sans-serif',
            transition: 'background 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = `${svc.color}22`
            e.currentTarget.style.borderColor = `${svc.color}55`
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = `${svc.color}14`
            e.currentTarget.style.borderColor = `${svc.color}30`
          }}
        >
          Get Started →
        </a>

      </div>
    </div>
  )
}

/* ── Section ─────────────────────────────────────────────────────── */
export default function DigitalIdentity() {
  return (
    <section
      id="digital"
      className="py-16 md:py-24"
      style={{ background: 'hsl(260, 70%, 4%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-badge scroll-reveal">Digital Identity</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 scroll-reveal"
            data-delay="100"
            style={{ fontFamily: 'General Sans, system-ui, sans-serif' }}
          >
            Build Your <span className="gradient-text-hero">Digital Authority</span>
          </h2>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto scroll-reveal"
            data-delay="180"
            style={{ color: 'hsl(40,6%,68%)', fontFamily: 'Geist Sans, Inter, sans-serif' }}
          >
            From Wikipedia to verification badges — every service you need to establish
            an unshakeable online presence.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <ServiceCard key={svc.name} svc={svc} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="text-center mt-10 text-sm scroll-reveal"
          data-delay="500"
          style={{ color: 'rgba(242,241,239,0.3)', fontFamily: 'Geist Sans, Inter, sans-serif' }}
        >
          All services use ethical, policy-compliant methods. Delivery time begins after brief received.
        </p>
      </div>
    </section>
  )
}
