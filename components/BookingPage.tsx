import React, { useState } from 'react';
import { Flight, UserDetails } from '../types';
import { PlaneTakeoffIcon, PlaneLandIcon, ChevronLeftIcon } from './Icons';

interface BookingPageProps {
  flight: Flight;
  onProceed: (details: UserDetails) => void;
  onBack: () => void;
}

const BookingStepper: React.FC<{ currentStep: number }> = ({ currentStep }) => (
  <div className="flex items-center justify-center space-x-4 md:space-x-8 text-sm md:text-base mb-6">
    <div className={`flex items-center ${currentStep >= 1 ? 'text-blue-600 font-semibold' : 'text-gray-400'}`}>
      <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center mr-2 ${currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>1</div>
      Traveller Details
    </div>
    <div className="flex-1 border-t-2 border-gray-300"></div>
    <div className={`flex items-center ${currentStep >= 2 ? 'text-blue-600 font-semibold' : 'text-gray-400'}`}>
      <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center mr-2 ${currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>2</div>
      Payment
    </div>
     <div className="flex-1 border-t-2 border-gray-300"></div>
    <div className={`flex items-center ${currentStep >= 3 ? 'text-blue-600 font-semibold' : 'text-gray-400'}`}>
       <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center mr-2 ${currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>3</div>
      Confirmation
    </div>
  </div>
);


const BookingPage: React.FC<BookingPageProps> = ({ flight, onProceed, onBack }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!fullName || !email || !phone) {
            setError('All fields are required.');
            return;
        }
        setError('');
        onProceed({ fullName, email, phone });
    };
    
    const taxes = Math.round(flight.price * 0.18);
    const total = flight.price + taxes;

    return (
        <div className="bg-white rounded-xl shadow-2xl p-4 md:p-8">
            <button onClick={onBack} className="flex items-center text-blue-600 font-semibold mb-4 hover:underline">
                <ChevronLeftIcon />
                Back to Search Results
            </button>

            <BookingStepper currentStep={1} />
            
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Review Your Itinerary</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Side: Form */}
                <div className="lg:col-span-2">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                         <h2 className="text-xl font-bold text-gray-800 mb-4">Flight Summary</h2>
                         <div className="flex items-center space-x-4 mb-4">
                            <img src={flight.airlineLogo} alt={flight.airline} className="h-10 w-10 rounded-full" />
                            <div>
                                <p className="font-bold text-lg">{flight.airline}</p>
                                <p className="text-sm text-gray-500">{flight.flightNumber}</p>
                            </div>
                         </div>
                         <div className="flex justify-between items-center text-center">
                            <div>
                                <p className="text-2xl font-bold">{flight.departureTime}</p>
                                <p className="font-semibold">{flight.from.code}</p>
                                <p className="text-sm text-gray-500">{flight.from.city}</p>
                            </div>
                            <div className="flex-1 flex flex-col items-center px-4">
                                <p className="text-sm text-gray-500">{flight.duration}</p>
                                <div className="w-full border-t-2 border-dotted border-gray-300 my-1"></div>
                                <p className="text-sm text-gray-500">{flight.stops > 0 ? `${flight.stops} Stop(s)` : 'Non-Stop'}</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{flight.arrivalTime}</p>
                                <p className="font-semibold">{flight.to.code}</p>
                                <p className="text-sm text-gray-500">{flight.to.city}</p>
                            </div>
                         </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Traveller Details</h2>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="fullName" value={fullName} onChange={e => setFullName(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. John Doe"/>
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. john.doe@example.com"/>
                            </div>
                             <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. 9876543210" />
                            </div>
                        </div>
                        {error && <p className="text-red-500 mt-4">{error}</p>}
                    </form>
                </div>

                {/* Right Side: Price */}
                <div className="lg:col-span-1">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-10">
                        <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">Price Summary</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Base Fare (1 Adult)</span>
                                <span className="font-medium">₹{flight.price.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Taxes & Surcharges</span>
                                <span className="font-medium">₹{taxes.toLocaleString()}</span>
                            </div>
                        </div>
                        <div className="border-t my-4"></div>
                        <div className="flex justify-between text-xl font-bold">
                            <span>Total Amount</span>
                            <span>₹{total.toLocaleString()}</span>
                        </div>
                        <button onClick={handleSubmit} className="mt-6 w-full text-white font-bold text-lg uppercase bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
