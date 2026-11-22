export type ServiceCard = {
  title: string
  price: string
  fromPrice?: string
  features: string[]
  badge?: string
  category?: string
  image?: string
}

export type Industry = {
  index: string
  name: string
  shortName: string
  href: string
  description: string
  capabilities: string[]
  accent: string
  details?: string
  pricingCards?: ServiceCard[]
}

export const industries: Industry[] = [
  {
    index: '01',
    name: 'TECHNOLOGY',
    shortName: 'TECH',
    href: '#industries',
    description: 'Digital products, platforms and systems built to scale.',
    capabilities: [
      'Custom Web Development',
      'Point-of-Sale Systems',
      'E-Commerce Solutions',
      'Portfolio Websites',
      'Mobile Application Development',
      'Digital Event Invitations',
    ],
    accent: '#D4D4D4',
    details: `Service Pricing Guide
Websites, POS Systems, E-Commerce, Portfolios & Mobile Apps. All amounts in LKR.

Websites
Package | Cost (LKR) | Price (LKR) | Profit (LKR) | Details
Standard (10 pages) | 6,000 | 25,900 | 19,900 | Basic UI (standard quality)
No advanced animations
Desktop & mobile responsive
Premium | 6,000 | 50,900 | 44,900 | Advanced attractive UI
Advanced animations & scroll animations
Desktop & mobile responsive (all)
Built using latest trends
Cloud-based POS
Package | Cost (LKR) | Price (LKR) | Profit (LKR) | Details
Standard | 6,000 | 44,900 | 38,900 | Basic UI (standard quality)
Database for 5 years
Desktop responsive only
Premium | 6,000 | 74,900 | 68,900 | Advanced UI (user friendly)
Desktop & mobile responsive (all)
Smart shortcuts for smart & easy use
Software-based POS (Local only)
Package | Cost (LKR) | Price (LKR) | Profit (LKR) | Details
Standard | 4,000 | 24,900 | 20,900 | Basic UI (standard quality)
No smart shortcut keys
Premium | 4,000 | 35,900 | 31,900 | Advanced UI (user friendly)
Smart shortcuts for smart & easy use

E-Commerce Websites
Package | Cost (LKR) | Price (LKR) | Profit (LKR) | Details
Tier 1 | 6,000 | 55,900 | 49,900 | Only for 100 products
Tier 2 | 6,000 | 85,900 | 79,900 | Only for 500 products
Tier 3 | 6,000 | 164,900 | 158,900 | Only for 1000 products
Tier 4 | 8,000 | 195,900 | 187,900 | 1000+ products
Note: Customer should pay 3,900 LKR per month for the payment gateway.

Portfolios
Package | Cost (LKR) | Price (LKR) | Profit (LKR) | Details
Standard (10 pages) | 4,000 | 35,900 | 31,900 | Modern UI
Scroll animations
GSAP
Hover and before effects
Premium (10+ pages) | 4,000 | 44,900 | 40,900 | Advanced UI
Scroll animations
Holography animations
WebGL
Animated Digital (Web) Wedding Invitation
Package | What's included | Price (LKR)
Basic | Template design, text fields, map, RSVP to WhatsApp or email, English only | 5,000 – 8,000
Standard | Animated opening, schedule, dress code, RSVP to Google Sheet, music, 1 language | 12,000 – 20,000
Premium | Custom animation like the video, 2-3 languages, personalised guest links, RSVP dashboard, 2 revisions | 28,000 – 50,000+
Add-ons
Add-on | Price
Extra language | LKR 2,000 – 3,500
Extra revision round | LKR 1,500 – 2,500
Personalised guest links (per 100 guests) | LKR 3,000
Printed QR code card design | LKR 1,500 – 2,500
Rush delivery (under 3 days) | +25% to +50%
Link kept live for 1 year after the wedding | Free, then LKR 1,000 – 2,000 per year
Break-even example
If you spend LKR 150,000 on a template and earn about LKR 12,000 per sale after costs, you break even after roughly 13 sales.

Mobile Apps
iOS Mobile Apps (Swift)
App Type | Cost (LKR) | Price (LKR) | Profit (LKR)
Games without backend | 6,000 | 175,900 | 169,900
Booking & Reservation | 6,000 | 290,000 | 284,000
Virtual fit-on / try-on | 6,000 | 670,000 | 664,000
Company management system | 6,000 | 900,000 | 894,000
Android Mobile Apps
Tier | Technology | Cost (LKR) | Price (LKR) | Profit (LKR)
Basic | Java | TBD | TBD | TBD
Standard | Kotlin / React Native | TBD | TBD | TBD
Premium | Flutter (Dart) / React Native / any framework | TBD | TBD | TBD`,
    pricingCards: [
      {
        category: 'Websites',
        title: 'Standard Website (10 Pages)',
        price: '25,900',
        badge: 'LKR',
        features: ['Basic UI (standard quality)', 'No advanced animations', 'Desktop & mobile responsive'],
      },
      {
        category: 'Websites',
        title: 'Premium Website',
        price: '50,900',
        badge: 'LKR',
        features: ['Advanced attractive UI', 'Advanced animations & scroll animations', 'Desktop & mobile responsive (all)', 'Built using latest trends'],
      },
      {
        category: 'Point-of-Sale',
        title: 'Cloud-based POS — Standard',
        price: '44,900',
        badge: 'LKR',
        features: ['Basic UI (standard quality)', 'Database for 5 years', 'Desktop responsive only'],
      },
      {
        category: 'Point-of-Sale',
        title: 'Cloud-based POS — Premium',
        price: '74,900',
        badge: 'LKR',
        features: ['Advanced UI (user friendly)', 'Desktop & mobile responsive (all)', 'Smart shortcuts for smart & easy use'],
      },
      {
        category: 'Point-of-Sale',
        title: 'Software-based POS (Local) — Standard',
        price: '24,900',
        badge: 'LKR',
        features: ['Basic UI (standard quality)', 'No smart shortcut keys'],
      },
      {
        category: 'Point-of-Sale',
        title: 'Software-based POS (Local) — Premium',
        price: '35,900',
        badge: 'LKR',
        features: ['Advanced UI (user friendly)', 'Smart shortcuts for smart & easy use'],
      },
      {
        category: 'E-Commerce',
        title: 'E-Commerce — Tier 1 (100 products)',
        price: '55,900',
        badge: 'LKR',
        features: ['Only for 100 products'],
      },
      {
        category: 'E-Commerce',
        title: 'E-Commerce — Tier 2 (500 products)',
        price: '85,900',
        badge: 'LKR',
        features: ['Only for 500 products'],
      },
      {
        category: 'E-Commerce',
        title: 'E-Commerce — Tier 3 (1,000 products)',
        price: '164,900',
        badge: 'LKR',
        features: ['Only for 1,000 products'],
      },
      {
        category: 'E-Commerce',
        title: 'E-Commerce — Tier 4 (1,000+ products)',
        price: '195,900',
        badge: 'LKR',
        features: ['1,000+ products', 'Payment gateway: 3,900 LKR/month'],
      },
      {
        category: 'Portfolios',
        title: 'Portfolio — Standard (10 Pages)',
        price: '35,900',
        badge: 'LKR',
        features: ['Modern UI', 'Scroll animations (GSAP)', 'Hover and before effects'],
      },
      {
        category: 'Portfolios',
        title: 'Portfolio — Premium (10+ Pages)',
        price: '44,900',
        badge: 'LKR',
        features: ['Advanced UI', 'Scroll animations', 'Holography animations', 'WebGL'],
      },
      {
        category: 'Digital Invitations',
        title: 'Wedding Invitation — Basic',
        price: '5,000 – 8,000',
        badge: 'LKR',
        image: '/images/digital-invitations/wedding-basic.jpg',
        features: ['Template design', 'Text fields, map, RSVP to WhatsApp or email', 'English only'],
      },
      {
        category: 'Digital Invitations',
        title: 'Wedding Invitation — Standard',
        price: '12,000 – 20,000',
        badge: 'LKR',
        image: '/images/digital-invitations/wedding-standard.jpg',
        features: ['Animated opening', 'Schedule, dress code, music', 'RSVP to Google Sheet', '1 language'],
      },
      {
        category: 'Digital Invitations',
        title: 'Wedding Invitation — Premium',
        price: '28,000 – 50,000+',
        badge: 'LKR',
        image: '/images/digital-invitations/wedding-premium.jpg',
        features: ['Custom animation like video', '2–3 languages', 'Personalised guest links', 'RSVP dashboard', '2 revisions'],
      },
      {
        category: 'Mobile Apps (iOS)',
        title: 'iOS — Games (no backend)',
        price: '175,900',
        badge: 'LKR',
        features: ['Swift', 'No backend required'],
      },
      {
        category: 'Mobile Apps (iOS)',
        title: 'iOS — Booking & Reservation',
        price: '290,000',
        badge: 'LKR',
        features: ['Swift', 'Booking & reservation system'],
      },
      {
        category: 'Mobile Apps (iOS)',
        title: 'iOS — Virtual Fit-on / Try-on',
        price: '670,000',
        badge: 'LKR',
        features: ['Swift', 'Virtual fit-on / try-on'],
      },
      {
        category: 'Mobile Apps (iOS)',
        title: 'iOS — Company Management System',
        price: '900,000',
        badge: 'LKR',
        features: ['Swift', 'Full company management system'],
      },
    ],
  },
]
