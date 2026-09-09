# Suhalaya — Build Roadmap

## Phase 0 — Ideation (this deliverable set)
`00` through `07` in this folder. Sign-off needed before build starts on:
- Positioning & guardrails (`00`)
- IA/sitemap (`01`)
- Design direction (`02`) — at minimum palette/type direction, so visual design doesn't block dev
- Confirmed real data to unblock `[CLIENT TO CONFIRM]` flags in `05`

## Phase 1 — MVP (launch-ready core)
**Goal:** A credible, trust-led site covering the highest-intent pages, with real content only (no placeholder stats/testimonials).

- Home (`04-homepage-spec.md`)
- 6 P0 service pages (`05-content-inventory.md`)
- Fleet hub (4 pages)
- Locations hub + confirmed offices only
- About, Contact/Request-a-Quote, Corporate hub, Create Corporate Account
- Wave 1 blog posts (6 posts, `06-blog-strategy.md`)
- Lead-capture forms wired to the schema in `07-data-model-crm.md` (even if backend is a simple sheet/Airtable at this stage)
- Core design system components built (`02-design-system.md` §4)

## Phase 2 — v1 expansion
- Remaining P1/P2 service pages
- All 8 package pages
- 6 industry pages
- Wave 2–3 blog posts
- Additional confirmed location pages
- Testimonials/client-logo section (only once real proof exists)

## Phase 3 — v2 scale
- Route pages (`/routes/[route-slug]/`) — curated South India circuits from source doc §7, built deliberately rather than programmatically generated, to avoid the thin-page problem seen at scale on ECO Mobility
- Wave 4 blog posts
- Evaluate a real CRM tool against the schema in `07-data-model-crm.md`
- Evaluate whether a live booking widget (vs. quote/enquiry model) is warranted, based on Phase 1–2 lead data

## Tech stack — options to decide with dev team
| Layer | Lightweight option | Scalable option |
|---|---|---|
| Frontend/CMS | Webflow / Framer (fast to ship, content-editable) | Next.js + headless CMS (Sanity/Contentful) — better fit once route/blog pages scale into the hundreds |
| Forms → CRM | Native form → Airtable/Google Sheet via Zapier/Make | Custom form → serverless function → Postgres, matching `07-data-model-crm.md` schema directly |
| Hosting | Vercel/Netlify | Same — no reason to overbuild infra at this stage |

**Recommendation:** Start with the headless-CMS + Next.js path if the team can support it — the page-template system (`03-page-templates.md`) maps directly onto CMS content types, so templates become reusable components from day one rather than being rebuilt when the site scales past ~30–40 pages.

## Definition of done for Phase 1
- Every Phase-1 page uses its assigned template exactly (no one-off layouts)
- No unresolved `[CLIENT TO CONFIRM]` flags on any live page
- Every page satisfies the cross-linking rule (IA doc §5)
- Lead form data lands in a structure matching the CRM schema fields
- Mobile sticky CTA bar present site-wide
