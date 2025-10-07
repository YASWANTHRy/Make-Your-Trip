import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FlightSearch from './components/FlightSearch';
import SearchResults from './components/SearchResults';
import BookingPage from './components/BookingPage';
import PaymentPage from './components/PaymentPage';
import TicketPage from './components/TicketPage';
import { Flight, UserDetails } from './types';
import { MOCK_FLIGHTS } from './constants';

type View = 'search' | 'booking' | 'payment' | 'ticket';

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Flight[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<View>('search');
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [bookingDetails, setBookingDetails] = useState<UserDetails | null>(null);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const handleSearch = () => {
    setIsLoading(true);
    setSearchResults([]);
    setHasSearched(true);
    setTimeout(() => {
      // In a real app, you would filter MOCK_FLIGHTS based on search criteria
      setSearchResults(MOCK_FLIGHTS);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleBookNow = (flight: Flight) => {
    setSelectedFlight(flight);
    setCurrentView('booking');
  };

  const handleProceedToPayment = (details: UserDetails) => {
    setBookingDetails(details);
    setCurrentView('payment');
  };

  const handlePaymentSuccess = () => {
    setCurrentView('ticket');
  };

  const handleNewSearch = () => {
    setCurrentView('search');
    setSelectedFlight(null);
    setBookingDetails(null);
    setSearchResults([]);
    setHasSearched(false);
  };
  
  const handleBack = () => {
    if (currentView === 'booking') setCurrentView('search');
    if (currentView === 'payment') setCurrentView('booking');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'booking':
        return selectedFlight && <BookingPage flight={selectedFlight} onProceed={handleProceedToPayment} onBack={handleBack} />;
      case 'payment':
        return selectedFlight && bookingDetails && <PaymentPage flight={selectedFlight} bookingDetails={bookingDetails} onPaymentSuccess={handlePaymentSuccess} onBack={handleBack} />;
      case 'ticket':
        return selectedFlight && bookingDetails && <TicketPage flight={selectedFlight} bookingDetails={bookingDetails} onNewSearch={handleNewSearch} />;
      case 'search':
      default:
        return (
          <>
            <FlightSearch onSearch={handleSearch} />
            {isLoading && (
              <div className="mt-8 text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                <p className="mt-4 text-lg font-semibold text-gray-700">Finding the best flights for you...</p>
              </div>
            )}
            {searchResults.length > 0 && !isLoading && (
              <SearchResults flights={searchResults} onBookNow={handleBookNow} />
            )}
            {!isLoading && searchResults.length === 0 && hasSearched && (
                 <div className="mt-8 text-center bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-800">No Flights Found</h2>
                    <p className="text-gray-600 mt-2">We couldn't find any flights for your search. Please try different dates or destinations.</p>
                </div>
            )}
             {!isLoading && !hasSearched && (
              <div className="mt-8 text-center bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-800">Welcome to Make My Trip Clone</h2>
                <p className="text-gray-600 mt-2">Enter your travel details above to find the best flights.</p>
                <img src="https://picsum.photos/800/400?random=1" alt="Travel illustration" className="mx-auto mt-4 rounded-lg"/>
              </div>
            )}
          </>
        );
    }
  };


  return (
    <div className="min-h-screen bg-gray-100">
      <div className={`relative ${currentView === 'search' ? 'h-[250px] md:h-[400px]' : 'h-[120px]'} bg-gradient-to-br from-blue-600 to-blue-800 transition-all duration-300`}>
        <Header />
      </div>

      <main className={`relative ${currentView === 'search' ? '-mt-[180px] md:-mt-[280px]' : '-mt-[60px]'} px-4 pb-10`}>
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 Make My Trip Clone. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;