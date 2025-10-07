export interface Airport {
  code: string;
  name: string;
  city: string;
}

export interface Flight {
  id: string;
  airline: string;
  airlineLogo: string;
  flightNumber: string;
  from: Airport;
  to: Airport;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  price: number;
}

export interface UserDetails {
  fullName: string;
  email: string;
  phone: string;
}