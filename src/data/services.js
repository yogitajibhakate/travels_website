export const servicesData = [
  {
    slug: 'corporate-mobility',
    name: 'Corporate Mobility',
    shortTitle: 'Corporate Travel',
    categoryCluster: 'business-mobility',
    categoryName: 'BUSINESS MOBILITY',
    priority: 'P0',
    tagline: 'Business travel, meetings, client visits and inter-office movement.',
    heroHeadline: 'Keep Business Moving.',
    heroSubheadline: 'Business travel rarely happens in a straight line. Airport. Office. Hotel. Client meeting. Another office. Dinner. Airport again. A dedicated mobility partner makes those movements easier to coordinate.',
    description: `Business travel rarely happens in a straight line. Airport. Office. Hotel. Client meeting. Another office. Dinner. Airport again.

A dedicated mobility partner makes those movements easier to coordinate, particularly when multiple employees, executives or locations are involved.

Daily business travel, visiting executives, inter-office movement and corporate requirements can all be managed through a single transportation partner.`,
    ctaText: 'Plan Corporate Travel',
    whoItsFor: 'Corporate meetings, Client visits, Executive movement, Airport transfers, Inter-office travel, Hotel transfers, Business travel within the city, Multi-location movement',
    whatsIncluded: [
      'Dedicated key account management & 24/7 corporate dispatch desk',
      'Centralized monthly consolidated billing with GST compliance',
      'Audited, uniformed chauffeurs with background verification',
      'Flexible hourly, full-day, point-to-point, and outstation bookings',
      'Itemized digital duty slips for seamless financial audit'
    ],
    vehicleClasses: ['Executive Sedans', 'Premium SUVs', 'Luxury Sedans', 'Staff Coaches'],
    steps: [
      { number: '01', title: 'Requirement Assessment', description: 'Define travel frequency, vehicle categories, and billing preferences.' },
      { number: '02', title: 'Account Setup', description: 'Streamlined onboarding with custom corporate rate cards and credit terms.' },
      { number: '03', title: 'Dispatch & Execution', description: 'Automated chauffeur allocation, flight tracking, and journey monitoring.' },
      { number: '04', title: 'Consolidated Billing', description: 'Monthly itemized GST statements tagged by cost center.' }
    ],
    useCases: [
      'Client VIP Pickups & Executive Meetings',
      'Inter-office Campus & Branch Visits',
      'Multi-city Corporate Delegate Logistics',
      'Site Inspections & Corporate Events'
    ],
    faqs: [
      { q: 'How does corporate billing work?', a: 'We offer structured monthly consolidated billing with flexible credit cycles for verified corporate accounts.' },
      { q: 'Can we book vehicles for full days or multiple stops?', a: 'Yes, our corporate mobility services cover hourly packages, full-day usage, multiple stops, and intercity travel.' }
    ]
  },
  {
    slug: 'employee-transportation',
    name: 'Employee Transportation',
    shortTitle: 'Employee Transport',
    categoryCluster: 'business-mobility',
    categoryName: 'BUSINESS MOBILITY',
    priority: 'P0',
    tagline: 'Regular employee movement, office commutes and shift-based travel.',
    heroHeadline: 'Better Commutes. Better Business.',
    heroSubheadline: 'The workday starts before the employee reaches the office. Good employee transportation considers routes, timings, shifts, pickup points and people—not just vehicles.',
    description: `The workday starts before the employee reaches the office.

Good employee transportation needs to consider routes, timings, shifts, pickup points and the people using the service—not just the number of vehicles.

From regular office commutes to shift-based transportation, mobility can be organised around the working pattern of the organisation. Bengaluru's technology parks, business districts and industrial areas create very different transportation requirements. The plan needs to reflect that.`,
    ctaText: 'Discuss Employee Transport',
    whoItsFor: 'Regular office transportation, Shift-based movement, Employee pickup and drop, Business parks and campuses, Multiple routes and locations',
    whatsIncluded: [
      'Intelligent route planning and roster-based trip optimization',
      'Strict night-shift safety compliance and escort coordination',
      'Real-time vehicle GPS tracking & panic button integration',
      'Uniformed chauffeurs trained in workplace etiquette & defensive driving',
      'Sanitized fleet ranging from Tempo Travellers to 49-seater coaches'
    ],
    vehicleClasses: ['Executive SUVs', 'VIP & Group Vans', 'Coaches'],
    steps: [
      { number: '01', title: 'Commute Mapping', description: 'Analyzing employee pin codes and work shift timings to map optimal pickup routes.' },
      { number: '02', title: 'Fleet Allocation', description: 'Assigning the ideal vehicle mix to maximize passenger comfort and operational efficiency.' },
      { number: '03', title: 'Shift Dispatch', description: 'Centralized control desk manages real-time trip execution and punctuality.' },
      { number: '04', title: 'Audit & Governance', description: 'Transparent route logs, safety compliance reports, and SLA reviews.' }
    ],
    useCases: [
      '24/7 Shift Commuting for Tech Parks & GCCs',
      'Manufacturing Plant Staff Shuttles',
      'Campus & Metro Connector Shuttles'
    ],
    faqs: [
      { q: 'How do you handle late-night shift safety for female employees?', a: 'We incorporate strict pickup/drop procedures, escort protocols where required, driver verification, and escalation guidelines.' },
      { q: 'Can rosters be modified dynamically?', a: 'Yes, our 24/7 dispatch control desk processes roster adjustments and backup deployments.' }
    ]
  },
  {
    slug: 'airport-transfers',
    name: 'Airport Transfers',
    shortTitle: 'Airport Transfers',
    categoryCluster: 'business-mobility',
    categoryName: 'BUSINESS MOBILITY',
    priority: 'P0',
    tagline: 'Airport-to-office, hotel, home and onward transfers.',
    heroHeadline: 'From Terminal to Destination. Without the Detour.',
    heroSubheadline: 'The flight may be unpredictable. Your ground transportation doesn\'t have to be.',
    description: `The flight may be unpredictable. Your ground transportation doesn't have to be.

Airport pickups and drops can be arranged for individuals, executives, families, and corporate guests, with the vehicle selected to meet your needs.

For corporate guests, airport transportation can also form part of a wider business itinerary. Arrival. Pickup. Destination. Done.`,
    ctaText: 'Arrange an Airport Transfer',
    whoItsFor: 'Airport → Hotel, Airport → Office, Airport → Home, Airport → Meeting, Airport → Outstation Destination',
    whatsIncluded: [
      'Real-time flight status tracking & automatic buffer time adjustments',
      'Paging sign pickup assistance at arrivals terminal',
      'Clean executive sedan or SUV with ample luggage capacity',
      'Toll & parking included options for seamless billing',
      '24/7 dispatch support for late-night and early-morning flights'
    ],
    vehicleClasses: ['Executive Sedans', 'Premium SUVs', 'Luxury Sedans'],
    steps: [
      { number: '01', title: 'Flight Details', description: 'Provide flight number, arrival/departure time, and passenger count.' },
      { number: '02', title: 'Chauffeur Tracking', description: 'Receive chauffeur details and live tracking link prior to landing.' },
      { number: '03', title: 'Terminal Pickup', description: 'Meet your chauffeur at the designated arrival gate with optional sign paging.' },
      { number: '04', title: 'Direct Journey', description: 'Smooth, direct transfer to your hotel, office, home, or meeting.' }
    ],
    useCases: [
      'Visiting Executive & Client Pickups',
      'International Delegate Arrivals',
      'Family Holiday & Group Airport Travel'
    ],
    faqs: [
      { q: 'What happens if my flight is delayed?', a: 'We track flight statuses in real-time and adjust pickup times automatically without penalty.' },
      { q: 'Where do I meet my chauffeur at the airport?', a: 'Your chauffeur will be waiting at the designated arrival hall with a name paging board.' }
    ]
  },
  {
    slug: 'chauffeur-on-call',
    name: 'Chauffeur on Call',
    shortTitle: 'Chauffeur on Call',
    categoryCluster: 'business-mobility',
    categoryName: 'BUSINESS MOBILITY',
    priority: 'P0',
    tagline: 'A chauffeur and vehicle available around your schedule.',
    heroHeadline: 'Your Day. Your Schedule. Your Chauffeur.',
    heroSubheadline: 'Sometimes you don\'t need a transfer. You need a car available when you need it.',
    description: `Sometimes you don't need a transfer. You need a car available when you need it.

For meetings across the city, appointments, business engagements or a full day of movement, chauffeur-on-call gives you the flexibility to keep the vehicle with you for the duration of your requirement.

Choose the vehicle for the occasion and spend the day focusing on what brought you there—not traffic or parking.`,
    ctaText: 'Book a Chauffeur',
    whoItsFor: 'Morning meetings, Multiple appointments, Shopping and personal travel, Business engagements, Full-day city movement',
    whatsIncluded: [
      'Dedicated vehicle & driver at your disposal for 4hr, 8hr, or 12hr packages',
      'Flexible routes with unlimited intermediate stops',
      'Experienced chauffeurs familiar with local city geography & traffic patterns',
      'Fuel, maintenance, and insurance fully covered',
      'Seamless extension options if your day runs longer'
    ],
    vehicleClasses: ['Executive Sedans', 'Premium SUVs', 'Luxury Sedans'],
    steps: [
      { number: '01', title: 'Package Selection', description: 'Choose your preferred duration (e.g. 8 Hrs / 80 Kms) and vehicle class.' },
      { number: '02', title: 'Chauffeur Arrival', description: 'Your vehicle arrives at your designated starting point ahead of time.' },
      { number: '03', title: 'Flexible Itinerary', description: 'Travel to multiple meetings, lunch, and stops without rebooking.' },
      { number: '04', title: 'Day Wrap-Up', description: 'Simple duty slip confirmation upon final drop-off.' }
    ],
    useCases: [
      'Multi-meeting Business Days',
      'Client Entertainment & Dinners',
      'City Sightseeing & Personal Chauffeur Usage'
    ],
    faqs: [
      { q: 'Can I extend the package hours during the trip?', a: 'Yes, extra hours and kilometers are calculated transparently at standard pro-rata rates.' },
      { q: 'Is the chauffeur dedicated exclusively to me?', a: 'Yes, the car and driver remain exclusively assigned to you for your entire booking duration.' }
    ]
  },
  {
    slug: 'executive-vip-travel',
    name: 'Executive & VIP Travel',
    shortTitle: 'Executive VIP Travel',
    categoryCluster: 'business-mobility',
    categoryName: 'BUSINESS MOBILITY',
    priority: 'P0',
    tagline: 'Executive cars and chauffeur-driven travel for important guests and leadership.',
    heroHeadline: 'Arrive Ready. Leave the Driving to Us.',
    heroSubheadline: 'For important meetings, visiting leadership, clients and high-value business travel, the journey becomes part of the experience.',
    description: `For important meetings, visiting leadership, clients and high-value business travel, the journey becomes part of the experience.

A suitable vehicle. A composed chauffeur. A comfortable environment between engagements.

From executive sedans to premium and luxury vehicles, transportation can be matched to the importance and nature of the occasion. Use the time between meetings to prepare, take a call, review the day, or simply switch off.`,
    ctaText: 'Arrange Executive Travel',
    whoItsFor: 'C-Suite Executives, Visiting Board Members, VIP Guests, High-net-worth Individuals, Investor Delegations',
    whatsIncluded: [
      'Top-tier executive fleet (Camry, E-Class, Vellfire, S-Class, BMW 7 Series)',
      'Senior uniformed chauffeurs trained in executive NDA protocols',
      'Quiet, pristine interiors equipped with Wi-Fi, bottled water, & device chargers',
      'Priority 24/7 executive dispatch monitoring desk',
      'Discreet service with custom privacy preferences'
    ],
    vehicleClasses: ['Executive Sedans', 'Luxury Sedans', 'Super Luxury SUVs', 'VIP Vans'],
    steps: [
      { number: '01', title: 'VIP Briefing', description: 'Specify vehicle preferences, security guidelines, and passenger details.' },
      { number: '02', title: 'Vehicle Prep', description: 'Thorough inspection, detailing, and amenity stocking prior to dispatch.' },
      { number: '03', title: 'Chauffeur Protocol', description: 'Punctual arrival with professional, courteous, discreet service.' },
      { number: '04', title: 'Smooth Execution', description: 'Uninterrupted mobility allowing leaders to work or rest in comfort.' }
    ],
    useCases: [
      'Board Meetings & Investor Roadshows',
      'C-Suite Airport & Office Transfers',
      'VIP Diplomatic & Industry Summits'
    ],
    faqs: [
      { q: 'What luxury car models are available?', a: 'Our executive fleet includes Mercedes-Benz E-Class/S-Class, BMW 5/7 Series, Toyota Camry Hybrid, and Toyota Vellfire.' },
      { q: 'Are your chauffeurs NDA compliant?', a: 'Yes, our senior executive chauffeurs are vetted and trained in strict confidentiality protocols.' }
    ]
  },
  {
    slug: 'corporate-events-conferences',
    name: 'Corporate Events & Conferences',
    shortTitle: 'Events & Conferences',
    categoryCluster: 'events-groups',
    categoryName: 'EVENTS & GROUPS',
    priority: 'P1',
    tagline: 'Delegate, speaker, airport, hotel and venue transportation.',
    heroHeadline: 'One Event. Hundreds of Movements. One Mobility Plan.',
    heroSubheadline: 'An event transportation plan begins long before the first vehicle arrives.',
    description: `An event transportation plan begins long before the first vehicle arrives.

Who is arriving? From where? At what time? Which hotel? Which venue? How many movements are expected?

Once these pieces are mapped, the fleet and transportation schedule can be organised around them. Multiple vehicle categories can be coordinated according to the scale and requirements of the event.`,
    ctaText: 'Plan Event Transportation',
    whoItsFor: 'Airport Transfers, Hotel Transfers, Venue Transfers, Speaker Transportation, Delegate Movement, Guest Transportation, Departure Transfers',
    whatsIncluded: [
      'On-site mobility coordinator and central dispatch desk',
      'Multi-vehicle fleet coordination (Sedans, SUVs, Vans, Coaches)',
      'Flight arrival monitoring for staggered delegate arrivals',
      'Custom vehicle signage & venue parking management',
      'Consolidated event billing with itemized trip logs'
    ],
    vehicleClasses: ['Executive Sedans', 'Premium SUVs', 'VIP Vans', 'Deluxe Coaches'],
    steps: [
      { number: '01', title: 'Roster Review', description: 'Analyze delegate flight arrival schedules, hotel locations, and venue timings.' },
      { number: '02', title: 'Fleet Planning', description: 'Structure shuttle frequencies, VIP private cars, and coach allocations.' },
      { number: '03', title: 'On-Site Execution', description: 'Dedicated ground managers direct arrivals, departures, and staging.' },
      { number: '04', title: 'Post-Event Audit', description: 'Consolidated billing report matching actual duty slips.' }
    ],
    useCases: [
      'Annual Corporate AGMs & Summits',
      'Tech Conventions & Trade Shows',
      'Global Partner & Product Launch Events'
    ],
    faqs: [
      { q: 'Do you provide on-site ground coordinators?', a: 'Yes, for large conferences we provide dedicated operational managers at airports and venues.' },
      { q: 'Can you handle group transfers from multiple hotels?', a: 'Yes, we design multi-point pickup routes and scheduled shuttle loops.' }
    ]
  },
  {
    slug: 'team-outings-offsites',
    name: 'Team Outings & Offsites',
    shortTitle: 'Team Outings',
    categoryCluster: 'events-groups',
    categoryName: 'EVENTS & GROUPS',
    priority: 'P1',
    tagline: 'Group transportation for corporate outings and multi-day offsites.',
    heroHeadline: 'Leave the Office. Leave the Driving to Us.',
    heroSubheadline: 'The best part of an offsite starts when the team gets on the road.',
    description: `The best part of an offsite starts when the team gets on the road.

Choose the destination, decide the group size and let the transportation be planned around the day.

Sedans, SUVs, vans and coaches can be arranged depending on the group and itinerary. The transportation can be structured around the experience rather than multiple individual bookings.`,
    ctaText: 'Plan a Team Outing',
    whoItsFor: 'A short outing around Bengaluru, A weekend team trip, A multi-day offsite outside the city',
    whatsIncluded: [
      'Comfortable group vehicles (Force Urbania, Tempo Travellers, 24-49 Seater Coaches)',
      'Interstate permits, toll fees, and driver allowances pre-arranged',
      'Experienced outstation drivers familiar with resort routes & highways',
      'Luggage space management for overnight offsites',
      'Custom pickup points at corporate headquarters or tech parks'
    ],
    vehicleClasses: ['VIP Vans', 'Coaches', 'Premium SUVs'],
    steps: [
      { number: '01', title: 'Group Size & Destination', description: 'Specify headcount, departure location, and resort destination.' },
      { number: '02', title: 'Vehicle Selection', description: 'Choose from luxury 9-16 seater Urbania vans to 49-seater AC coaches.' },
      { number: '03', title: 'Seamless Journey', description: 'Punctual departure with coordinated rest stops along scenic routes.' },
      { number: '04', title: 'Safe Return', description: 'Timely return trip bringing the team back directly to HQ.' }
    ],
    useCases: [
      'Resort Team Retreats in Coorg & Kabini',
      'Weekend Corporate Outings to Nandi Hills & Sakleshpur',
      'Multi-day Departmental Strategy Offsites'
    ],
    faqs: [
      { q: 'Are interstate taxes included in outstation quotes?', a: 'Yes, all permit fees, tolls, state taxes, and driver charges are clearly outlined.' },
      { q: 'What AC coaches are available for large teams?', a: 'We offer 24, 35, 40, 45, and 49 seater luxury AC coaches including Volvo Gliders.' }
    ]
  },
  {
    slug: 'weddings-family-events',
    name: 'Weddings & Family Events',
    shortTitle: 'Weddings & Family',
    categoryCluster: 'events-groups',
    categoryName: 'EVENTS & GROUPS',
    priority: 'P1',
    tagline: 'Guest transfers, family movement and wedding transportation.',
    heroHeadline: 'Let the Celebration Take Centre Stage.',
    heroSubheadline: 'A wedding can involve dozens of journeys before the ceremony even begins.',
    description: `A wedding can involve dozens of journeys before the ceremony even begins.

Airport pickups. Hotels. Family movement. Venue transfers. Guest transportation. Late-night returns.

Keeping these movements organised means families can concentrate on the celebration instead of coordinating vehicles. From individual luxury cars to larger group transportation, the requirement can be planned around the guest list, venues and schedule.`,
    ctaText: 'Plan Wedding Mobility',
    whoItsFor: 'Airport pickups, Hotel transfers, Family transportation, Venue movement, Guest transfers, Return journeys',
    whatsIncluded: [
      'Bridal & VIP luxury sedans (Mercedes, BMW, Audi, Camry, Vellfire)',
      'Guest shuttle fleet for hotel-to-venue movement',
      'Decorated wedding car coordination options',
      'Dedicated family logistics liaison desk',
      'Flexible standby cars for last-minute family errands'
    ],
    vehicleClasses: ['Luxury Sedans', 'Super Luxury SUVs', 'VIP Vans', 'Coaches'],
    steps: [
      { number: '01', title: 'Itinerary Mapping', description: 'Review wedding functions, venue locations, and guest arrival lists.' },
      { number: '02', title: 'Fleet Allocation', description: 'Assign luxury cars for bride/groom and shuttles for wedding guests.' },
      { number: '03', title: 'Event Day Coordination', description: 'Ensure smooth guest flow between hotels, marriage halls, and receptions.' },
      { number: '04', title: 'Farewell Transfers', description: 'Coordinated departure shuttles back to airport or railway stations.' }
    ],
    useCases: [
      'Destination Weddings in Palace & Resort Venues',
      'Multi-day Sangeet, Wedding & Reception Movement',
      'Outstation Guest Pickup & Escort Fleet'
    ],
    faqs: [
      { q: 'Can we book cars for multiple wedding functions across 3 days?', a: 'Yes, we provide full wedding mobility management for multi-day celebrations.' },
      { q: 'Do you offer luxury cars for the bride and groom?', a: 'Yes, including Mercedes S-Class, BMW 7 Series, Audi Q7, and Toyota Vellfire.' }
    ]
  },
  {
    slug: 'south-india-chauffeur-travel',
    name: 'South India Chauffeur Travel',
    shortTitle: 'South India Road Trips',
    categoryCluster: 'journeys-beyond',
    categoryName: 'JOURNEYS BEYOND THE CITY',
    priority: 'P0',
    tagline: 'Self-planned chauffeur-driven road journeys across South India.',
    heroHeadline: 'Your Route. Your Pace. Our Chauffeur.',
    heroSubheadline: 'Forget the fixed sightseeing circuit. Build the trip around what you actually want to see.',
    description: `Forget the fixed sightseeing circuit. Build the trip around what you actually want to see.

Spend longer in Mysuru. Take a detour through Coorg. Combine Hampi and Badami. Head towards Ooty, Wayanad, Gokarna or Kerala.

The chauffeur handles the road while you experience the journey. Build the route around your own interests and schedule.`,
    ctaText: 'Build Your Road Trip',
    whoItsFor: 'Bengaluru → Mysuru → Coorg, Bengaluru → Hampi → Badami, Bengaluru → Ooty → Coonoor, Bengaluru → Wayanad, Bengaluru → Kabini → Coorg, Bengaluru → Gokarna → Udupi, Bengaluru → Tirupati → Chennai',
    whatsIncluded: [
      'Clean, comfortable outstation vehicles (Innova Crysta, Hycross, Fortuner, Sedans)',
      'Experienced long-distance highway chauffeurs knowledgeable about regional routes',
      'Flexible itineraries with freedom to stop and explore along the way',
      'All toll, parking, interstate taxes, and driver allowance covered',
      '24/7 customer care & emergency breakdown support'
    ],
    vehicleClasses: ['Executive Sedans', 'Premium SUVs', 'VIP Vans'],
    steps: [
      { number: '01', title: 'Route Customization', description: 'Choose your starting city, destinations, and trip duration.' },
      { number: '02', title: 'Vehicle Selection', description: 'Pick the right car for your group size and luggage needs.' },
      { number: '03', title: 'On the Road', description: 'Relax while your chauffeur navigates scenic highways and local terrain.' },
      { number: '04', title: 'Unforgettable Journey', description: 'Enjoy your vacation at your own speed with total peace of mind.' }
    ],
    useCases: [
      'Family Outstation Holidays',
      'South India Heritage & Nature Exploration',
      'Flexible Road Trips Across Karnataka, Kerala & Tamil Nadu'
    ],
    faqs: [
      { q: 'Is the itinerary fixed or can we change stops during the trip?', a: 'You have complete freedom to adjust stops and timings as you travel.' },
      { q: 'Are driver accommodation and meals handled by Suhalaya?', a: 'Yes, driver allowances are fully included in our transparent pricing.' }
    ]
  },
  {
    slug: 'pilgrimage-heritage-travel',
    name: 'Pilgrimage & Heritage Travel',
    shortTitle: 'Pilgrimage & Heritage',
    categoryCluster: 'journeys-beyond',
    categoryName: 'JOURNEYS BEYOND THE CITY',
    priority: 'P1',
    tagline: 'Comfortable journeys to pilgrimage, heritage and culturally significant destinations.',
    heroHeadline: 'Journeys That Deserve More Time.',
    heroSubheadline: 'Some destinations aren\'t about reaching the next stop quickly. They are about the people travelling with you and the places along the way.',
    description: `Some destinations aren't about reaching the next stop quickly. They are about the people travelling with you, the places along the way and the time spent there.

Plan comfortable chauffeur-driven journeys to pilgrimage destinations, heritage towns and culturally significant locations.

The itinerary can be planned around the places you want to visit rather than fitting your journey into a rigid route.`,
    ctaText: 'Plan Your Journey',
    whoItsFor: 'Families, Senior travellers, Small groups, Multi-generation trips, Heritage journeys, Pilgrimage circuits',
    whatsIncluded: [
      'Comfort-focused vehicles with easy entry/exit for senior citizens',
      'Courteous chauffeurs patient with elder travel needs and temple timings',
      'Customized pace with ample rest stops and relaxed driving',
      'Coverage across major temple towns (Tirupati, Madurai, Rameshwaram, Belur, Hampi)',
      'Luggage assistance and direct temple gate drop-offs where permitted'
    ],
    vehicleClasses: ['Premium SUVs', 'VIP Vans', 'Executive Sedans'],
    steps: [
      { number: '01', title: 'Circuit Planning', description: 'Identify sacred temples or historical monuments you wish to visit.' },
      { number: '02', title: 'Comfort Setup', description: 'Select an easy-access vehicle like Innova Hycross or Force Urbania.' },
      { number: '03', title: 'Relaxed Travel', description: 'Journey at a serene pace tailored to family & senior passenger comfort.' },
      { number: '04', title: 'Blessed Return', description: 'Safe return home after a peaceful spiritual or cultural pilgrimage.' }
    ],
    useCases: [
      'Multi-generation Family Pilgrimages',
      'Senior Citizen Heritage & Temple Tours',
      'Cultural Architectural Circuits in South India'
    ],
    faqs: [
      { q: 'Are your vehicles suitable for elderly family members?', a: 'Yes, vehicles like Innova Crysta and Force Urbania offer comfortable seating and easy entry/exit.' },
      { q: 'Can the driver adjust to early-morning darshan schedules?', a: 'Yes, our chauffeurs are accustomed to early-morning temple timings and rituals.' }
    ]
  },
  {
    slug: 'large-events-air-shows',
    name: 'Large Events & Air Shows',
    shortTitle: 'Large Events & Air Shows',
    categoryCluster: 'events-groups',
    categoryName: 'EVENTS & GROUPS',
    priority: 'P1',
    tagline: 'Fleet planning and transportation coordination for large gatherings.',
    heroHeadline: 'When Thousands Move, Every Minute Matters.',
    heroSubheadline: 'Large public events require a different approach to transportation. Multiple entry points. Restricted movement. Large crowds. Tight schedules.',
    description: `Large public events require a different approach to transportation.

Multiple entry points. Restricted movement. Large crowds. Tight schedules. Delegates, guests, teams and staff arriving from different locations.

The solution isn't simply adding more cars. It is creating a movement plan that accounts for fleet size, routes, timings, staging and passenger requirements.`,
    ctaText: 'Discuss Event Mobility',
    whoItsFor: 'BEFORE: Map arrivals, routes, staging areas and passenger groups. DURING: Coordinate vehicle movement around the event schedule. AFTER: Manage departures and return transportation.',
    whatsIncluded: [
      'Comprehensive fleet dispatch & traffic staging plan',
      'VIP protocol vehicles & high-capacity shuttle coaches',
      'Dedicated command control desk with ground ops leads',
      'Special venue access pass coordination & staging area management',
      'End-to-end arrival, event-duration, and departure logistics'
    ],
    vehicleClasses: ['Executive Sedans', 'Luxury Sedans', 'VIP Vans', 'Coaches'],
    steps: [
      { number: '01', title: 'Blueprint Mapping', description: 'Analyze venue access gates, security protocols, and staging zones.' },
      { number: '02', title: 'Fleet Mobilization', description: 'Deploy a tailored combination of luxury cars, vans, and shuttle buses.' },
      { number: '03', title: 'Live Control Desk', description: 'Monitor vehicle loops, VIP movements, and delegate transfers in real-time.' },
      { number: '04', title: 'Post-Event Wrap-up', description: 'Orderly departure execution avoiding gridlock and delays.' }
    ],
    useCases: [
      'Aero India & Defense Air Shows',
      'International Industrial Exhibitions & Trade Fairs',
      'Mega Cultural Festivals & Sports Conventions'
    ],
    faqs: [
      { q: 'Have you handled large-scale events like Aero India?', a: 'Yes, Suhalaya has decades of experience coordinating VIP and delegate mobility for major defense air shows and international expos.' },
      { q: 'How do you handle restricted security zones at venues?', a: 'Our team coordinates directly with event security for vehicle permits and designated staging badges.' }
    ]
  }
];
