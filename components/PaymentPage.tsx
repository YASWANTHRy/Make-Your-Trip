import React, { useState } from 'react';
import { Flight, UserDetails } from '../types';
import { QrCodeIcon, ChevronLeftIcon } from './Icons';

interface PaymentPageProps {
  flight: Flight;
  bookingDetails: UserDetails;
  onPaymentSuccess: () => void;
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

const PaymentPage: React.FC<PaymentPageProps> = ({ flight, bookingDetails, onPaymentSuccess, onBack }) => {
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePay = () => {
        setIsProcessing(true);
        setTimeout(() => {
            onPaymentSuccess();
        }, 2500); // Simulate payment processing delay
    };

    const taxes = Math.round(flight.price * 0.18);
    const total = flight.price + taxes;

    return (
        <div className="bg-white rounded-xl shadow-2xl p-4 md:p-8">
            <button onClick={onBack} className="flex items-center text-blue-600 font-semibold mb-4 hover:underline">
                <ChevronLeftIcon />
                Back to Traveller Details
            </button>
            
            <BookingStepper currentStep={2} />

            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Complete Your Payment</h1>
            
            <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Order Summary</h2>
                <div className="text-gray-600 space-y-1 mb-4">
                    <p><strong>Flight:</strong> {flight.airline} {flight.flightNumber}</p>
                    <p><strong>Route:</strong> {flight.from.city} to {flight.to.city}</p>
                    <p><strong>Passenger:</strong> {bookingDetails.fullName}</p>
                </div>

                <div className="border-t pt-4">
                    <div className="flex justify-between text-xl font-bold text-blue-600 mb-6">
                        <span>Total Amount:</span>
                        <span>₹{total.toLocaleString()}</span>
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold text-lg mb-2">Pay using UPI</h3>
                        <div className="w-40 h-40 mx-auto bg-white p-2 border rounded-lg">
                           <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=makemytrip@apl&pn=MakeMyTrip&am=${total}" alt="UPI QR Code" />
                        </div>
                        <p className="text-gray-500 my-4">OR</p>
                         <div>
                            <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">Enter UPI ID</label>
                            <input type="text" id="upiId" defaultValue="example@upi" className="mt-1 text-center block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <button 
                            onClick={handlePay}
                            disabled={isProcessing}
                            className="mt-6 w-full text-white font-bold text-lg uppercase bg-gradient-to-r from-green-500 to-teal-500 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isProcessing ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                    Processing...
                                </div>
                            ) : `Pay ₹${total.toLocaleString()}`}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
