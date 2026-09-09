# Suhalaya — Project Brief & Positioning

## 1. What we're building
A website for **Suhalaya**, positioned as a **premium chauffeur-driven mobility partner** for South India — not a taxi-booking app. The site must feel closer to a corporate services/consulting site than a cab-aggregator site: calmer, more trust-led, more B2B-credible, while still handling B2C moments (weddings, pilgrimage, family road trips).

## 2. Why a "systems approach"
Rather than designing 60+ pages one at a time, we define the **system** first — the rules, templates, and data structures that generate every page — then populate it with content. This gives us:
- Consistency across ~10 service pages, ~8 package pages, ~50 blog posts, and N location pages
- A single design system so new pages can be assembled, not redesigned
- A content model that maps cleanly onto a future CRM/lead database (see `07-data-model-crm.md`)
- A build that scales (new city, new industry vertical, new blog post) without re-architecting

## 3. Reference analysis (systems view, not visual copy)

| | Avis (avis.co.in / avis.com) | ECO Mobility (ecosmobility.com) | Suhalaya takeaway |
|---|---|---|---|
| Core model | Self-drive-first global rental brand; booking widget is the hero | Chauffeur-first, India-scale corporate fleet operator | We sit closer to ECO's model, but smaller/regional and more curated |
| Trust signals | Fleet brand names, loyalty program, app | Hard numbers: 20,000+ vehicles, 70+ Fortune 500, 30+ years, awards | We don't have ECO's scale — so trust must come from **process** (verified chauffeurs, safety protocol, South India expertise) rather than raw numbers we can't yet claim |
| IA pattern | Vehicle-type led (SUV/Luxury/Electric) | Use-case led (Corporate/Employee/Wedding/Events) + massive city/route SEO tail | Suhalaya should follow ECO's **use-case-led IA**, since our differentiator is occasion/industry fit, not fleet size |
| Booking UX | Location + date/time widget on hero | Service-type + city + vehicle-class enquiry form on hero | We adopt a **simplified enquiry widget** (not real-time booking engine at launch) — see `08-build-roadmap.md` for phasing |
| Content depth | Thin per-page, deal-driven | Very deep programmatic SEO (routes, city pages, vehicle-detail pages) | We start with a **curated core** (services, 5–10 outstation routes, key cities) rather than thousands of thin programmatic pages — quality first, scale later |
| Corporate proof | Business rentals section, travel agents | Investor relations, Fortune 500 logos, dedicated corporate account creation | We borrow the **"Create Corporate Account" + dedicated corporate section** pattern, sized appropriately |

**Conclusion:** Suhalaya's positioning gap in the market is between Avis (self-drive, global, transactional) and ECO (huge-scale corporate fleet, SEO-programmatic). Suhalaya is **regional, curated, safety-and-trust led, occasion-aware** — corporate mobility + South India road journeys + life-event travel, told as one coherent story rather than a directory of city pages.

## 4. Target audiences (in priority order)
1. **Corporate travel/admin/HR decision-makers** — booking employee transport, executive travel, event logistics (B2B, highest LTV)
2. **Executives/individual business travellers** — airport transfers, on-call chauffeur, VIP/secure travel
3. **Event & wedding planners / families** — one-off high-value bookings with many moving parts
4. **Leisure/pilgrimage travellers** — South India road trips, temple circuits, family travel with elderly parents

## 5. Positioning statement
> Suhalaya is a chauffeur-driven mobility partner for corporate mobility, employee movement, executive travel, events, weddings and South India road journeys — built on verified chauffeurs, tracked trips and route expertise.

## 6. Non-negotiable content guardrails
- Never claim "24/7 support," "verified/trained chauffeurs," or "national-security-grade" capability unless it is **actually true and documented** — these are trust claims, not marketing filler (source doc, sections 3, 4, 14).
- No fabricated statistics (years in business, fleet size, trip counts). Placeholder fields must be clearly marked `[CLIENT TO CONFIRM]` in the content inventory until real numbers are supplied.
- Safety and privacy content stays factual and procedural — no overclaiming ("bodyguard," "security detail") unless genuinely offered.

## 7. Deliverables in this ideation set
1. `01-information-architecture.md` — full sitemap, nav, URL scheme
2. `02-design-system.md` — visual/brand direction, tokens, component list
3. `03-page-templates.md` — the repeatable content templates every page type is built from
4. `04-homepage-spec.md` — section-by-section homepage blueprint
5. `05-content-inventory.md` — every service/package/location page, mapped to template + status
6. `06-blog-strategy.md` — blog IA, clusters, priority, internal linking plan
7. `07-data-model-crm.md` — future CRM schema derived from the content model
8. `08-build-roadmap.md` — phased build plan (MVP → v1 → v2), tech options
