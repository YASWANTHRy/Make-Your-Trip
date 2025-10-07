import React, { useEffect, useState } from 'react';
import { Flight, UserDetails } from '../types';
import { CheckCircleIcon, PlaneTakeoffIcon, PlaneLandIcon, QrCodeIcon } from './Icons';

interface TicketPageProps {
  flight: Flight;
  bookingDetails: UserDetails;
  onNewSearch: () => void;
}

const TicketPage: React.FC<TicketPageProps> = ({ flight, bookingDetails, onNewSearch }) => {
    const [pnr, setPnr] = useState('');

    useEffect(() => {
        // Generate a random 6-character alphanumeric PNR
        const randomPnr = Math.random().toString(36).substring(2, 8).toUpperCase();
        setPnr(randomPnr);
    }, []);

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white text-center rounded-xl shadow-2xl p-4 md:p-8 mb-8">
                <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto" />
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">Booking Confirmed!</h1>
                <p className="text-gray-600 mt-2">Your e-ticket has been generated. A copy has been sent to {bookingDetails.email}.</p>
                 <button 
                    onClick={onNewSearch}
                    className="mt-6 text-white font-bold text-lg bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full px-10 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                    Book Another Flight
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                         <img src={flight.airlineLogo} alt={flight.airline} className="h-8 w-8 rounded-full bg-white p-1" />
                         <h2 className="font-bold text-xl">{flight.airline} E-Ticket</h2>
                    </div>
                    <div>
                        <p className="text-sm">PNR</p>
                        <p className="font-bold text-lg tracking-wider">{pnr}</p>
                    </div>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b pb-4">
                        <div>
                            <p className="text-sm text-gray-500">Passenger</p>
                            <p className="font-semibold text-lg">{bookingDetails.fullName}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Flight No.</p>
                            <p className="font-semibold text-lg">{flight.flightNumber}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Date</p>
                            <p className="font-semibold text-lg">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center justify-between my-6">
                        <div className="text-center md:text-left">
                            <p className="text-sm text-gray-500">From</p>
                            <p className="font-bold text-2xl text-gray-800">{flight.from.city} ({flight.from.code})</p>
                            <p className="font-semibold">{flight.departureTime}</p>
                        </div>
                         <div className="flex-1 w-full md:w-auto flex items-center justify-center text-center my-4 md:my-0 px-4">
                            <PlaneTakeoffIcon />
                            <div className="flex-grow border-t-2 border-dotted border-gray-300 mx-2"></div>
                             <p className="font-semibold text-gray-600">{flight.duration}</p>
                            <div className="flex-grow border-t-2 border-dotted border-gray-300 mx-2"></div>
                            <PlaneLandIcon />
                        </div>
                        <div className="text-center md:text-right">
                             <p className="text-sm text-gray-500">To</p>
                            <p className="font-bold text-2xl text-gray-800">{flight.to.city} ({flight.to.code})</p>
                            <p className="font-semibold">{flight.arrivalTime}</p>
                        </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
                         <div className="w-24 h-24 p-1 bg-white border rounded-md">
                             <QrCodeIcon />
                         </div>
                         <div>
                            <h4 className="font-bold">Have a pleasant journey!</h4>
                            <p className="text-sm text-gray-600">Please show this e-ticket at the airport check-in counter.</p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketPage;
