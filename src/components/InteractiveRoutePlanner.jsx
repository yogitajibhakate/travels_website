'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Navigation, Calendar, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function InteractiveRoutePlanner() {
  const [origin, setOrigin] = useState('Bengaluru');
  const [destination, setDestination] = useState('Coorg & Kabini');
  const [vehicle, setVehicle] = useState('Toyota Innova Crysta');

  const routesData = {
    'Bengaluru-Coorg & Kabini': {
      distance: '265 km (approx. 5.5 hrs)',
      suggestedDays: '3 Days / 2 Nights',
      highlights: 'Golden Temple Bylakuppe, Raja’s Seat sunset, Coffee estate walk, Nagarhole Wildlife Safari',
      idealFor: 'Executive Weekend Getaway & Family Retreats',
      recommendedVehicle: 'Toyota Innova Crysta / Fortuner'
    },
    'Bengaluru-Hampi & Badami': {
      distance: '340 km (approx. 6 hrs via NH50)',
      suggestedDays: '4 Days / 3 Nights',
      highlights: 'UNESCO Heritage Ruins, Virupaksha Temple, Lotus Mahal, Sunset at Hemakuta Hill',
      idealFor: 'Heritage & Architectural Explorers',
      recommendedVehicle: 'Innova Crysta / Urbania'
    },
    'Bengaluru-Chikmagalur & Sakleshpur': {
      distance: '240 km (approx. 4.5 hrs)',
      suggestedDays: '3 Days / 2 Nights',
      highlights: 'Mullayanagiri Peak drive, Hebbe Falls, Coffee plantations, Manjarabad Fort',
      idealFor: 'Nature Escapes & Misty Mountain Road Trips',
      recommendedVehicle: 'SUV / Sedan'
    },
    'Bengaluru-Ooty & Coonoor': {
      distance: '275 km (approx. 6 hrs via Bandipur Reserve)',
      suggestedDays: '3 Days / 2 Nights',
      highlights: 'Bandipur Forest Drive, 36 Hairpin Bends, Sim’s Park, Tea Garden Estate Walks',
      idealFor: 'Hilly Scenic Escapes',
      recommendedVehicle: 'Toyota Fortuner / Innova Crysta'
    },
    'Bengaluru-Gokarna & Murudeshwar': {
      distance: '480 km (approx. 9 hrs via NH48)',
      suggestedDays: '4 Days / 3 Nights',
      highlights: 'Om Beach, Kudle Beach sunset, Murudeshwar Shiva Statue, Coastal Cuisine Road Trip',
      idealFor: 'Coastal Road Journey & Beach Retreats',
      recommendedVehicle: 'Executive Sedan / Luxury SUV'
    }
  };

  const currentKey = `${origin}-${destination}`;
  const routeInfo = routesData[currentKey] || {
    distance: 'Customized Route Distance',
    suggestedDays: 'Flexible Itinerary',
    highlights: 'Tailored road journey customized to your requested stops and schedule',
    idealFor: 'Custom Travellers',
    recommendedVehicle: 'Any fleet category'
  };

  return (
    <section className="section" style={{ backgroundColor: '#0B1B2B', color: '#FFF' }} id="south-india-planner">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <div className="badge badge-sky" style={{ marginBottom: '16px', backgroundColor: 'rgba(0,180,216,0.18)', color: '#48CAE4' }}>
            <Compass size={14} style={{ marginRight: '6px' }} /> South India Chauffeur Journeys
          </div>
          <h2 style={{ color: '#FFF', fontSize: '2.4rem' }}>
            South India. Your Route. Your Pace. Our Chauffeur.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', marginTop: '12px' }}>
            Interactive Route Planner: Select your starting city and destination circuit to preview your custom trip.
          </p>
        </div>

        {/* Interactive Planner Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'stretch' }}>
          
          {/* Controls Panel */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '32px' }}>
            <h3 style={{ color: '#FFF', fontSize: '1.3rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Navigation size={18} color="#00B4D8" /> Configure Your Journey
            </h3>

            {/* Select Origin */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>
                Starting Hub / Departure City
              </label>
              <select 
                value={origin} 
                onChange={(e) => setOrigin(e.target.value)}
                style={{ width: '100%', padding: '14px 16px', borderRadius: '10px', backgroundColor: 'rgba(7,15,30,0.8)', color: '#FFF', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.95rem' }}
              >
                <option value="Bengaluru">Bengaluru Hub</option>
                <option value="Chennai">Chennai Hub</option>
                <option value="Hyderabad">Hyderabad Hub</option>
                <option value="Kochi">Kochi / Trivandrum</option>
              </select>
            </div>

            {/* Select Destination */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>
                Destination Circuit
              </label>
              <select 
                value={destination} 
                onChange={(e) => setDestination(e.target.value)}
                style={{ width: '100%', padding: '14px 16px', borderRadius: '10px', backgroundColor: 'rgba(7,15,30,0.8)', color: '#FFF', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.95rem' }}
              >
                <option value="Coorg & Kabini">Coorg & Kabini Wildlife Circuit</option>
                <option value="Hampi & Badami">Hampi & Badami UNESCO Heritage</option>
                <option value="Chikmagalur & Sakleshpur">Chikmagalur & Sakleshpur Coffee Hills</option>
                <option value="Ooty & Coonoor">Ooty & Coonoor Nilgiri Hills</option>
                <option value="Gokarna & Murudeshwar">Gokarna & Murudeshwar Coastal Trail</option>
              </select>
            </div>

            {/* Select Vehicle Class */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>
                Preferred Vehicle Category
              </label>
              <select 
                value={vehicle} 
                onChange={(e) => setVehicle(e.target.value)}
                style={{ width: '100%', padding: '14px 16px', borderRadius: '10px', backgroundColor: 'rgba(7,15,30,0.8)', color: '#FFF', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.95rem' }}
              >
                <option value="Toyota Innova Crysta">Toyota Innova Crysta (6 Passengers + Driver)</option>
                <option value="Toyota Fortuner">Toyota Fortuner 4x4 (6 Passengers + Driver)</option>
                <option value="Executive Sedan">Executive Sedan (3 Passengers + Driver)</option>
                <option value="Force Urbania / Traveller">Force Urbania Luxury Van (9-15 Passengers + Driver)</option>
              </select>
            </div>

            <div style={{ backgroundColor: 'rgba(0,180,216,0.12)', border: '1px solid rgba(0,180,216,0.25)', padding: '14px 16px', borderRadius: '12px', fontSize: '0.85rem', color: '#90E0EF', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={18} color="#00B4D8" style={{ flexShrink: 0 }} />
              <span>Chauffeur allowance, fuel, toll taxes & state permit charges included in quote.</span>
            </div>
          </div>

          {/* Route Summary Display */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: '20px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="badge badge-sky" style={{ backgroundColor: 'rgba(0,180,216,0.2)', color: '#48CAE4', border: 'none' }}>
                  {routeInfo.suggestedDays}
                </span>
                <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', fontWeight: '600' }}>
                  {routeInfo.distance}
                </span>
              </div>

              <h3 style={{ color: '#FFF', fontSize: '1.6rem', marginBottom: '12px' }}>
                {origin} ➔ {destination}
              </h3>

              <div style={{ fontSize: '0.9rem', color: '#00B4D8', fontWeight: '700', marginBottom: '20px' }}>
                Selected Vehicle: {vehicle}
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                  Route Highlights
                </div>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.98rem', lineHeight: '1.6' }}>
                  {routeInfo.highlights}
                </p>
              </div>

              <div style={{ marginBottom: '24px', backgroundColor: 'rgba(7,15,30,0.5)', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Ideal For
                </div>
                <div style={{ color: '#FFF', fontWeight: '600', fontSize: '0.92rem' }}>
                  {routeInfo.idealFor}
                </div>
              </div>
            </div>

            <div>
              <Link 
                href="/services/south-india-road-journeys" 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '16px', fontSize: '0.95rem' }}
              >
                Book This Circuit Itinerary <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
