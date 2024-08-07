import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white text-xl font-bold">
            <Link to="/">Prabhu's Learning Hub</Link>
          </div>
          <div className="hidden md:flex ml-20 space-x-8">
            <Link to="/" className="text-white hover:text-gray-400 hover:border-b-2 hover:border-yellow-500">Home</Link>
            <Link to="/catalog" className="text-white hover:text-gray-400 hover:border-b-2 hover:border-yellow-500">Catalog</Link>
            <Link to="/about" className="text-white hover:text-gray-400 hover:border-b-2 hover:border-yellow-500">About Us</Link>
            <Link to="/contact" className="text-white hover:text-gray-400 hover:border-b-2 hover:border-yellow-500">Contact Us</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
          </div>
          <Link to="/login" className="text-white hover:text-gray-400 hover:border-b-2 hover:border-yellow-500">Login</Link>
          <Link to="/signup" className="text-white hover:text-gray-400 hover:border-b-2 hover:border-yellow-500">Signup</Link>
          <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-700 p-4">
          <Link to="/" className="block text-white hover:text-gray-400 py-2">Home</Link>
          <Link to="/catalog" className="block text-white hover:text-gray-400 py-2">Catalog</Link>
          <Link to="/about" className="block text-white hover:text-gray-400 py-2">About Us</Link>
          <Link to="/contact" className="block text-white hover:text-gray-400 py-2">Contact Us</Link>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="block w-full px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
