import React from 'react'
import { useState, useEffect } from 'react';
import { 
  FiArrowUp, 
  FiShoppingBag, 
  FiAward, 
  FiHeart, 
  FiTrendingUp, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiUser, 
  FiCalendar, 
  FiFilter,
  FiSettings 
} from 'react-icons/fi';
import { FaRegHeart } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

const NavDash = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const openWishList = () => {
    // Wishlist functionality
  }

  const openSettings = () => {
    // Settings functionality
  }

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // Perform logout actions
      setIsLoggedIn(false);
      // You might want to add additional logout logic here (clear tokens, etc.)
    } else {
      // Perform login actions
      setIsLoggedIn(true);
      // You might want to redirect to login page or show login modal
    }
  };

  return (
    <nav className="bg-white text-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FiShoppingBag className="text-2xl text-pink-500" />
          <span className="text-xl font-bold text-pink-600">StyleWow</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="hover:text-pink-500 transition font-medium"><IoHomeSharp className='text-2xl'/></a>
          <button 
            onClick={openWishList}
            className={`text-gray-700 hover:text-pink-500 px-4 py-2 rounded-lg font-medium transition`}
          >
           <FaRegHeart className='text-2xl'/>
          </button>
          <button 
            onClick={openSettings}
            className="text-gray-700 hover:text-pink-500 px-4 py-2 rounded-lg font-medium transition"
            title="Settings"
          >
            <FiSettings className='text-2xl'/>
          </button>
          <button 
            onClick={handleAuthClick}
            className={`${isLoggedIn ? 'bg-gray-500 hover:bg-gray-600' : 'bg-pink-500 hover:bg-pink-600'} text-white px-4 py-2 rounded-lg font-medium transition ml-4`}
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none text-gray-700"
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
        
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="hover:text-pink-500 transition font-medium" onClick={toggleMobileMenu}>Home</a>
            <button 
              onClick={() => {
                handleAuthClick();
                toggleMobileMenu();
              }}
              className={`${isLoggedIn ? 'bg-gray-500 hover:bg-gray-600' : 'bg-pink-500 hover:bg-pink-600'} text-white px-4 py-2 rounded-lg font-medium transition mt-2`}
            >
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
            <button 
              onClick={() => {
                openWishList();
                toggleMobileMenu();
              }}
              className={`bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition`}
            >
              WishList
            </button>
            <button 
              onClick={() => {
                openSettings();
                toggleMobileMenu();
              }}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-medium transition"
            >
              Settings
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavDash;