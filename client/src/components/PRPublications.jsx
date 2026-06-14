import Card3D from './Card3D'

const tierPremium = [
  { name: 'Fashion Week Daily', price: '€700' },
  { name: 'Flaunt Magazine', price: '€1,000' },
  { name: 'Galore Magazine', price: '€1,200' },
  { name: 'LA Weekly', price: '€1,200' },
  { name: 'Haute Living', price: '€1,300' },
  { name: "L'Officiel Monaco", price: '€1,500' },
  { name: "L'Officiel Austria", price: '€1,500' },
  { name: "L'Officiel Cyprus", price: '€1,500' },
  { name: 'Elle Ukraine', price: '€1,500' },
  { name: "Harper's Bazaar Vietnam", price: '€1,500' },
  { name: 'Mashable NL', price: '€1,600' },
]

const tierElite = [
  { name: 'Life & Style', price: '€1,800' },
  { name: 'In Touch Weekly', price: '€1,800' },
  { name: 'OK Magazine', price: '€2,000' },
  { name: 'Marie Claire Netherlands', price: '€2,000' },
  { name: "Harper's Bazaar Australia", price: '€2,000' },
  { name: 'GQ South Africa', price: '€2,350' },
  { name: 'Glamour South Africa', price: '€2,350' },
  { name: 'Elle Canada', price: '€2,500' },
]

const tierUltra = [
  { name: 'Grazia Middle East', price: '€3,000' },
  { name: 'GQ Middle East', price: '€3,000' },
  { name: "Harper's Bazaar Arabia", price: '€3,000' },
  { name: 'Cosmopolitan Middle East', price: '€3,000' },
  { name: 'Vogue Ukraine', price: '€6,500' },
  { name: 'Variety', price: '€15,000' },
]

function TierHeader({ title, badge, badgeClass }) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-5">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeClass}`}>
        {badge}
      </span>
    </div>
  )
}

function PubCard({ pub, priceClass, tierClass, index = 0 }) {
  return (
    <Card3D index={index}>
      <div className={`pub-card ${tierClass} rounded-xl p-4 flex flex-col gap-1 h-full`}>
        <p className="text-white font-semibold text-sm leading-snug">{pub.name}</p>
        <p className={`font-bold text-base ${priceClass}`}>{pub.price}</p>
        <a
          href="#contact"
          className="text-purple-400 hover:text-purple-300 text-xs mt-1 transition-colors"
        >
          Inquire →
        </a>
      </div>
    </Card3D>
  )
}

export default function PRPublications() {
  return (
    <section id="publications" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="section-badge">Media Coverage</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center">
          Get Featured in the World's{' '}
          <span className="gradient-text">Top Publications</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-gray-400 text-center text-lg max-w-3xl mx-auto">
          From fashion magazines to global business outlets — we secure editorial features that
          build lasting trust with customers, investors &amp; partners.
        </p>

        {/* Tier: Premium */}
        <div className="mt-16">
          <TierHeader
            title="Premium Publications"
            badge="€700 – €1,600"
            badgeClass="bg-purple-500/20 text-purple-300 border border-purple-500/30"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tierPremium.map((pub, i) => (
              <PubCard
                key={pub.name}
                pub={pub}
                index={i}
                priceClass="gradient-text"
                tierClass="tier-premium"
              />
            ))}
          </div>
        </div>

        {/* Tier: Elite */}
        <div className="mt-10 mb-10">
          <TierHeader
            title="Elite Publications"
            badge="€1,800 – €2,500"
            badgeClass="bg-pink-500/20 text-pink-300 border border-pink-500/30"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tierElite.map((pub, i) => (
              <PubCard
                key={pub.name}
                pub={pub}
                index={i}
                priceClass="gradient-text"
                tierClass="tier-elite"
              />
            ))}
          </div>
        </div>

        {/* Tier: Ultra-Premium */}
        <div className="mt-10">
          <TierHeader
            title="Ultra-Premium Publications"
            badge="€3,000+"
            badgeClass="bg-amber-500/20 text-amber-300 border border-amber-500/30"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tierUltra.map((pub, i) => (
              <PubCard
                key={pub.name}
                pub={pub}
                index={i}
                priceClass="gradient-text-gold"
                tierClass="tier-ultra"
              />
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-12 text-center text-gray-500 text-sm">
          Prices are indicative. Final pricing depends on content type and requirements.
        </p>
      </div>
    </section>
  )
}
