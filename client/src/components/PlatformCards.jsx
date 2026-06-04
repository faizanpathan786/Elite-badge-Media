import { useRef, useCallback, useState } from 'react'
import ServiceModal from './ServiceModal'

/* â”€â”€ SVG platform logos â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const InstagramSVG = ({ size = 72 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="white" strokeWidth="1.7" />
    <circle cx="12" cy="12" r="4.4" stroke="white" strokeWidth="1.7" />
    <circle cx="17.5" cy="6.5" r="1.3" fill="white" />
  </svg>
)

const YouTubeSVG = ({ size = 80 }) => (
  <svg width={size} height={size * 0.72} viewBox="0 0 90 56" fill="white">
    <path d="M88.1 8.7C87 4.7 84 1.6 80 .5 73-1.3 45 0 45 0S17-1.3 10 .5C6 1.6 3 4.7 1.9 8.7 0 15.8 0 28 0 28s0 12.2 1.9 19.3C3 51.3 6 54.4 10 55.5 17 57.3 45 57 45 57s28 .3 35-.5c4-1.1 7-4.2 8.1-8.2C90 40.2 90 28 90 28s0-12.2-1.9-19.3zM36 41V15l24 13-24 13z"/>
  </svg>
)

const TikTokSVG = ({ size = 66 }) => (
  <svg width={size} height={size * 1.12} viewBox="0 0 512 512" fill="white">
    <path d="M412.19 118.66a109.27 109.27 0 01-9.45-5.5 132.87 132.87 0 01-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69 0 .52-.05 1-.08 1.56 0 .23 0 .47-.05.71v.18a70 70 0 01-35.22 55.56 68.8 68.8 0 01-34.11 9c-38.41 0-69.54-31.32-69.54-69.95s31.13-69.95 69.54-69.95a68.9 68.9 0 0121.41 3.39l.1-83.94a153.14 153.14 0 00-118 34.52 161.79 161.79 0 00-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 00115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34 7.66-.31 33.32 0 62.46-13.81 32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0027.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61z"/>
  </svg>
)

const SpotifySVG = ({ size = 72 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

const XSVG = ({ size = 70 }) => (
  <svg width={size} height={size * 0.94} viewBox="0 0 24 24" fill="white">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
)

const LinkedInSVG = ({ size = 70 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

/* â”€â”€ Floating particles â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const Heart = ({ left, delay, size = 18, color = '#FF4D67' }) => (
  <div style={{
    position: 'absolute', left, bottom: '38%',
    fontSize: size, color,
    animation: `floatHeart 3.2s ease-in-out ${delay} infinite`,
    pointerEvents: 'none', zIndex: 5,
    textShadow: `0 0 10px ${color}99`,
  }}>❤</div>
)

const MusicNote = ({ left, delay, size = 22 }) => (
  <div style={{
    position: 'absolute', left, bottom: '32%',
    fontSize: size, color: 'white',
    animation: `floatNote 3.5s ease-in-out ${delay} infinite`,
    pointerEvents: 'none', zIndex: 5,
    textShadow: '0 0 12px rgba(255,255,255,0.5)',
  }}>🎵</div>
)

const LikeIcon = ({ left, delay }) => (
  <div style={{
    position: 'absolute', left, bottom: '35%',
    fontSize: 16, color: '#1d9bf0',
    animation: `floatLike 3s ease-in-out ${delay} infinite`,
    pointerEvents: 'none', zIndex: 5,
  }}>👍</div>
)

const Equalizer = () => (
  <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 44 }}>
    {[0, 0.15, 0.3, 0.08, 0.22, 0.38, 0.12, 0.28, 0.05, 0.18].map((d, i) => (
      <div key={i} style={{
        width: 5, height: 44,
        background: `rgba(29,185,84,${0.6 + i * 0.04})`,
        borderRadius: 3, transformOrigin: 'bottom',
        animation: `eqBar ${0.75 + d}s ease-in-out ${d}s infinite`,
      }} />
    ))}
  </div>
)

const ViewPill = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, animation: 'statPop 0.6s ease-out forwards' }}>
    <div style={{
      background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: 20, padding: '4px 12px', fontSize: 12, color: 'white',
      backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', gap: 6,
    }}>
      <span style={{fontSize:14}}>👁️</span> <span>12.4K views</span>
    </div>
    <div style={{ width: 90, height: 3, background: 'rgba(255,255,255,0.15)', borderRadius: 2, overflow: 'hidden' }}>
      <div style={{ height: '100%', background: '#FF0000', borderRadius: 2, animation: 'progressFill 4s ease-in-out infinite' }} />
    </div>
  </div>
)

const ConnectionPing = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
    <div style={{
      background: 'rgba(10,102,194,0.3)', border: '1px solid rgba(10,102,194,0.6)',
      borderRadius: 20, padding: '4px 14px', fontSize: 12, color: 'white',
      backdropFilter: 'blur(8px)', animation: 'connectionPing 2s ease-in-out infinite',
    }}>
      +1 New Connection
    </div>
    <div style={{ display: 'flex', gap: 5, marginTop: 2 }}>
      {[0, 0.3, 0.6].map(d => (
        <div key={d} style={{
          width: 24, height: 24, borderRadius: '50%',
          background: `hsl(${210 + d * 40}, 60%, ${40 + d * 15}%)`,
          border: '2px solid rgba(255,255,255,0.2)',
          animation: `statPop 0.4s ease-out ${d}s forwards`,
          opacity: 0,
        }} />
      ))}
    </div>
  </div>
)

/* â”€â”€ Platform data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const platforms = [
  {
    name: 'Instagram',
    tagline: 'Turn access into momentum.',
    bg: 'linear-gradient(135deg, #405DE6 0%, #5851DB 18%, #833AB4 36%, #C13584 54%, #E1306C 72%, #FD1D1D 88%, #F77737 100%)',
    icon: <InstagramSVG size={72} />,
    iconLg: <InstagramSVG size={56} />,
    statL: '1.2K likes', statR: '98K reach',
    floating: 'hearts',
    glow: 'rgba(193,53,132,0.5)',
  },
  {
    name: 'YouTube',
    tagline: 'Watch-hours unlock the algorithm.',
    bg: 'linear-gradient(135deg, #1a0000 0%, #7a0000 45%, #FF0000 100%)',
    icon: <YouTubeSVG size={80} />,
    iconLg: <YouTubeSVG size={64} />,
    statL: '12.4K views', statR: '4K watch hrs',
    floating: 'views',
    glow: 'rgba(255,0,0,0.4)',
  },
  {
    name: 'TikTok',
    tagline: 'Give your next post room to bloom.',
    bg: 'linear-gradient(135deg, #010101 0%, #06002a 60%, #0d0d24 100%)',
    icon: <TikTokSVG size={66} />,
    iconLg: <TikTokSVG size={52} />,
    statL: '+298 reach', statR: '1.4K views',
    floating: 'notes',
    glow: 'rgba(105,201,208,0.4)',
    dualGlow: { l: '#69C9D0', r: '#EE1D52' },
  },
  {
    name: 'Spotify',
    tagline: 'Streams unlock the algorithm.',
    bg: 'linear-gradient(135deg, #000000 0%, #0a3318 45%, #1DB954 100%)',
    icon: <SpotifySVG size={72} />,
    iconLg: <SpotifySVG size={56} />,
    statL: '+43K monthly', statR: '↑ Trending',
    floating: 'eq',
    glow: 'rgba(29,185,84,0.4)',
  },
  {
    name: 'X (Twitter)',
    tagline: 'Impressions that convert to followers.',
    bg: 'linear-gradient(135deg, #000000 0%, #111827 100%)',
    icon: <XSVG size={70} />,
    iconLg: <XSVG size={54} />,
    statL: '14.1K impressions', statR: '2.1K reach',
    floating: 'x',
    glow: 'rgba(255,255,255,0.15)',
  },
  {
    name: 'LinkedIn',
    tagline: 'Professional reach that opens doors.',
    bg: 'linear-gradient(135deg, #001a38 0%, #004182 55%, #0A66C2 100%)',
    icon: <LinkedInSVG size={70} />,
    iconLg: <LinkedInSVG size={54} />,
    statL: '3.2K connects', statR: '89K views',
    floating: 'linkedin',
    glow: 'rgba(10,102,194,0.5)',
  },
]

/* â”€â”€ Single card â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function PlatformCard({ p, onClick, delay = 0 }) {
  const ref = useRef(null)

  const onMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    const rx = ((y - r.height / 2) / r.height) * -16
    const ry = ((x - r.width  / 2) / r.width ) *  16
    el.style.transition = 'transform 0.06s ease'
    el.style.transform  = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(18px) scale(1.025)`
  }, [])

  const onLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.55s cubic-bezier(.23,1,.32,1)'
    el.style.transform  = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)'
  }, [])

  const Floating = () => {
    switch (p.floating) {
      case 'hearts':
        return <>
          <Heart left="14%"  delay="0s"    size={18} color="#FF4D67" />
          <Heart left="36%"  delay="0.85s" size={24} color="#FF6B6B" />
          <Heart left="57%"  delay="1.7s"  size={16} color="#FF4D67" />
          <Heart left="76%"  delay="2.55s" size={20} color="#FF3366" />
          <Heart left="26%"  delay="3.3s"  size={14} color="#FF6B6B" />
        </>
      case 'notes':
        return <>
          <MusicNote left="12%" delay="0s"    size={22} />
          <MusicNote left="38%" delay="1.1s"  size={28} />
          <MusicNote left="62%" delay="2.2s"  size={18} />
          <MusicNote left="80%" delay="0.55s" size={24} />
        </>
      case 'eq':
        return (
          <div style={{ position: 'absolute', bottom: 58, left: '50%', transform: 'translateX(-50%)' }}>
            <Equalizer />
          </div>
        )
      case 'views':
        return (
          <div style={{ position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)' }}>
            <ViewPill />
          </div>
        )
      case 'x':
        return <>
          <LikeIcon left="18%" delay="0s"   />
          <LikeIcon left="54%" delay="1.4s" />
          <Heart    left="72%" delay="2.1s" size={14} color="white" />
        </>
      case 'linkedin':
        return (
          <div style={{ position: 'absolute', bottom: 58, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>
            <ConnectionPing />
          </div>
        )
      default: return null
    }
  }

  return (
    <div
      ref={ref}
      className="scroll-reveal"
      data-delay={delay}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{
        background: p.bg,
        borderRadius: 22,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: '0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.1)',
        minHeight: 200,
        display: 'flex',
        flexDirection: 'column',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {/* TikTok dual-colour ambient glow */}
      {p.dualGlow && <>
        <div style={{ position:'absolute', top:-30, left:-30, width:150, height:150, background: p.dualGlow.l, borderRadius:'50%', filter:'blur(50px)', opacity:0.35, animation:'tikDualSpin 4s ease-in-out infinite' }} />
        <div style={{ position:'absolute', top:-30, right:-30, width:150, height:150, background: p.dualGlow.r, borderRadius:'50%', filter:'blur(50px)', opacity:0.35, animation:'tikDualSpin 4s ease-in-out 2s infinite' }} />
      </>}

      {/* Generic bottom-centre ambient glow */}
      <div style={{ position:'absolute', bottom:-40, left:'50%', transform:'translateX(-50%)', width:200, height:100, background: p.glow, borderRadius:'50%', filter:'blur(55px)', opacity:0.6, pointerEvents:'none' }} />

      {/* Radial vignette */}
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)', borderRadius:22, pointerEvents:'none', zIndex:1 }} />

      {/* Noise grain texture */}
      <div style={{ position:'absolute', inset:0, opacity:0.04, borderRadius:22, pointerEvents:'none', zIndex:2,
        backgroundImage:'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
      }} />

      {/* "Click to view services" hint badge */}
      <div style={{
        position:'absolute', top:14, left:'50%', transform:'translateX(-50%)', zIndex:20,
        background:'rgba(0,0,0,0.38)', border:'1px solid rgba(255,255,255,0.14)',
        backdropFilter:'blur(12px)', borderRadius:12, padding:'3px 10px',
        fontSize:10, color:'rgba(255,255,255,0.6)', fontWeight:500, whiteSpace:'nowrap',
        fontFamily:'Inter,sans-serif',
      }}>
        Tap to view services
      </div>

      {/* Top-left stat pill */}
      <div style={{ position:'absolute', top:40, left:14, zIndex:20,
        background:'rgba(0,0,0,0.38)', border:'1px solid rgba(255,255,255,0.16)',
        backdropFilter:'blur(12px)', borderRadius:12, padding:'4px 11px',
        fontSize:11, color:'rgba(255,255,255,0.92)', fontWeight:600,
        fontFamily:'Inter,sans-serif', letterSpacing:'0.01em',
      }}>
        {p.statL}
      </div>

      {/* Top-right stat pill */}
      <div style={{ position:'absolute', top:40, right:14, zIndex:20,
        background:'rgba(0,0,0,0.38)', border:'1px solid rgba(255,255,255,0.16)',
        backdropFilter:'blur(12px)', borderRadius:12, padding:'4px 11px',
        fontSize:11, color:'rgba(255,255,255,0.92)', fontWeight:600,
        fontFamily:'Inter,sans-serif', letterSpacing:'0.01em',
      }}>
        {p.statR}
      </div>

      {/* Logo â€” centred, glowing */}
      <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center',
        position:'relative', zIndex:10, paddingTop:36, paddingBottom:20,
        animation:'logoGlow 3s ease-in-out infinite',
      }}>
        {p.icon}
      </div>

      {/* Floating elements layer */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:15 }}>
        <Floating />
      </div>

      {/* Bottom name + tagline + arrow */}
      <div style={{ position:'relative', zIndex:20, padding:'0 18px 18px' }}>
        <div style={{ height:1, background:'rgba(255,255,255,0.08)', marginBottom:14 }} />
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:8 }}>
          <div>
            <div style={{ fontWeight:700, fontSize:17, color:'white', lineHeight:1.2, fontFamily:'Inter,sans-serif' }}>{p.name}</div>
            <div style={{ fontSize:12, color:'rgba(255,255,255,0.6)', marginTop:3, fontFamily:'Inter,sans-serif' }}>{p.tagline}</div>
          </div>
          <div style={{ width:34, height:34, flexShrink:0,
            background:'rgba(255,255,255,0.15)', border:'1px solid rgba(255,255,255,0.22)',
            borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
            backdropFilter:'blur(8px)', color:'white', fontSize:16,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

/* â”€â”€ Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export default function PlatformCards() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="platforms" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-badge mx-auto w-fit mb-5">Platforms We Grow</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold scroll-reveal" data-delay="100" style={{ fontFamily: 'General Sans, system-ui, sans-serif' }}>
            Real Growth Across Every{' '}
            <span className="gradient-text-hero">Major Platform</span>
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto px-4 text-center" style={{ color: 'hsl(40,6%,72%)' }}>
            Click any card to explore services, packages and pricing for that platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((p, i) => (
            <PlatformCard
              key={p.name}
              p={p}
              onClick={() => setSelected(p)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ServiceModal
          platform={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}




