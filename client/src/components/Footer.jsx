import React from 'react'

const services = [
  'Instagram Growth',
  'PR & Media',
  'SEO & Authority',
  'Reputation Management',
  'Digital Verification',
  'Social Media Solutions',
]

const quickLinks = [
  { label: 'Home',         href: '#'            },
  { label: 'About',        href: '#about'        },
  { label: 'Pricing',      href: '#instagram'    },
  { label: 'Publications', href: '#publications' },
  { label: 'FAQ',          href: '#faq'          },
  { label: 'Contact',      href: '#contact'      },
]

export default function Footer() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Adil! I'd like to schedule a free consultation.")
    window.open(`https://wa.me/+919763417024?text=${msg}`, '_blank')
  }

  return (
    <footer
      className="border-t border-white/5 py-10 px-4 md:py-16 md:px-6"
      style={{ background: 'hsl(260, 87%, 2%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* Col 1 — Brand */}
          <div className="scroll-reveal" data-delay="0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 gradient-bg rounded-lg flex items-center justify-center font-black text-white text-sm">
                AS
              </div>
              <span
                className="text-white text-lg"
                style={{ fontFamily: 'General Sans, system-ui, sans-serif', fontWeight: 700 }}
              >
                Adil Sayyed
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Results-focused PR, SEO, ORM &amp; Instagram growth for entrepreneurs,
              brands and public figures worldwide.
            </p>
            <div className="mt-6 flex gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center hover:opacity-80 transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="white"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/+919763417024"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-[#1A1A2E] flex items-center justify-center hover:opacity-80 transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-[#1A1A2E] flex items-center justify-center hover:opacity-80 transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div className="scroll-reveal" data-delay="100">
            <h4
              className="mb-4"
              style={{
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontSize: 13, letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'rgba(242,241,239,0.45)', fontWeight: 600,
              }}
            >
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {services.map((service, i) => (
                <li key={i}>
                  <a href="#services" className="text-gray-500 hover:text-gray-300 transition">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Quick Links */}
          <div className="scroll-reveal" data-delay="180">
            <h4
              className="mb-4"
              style={{
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontSize: 13, letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'rgba(242,241,239,0.45)', fontWeight: 600,
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-500 hover:text-gray-300 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="scroll-reveal" data-delay="260">
            <h4
              className="mb-4"
              style={{
                fontFamily: 'General Sans, system-ui, sans-serif',
                fontSize: 13, letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'rgba(242,241,239,0.45)', fontWeight: 600,
              }}
            >
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>📧 adilsayyad2025@gmail.com</p>
              <p>📧 contact@aadilsayyed.com</p>
              <p>💬 WhatsApp Available 24/7</p>
              <p>🌍 Serving Clients Worldwide</p>
            </div>
            <button
              onClick={handleWhatsApp}
              className="mt-5 text-sm font-semibold transition hover:opacity-75"
              style={{ color: '#8B5CF6' }}
            >
              Schedule a Free Consultation →
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 md:mt-12 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: 'rgba(242,241,239,0.3)' }}>
            © 2026 Adil Sayyed. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: 'rgba(242,241,239,0.3)' }}>
            Ethical Methods Only · Real Results · Worldwide Service
          </p>
        </div>
      </div>
    </footer>
  )
}
