import React, { useState } from 'react';
import Image from 'next/image';

import tacs_logo from '../../public/tacs_logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm shadow-primary-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Image src={tacs_logo} alt="Your Brand Logo" width={130} height={40} /> {/* Adjust width and height as needed */}
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Join</a>
                        <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">About</a>
                        <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Events</a>
                        <a href="#" className="bg-white border-2 border-b-4 border-r-4 border-primary text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-light hover:text-white">Join our Discord</a>
                        <a href="#" className="bg-primary-light border-2 border-b-4 border-r-4 border-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-primary">Contact</a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Join</a>
                        <a href="#" className="block text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">About</a>
                        <a href="#" className="block text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Events</a>
                        <a href="#" className="block bg-primary-light border-2 border-primary    text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 mt-2">Join our Discord</a>
                        <a href="#" className="block bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-600 mt-2">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;