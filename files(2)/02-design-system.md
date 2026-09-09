# Suhalaya — Design System (v0 direction)

## 1. Design principles
- **Calm, not chaotic.** Neither reference site is a great visual model up close: Avis is deal-banner-heavy, ECO is dense with programmatic SEO links. Suhalaya should read closer to a premium B2B services site (think consulting/logistics-partner tone) with warmth for the life-event moments (weddings, pilgrimage).
- **Trust before transaction.** Numbers, safety process and chauffeur standards appear early — before pricing/booking widgets — because the core buyer is a corporate decision-maker, not a same-day taxi hailer.
- **One system, many occasions.** The same components (service card, trust bar, package card, quote form) are re-skinned lightly by context (corporate = navy/steel, weddings/events = warmer accent) rather than rebuilt.

## 2. Visual direction
- **Palette:** Deep navy/charcoal base (authority, premium, automotive) + a single warm accent (amber/gold) reserved for CTAs and the "life moments" content (weddings, pilgrimage) — avoids feeling like a generic yellow-taxi brand while still feeling Indian-premium.
- **Typography:** A confident serif or semi-serif for headlines (signals "premium chauffeur," not "budget cab"), clean grotesk/sans for body and UI. Avoid rounded, playful typefaces — those read as consumer-app, not corporate-mobility.
- **Imagery:** Real vehicles, real chauffeurs in uniform, South India landscapes (Coorg, Hampi, backwaters) for the outstation story, corporate/airport settings for the B2B story. No generic stock-taxi photography.
- **Motion:** Minimal — subtle fades/slide-ins on scroll. No gimmicks; this is a trust-led B2B-leaning brand.

## 3. Design tokens (starting point — refine with brand team)
```
--color-navy-900   #0B1B2B   /* primary dark / header / footer */
--color-navy-700   #16324A
--color-steel-200  #E4E8EC   /* section backgrounds */
--color-accent-500 #C9962F   /* amber/gold — CTAs, highlights */
--color-accent-600 #A97D22   /* hover state */
--color-ink-900    #12161C   /* body text */
--color-white      #FFFFFF

--font-display:  'display serif or semi-serif'  /* headlines */
--font-body:      'grotesk sans'                /* body/UI */

--radius-sm  4px
--radius-md  8px
--radius-lg  16px   /* cards */

--shadow-card  0 4px 20px rgba(11,27,43,0.08)
```

## 4. Core component inventory (build once, reuse everywhere)
| Component | Used on | Notes |
|---|---|---|
| **Header w/ mega-menu** | All pages | 3-cluster services dropdown (see IA doc), persistent "Request a Quote" CTA |
| **Hero (headline + sub + dual CTA + trust strip)** | Home, all service pages | Trust strip = 3–4 icon stats, no fabricated numbers |
| **Quote/Enquiry widget** | Home hero, sticky on service/package pages | Service type → City → Date → Vehicle class (optional) → Contact. *Not* a live booking engine at launch (see roadmap) |
| **Service card** | Services hub, homepage grid | Icon, name, one-line problem statement, link |
| **Trust metrics bar** | Home, footer, About | Pulls only from confirmed figures (`05-content-inventory.md` flags placeholders) |
| **Safety/Women-friendly callout block** | Home, Employee Transportation, Corporate Mobility | Icon list + headline per source doc §3 |
| **Industry grid** | Corporate hub, homepage | 6 industry tiles → `/corporate/industries/[slug]` |
| **Package card** | Events & Packages hub, homepage | Name, 3–4 inclusion bullets, "Request this package" CTA |
| **Route/itinerary card** | Outstation service page (Phase 2: route pages) | State cluster, sample circuit, CTA |
| **Location card** | Locations hub | Address, hours, service area, map CTA, nearby hubs |
| **Blog card / category tag** | Blog hub, related-posts blocks | Category = one of the 3 clusters in IA doc |
| **Testimonial/client-logo strip** | Home, Corporate hub | Real logos only — placeholder state clearly marked until supplied |
| **FAQ accordion** | Every service page (template §18 in source doc) | Shared component, content varies |
| **Sticky mobile CTA bar** | All pages, mobile only | Call / WhatsApp / Request Quote — matches India user expectation seen on ECO Mobility |
| **Footer** | All pages | Full sitemap + trust bar + locations snippet + legal |

## 5. Layout grid
- 12-column desktop grid, 4-column mobile.
- Section max-width ~1280px, generous vertical rhythm (80–120px between major sections) to keep the "calm, premium" feel — avoid ECO's dense stacked-link footer style on primary pages (that pattern is fine in the footer only).

## 6. What we deliberately do NOT copy from references
- Avis's aggressive deal-banner carousel (undermines premium/corporate tone).
- ECO's massive footer link farm of city/route pages (programmatic SEO tail) — we start curated and expand deliberately (see roadmap), not by auto-generating thin pages.
- Real-time self-serve booking engine at launch — Suhalaya's model is quote/enquiry-led (chauffeur-driven, often corporate-negotiated), not instant self-drive rental.
