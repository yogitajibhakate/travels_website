# Suhalaya — Design System (v1 — grounded in actual logo + hero asset)

> **Update note:** v0 of this doc proposed a navy/amber palette speculatively. With the real logo and hero image now in hand, this version replaces that guess with the brand's actual colors and derives typography/hierarchy from what's really on the page. Amber is dropped; the real accent is a bright sky-blue/cyan already in the logo, with a warm gold pulled from the hero photograph reserved for a specific job (see §2c).

## 0. Source assets
- **Logo:** "Suhalaya Travels Pvt. Ltd." — flowing bold navy wordmark for "Suhalaya," a lighter-weight cyan wordmark for "Travels Pvt. Ltd.," grey italic tagline "Exploring the world of comfort," and a circular monogram (stylised wing + "S") in navy-to-cyan gradient.
- **Hero photograph:** A white premium sedan on reflective stone paving at dusk, glass-and-steel airport terminal + control tower on one side, a lit temple gopuram silhouette on the other, deep indigo-to-lavender twilight sky. This single image already encodes the brand story — modern mobility infrastructure meeting South Indian heritage — better than any copy could.

## 1. Design principles
- **Calm, not chaotic.** Neither reference site is a great visual model up close: Avis is deal-banner-heavy, ECO is dense with programmatic SEO links. Suhalaya should read closer to a premium B2B services site (think consulting/logistics-partner tone) with warmth for the life-event moments (weddings, pilgrimage).
- **Trust before transaction.** Numbers, safety process and chauffeur standards appear early — before pricing/booking widgets — because the core buyer is a corporate decision-maker, not a same-day taxi hailer.
- **One system, many occasions.** The same components (service card, trust bar, package card, quote form) are re-skinned lightly by context (corporate = navy/steel, weddings/events = warmer accent) rather than rebuilt.

## 2. Visual direction

### 2a. Palette — pulled directly from the logo and hero photo
| Token | Hex (approx) | Source | Role |
|---|---|---|---|
| `navy-900` | `#0F2A52` | "Suhalaya" wordmark, deepest sky tone in hero | Header/footer, primary headline text, dark section backgrounds |
| `navy-700` | `#1B3A66` | mid-tone in wordmark/monogram gradient | Secondary dark surfaces, hover states on navy |
| `sky-500` | `#29ABE2` | "Travels Pvt. Ltd." wordmark + monogram ring | **Primary interactive color** — all CTAs, links, active nav, form focus states |
| `sky-600` | `#1E8FC2` | darker step of the same cyan | CTA hover/pressed state |
| `dusk-lavender` | `#8E7FA8` | horizon band in hero sky | Gradient-only use (hero overlays, section dividers) — never for text or UI |
| `heritage-gold` | `#C99A46` | lit temple gopuram in hero | **Reserved accent** — pilgrimage/heritage/wedding content only, small doses (badges, dividers, icon fills). Not a general CTA color, so it doesn't compete with sky-500 |
| `steel-200` | `#E7EAEF` | — | Light section backgrounds, card borders |
| `ink-900` | `#141821` | — | Body text |
| `grey-500` | `#7C7F85` | tagline "Exploring the world of comfort" | Sub-headlines, captions, muted text |
| `white` | `#FFFFFF` | logo background | Base surface |

**Why this works better than a generic navy/amber system:** the cyan is already doing the job of "premium but approachable" in the existing logo — reusing it as the single primary action color means every button, link and form field on the site visually reinforces the brand mark instead of introducing an unrelated color. Gold is demoted to a *content-context* accent (it literally comes from the temple in the hero, so it now only appears where that story is being told — pilgrimage, heritage, weddings) rather than being a second competing CTA color.

### 2b. Typography
The logo's "Suhalaya" wordmark is a custom flowing bold script-sans — great as a **logo**, not usable as a live web typeface (illegible at small sizes, no italics/weights/language support). We extract its *character* instead of its literal shape:

- **Display/headline font:** a confident, slightly rounded semi-serif or humanist sans with some flow in its curves (e.g. in the direction of *Fraunces*, *Recoleta*, or *Poppins/Sora* at heavier weights) — echoes the wordmark's confidence without trying to fake a script font in body copy.
- **Body/UI font:** clean grotesk sans (e.g. *Inter*, *General Sans*, *Manrope*) — matches the lighter-weight "Travels Pvt. Ltd." wordmark and the tagline's understated grey italic.
- **Tagline-style microcopy:** an italic weight of the body font, in `grey-500`, mirroring "Exploring the world of comfort" — use this treatment for section sub-headlines/eyebrows sitewide so the tagline's voice recurs throughout the site, not just in the logo lockup.

### 2c. Imagery direction (set by the hero photo, not guessed)
- **Signature motif:** premium sedan/vehicle in the foreground, South India infrastructure or heritage landmark in the background, shot at **dusk/twilight** — this becomes the recurring hero treatment for Home, Corporate Mobility, Airport Transfers, and Outstation service pages, not a one-off image.
- **Two supporting palettes within photography:**
  - *Corporate/airport story* → cool navy/blue tones, glass-and-steel architecture, city skyline (matches hero's left half)
  - *Heritage/pilgrimage/wedding story* → warm gold temple/heritage lighting (matches hero's right half)
  - The site can literally alternate between these two lightings section-by-section to signal "which side" of Suhalaya's story a section is telling.
- **Consistency rule:** every hero-style photo should have *some* reflective ground plane and *some* atmospheric depth (mist/dusk/glow) — this is what makes the single hero image feel premium rather than like a stock cab photo. Flat, harshly-lit daytime stock photography should be avoided for hero placements.
- **Motion:** Minimal — subtle fades/slide-ins on scroll, a slow ambient parallax on hero images (car stays sharp, background drifts slightly) to echo the cinematic quality of the reference hero. No gimmicks.

## 3. Design tokens (v1 — derived from logo + hero)
```
--color-navy-900     #0F2A52   /* header, footer, headline text */
--color-navy-700     #1B3A66
--color-sky-500      #29ABE2   /* PRIMARY — CTAs, links, active states */
--color-sky-600      #1E8FC2   /* hover/pressed */
--color-dusk-lavender #8E7FA8  /* gradient/overlay use only */
--color-heritage-gold #C99A46  /* reserved: pilgrimage/heritage/wedding content */
--color-steel-200    #E7EAEF
--color-ink-900      #141821
--color-grey-500     #7C7F85   /* tagline/eyebrow text */
--color-white        #FFFFFF

--font-display:  'Fraunces' | 'Recoleta' | 'Sora' (heavy)   /* headlines — pick one, test against logo */
--font-body:      'Inter' | 'General Sans' | 'Manrope'      /* body/UI */
--font-style-eyebrow: italic, --color-grey-500              /* mirrors tagline treatment */

--radius-sm  4px
--radius-md  8px
--radius-lg  16px   /* cards */

--shadow-card  0 4px 20px rgba(15,42,82,0.10)
--gradient-hero  linear-gradient(180deg, #0F2A52 0%, #3B4E7A 55%, #8E7FA8 100%)  /* twilight sky, hero overlays */
```

## 4. Hierarchy (page-level)
1. **Navy (`navy-900`)** carries the most weight — logo, header, footer, primary headlines. It's the brand's authority color.
2. **Sky blue (`sky-500`)** is the *only* color used for anything clickable — this single-accent-for-action rule keeps CTAs unmistakable across a site with many sections and templates.
3. **Gold (`heritage-gold`)** never competes with sky-blue for attention — it's a storytelling color (badges, dividers, icon fills) confined to heritage/wedding/pilgrimage contexts, echoing where it actually appears in the hero photo.
4. **Grey italic eyebrows** sit above every major headline sitewide (services, packages, blog categories) as a quiet nod to the tagline typography, giving the whole site a consistent "voice" even though the tagline itself only appears in the logo lockup.

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
