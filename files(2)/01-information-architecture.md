# Suhalaya — Information Architecture

## 1. Primary navigation
```
Home
Services ▾
  Corporate Mobility
  Employee Transportation
  Airport Transfers
  Chauffeur on Call
  Executive & VIP Travel
  Corporate Events & Offsites
  Weddings & Family Events
  Outstation Chauffeur — South India
  Pilgrimage Travel
  Large Events / Air Shows
Fleet
Locations
Corporate ▾
  Why Corporates Choose Suhalaya
  Industries We Serve
  Create Corporate Account
Events & Packages
Blogs / Travel Journal
About Us
Contact / Request a Quote          [persistent CTA button, all pages]
```

Secondary/utility nav (footer + header): WhatsApp CTA, Call CTA, Careers (if applicable later).

## 2. URL scheme
Keep URLs flat, human-readable, and future-proof for the programmatic pages ECO uses at scale — but start curated.

```
/                                        home
/services/                               services hub
/services/corporate-mobility/
/services/employee-transportation/
/services/airport-transfers/
/services/chauffeur-on-call/
/services/executive-vip-travel/
/services/corporate-events-offsites/
/services/weddings-family-events/
/services/outstation-chauffeur-south-india/
/services/pilgrimage-travel/
/services/large-events-air-shows/

/fleet/
/fleet/sedans/  /fleet/suvs/  /fleet/vans-tempo-travellers/  /fleet/buses/

/locations/                              locations hub
/locations/[city-slug]/                  e.g. /locations/bengaluru/

/corporate/
/corporate/industries/[industry-slug]/   e.g. /corporate/industries/pharma-healthcare/
/corporate/create-account/

/packages/
/packages/[package-slug]/                e.g. /packages/wedding-mobility/

/routes/[route-slug]/                    e.g. /routes/bengaluru-to-coorg/  (Phase 2 — see roadmap)

/blog/
/blog/[post-slug]/
/blog/category/[category-slug]/

/about/
/contact/
```

## 3. Site map (full tree)

```
Home
├── Services (hub)
│   ├── Corporate Mobility
│   ├── Corporate Travel on Call
│   ├── Employee Transportation
│   ├── Airport Transfers
│   ├── Team Outings & Corporate Offsites
│   ├── Weddings & Family Events
│   ├── Executive & VIP Mobility
│   ├── Outstation with Chauffeur — South India
│   ├── Corporate Events & Conferences
│   ├── Pilgrimage & Heritage Travel
│   └── Air Shows & Large Public Events
├── Fleet
│   ├── Sedans
│   ├── SUVs
│   ├── Vans / Tempo Travellers
│   └── Buses
├── Locations (hub)
│   └── [City pages] — Head Office, Ops/Dispatch, Airport Points, Regional Offices
├── Corporate
│   ├── Why Corporates Choose Suhalaya
│   ├── Industries We Serve (Pharma, Industrial, IT/GCC, BFSI, Business Parks, Hospitality)
│   └── Create Corporate Account
├── Events & Packages
│   ├── Wedding Mobility
│   ├── Corporate Event
│   ├── Team Outing
│   ├── Executive Day
│   ├── South India Road Trip
│   ├── Pilgrimage
│   ├── Conference / Exhibition
│   └── Air Show / Large Event
├── Blog / Travel Journal
│   ├── Category: Corporate & Chauffeur Mobility
│   ├── Category: Outstation Self-Travel
│   └── Category: Events, Weddings & Special Journeys
├── About Us
└── Contact / Request a Quote
```

## 4. Navigation logic
- **Mega-menu under Services** grouped into 3 visual clusters (mirrors the blog categories, so users learn one mental model across the whole site):
  1. *For Business* — Corporate Mobility, Employee Transportation, Chauffeur on Call, Executive & VIP, Corporate Events
  2. *For Journeys* — Outstation South India, Pilgrimage & Heritage
  3. *For Moments* — Weddings & Family Events, Large Events / Air Shows, Airport Transfers
- **Persistent header CTA**: "Request a Quote" (opens a lightweight enquiry form — service type, city, date, contact). This is the one CTA repeated everywhere, matching the "Request Enquiry" pattern both reference sites use.
- **Secondary CTA**: WhatsApp icon, always visible (mobile-first market expectation in India).
- **Footer** mirrors full sitemap + trust bar (see design system) + office locations snippet + social + legal (Terms, Privacy).

## 5. Cross-linking rules (system, not one-off)
Every page template must link to:
- 2–3 related services
- 1 relevant package
- 2–3 relevant blog posts
- Nearest location page
This is enforced at the template level in `03-page-templates.md`, not decided per-page — that's what makes it a system.
