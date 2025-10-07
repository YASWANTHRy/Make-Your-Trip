import React from 'react';
import { Flight } from '../types';
import { PlaneTakeoffIcon, PlaneLandIcon } from './Icons';

interface FlightCardProps {
  flight: Flight;
  onBookNow: (flight: Flight) => void;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight, onBookNow }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
        {/* Airline Info */}
        <div className="md:col-span-1 flex items-center space-x-4">
          <img src={flight.airlineLogo} alt={`${flight.airline} logo`} className="h-10 w-10 rounded-full object-cover" />
          <div>
            <p className="font-bold text-gray-800">{flight.airline}</p>
            <p className="text-sm text-gray-500">{flight.flightNumber}</p>
          </div>
        </div>
        
        {/* Departure Info */}
        <div className="md:col-span-1 text-center md:text-left">
            <p className="text-xl font-bold text-gray-900">{flight.departureTime}</p>
            <p className="font-semibold text-gray-600">{flight.from.code}</p>
            <p className="text-sm text-gray-500">{flight.from.city}</p>
        </div>

        {/* Duration & Stops */}
        <div className="md:col-span-2 flex items-center justify-center text-center">
          <PlaneTakeoffIcon />
          <div className="flex-grow border-t-2 border-dotted border-gray-300 mx-2"></div>
          <div className="flex flex-col items-center">
             <p className="font-semibold text-gray-600">{flight.duration}</p>
             <p className="text-sm text-gray-500">{flight.stops > 0 ? `${flight.stops} Stop(s)` : 'Non-Stop'}</p>
          </div>
          <div className="flex-grow border-t-2 border-dotted border-gray-300 mx-2"></div>
          <PlaneLandIcon />
        </div>
        
        {/* Arrival Info */}
        <div className="md:col-span-1 text-center md:text-right">
            <p className="text-xl font-bold text-gray-900">{flight.arrivalTime}</p>
            <p className="font-semibold text-gray-600">{flight.to.code}</p>
            <p className="text-sm text-gray-500">{flight.to.city}</p>
        </div>

        {/* Price & Booking */}
        <div className="md:col-span-1 text-center md:text-right">
          <p className="text-2xl font-bold text-blue-600">₹{flight.price.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mb-2">per adult</p>
          <button 
            onClick={() => onBookNow(flight)}
            className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors w-full md:w-auto"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;