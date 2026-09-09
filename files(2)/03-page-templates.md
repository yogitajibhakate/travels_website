# Suhalaya — Page Templates (the "system" layer)

Every page on the site is an instance of one of these templates. Content teams fill in the fields; designers/devs never rebuild the layout per page. This is what makes ~70 pages maintainable.

---

## Template A — Service Page
*Used by all 10 pages under `/services/`*

| Section | Field(s) |
|---|---|
| Hero | Headline (customer problem, not feature), sub-headline, 2 CTAs (Request Quote / WhatsApp), hero image |
| Who it's for | 2–4 sentences naming the buyer persona |
| What's included | Bullet list |
| Vehicle options | Pulls from Fleet component, filtered to relevant classes |
| Chauffeur & safety standards | Pulls shared Safety block (see design system §4), page-specific additions only |
| How it works | 3–5 numbered steps |
| Customisation options | Bullet list |
| Typical use cases | 3–5 short scenario cards |
| Locations served | Pulls from Locations data, filtered/relevant |
| FAQs | Accordion, 4–6 Q&As |
| Related blogs | Auto-pulled by category tag (3 posts) |
| Testimonials | Optional — only if real testimonial tagged to this service exists |
| Closing CTA | Request Quote / Call / WhatsApp |

*(This is a direct system-ification of source doc §18.)*

---

## Template B — Package Page
*Used by all pages under `/packages/`*

| Section | Field(s) |
|---|---|
| Hero | Package name, one-line promise, CTA |
| Best for | Occasion description |
| Inclusions | Bullet list (from source doc §11 table) |
| Fleet used | Vehicle classes involved |
| Sample flow | e.g. for Wedding Mobility: airport → hotel → venue → return |
| Add-ons | Optional extras |
| FAQs | 3–5 Q&As |
| Related service pages | 2–3 links |
| CTA | Request this Package |

---

## Template C — Location Page
*Used by all pages under `/locations/[city]/`*

| Section | Field(s) |
|---|---|
| Header | City name, type (Head Office / Ops Centre / Airport Point / Regional Office) |
| Details | Address, phone, operating/support hours |
| Service area | Description + map embed |
| Nearby hubs | Airports, tech parks, business districts served from here |
| Services available | Tag-filtered list of applicable services |
| CTA | Get directions / Request Quote from this location |

*(Direct system-ification of source doc §13.)*

---

## Template D — Industry Page
*Used by pages under `/corporate/industries/[industry]/`*

| Section | Field(s) |
|---|---|
| Hero | Industry name + relevant image |
| Use cases | From source doc §6 table (e.g. Pharma → medical conferences, delegate movement, plant visits...) |
| Relevant services | 2–4 linked service pages |
| Relevant blogs | Auto-pulled |
| CTA | Corporate Enquiry |

---

## Template E — Blog Post
*Used by all posts under `/blog/[slug]/`*

| Section | Field(s) |
|---|---|
| Header | Title, category tag (Corporate & Chauffeur / Outstation Self-Travel / Events & Weddings), read time, hero image |
| Body | H2/H3-structured, 800–1500 words |
| CTA block (mid-article) | Contextual — e.g. employee-transport posts → Employee Transportation service CTA |
| Related posts | 3, same category |
| Related service/package | 1–2 links |
| Closing CTA | Request Quote / Corporate Enquiry |

---

## Template F — Hub Page
*Used by `/services/`, `/packages/`, `/locations/`, `/blog/`*

| Section | Field(s) |
|---|---|
| Hero | Hub-level headline |
| Grid | Cards (Service / Package / Location / Blog card component) with filter/category tabs |
| Cross-sell strip | e.g. Packages hub also teases 2 relevant services |

---

## Field-level content rules (apply across all templates)
1. **No unverified claims.** "24/7 support," "verified chauffeurs," specific stat counts — only if confirmed real (flag as `[CLIENT TO CONFIRM]` otherwise).
2. **Every page needs one primary CTA type** decided by intent: corporate pages → "Corporate Enquiry"; consumer/event pages → "Request a Quote" / WhatsApp.
3. **Every page must satisfy the cross-linking rule** from `01-information-architecture.md` §5.
4. **FAQs are real questions**, not keyword stuffing — sourced from actual sales/support queries once available; placeholder FAQs marked as draft.
