import { useEffect, useRef, useState, useMemo } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { industries, type ServiceCard } from '../data/industries'

gsap.registerPlugin(ScrollTrigger)

const tech = industries.find((i) => i.index === '01')
const cards: ServiceCard[] = tech?.pricingCards ?? []

export default function Industries() {
  const categories = useMemo(
    () => {
      const seen = new Set<string>()
      const list: string[] = []
      for (const c of cards) {
        if (c.category && !seen.has(c.category)) {
          seen.add(c.category)
          list.push(c.category)
        }
      }
      return list
    },
    [cards],
  )

  const sectionRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const reduced = useReducedMotion()

  const filtered = cards.filter((c) => activeCategory === 'All' || c.category === activeCategory)

  const categoryIcon = (category: string): string => {
    const icons: Record<string, string> = {
      Websites: '🌐',
      'Point-of-Sale': '💳',
      'E-Commerce': '🛒',
      Portfolios: '📸',
      'Digital Invitations': '💌',
      'Mobile Apps (iOS)': '📱',
    }
    return icons[category] || '✦'
  }

  useEffect(() => {
    const section = sectionRef.current
    if (!section || reduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cf-industries__heading',
        { yPercent: 60, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.cf-industries__heading', start: 'top 85%', once: true },
        },
      )

      gsap.fromTo(
        '.cf-industry-row',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: '.cf-industries__rows', start: 'top 80%', once: true },
        },
      )

      gsap.fromTo(
        '.cf-industry-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: '.cf-industries__grid', start: 'top 80%', once: true },
        },
      )
    }, section)

    return () => ctx.revert()
  }, [reduced, filtered.length])

  return (
    <section ref={sectionRef} id="industries" className="cf-industries">
      <div className="cf-industries__inner">

        <header className="cf-industries__header">
          <div className="cf-industries__heading-wrap">
            <h2 className="cf-industries__heading">
              07<br />
              <em className="cf-serif">Industries.</em>
            </h2>
          </div>
          <div className="cf-industries__header-aside">
            <p className="cf-industries__sub">
              CeylonForce operates across seven distinct industry verticals, delivering tailored digital systems for each.
            </p>
          </div>
        </header>

        {/* Technology — live with pricing cards */}
        {tech && (
          <>
            <div className="cf-industry-row">
              <div className="cf-industry-row__meta">
                <span className="cf-industry-row__index">{tech.index}</span>
                <span className="cf-industry-row__name">{tech.name}</span>
                <p className="cf-industry-row__desc">{tech.description}</p>
              </div>

              <div className="cf-industry-row__caps">
                {tech.capabilities.map((cap) => (
                  <span key={cap} className="cf-industry-row__cap">
                    {cap}
                  </span>
                ))}
              </div>

              {/* Category filter pills */}
              <div className="cf-industries__filters">
                {[ 'All', ...categories ].map((cat) => (
                  <button
                    key={cat}
                    className={`cf-industries__filter ${activeCategory === cat ? 'is-active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Pricing cards grid */}
              <ul className="cf-industries__grid" role="list">
                {filtered.map((card) => (
                  <li key={`${card.category ?? 'default'}-${card.title}`} className="cf-industry-card">
                    <div className="cf-industry-card__inner">
                      <div className="cf-industry-card__badge">{card.badge}</div>
                      <div className="cf-industry-card__price">
                        <span className="cf-industry-card__price-main">{card.price}</span>
                      </div>
                      <h3 className="cf-industry-card__title">{card.title}</h3>
                      {card.category && (
                        <span className="cf-industry-card__category">{card.category}</span>
                      )}
                      <div className="cf-industry-card__image-wrap">
                        {card.image ? (
                          <img
                            src={card.image}
                            alt={`${card.title} preview`}
                            className="cf-industry-card__image"
                            loading="lazy"
                          />
                        ) : (
                          <div className={`cf-industry-card__placeholder cf-industry-card__placeholder--${(card.category ?? 'default').toLowerCase().replace(/\s+/g, '-')}`}>
                            <span className="cf-industry-card__placeholder-icon">
                              {categoryIcon(card.category ?? 'default')}
                            </span>
                          </div>
                        )}
                      </div>
                      <ul className="cf-industry-card__features" role="list">
                        {card.features.map((f, i) => (
                          <li key={i} className="cf-industry-card__feature">
                            <span aria-hidden="true">›</span> {f}
                          </li>
                        ))}
                      </ul>
                      <a href="#contact" className="cf-industry-card__cta">
                        Get Quote
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <a href="#contact" className="cf-industry-row__cta">
              START A PROJECT →
            </a>
          </>
        )}

        {/* Coming Soon — upcoming verticals */}
        <div className="cf-coming-soon">
          <h3 className="cf-coming-soon__heading">
            Coming Soon
            <span className="cf-coming-soon__badge">06 Verticals</span>
          </h3>
          <p className="cf-coming-soon__sub">
            New industry platforms launching shortly. Join the waitlist to be first in line.
          </p>

          <ul className="cf-coming-soon__grid" role="list">
            {industries
              .filter((ind) => ind.index !== '01')
              .map((ind) => (
                <li key={ind.index} className="cf-coming-soon__card">
                  <div className="cf-coming-soon__card-inner">
                    <div className="cf-coming-soon__badge">
                      {ind.index}. COMING SOON
                    </div>
                    <h3 className="cf-coming-soon__card-title" style={{ color: ind.accent }}>
                      {ind.name}
                    </h3>
                    <p className="cf-coming-soon__card-desc">{ind.description}</p>
                    <div className="cf-coming-soon__caps">
                      {ind.capabilities.map((cap) => (
                        <span key={cap} className="cf-coming-soon__cap">{cap}</span>
                      ))}
                    </div>
                    <a href="#contact" className="cf-coming-soon__cta">
                      Notify Me →
                    </a>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <div className="cf-industries__cta-wrap">
          <a href="#contact" className="cf-industries__cta">
            START A PROJECT →
          </a>
        </div>

      </div>
    </section>
  )
}
