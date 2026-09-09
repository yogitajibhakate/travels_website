# Suhalaya — Homepage Spec

Directly systematized from source doc §17, mapped to design-system components.

| # | Section | Component | Content notes |
|---|---|---|---|
| 1 | Hero | Hero | "Premium Chauffeur-Driven Mobility for Business, Travel & Life's Important Moments" — sub-headline names the 3 audiences (corporate, executive, life-events) |
| 2 | CTAs | Dual CTA in hero | Book a Ride \| Corporate Enquiry \| Chauffeur on Call — as 2–3 buttons, not 3 competing primary CTAs (pick 2 max visually dominant) |
| 3 | Trust metrics | Trust metrics bar | Only confirmed figures at launch — do not display until real data supplied (see `07-data-model-crm.md` and content inventory flags) |
| 4 | Services grid | Service card × 7–8 | Corporate \| Employee \| Airport \| On Call \| Events \| Weddings \| Outstation (top services only; full 10 live under Services hub) |
| 5 | Safety & women-friendly mobility | Safety callout block | Headline option: "Women-Friendly Corporate Mobility: Safer Travel for Every Shift" |
| 6 | Corporate mobility solution | Feature block + CTA to `/corporate/` | Emphasise account support, billing, reporting |
| 7 | South India chauffeur travel | Feature block + map/route teaser | "You decide the journey; your chauffeur handles the road." Links to Outstation service page |
| 8 | Fleet by use case | Fleet grid | Sedans / SUVs / Vans-Tempo Travellers / Buses, tagged by typical use case |
| 9 | Industries served | Industry grid | 6 tiles from source doc §6 |
| 10 | Events & wedding packages | Package card carousel | 3–4 featured packages, link to Events & Packages hub |
| 11 | Featured blogs | Blog card × 3 | One from each blog category cluster |
| 12 | Client logos + testimonials | Testimonial strip | Real only — omit section entirely until first real client proof exists, rather than using placeholder logos |
| 13 | Locations / office network | Location teaser | Map + 3–4 key locations, link to Locations hub |
| 14 | Final CTA | Full-width CTA band | "Tell Us Where You Need to Go — We'll Plan the Mobility." + Request Quote form |

## Section sequencing logic
The order deliberately puts **safety (§5) and corporate solution (§6-7) before fleet/packages (§8-10)** — because the primary buyer persona (corporate decision-maker) converts on trust and process, not vehicle photos. This mirrors ECO Mobility's pattern of leading with scale/trust metrics rather than Avis's pattern of leading with deals/vehicles.

## Mobile-specific notes
- Sticky bottom CTA bar (Call / WhatsApp / Request Quote) persists under every section, matching Indian mobile-commerce UX expectations.
- Trust metrics bar collapses to a horizontally-scrollable strip.
- Mega-menu collapses to an accordion drawer.
