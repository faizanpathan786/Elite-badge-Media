import { useEffect } from 'react'
import Hero from './components/Hero'
import PlatformCards from './components/PlatformCards'
import Services from './components/Services'
import InstagramPackages from './components/InstagramPackages'
import DigitalIdentity from './components/DigitalIdentity'
import ORM from './components/ORM'
import CTA from './components/CTA'
import WhyUs from './components/WhyUs'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const selector = '.scroll-reveal, .reveal-left, .reveal-right, .reveal-scale'
    const elements = document.querySelectorAll(selector)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay || '0', 10)
            setTimeout(() => entry.target.classList.add('visible'), delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ background: 'hsl(260, 87%, 3%)', minHeight: '100vh', color: 'hsl(40, 6%, 95%)' }}>
      <Hero />
      <div className="section-divider" />
      <PlatformCards />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <InstagramPackages />
      <div className="section-divider" />
      <DigitalIdentity />
      <div className="section-divider" />
      <ORM />
      <div className="section-divider" />
      <WhyUs />
      <div className="section-divider" />

      <CTA />
      <div className="section-divider" />
      <FAQ />
      <Footer />
    </div>
  )
}
