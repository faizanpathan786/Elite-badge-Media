import React, { useState } from 'react'

const faqs = [
  { q: 'Are the Instagram likes and views real?', a: 'Yes, 100% real and organic. We tap into our network of 5M+ targeted real users. No bots, no fake accounts — ever.' },
  { q: 'How long does delivery take?', a: 'Instagram packages: 3–7 days for 10 posts. Publication features: 2–8 weeks depending on the outlet. Digital services: see TAT listed per service.' },
  { q: 'Is my account safe?', a: 'Absolutely. We never ask for your password. All methods are safe and comply with platform policies and terms of service.' },
  { q: 'Do you offer refunds?', a: 'Yes. If we fail to deliver the agreed service, you receive a full refund or a free redo. We stand behind our work.' },
  { q: 'What publications can I be featured in?', a: "We have partnerships with 50+ publications from fashion and lifestyle magazines to business outlets including Forbes, Entrepreneur, Vogue, GQ, Cosmopolitan, Harper's Bazaar and more." },
  { q: 'How does Online Reputation Management work?', a: 'We identify harmful content and use legitimate removal requests, content suppression, and positive content creation to clean your search results and protect your reputation.' },
  { q: 'Can you get me verified on Instagram?', a: 'Yes. Our Instagram verification service takes 4–6 weeks using official channels and policy-compliant methods. We have a strong track record.' },
  { q: 'Do you work with international clients?', a: 'Yes. We serve clients globally across all industries. Payments accepted in USD and EUR. Full confidentiality guaranteed.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Adil! I have a question about your services.")
    window.open(`https://wa.me/+919763417024?text=${msg}`, '_blank')
  }

  return (
    <section id="faq" className="py-16 px-4 md:py-24 md:px-6" style={{ background: 'hsl(260, 87%, 3%)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <span className="section-badge scroll-reveal">FAQ</span>
          <h2 className="text-center text-3xl md:text-4xl font-bold mt-4 text-white scroll-reveal" data-delay="100" style={{ fontFamily: 'General Sans, system-ui, sans-serif' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card rounded-xl overflow-hidden cursor-pointer scroll-reveal"
              data-delay={Math.min(i * 65, 400)}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between p-4 md:p-6">
                <span className="font-semibold text-white" style={{ fontFamily: 'Geist Sans, sans-serif' }}>{faq.q}</span>
                <span
                  className={`text-[#8B5CF6] text-xl font-light transition-transform duration-300 ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </div>
              {openIndex === i && (
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-[#8B5CF6]/30 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 scroll-reveal" data-delay="480">
          <button
            onClick={handleWhatsApp}
            className="font-semibold transition" style={{ color: '#a855f7' }}
          >
            Still have questions? →
          </button>
        </div>
      </div>
    </section>
  )
}
