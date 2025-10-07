import React from 'react';
import { Flight } from '../types';
import FlightCard from './FlightCard';

interface SearchResultsProps {
  flights: Flight[];
  onBookNow: (flight: Flight) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ flights, onBookNow }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Flights</h2>
      <div className="space-y-4">
        {flights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} onBookNow={onBookNow} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;