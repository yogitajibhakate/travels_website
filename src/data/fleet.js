export const fleetData = [
  {
    id: 'economy',
    tag: 'Economy',
    name: 'Economy',
    image: '',
    models: ['Maruti Suzuki Dzire', 'Hyundai Aura', 'Hyundai Verna'],
    capacity: '3 Passengers (+ Chauffeur)',
    idealFor: 'Everyday corporate travel, point-to-point city journeys, airport transfers, and budget-conscious business movement.',
    features: ['3 Comfortable Passenger Seats', 'Comfortable A/C', 'Ample Luggage Space', 'GPS Tracking'],
    cars: [
      {
        name: 'Maruti Suzuki Dzire',
        type: 'Economy Sedan',
        seats: '3 Seater',
        ac: 'Comfortable A/C',
        luggage: '2 Medium Bags',
        image: '/images/fleet/maruti-dzire.jpg'
      },
      {
        name: 'Hyundai Aura',
        type: 'Economy Sedan',
        seats: '3 Seater',
        ac: 'Comfortable A/C',
        luggage: '2 Medium Bags',
        image: '/images/fleet/hyundai-aura.jpg'
      },
      {
        name: 'Hyundai Verna',
        type: 'Economy Sedan',
        seats: '3 Seater',
        ac: 'Comfortable A/C',
        luggage: '3 Bags',
        image: '/images/fleet/hyundai-verna.jpg'
      }
    ]
  },
  {
    id: 'executive',
    tag: 'Executive',
    name: 'Executive',
    image: '',
    models: ['Maruti Suzuki Ciaz'],
    capacity: '3 Passengers (+ Chauffeur)',
    idealFor: 'Executive city travel, client meetings, business visits, and high-comfort corporate transfers.',
    features: ['3 Executive Passenger Seats', 'Executive Legroom', 'Rear A/C Vents', 'Charging Ports'],
    cars: [
      {
        name: 'Maruti Suzuki Ciaz',
        type: 'Executive Sedan',
        seats: '3 Seater',
        ac: 'Climate Control A/C',
        luggage: '3 Large Bags',
        image: '/images/fleet/maruti-ciaz.jpg'
      }
    ]
  },
  {
    id: 'premium',
    tag: 'Premium',
    name: 'Premium',
    image: '',
    models: ['Toyota Innova Crysta (6 Pax)', 'Toyota Innova Hycross (6 Pax)', 'Toyota Fortuner (6 Pax)', 'Toyota Camry (3 Pax)'],
    capacity: '3–6 Passengers (+ Chauffeur)',
    idealFor: 'Executive travel, family road trips, group airport movement, and outstation chauffeur journeys.',
    features: ['Reclining Captain Seats', 'Hybrid Luxury Options', 'Triple-zone A/C', 'Premium Suspension'],
    cars: [
      {
        name: 'Toyota Innova Crysta',
        type: 'Premium MPV',
        seats: '6 Seater',
        ac: 'Triple-zone A/C',
        luggage: '4 Large Bags',
        image: '/images/fleet/toyota-innova-crysta.jpg'
      },
      {
        name: 'Toyota Innova Hycross',
        type: 'Premium Hybrid MPV',
        seats: '6 Seater',
        ac: 'Dual-zone Climate Control',
        luggage: '4 Large Bags',
        image: '/images/fleet/toyota-innova-hycross.jpg'
      },
      {
        name: 'Toyota Fortuner',
        type: 'Premium SUV',
        seats: '6 Seater',
        ac: 'Rear AC Vents',
        luggage: '4 Bags',
        image: '/images/fleet/toyota-fortuner.jpg'
      },
      {
        name: 'Toyota Camry',
        type: 'Premium Hybrid Sedan',
        seats: '3 Seater',
        ac: 'Reclining Rear Seats & A/C',
        luggage: '3 Large Bags',
        image: '/images/fleet/toyota-camry.jpg'
      }
    ]
  },
  {
    id: 'luxury',
    tag: 'Luxury',
    name: 'Luxury',
    image: '',
    models: ['Toyota Vellfire / Audi Q7 (6 Pax)', 'BMW 5 & 7 Series (3 Pax)', 'Mercedes-Benz E & S-Class (3 Pax)', 'Audi A4 (3 Pax)'],
    capacity: '3–6 Passengers (+ Chauffeur)',
    idealFor: 'VIP leadership, visiting C-suite executives, high-profile corporate delegates, and luxury wedding mobility.',
    features: ['Ultra Luxury Lounge Seats', 'Ambient Lighting', 'Soft-close Doors', 'Executive Privacy Glass', 'Air Suspension'],
    cars: [
      {
        name: 'Mercedes-Benz E & S-Class',
        type: 'Ultra Luxury Sedan',
        seats: '3 Seater',
        ac: 'Thermotronic Multi-zone A/C',
        luggage: '3 Large Bags',
        image: '/images/fleet/mercedes-s-class.jpg'
      },
      {
        name: 'BMW 5 & 7 Series',
        type: 'Luxury Executive Sedan',
        seats: '3 Seater',
        ac: 'Ambient Climate Control',
        luggage: '3 Large Bags',
        image: '/images/fleet/bmw-7-series.jpg'
      },
      {
        name: 'Toyota Vellfire',
        type: 'VIP Lounge MPV',
        seats: '6 Seater',
        ac: 'Executive Ottoman & Triple A/C',
        luggage: '5 Bags',
        image: '/images/fleet/toyota-vellfire.jpg'
      },
      {
        name: 'Audi A4 / Q7',
        type: 'Luxury Sedan / SUV',
        seats: '3–6 Seater',
        ac: 'Multi-zone Climate A/C',
        luggage: '4 Large Bags',
        image: ''
      }
    ]
  },
  {
    id: 'multi-passenger',
    tag: 'Multi-passenger',
    name: 'Multi-passenger',
    image: '',
    models: [
      'Toyota Commuter VIP Van (9–13 Pax)',
      'Force Urbania (8-15 Pax)',
      'Premium AC Coaches (23–48 Pax)',
      'Volvo / Benz Luxury Buses (44 Pax)'
    ],
    capacity: '8–48 Passengers (+ Chauffeur / Crew)',
    idealFor: 'Group transportation, corporate team outings, event shuttles, wedding guest transfers, and large delegation mobility.',
    features: ['1x1 & 2x1 Reclining Seats', 'High Ceiling Standing Height', 'Panoramic Windows', 'Air Suspension & Underbody Luggage Bays'],
    cars: [
      {
        name: 'Force Urbania',
        type: 'Luxury Commuter Van',
        seats: '8–15 Seater',
        ac: 'Individual Air Vents & High Roof',
        luggage: 'Large Luggage Space',
        image: ''
      },
      {
        name: 'Toyota Commuter VIP Van',
        type: 'VIP Passenger Van',
        seats: '9–13 Seater',
        ac: 'Full Cabin A/C',
        luggage: 'Dedicated Rear Luggage',
        image: ''
      },
      {
        name: 'Premium AC Coaches',
        type: 'Executive Group Coach',
        seats: '23–48 Seater',
        ac: 'Central High-power A/C',
        luggage: 'Underbody Luggage Bays',
        image: ''
      },
      {
        name: 'Volvo / Benz Luxury Bus',
        type: 'Intercity Luxury Highway Coach',
        seats: '44 Seater',
        ac: 'Multi-zone Climate Control',
        luggage: 'Massive Underfloor Bay',
        image: ''
      }
    ]
  }
];

