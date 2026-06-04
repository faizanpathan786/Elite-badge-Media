console.log('%c🚀 Aadil Sayyed - Digital Growth Expert', 'color: #8B5CF6; font-size: 14px; font-weight: bold;')

document.addEventListener('DOMContentLoaded', () => {

  // ─────────────────────────────────────────────
  // 1. Navbar scroll effect
  // ─────────────────────────────────────────────
  const navbar = document.getElementById('navbar')
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(11,11,15,0.95)'
        navbar.style.borderBottomColor = 'rgba(255,255,255,0.1)'
      } else {
        navbar.style.background = 'rgba(11,11,15,0.85)'
        navbar.style.borderBottomColor = 'rgba(255,255,255,0.06)'
      }
    })
  }

  // ─────────────────────────────────────────────
  // 2. Mobile menu toggle
  // ─────────────────────────────────────────────
  const menuBtn = document.getElementById('mobile-menu-btn')
  const mobileMenu = document.getElementById('mobile-menu')

  if (menuBtn && mobileMenu) {
    // SVG paths for hamburger and close (X) icons
    const hamburgerPath = `
      <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    `
    const closePath = `
      <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    `

    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open')
      const icon = menuBtn.querySelector('svg')
      if (icon) {
        icon.innerHTML = isOpen ? closePath : hamburgerPath
      }
    })

    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open')
        const icon = menuBtn.querySelector('svg')
        if (icon) icon.innerHTML = hamburgerPath
      })
    })
  }

  // ─────────────────────────────────────────────
  // 3. FAQ Accordion
  // ─────────────────────────────────────────────
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question')
    const answer = item.querySelector('.faq-answer')
    const icon = item.querySelector('.faq-icon')

    if (question && answer && icon) {
      question.addEventListener('click', () => {
        const isOpen = answer.classList.contains('open')

        // Close all open items
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'))
        document.querySelectorAll('.faq-icon').forEach(i => {
          i.textContent = '+'
          i.style.transform = 'rotate(0deg)'
        })

        // Open the clicked item if it was not already open
        if (!isOpen) {
          answer.classList.add('open')
          icon.textContent = '−'
          icon.style.transform = 'rotate(180deg)'
        }
      })
    }
  })

  // ─────────────────────────────────────────────
  // 4. Scroll Reveal animation
  // ─────────────────────────────────────────────
  const revealElements = document.querySelectorAll('.scroll-reveal')

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible')
          }, index * 80) // stagger by 80ms
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    revealElements.forEach(el => revealObserver.observe(el))
  }

  // ─────────────────────────────────────────────
  // 5. Animated number counter
  // ─────────────────────────────────────────────
  function animateCounter(el, target, duration = 2000, suffix = '') {
    const step = target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      el.textContent = Math.floor(current).toLocaleString() + suffix
    }, 16)
  }

  const statsSection = document.getElementById('stats-section')
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('[data-count]').forEach(el => {
            const target = parseInt(el.dataset.count)
            const suffix = el.dataset.suffix || ''
            animateCounter(el, target, 2000, suffix)
          })
          statsObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.3 })

    statsObserver.observe(statsSection)
  }

  // ─────────────────────────────────────────────
  // 6. Smooth scroll for all anchor links
  // ─────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href')
      if (href === '#') return
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        const offset = 80 // navbar height
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset
        window.scrollTo({ top, behavior: 'smooth' })
      }
    })
  })

  // ─────────────────────────────────────────────
  // 7. Active nav link highlight on scroll
  // ─────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll('.nav-link')

  if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', () => {
      let current = ''
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute('id')
        }
      })
      navLinks.forEach(link => {
        link.classList.remove('text-white')
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('text-white')
        }
      })
    })
  }

  // ─────────────────────────────────────────────
  // 8. WhatsApp button functionality
  // ─────────────────────────────────────────────
  const waBtn = document.getElementById('whatsapp-btn')
  if (waBtn) {
    waBtn.addEventListener('click', () => {
      const message = encodeURIComponent("Hi Aadil! I'm interested in your social media marketing services. Can you tell me more?")
      window.open(`https://wa.me/+919999999999?text=${message}`, '_blank')
    })
  }

  // ─────────────────────────────────────────────
  // 9. Floating blob animation randomizer
  // ─────────────────────────────────────────────
  document.querySelectorAll('.hero-blob').forEach((blob, i) => {
    blob.style.animationDelay = `${i * 2}s`
    blob.style.animationDuration = `${8 + i * 2}s`
  })

  // ─────────────────────────────────────────────
  // 10. Card hover effects (touch support)
  // ─────────────────────────────────────────────
  document.querySelectorAll('.glass-card, .popular-card').forEach(card => {
    card.addEventListener('touchstart', () => card.classList.add('hovered'), { passive: true })
    card.addEventListener('touchend', () => card.classList.remove('hovered'), { passive: true })
  })

})
