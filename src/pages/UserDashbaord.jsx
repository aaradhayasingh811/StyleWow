import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../components/Sidebar';
import MobileHeader from '../components/MobileHeader';
import DashboardContent from '../components/DashboardContent';
import ProfileContent from '../components/ProfileContent';
import WishlistContent from '../components/WishlistContent';
import FashionQuizForm from '../components/FashionQuizForm';
import { useNavigate } from 'react-router-dom';
const API_BASE = `${import.meta.env.VITE_API_BASE_URL}`;

const UserDashbaord = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const [history, setHistory]  = useState([]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetchProfile();
    fetchWishlist();
    fetchHistory();

  }, []);

   
  const fetchHistory = async() =>{
    try {
      const res = await axios.get(`${API_BASE}/get-history`, {
        withCredentials: true
      });
      
      console.log(res.data  , "his");
      setHistory(res.data.data);
    } catch (err) {
      console.error('Error fetching history', err);
      toast.error('Failed to load history data');
    }

  }

  const fetchProfile = async () => {
    try {
      const res = await axios.get(`${API_BASE}/profile`, {
        withCredentials: true
      });
      setProfileData(res.data);
    } catch (err) {
      console.error('Error fetching profile', err);
      toast.error('Failed to load profile data');
    }
  };

  const fetchWishlist = async () => {
    try {
      const res = await axios.get(`${API_BASE}/wishlist`, {
        withCredentials: true
      });
      setWishlist(res.data);
    } catch (err) {
      console.error('Error fetching wishlist', err);
      toast.error('Failed to load wishlist');
    }
  };

  const handleRemoveFromWishlist = async (id) => {
    try {
      await axios.delete(`${API_BASE}/wishlist/${id}`, {
        withCredentials: true
      });
      // setWishlist(wishlist.filter(item => item.id !== id));
      fetchWishlist();
      toast.success('Item removed from wishlist');
    } catch (err) {
      console.error('Error removing item', err);
      toast.error('Failed to remove item');
    }
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_BASE}/profile`, profileData, {
        withCredentials: true
      });
      toast.success('Profile updated successfully!');
    } catch (err) {
      console.error('Error updating profile', err);
      toast.error('Failed to update profile');
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = async() => {
     try {
      await axios.post(`${API_BASE}/logout`, profileData, {
        withCredentials: true
      });
      toast.success('Logout successfully!');
      setTimeout(()=>{
         navigate('/')
      },2000)
     
    } catch (err) {
      console.error('Error in logging out', err);
      toast.error('Error in logging out');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <ProfileContent 
            profileData={profileData} 
            onChange={handleProfileChange} 
            onSubmit={handleProfileSubmit} 
          />
        );
      case 'wishlist':
        return (
          <WishlistContent 
            wishlist={wishlist} 
            onRemove={handleRemoveFromWishlist} 
          />
        );
      case 'quiz':
        return <FashionQuizForm />;
      default:
        return <DashboardContent wishlistCount={wishlist.length} recentlyViewed={history} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <MobileHeader 
        isScrolled={isScrolled} 
        onMenuToggle={toggleMobileMenu} 
        mobileMenuOpen={mobileMenuOpen} 
      />

      <div className="container mx-auto px-4 pt-20 lg:pt-8 pb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {mobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
              onClick={toggleMobileMenu}
            />
          )}

          <Sidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            mobileMenuOpen={mobileMenuOpen} 
            setMobileMenuOpen={setMobileMenuOpen} 
            profileData={profileData} 
            wishlistCount={wishlist.length}
            onLogout={handleLogout}
          />
          
          <div className="flex-1 lg:ml-0">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashbaord;