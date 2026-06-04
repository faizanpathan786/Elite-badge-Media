import { useEffect } from 'react'

/* ── Per-platform service data ───────────────────────────────────── */
const details = {
  Instagram: {
    subtitle: 'Real organic growth for your Instagram profile',
    packages: [
      { name: 'Starter', price: '$200', likes: '1,000', popular: false },
      { name: 'Growth',  price: '$300', likes: '2,000', popular: false },
      { name: 'Pro',     price: '$400', likes: '3,000', popular: true  },
      { name: 'Elite',   price: '$500', likes: '4,000', popular: false },
      { name: 'Premium', price: '$600', likes: '5,000', popular: false },
    ],
    packageIncludes: ['10K Reel Views', '10K Reach', '10K Impressions', '10 Posts', 'Real & Organic', 'Refill Guarantee'],
    extras: [
      { name: 'Instagram Verification',  price: '$3,000', tat: '4–6 Weeks',  desc: 'Official blue tick via fully policy-compliant channels.' },
      { name: 'Account Restoration',     price: 'Inquiry', tat: '3–7 Days',   desc: 'Unban and fully restore suspended Instagram accounts.' },
      { name: 'Username Claims',         price: 'Inquiry', tat: '1–3 Weeks',  desc: 'Secure your exact brand handle on Instagram.' },
    ],
    benefits: ['100% Real & Organic', 'Refill Guarantee', '24/7 Support', 'No Password Needed', 'Safe & Secure', '100% Satisfaction'],
  },

  YouTube: {
    subtitle: 'Grow your channel & protect your reputation on YouTube',
    services: [
      { name: 'Watch Hours Growth',       price: 'Custom',  tat: 'Ongoing',    desc: 'Hit the 4,000-hour threshold for monetization eligibility.' },
      { name: 'Subscriber Growth',        price: 'Custom',  tat: 'Ongoing',    desc: 'Real subscribers who watch and engage with your content.' },
      { name: 'Video Views Boost',        price: 'Custom',  tat: '3–7 Days',   desc: 'Organic views that improve your YouTube search rankings.' },
      { name: 'Video Takedown (ORM)',     price: 'Inquiry', tat: '1–4 Weeks',  desc: 'Policy-based removal of harmful or defamatory videos.' },
      { name: 'Username Claims',          price: 'Inquiry', tat: '1–3 Weeks',  desc: 'Claim and secure your brand handle on YouTube.' },
    ],
    benefits: ['Algorithm-Friendly Growth', 'Real Engagement', 'Policy-Compliant', 'Confidential Handling', 'Monetization Support'],
  },

  TikTok: {
    subtitle: 'Reach the For You page and grow your TikTok presence',
    services: [
      { name: 'Video Views & Reach',      price: 'Custom',  tat: '1–3 Days',   desc: 'Real views that push your videos to the For You page.' },
      { name: 'Follower Growth',          price: 'Custom',  tat: 'Ongoing',    desc: 'Niche-targeted organic TikTok followers.' },
      { name: 'Reel Promotion',           price: 'Custom',  tat: '1–5 Days',   desc: 'Promote individual videos for maximum viral reach.' },
      { name: 'Likes & Engagement',       price: 'Custom',  tat: '1–3 Days',   desc: 'Real likes and comments from active TikTok users.' },
      { name: 'Username Claims',          price: 'Inquiry', tat: '1–3 Weeks',  desc: 'Secure your brand handle on TikTok before someone else does.' },
    ],
    benefits: ['For You Page Boost', 'Niche-Targeted Audience', 'Fast Delivery', 'Real Organic Users', 'Safe Methods'],
  },

  Spotify: {
    subtitle: 'Get verified and grow your monthly listeners on Spotify',
    services: [
      { name: 'Spotify Verification',    price: '$250',    tat: '5 Days',     desc: 'Official Spotify artist verification badge.' },
      { name: 'Monthly Listener Growth', price: 'Custom',  tat: 'Ongoing',    desc: 'Grow your monthly listener count with real listeners.' },
      { name: 'Stream Promotion',        price: 'Custom',  tat: '3–7 Days',   desc: 'Promote your tracks to real listeners across curated playlists.' },
      { name: 'Playlist Placement',      price: 'Custom',  tat: '1–2 Weeks',  desc: 'Placement in editorial and user-curated playlists.' },
    ],
    benefits: ['Official Verification', 'Real Listeners', 'Playlist Exposure', 'Chart Visibility', 'Algorithm Boost'],
  },

  'X (Twitter)': {
    subtitle: 'Build your audience and protect your brand on X',
    services: [
      { name: 'Follower Growth',          price: 'Custom',  tat: 'Ongoing',    desc: 'Real X followers who match your target audience.' },
      { name: 'Impression Boost',         price: 'Custom',  tat: '3–7 Days',   desc: 'Increase your tweet impressions and reach.' },
      { name: 'Likes & Retweets',         price: 'Custom',  tat: '1–3 Days',   desc: 'Real engagement from active X users.' },
      { name: 'Username Claims',          price: 'Inquiry', tat: '1–3 Weeks',  desc: 'Secure your brand handle on X (Twitter).' },
      { name: 'Content Removal (ORM)',    price: 'Inquiry', tat: '1–4 Weeks',  desc: 'Policy-based removal of defamatory or false tweets.' },
    ],
    benefits: ['Real Engagement', 'Audience Targeting', 'Brand Protection', 'Policy-Compliant', 'Confidential'],
  },

  LinkedIn: {
    subtitle: 'Professional growth, personal branding & B2B visibility',
    services: [
      { name: 'Connection Growth',        price: 'Custom',     tat: 'Ongoing',  desc: 'Grow your LinkedIn network with relevant professionals in your industry.' },
      { name: 'Post Impressions',         price: 'Custom',     tat: '1–5 Days', desc: 'Boost your content visibility in the LinkedIn algorithm.' },
      { name: 'Personal Branding VIP',   price: '$1,000/mo',  tat: 'Monthly',  desc: 'Full-service monthly personal brand management — LinkedIn & beyond.' },
      { name: 'Profile SEO Optimization',price: 'Custom',     tat: '1–3 Days', desc: 'Keyword-optimised profile that ranks higher in LinkedIn search.' },
      { name: 'Crunchbase Profile',       price: '$250',       tat: '5 Days',   desc: 'Professional Crunchbase listing for founders and entrepreneurs.' },
    ],
    benefits: ['Professional Audience', 'B2B Growth', 'Personal Branding', 'Measurable ROI', 'Algorithm Optimised'],
  },
}

/* ── Small helpers ───────────────────────────────────────────────── */
const whatsapp = (platform) => {
  const msg = encodeURIComponent(`Hi Aadil! I'm interested in your ${platform} services. Can you share more details?`)
  window.open(`https://wa.me/+919999999999?text=${msg}`, '_blank')
}

const email = () => {
  window.location.href = 'mailto:contact@aadilsayyed.com?subject=Service Inquiry'
}

function Badge({ children, gold }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '3px 10px', borderRadius: 100,
      fontSize: 11, fontWeight: 600,
      background: gold ? 'rgba(245,158,11,0.18)' : 'rgba(139,92,246,0.18)',
      border: `1px solid ${gold ? 'rgba(245,158,11,0.45)' : 'rgba(139,92,246,0.4)'}`,
      color: gold ? '#FCD34D' : '#C4B5FD',
    }}>
      {children}
    </span>
  )
}

function PackageCard({ pkg }) {
  return (
    <div style={{
      borderRadius: 14, padding: '16px 14px',
      background: pkg.popular
        ? 'linear-gradient(135deg,rgba(139,92,246,.22),rgba(236,72,153,.22))'
        : 'rgba(255,255,255,0.04)',
      border: `1px solid ${pkg.popular ? 'rgba(139,92,246,.55)' : 'rgba(255,255,255,0.08)'}`,
      position: 'relative', textAlign: 'center',
      boxShadow: pkg.popular ? '0 0 28px rgba(139,92,246,.25)' : 'none',
    }}>
      {pkg.popular && (
        <div style={{ position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%)',
          background: 'linear-gradient(90deg,#8B5CF6,#EC4899)', borderRadius: 100,
          padding: '2px 10px', fontSize: 10, fontWeight: 700, color: 'white', whiteSpace: 'nowrap',
        }}>⭐ Most Popular</div>
      )}
      <div style={{ fontSize: 12, color: '#9CA3AF', marginBottom: 4 }}>{pkg.name}</div>
      <div style={{
        fontSize: 22, fontWeight: 800, color: 'white',
      }}>{pkg.price}</div>
      <div style={{ fontSize: 11, color: '#8B5CF6', marginTop: 4, fontWeight: 600 }}>{pkg.likes} Likes</div>
      <button
        onClick={() => whatsapp('Instagram')}
        style={{
          marginTop: 12, width: '100%', padding: '7px 0', borderRadius: 8,
          background: pkg.popular ? 'linear-gradient(135deg,#8B5CF6,#EC4899)' : 'rgba(139,92,246,0.15)',
          border: pkg.popular ? 'none' : '1px solid rgba(139,92,246,0.35)',
          color: 'white', fontWeight: 600, fontSize: 12, cursor: 'pointer',
          transition: 'opacity 0.2s',
        }}
      >Get Started</button>
    </div>
  )
}

function ServiceRow({ svc }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12,
      padding: '14px 16px', borderRadius: 12,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.07)',
      marginBottom: 8, flexWrap: 'wrap',
    }}>
      <div style={{ flex: 1, minWidth: 180 }}>
        <div style={{ fontWeight: 600, color: 'white', fontSize: 14 }}>{svc.name}</div>
        <div style={{ color: '#6B7280', fontSize: 12, marginTop: 3 }}>{svc.desc}</div>
      </div>
      <div style={{ textAlign: 'right', flexShrink: 0 }}>
        <div style={{
          fontSize: 15, fontWeight: 700, color: 'white',
        }}>{svc.price}</div>
        <div style={{ fontSize: 11, color: '#6B7280', marginTop: 2 }}>⏱ {svc.tat}</div>
      </div>
    </div>
  )
}

/* ── Modal ───────────────────────────────────────────────────────── */
export default function ServiceModal({ platform, onClose }) {
  const d = details[platform.name]

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  if (!d) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.82)',
        backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        animation: 'modalFadeIn 0.2s ease-out',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#0D0D18',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 24,
          width: '100%', maxWidth: 740,
          maxHeight: '90vh',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
          animation: 'modalSlideUp 0.32s cubic-bezier(.34,1.56,.64,1)',
        }}
      >
        {/* ── Header ── */}
        <div style={{ background: platform.bg, position: 'relative', padding: '28px 28px 24px', flexShrink: 0 }}>
          {/* Vignette */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.45) 100%)', pointerEvents: 'none' }} />

          {/* TikTok dual glow */}
          {platform.dualGlow && <>
            <div style={{ position:'absolute', top:-20, left:-20, width:120, height:120, background: platform.dualGlow.l, borderRadius:'50%', filter:'blur(40px)', opacity:0.3 }} />
            <div style={{ position:'absolute', top:-20, right:-20, width:120, height:120, background: platform.dualGlow.r, borderRadius:'50%', filter:'blur(40px)', opacity:0.3 }} />
          </>}

          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 16, right: 16, zIndex: 10,
              width: 34, height: 34, borderRadius: '50%',
              background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.2)',
              color: 'white', cursor: 'pointer', fontSize: 16,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)', transition: 'background 0.2s',
            }}
          >✕</button>

          {/* Icon + title */}
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ flexShrink: 0 }}>{platform.iconLg}</div>
            <div>
              <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: 'white', fontFamily: 'Inter, sans-serif' }}>
                {platform.name}
              </h2>
              <p style={{ margin: '4px 0 0', fontSize: 14, color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
                {d.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* ── Scrollable body ── */}
        <div style={{ overflowY: 'auto', flex: 1, padding: '24px 28px 28px' }}>

          {/* Instagram: Package grid */}
          {d.packages && <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'white', fontFamily: 'Inter,sans-serif' }}>
                Growth Packages
              </h3>
              <Badge>10 Posts Each</Badge>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(118px, 1fr))', gap: 10, marginBottom: 12 }}>
              {d.packages.map(p => <PackageCard key={p.name} pkg={p} />)}
            </div>
            <div style={{ fontSize: 12, color: '#4B5563', marginBottom: 24, lineHeight: 1.5 }}>
              All packages include: {d.packageIncludes.join(' · ')}
            </div>
          </>}

          {/* Service rows */}
          {d.services && <>
            <h3 style={{ margin: '0 0 12px', fontSize: 16, fontWeight: 700, color: 'white', fontFamily: 'Inter,sans-serif' }}>
              Available Services
            </h3>
            {d.services.map(s => <ServiceRow key={s.name} svc={s} />)}
          </>}

          {/* Instagram extras */}
          {d.extras && <>
            <h3 style={{ margin: '24px 0 12px', fontSize: 16, fontWeight: 700, color: 'white', fontFamily: 'Inter,sans-serif' }}>
              Additional Services
            </h3>
            {d.extras.map(s => <ServiceRow key={s.name} svc={s} />)}
          </>}

          {/* Benefits */}
          <h3 style={{ margin: '24px 0 12px', fontSize: 16, fontWeight: 700, color: 'white', fontFamily: 'Inter,sans-serif' }}>
            Why Choose Us
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {d.benefits.map(b => (
              <span key={b} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)',
                borderRadius: 100, padding: '4px 12px',
                fontSize: 12, color: '#6EE7B7', fontWeight: 500,
              }}>
                ✓ {b}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              onClick={() => whatsapp(platform.name)}
              style={{
                flex: 1, minWidth: 160, padding: '13px 20px', borderRadius: 12,
                background: 'linear-gradient(135deg,#8B5CF6,#EC4899)',
                border: 'none', color: 'white', fontWeight: 700, fontSize: 14,
                cursor: 'pointer', fontFamily: 'Inter,sans-serif',
                boxShadow: '0 8px 24px rgba(139,92,246,0.35)',
                transition: 'opacity .2s, transform .2s',
              }}
              onMouseEnter={e => { e.target.style.opacity = '.88'; e.target.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.target.style.opacity = '1';    e.target.style.transform = 'translateY(0)' }}
            >
              💬 WhatsApp Now
            </button>
            <button
              onClick={email}
              style={{
                flex: 1, minWidth: 160, padding: '13px 20px', borderRadius: 12,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: 'white', fontWeight: 600, fontSize: 14,
                cursor: 'pointer', fontFamily: 'Inter,sans-serif',
                transition: 'background .2s',
              }}
              onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.05)'}
            >
              📧 Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
