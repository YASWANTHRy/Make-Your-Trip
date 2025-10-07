
import React, { useState } from 'react';
import { PlaneIcon, HotelIcon, TrainIcon, UserIcon, MenuIcon } from './Icons';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { icon: <PlaneIcon />, label: 'Flights' },
        { icon: <HotelIcon />, label: 'Hotels' },
        { icon: <TrainIcon />, label: 'Trains' },
    ];

    return (
        <header className="text-white p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_20,q_auto,w_100/partner-logos/2105.png" alt="MakeMyTrip Logo" className="h-8 mr-4" />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex flex-grow justify-center items-center space-x-4">
                    {navItems.map((item, index) => (
                        <a key={index} href="#" className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                            {item.icon}
                            <span>{item.label}</span>
                        </a>
                    ))}
                </nav>

                {/* Desktop User Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center space-x-2">
                        <UserIcon />
                        <span>Login or Create Account</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                       <MenuIcon />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 bg-blue-700 rounded-lg p-4">
                    <nav className="flex flex-col space-y-2">
                         {navItems.map((item, index) => (
                            <a key={index} href="#" className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                                {item.icon}
                                <span>{item.label}</span>
                            </a>
                        ))}
                         <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center space-x-2 mt-4">
                            <UserIcon />
                            <span>Login or Create Account</span>
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
