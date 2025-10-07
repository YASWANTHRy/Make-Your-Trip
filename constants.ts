
import { Airport, Flight } from './types';

export const AIRPORTS: Airport[] = [
  { code: 'DEL', name: 'Indira Gandhi International Airport', city: 'New Delhi' },
  { code: 'BOM', name: 'Chhatrapati Shivaji Maharaj International Airport', city: 'Mumbai' },
  { code: 'BLR', name: 'Kempegowda International Airport', city: 'Bengaluru' },
  { code: 'MAA', name: 'Chennai International Airport', city: 'Chennai' },
  { code: 'CCU', name: 'Netaji Subhas Chandra Bose International Airport', city: 'Kolkata' },
  { code: 'HYD', name: 'Rajiv Gandhi International Airport', city: 'Hyderabad' },
  { code: 'DXB', name: 'Dubai International Airport', city: 'Dubai' },
  { code: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York' },
];

const getRandomAirport = (exclude?: Airport): Airport => {
  let airport;
  do {
    airport = AIRPORTS[Math.floor(Math.random() * AIRPORTS.length)];
  } while (exclude && airport.code === exclude.code);
  return airport;
};

export const MOCK_FLIGHTS: Flight[] = [
  {
    id: '1',
    airline: 'IndiGo',
    airlineLogo: 'https://picsum.photos/seed/indigo/40/40',
    flightNumber: '6E 204',
    from: AIRPORTS[0],
    to: AIRPORTS[1],
    departureTime: '08:55',
    arrivalTime: '11:05',
    duration: '2h 10m',
    stops: 0,
    price: 4850,
  },
  {
    id: '2',
    airline: 'Vistara',
    airlineLogo: 'https://picsum.photos/seed/vistara/40/40',
    flightNumber: 'UK 996',
    from: AIRPORTS[0],
    to: AIRPORTS[1],
    departureTime: '10:30',
    arrivalTime: '12:45',
    duration: '2h 15m',
    stops: 0,
    price: 5200,
  },
  {
    id: '3',
    airline: 'Air India',
    airlineLogo: 'https://picsum.photos/seed/airindia/40/40',
    flightNumber: 'AI 805',
    from: AIRPORTS[0],
    to: AIRPORTS[1],
    departureTime: '14:00',
    arrivalTime: '16:10',
    duration: '2h 10m',
    stops: 0,
    price: 5050,
  },
  {
    id: '4',
    airline: 'SpiceJet',
    airlineLogo: 'https://picsum.photos/seed/spicejet/40/40',
    flightNumber: 'SG 8701',
    from: AIRPORTS[2],
    to: AIRPORTS[3],
    departureTime: '06:20',
    arrivalTime: '07:20',
    duration: '1h 00m',
    stops: 0,
    price: 3500,
  },
  {
    id: '5',
    airline: 'IndiGo',
    airlineLogo: 'https://picsum.photos/seed/indigo/40/40',
    flightNumber: '6E 644',
    from: AIRPORTS[2],
    to: AIRPORTS[3],
    departureTime: '18:10',
    arrivalTime: '20:55',
    duration: '2h 45m',
    stops: 1,
    price: 4200,
  },
  {
    id: '6',
    airline: 'Vistara',
    airlineLogo: 'https://picsum.photos/seed/vistara/40/40',
    flightNumber: 'UK 809',
    from: AIRPORTS[4],
    to: AIRPORTS[5],
    departureTime: '20:45',
    arrivalTime: '22:50',
    duration: '2h 05m',
    stops: 0,
    price: 6100,
  },
];
