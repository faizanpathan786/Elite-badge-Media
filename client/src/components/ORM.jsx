import React from 'react'

const platforms = [
  { icon: '🔍', name: 'Google / Bing / Yandex', desc: 'Suppression and removal of negative search results across all major search engines.' },
  { icon: '💬', name: 'Reddit', desc: 'Thread and post removal from Reddit using policy-compliant channels.' },
  { icon: '🎬', name: 'YouTube', desc: 'Policy-based video takedown service for harmful or false content.' },
  { icon: '⭐', name: 'Google My Business', desc: 'Legitimate review removal for false, fake or policy-violating GMB reviews.' },
]

export default function ORM() {
  return (
    <section id="orm" className="py-24 px-6" style={{ background: 'hsl(260, 87%, 3%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <span className="section-badge scroll-reveal">Reputation Management</span>
          <h2 className="text-4xl font-bold mt-4 scroll-reveal" data-delay="100" style={{ fontFamily: 'General Sans, system-ui, sans-serif' }}>
            Protect Your <span className="gradient-text-hero">Online Reputation</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed scroll-reveal" data-delay="180">
            We remove or suppress harmful content across all major platforms — ethically and confidentially.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="reveal-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Clean Your Search Results</h3>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Whether it's a negative news article, a fake review, a damaging Reddit post, or a misleading YouTube video — our ORM team handles it with discretion and proven techniques. We use only white-hat, policy-compliant methods.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'No black-hat or illegal methods',
                '100% confidential handling',
                'Proven suppression strategies',
                'Permanent removal where possible',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="text-emerald-400 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="btn-hero-secondary rounded-full px-7 py-3 text-sm font-semibold mt-8 w-full sm:w-auto">
              Get a Free Reputation Audit →
            </button>
          </div>

          {/* Right Column */}
          <div className="space-y-4 reveal-right" data-delay="150">
            {platforms.map((platform, i) => (
              <div key={i} className="glass-card rounded-xl p-5 flex gap-4 items-start scroll-reveal" data-delay={200 + i * 80}>
                <div className="w-10 h-10 bg-[#1A1A2E] rounded-lg flex items-center justify-center text-lg shrink-0">
                  {platform.icon}
                </div>
                <div>
                  <p className="font-semibold text-white">{platform.name}</p>
                  <p className="text-gray-400 text-sm mt-1">{platform.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center italic text-gray-600 text-sm mt-10">
          All ORM services use ethical, white-hat methods. We never use illegal or policy-violating techniques.
        </p>
      </div>
    </section>
  )
}
