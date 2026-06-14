import React from 'react'
import Card3D from './Card3D'

const services = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
    color: 'text-[#8B5CF6]',
    bg: 'bg-[#8B5CF6]/10',
    title: 'Instagram Growth',
    desc: 'Real, organic likes, reel views, reach & impressions across 10 posts. Zero bots, zero risk — just authentic engagement.',
    link: '#instagram',
    linkLabel: 'View Packages →',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-5M8 10h.01M8 14h.01M12 10h4M12 14h4" />
      </svg>
    ),
    color: 'text-[#3B82F6]',
    bg: 'bg-[#3B82F6]/10',
    title: 'PR & Media Coverage',
    desc: 'Get featured in Forbes, Entrepreneur, Vogue, GQ, Cosmopolitan and 50+ top publications. Build lasting credibility.',
    link: '#publications',
    linkLabel: 'View Publications →',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    title: 'SEO & Online Authority',
    desc: 'Rank higher on Google, build brand visibility, create Google Knowledge Panels & Wikipedia pages strategically.',
    link: '#digital',
    linkLabel: 'Learn More →',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    title: 'Reputation Management',
    desc: 'Remove or suppress negative content from Google, Bing, Reddit, YouTube & Google My Business — ethically.',
    link: '#orm',
    linkLabel: 'Learn More →',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    color: 'text-[#EC4899]',
    bg: 'bg-[#EC4899]/10',
    title: 'Social Media Solutions',
    desc: 'Instagram account restoration, username claims for Instagram, YouTube & TikTok, and cross-platform brand protection.',
    link: '#services',
    linkLabel: 'Learn More →',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'text-[#F59E0B]',
    bg: 'bg-[#F59E0B]/10',
    title: 'Digital Verification',
    desc: 'Wikipedia pages, Google Knowledge Panel, Instagram & Facebook blue ticks, IMDB, Spotify, Crunchbase & more.',
    link: '#digital',
    linkLabel: 'View Services →',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6" style={{ background: 'hsl(260, 87%, 3%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-badge mx-auto w-fit mb-5 scroll-reveal">Our Services</div>
          <h2 className="text-4xl md:text-5xl font-bold scroll-reveal" data-delay="100" style={{ fontFamily: 'General Sans, system-ui, sans-serif' }}>
            Everything You Need to{' '}
            <span className="gradient-text-hero">Dominate Online</span>
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-center px-4 scroll-reveal" data-delay="180" style={{ color: 'hsl(40,6%,72%)' }}>
            One partner for PR, SEO, Instagram growth, and reputation control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Card3D key={s.title} index={i}>
              <div className="glass-card rounded-2xl p-5 md:p-8 h-full flex flex-col">
                <div className={`w-14 h-14 ${s.bg} rounded-xl flex items-center justify-center ${s.color} mb-5`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{s.desc}</p>
                <a href={s.link} className="inline-flex items-center gap-1 mt-5 text-sm font-semibold transition-colors" style={{ color: '#a855f7' }} onMouseEnter={e => e.currentTarget.style.color='#fcd34d'} onMouseLeave={e => e.currentTarget.style.color='#a855f7'}>
                  {s.linkLabel}
                </a>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  )
}
