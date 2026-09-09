# Suhalaya — Future CRM / Customer Database (system-level schema)

Not public-facing. This is the data layer sitting behind every "Request a Quote," "Corporate Enquiry" and "Create Corporate Account" form on the site, so that lead capture is CRM-ready from day one even before a full CRM tool is chosen (source doc §12).

## 1. Core entities

### `Lead`
| Field | Type | Notes |
|---|---|---|
| id | uuid | |
| source | enum | google, website, referral, whatsapp, phone, partner, event |
| stage | enum | new → qualified → quote → booked → completed → repeat_opportunity |
| service_interest | enum(multi) | maps to the 10 service slugs |
| package_interest | enum(nullable) | maps to package slugs, if from a package page |
| segment | enum | hr_admin, executive, family, wedding_planner, travel_agent, hotel, event_organiser |
| submitted_from_page | string | URL/slug of the form's page — critical for attributing which page/blog/service converts |
| city | string | |
| contact_name | string | |
| contact_phone | string | |
| contact_email | string | |
| company_name | string(nullable) | populated for B2B leads |
| consent_marketing | boolean | |
| created_at / updated_at | datetime | |

### `CorporateAccount`
| Field | Type | Notes |
|---|---|---|
| id | uuid | |
| company_name | string | |
| industry | enum | maps to the 6 industry slugs |
| locations | string[] | |
| travel_coordinator_contact | ref → Contact | |
| billing_contact | ref → Contact | |
| employee_strength_band | enum | 0-50, 51-250, 251-500, 500+ (mirrors ECO Mobility's own field, sensible pattern to reuse) |

### `CustomerProfile`
| Field | Type | Notes |
|---|---|---|
| id | uuid | |
| account_id | ref → CorporateAccount (nullable, for B2C) | |
| preferred_vehicle_class | enum | |
| common_routes | string[] | |
| airport_usage_frequency | enum | |
| event_usage | boolean | |
| outstation_preferences | text | |

### `TripHistory` / `EventHistory`
Trips: date, department, location(s), service_type, vehicle_class, status.
Events: event_type (conference/wedding/offsite), package_used, date, headcount.

## 2. Why this shape
- **`submitted_from_page`** on every Lead is what closes the loop between the content system (`03-page-templates.md`, `06-blog-strategy.md`) and actual pipeline — it tells the business which service pages, packages, and blog posts are actually generating qualified leads, not just traffic.
- **`segment`** and **`stage`** map directly to source doc §12 and let sales prioritise (e.g. HR/admin leads at "quote" stage vs. a leisure family lead at "new").
- **`industry`** on CorporateAccount ties directly to the 6 industry pages in the IA — so the future CRM can segment by the same taxonomy the website already uses, no remapping needed later.

## 3. Privacy/consent
`consent_marketing` is captured at point of submission on every form (per source doc §12: "Consent, privacy and opt-out controls for marketing"). No lead is added to marketing lists without it. Privacy policy page must describe what's collected and why.

## 4. Implementation note
At MVP, this can be as simple as a structured Airtable/Google Sheet or a lightweight forms → database pipeline (e.g. site forms → serverless function → Postgres/Airtable) — the point of defining the schema now is so whatever tool is chosen later doesn't require re-architecting the site's forms.
