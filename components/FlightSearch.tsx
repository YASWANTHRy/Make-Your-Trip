
import React, { useState } from 'react';
import { ArrowRightLeftIcon } from './Icons';

interface FlightSearchProps {
    onSearch: () => void;
}

const FlightSearch: React.FC<FlightSearchProps> = ({ onSearch }) => {
    const [tripType, setTripType] = useState('one-way');
    const [from, setFrom] = useState('New Delhi');
    const [to, setTo] = useState('Mumbai');

    return (
        <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6">
            <div className="flex space-x-4 border-b pb-4 mb-4">
                {['one-way', 'round-trip', 'multi-city'].map((type) => (
                    <button
                        key={type}
                        onClick={() => setTripType(type)}
                        className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${tripType === type ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
                    >
                        <span className="capitalize">{type.replace('-', ' ')}</span>
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4 items-end">
                {/* From */}
                <div className="relative lg:col-span-3">
                    <label htmlFor="from" className="block text-sm font-medium text-gray-500">From</label>
                    <input
                        id="from"
                        type="text"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        className="w-full mt-1 p-2 text-2xl font-bold border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Enter city or airport"
                    />
                </div>

                {/* Swap Button */}
                <div className="text-center self-center hidden lg:block">
                     <button className="p-2 rounded-full border-2 border-gray-300 hover:bg-gray-100 hover:border-blue-500 transition-all transform hover:rotate-180">
                        <ArrowRightLeftIcon />
                     </button>
                </div>
                
                {/* To */}
                <div className="lg:col-span-3">
                    <label htmlFor="to" className="block text-sm font-medium text-gray-500">To</label>
                    <input
                        id="to"
                        type="text"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        className="w-full mt-1 p-2 text-2xl font-bold border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Enter city or airport"
                    />
                </div>
                
                {/* Departure */}
                <div className="lg:col-span-3">
                    <label htmlFor="departure" className="block text-sm font-medium text-gray-500">Departure</label>
                     <input
                        id="departure"
                        type="date"
                        defaultValue={new Date().toISOString().substring(0, 10)}
                        className="w-full mt-1 p-2 text-lg font-bold border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <button
                    onClick={onSearch}
                    className="w-full md:w-auto text-white font-bold text-xl uppercase bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full px-12 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default FlightSearch;
