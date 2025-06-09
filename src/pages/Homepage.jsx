// import { useState, useEffect } from 'react';
// import { FiArrowUp, FiShoppingBag, FiAward, FiHeart, FiTrendingUp, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

// const Homepage = () => {
//   const [showScroll, setShowScroll] = useState(false);

//   useEffect(() => {
//     const checkScroll = () => {
//       if (!showScroll && window.pageYOffset > 400) {
//         setShowScroll(true);
//       } else if (showScroll && window.pageYOffset <= 400) {
//         setShowScroll(false);
//       }
//     };

//     window.addEventListener('scroll', checkScroll);
//     return () => window.removeEventListener('scroll', checkScroll);
//   }, [showScroll]);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className="font-sans text-gray-800">
//       {/* Navigation Bar */}
//       <nav className="bg-pink-700 text-white shadow-lg sticky top-0 z-50">
//         <div className="container mx-auto px-6 py-3 flex justify-between items-center">
//           <div className="flex items-center space-x-2">
//             <FiShoppingBag className="text-2xl" />
//             <span className="text-xl font-bold">StyleWow</span>
//           </div>
//           <div className="hidden md:flex space-x-8">
//             <a href="#home" className="hover:text-pink-200 transition">Home</a>
//             <a href="#about" className="hover:text-pink-200 transition">About</a>
//             <a href="#features" className="hover:text-pink-200 transition">Features</a>
//             <a href="#why-us" className="hover:text-pink-200 transition">Why Us</a>
//             <a href="#subscription" className="hover:text-pink-200 transition">Subscription</a>
//             <a href="#contact" className="hover:text-pink-200 transition">Contact</a>
//           </div>
//           <button className="md:hidden focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="bg-gradient-to-r from-pink-50 to-pink-100 py-20">
//         <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 mb-10 md:mb-0">
//             <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6">
//               Discover Perfect Outfits for Your Body & Occasion
//             </h1>
//             <p className="text-lg text-gray-700 mb-8">
//               StyleWow analyzes top fashion sites to recommend clothing that flatters your body type and suits any event.
//             </p>
//             <div className="flex space-x-4">
//               <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-lg">
//                 Get Started
//               </button>
//               <button className="border-2 border-pink-600 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-lg font-medium transition">
//                 Learn More
//               </button>
//             </div>
//           </div>
//           <div className="md:w-1/2 flex justify-center">
//             <img 
//               src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
//               alt="Fashionable woman" 
//               className="rounded-lg shadow-xl max-w-full h-auto"
//             />
//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section id="about" className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-pink-700 mb-12">About StyleWow</h2>
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
//               <img 
//                 src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
//                 alt="About StyleWow" 
//                 className="rounded-lg shadow-lg"
//               />
//             </div>
//             <div className="md:w-1/2">
//               <h3 className="text-2xl font-semibold text-pink-600 mb-4">Your Personal Fashion Assistant</h3>
//               <p className="text-gray-700 mb-4">
//                 StyleWow was born from the frustration of endless scrolling through fashion sites without finding the perfect outfit.
//                 We leverage advanced algorithms to scrape and analyze thousands of products from top retailers like Myntra, Amazon, and Flipkart.
//               </p>
//               <p className="text-gray-700 mb-4">
//                 Our technology matches clothing items to your unique body shape, skin tone, and personal style preferences,
//                 saving you time and ensuring you always look your best for any occasion.
//               </p>
//               <p className="text-gray-700">
//                 Whether it's a wedding, job interview, or casual day out, StyleWow finds outfits that make you say "Wow!"
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-16 bg-pink-50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-pink-700 mb-12">Our Amazing Features</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
//               <div className="text-pink-600 mb-4">
//                 <FiTrendingUp className="text-4xl" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Trend Analysis</h3>
//               <p className="text-gray-700">
//                 We constantly monitor fashion trends across multiple platforms to bring you the most current styles.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
//               <div className="text-pink-600 mb-4">
//                 <FiHeart className="text-4xl" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Body Type Matching</h3>
//               <p className="text-gray-700">
//                 Our algorithm recommends clothing that flatters your specific body shape and proportions.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
//               <div className="text-pink-600 mb-4">
//                 <FiAward className="text-4xl" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Occasion-Based</h3>
//               <p className="text-gray-700">
//                 Get perfect outfit recommendations tailored to specific events and their dress codes.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Us Section */}
//       <section id="why-us" className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-pink-700 mb-12">Why Choose StyleWow?</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-pink-50 p-6 rounded-lg">
//               <h3 className="text-xl font-semibold text-pink-600 mb-3">Time Saving</h3>
//               <p className="text-gray-700">
//                 No more endless scrolling through hundreds of products. We do the hard work of filtering and only show you what works for you.
//               </p>
//             </div>
//             <div className="bg-pink-50 p-6 rounded-lg">
//               <h3 className="text-xl font-semibold text-pink-600 mb-3">Personalized</h3>
//               <p className="text-gray-700">
//                 Recommendations based on your unique measurements, color preferences, and style personality.
//               </p>
//             </div>
//             <div className="bg-pink-50 p-6 rounded-lg">
//               <h3 className="text-xl font-semibold text-pink-600 mb-3">Comprehensive</h3>
//               <p className="text-gray-700">
//                 We aggregate from multiple fashion sites so you don't have to check them all individually.
//               </p>
//             </div>
//             <div className="bg-pink-50 p-6 rounded-lg">
//               <h3 className="text-xl font-semibold text-pink-600 mb-3">Confidence Boosting</h3>
//               <p className="text-gray-700">
//                 Wear clothes that make you look and feel amazing, chosen specifically for your body type.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Subscription Model Section */}
//       <section id="subscription" className="py-16 bg-pink-100">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-pink-700 mb-12">Choose Your Plan</h2>
//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             <div className="bg-white p-8 rounded-lg shadow-lg border border-pink-200">
//               <h3 className="text-xl font-semibold text-center text-pink-600 mb-4">Basic</h3>
//               <div className="text-center mb-6">
//                 <span className="text-4xl font-bold">₹299</span>
//                 <span className="text-gray-600">/month</span>
//               </div>
//               <ul className="space-y-3 mb-8">
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   Daily outfit recommendations
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   3 retailer sources
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   Basic body type matching
//                 </li>
//               </ul>
//               <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-medium transition">
//                 Get Started
//               </button>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-pink-400 transform scale-105 z-10">
//               <div className="absolute top-0 right-0 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
//                 POPULAR
//               </div>
//               <h3 className="text-xl font-semibold text-center text-pink-600 mb-4">Premium</h3>
//               <div className="text-center mb-6">
//                 <span className="text-4xl font-bold">₹599</span>
//                 <span className="text-gray-600">/month</span>
//               </div>
//               <ul className="space-y-3 mb-8">
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   Unlimited recommendations
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   All major retailers
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   Advanced body analytics
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   Personal stylist notes
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   Exclusive deals
//                 </li>
//               </ul>
//               <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-medium transition">
//                 Get Started
//               </button>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg border border-pink-200">
//               <h3 className="text-xl font-semibold text-center text-pink-600 mb-4">Annual</h3>
//               <div className="text-center mb-6">
//                 <span className="text-4xl font-bold">₹4999</span>
//                 <span className="text-gray-600">/year</span>
//                 <div className="text-sm text-pink-600 mt-1">Save ₹1189 (20%)</div>
//               </div>
//               <ul className="space-y-3 mb-8">
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   All Premium features
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   Priority support
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   Free seasonal style guide
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   Exclusive masterclasses
//                 </li>
//               </ul>
//               <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-medium transition">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Us Section */}
//       <section id="contact" className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-pink-700 mb-12">Get In Touch</h2>
//           <div className="flex flex-col md:flex-row">
//             <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
//               <h3 className="text-xl font-semibold text-pink-600 mb-4">Contact Information</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <FiMail className="text-pink-600 mt-1 mr-3" />
//                   <div>
//                     <h4 className="font-medium">Email</h4>
//                     <p className="text-gray-700">hello@stylewow.com</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <FiPhone className="text-pink-600 mt-1 mr-3" />
//                   <div>
//                     <h4 className="font-medium">Phone</h4>
//                     <p className="text-gray-700">+91 98765 43210</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <FiMapPin className="text-pink-600 mt-1 mr-3" />
//                   <div>
//                     <h4 className="font-medium">Address</h4>
//                     <p className="text-gray-700">123 Fashion Street, Bangalore, India - 560001</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="md:w-1/2">
//               <form className="space-y-4">
//                 <div>
//                   <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
//                   <input 
//                     type="text" 
//                     id="name" 
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//                     placeholder="Your name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
//                   <input 
//                     type="email" 
//                     id="email" 
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//                     placeholder="Your email"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
//                   <textarea 
//                     id="message" 
//                     rows="4" 
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//                     placeholder="Your message"
//                   ></textarea>
//                 </div>
//                 <button 
//                   type="submit" 
//                   className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition w-full"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-pink-800 text-white py-12">
//         <div className="container mx-auto px-6">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <FiShoppingBag className="text-2xl" />
//                 <span className="text-xl font-bold">StyleWow</span>
//               </div>
//               <p className="text-pink-200">
//                 Your personal fashion assistant helping you discover perfect outfits for your body type and occasion.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li><a href="#home" className="text-pink-200 hover:text-white transition">Home</a></li>
//                 <li><a href="#about" className="text-pink-200 hover:text-white transition">About</a></li>
//                 <li><a href="#features" className="text-pink-200 hover:text-white transition">Features</a></li>
//                 <li><a href="#subscription" className="text-pink-200 hover:text-white transition">Pricing</a></li>
//                 <li><a href="#contact" className="text-pink-200 hover:text-white transition">Contact</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Retailers</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-pink-200 hover:text-white transition">Myntra</a></li>
//                 <li><a href="#" className="text-pink-200 hover:text-white transition">Amazon</a></li>
//                 <li><a href="#" className="text-pink-200 hover:text-white transition">Flipkart</a></li>
//                 <li><a href="#" className="text-pink-200 hover:text-white transition">Ajio</a></li>
//                 <li><a href="#" className="text-pink-200 hover:text-white transition">Nykaa Fashion</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
//               <p className="text-pink-200 mb-4">
//                 Subscribe to get fashion tips and exclusive offers.
//               </p>
//               <div className="flex">
//                 <input 
//                   type="email" 
//                   placeholder="Your email" 
//                   className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-800"
//                 />
//                 <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-r-lg transition">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-pink-700 mt-8 pt-8 text-center text-pink-200">
//             <p>&copy; {new Date().getFullYear()} StyleWow. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>

//       {/* Go to Top Button */}
//       {showScroll && (
//         <button 
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition z-50"
//           aria-label="Go to top"
//         >
//           <FiArrowUp className="text-xl" />
//         </button>
//       )}
//     </div>
//   );
// };

// export default Homepage;


import { useState, useEffect } from 'react';
import { FiArrowUp, FiShoppingBag, FiAward, FiHeart, FiTrendingUp, FiMail, FiPhone, FiMapPin, FiUser, FiCalendar, FiFilter } from 'react-icons/fi';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  const [showScroll, setShowScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Navigation Bar */}
     <Navbar/>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-pink-50 to-purple-50 py-20 md:py-28">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Discover <span className="text-pink-500">Perfect Outfits</span> for Your Unique Style
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Our AI analyzes top fashion sites to recommend clothing that flatters your body type, skin tone, and personal preferences for any occasion.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-medium transition shadow-lg transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-3 rounded-lg font-medium transition flex items-center justify-center"
              onClick={()=>{
                navigate('/auth')
              }}
              >
                <FiUser className="mr-2" /> Login
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-2 text-gray-600">
              <div className="flex -space-x-2">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img 
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <span className="text-sm">Join 10,000+ happy customers</span>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                alt="Fashionable woman" 
                className="rounded-xl shadow-xl max-w-full h-auto relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 bg-pink-100 p-4 rounded-xl shadow-md z-0 w-3/4">
                <div className="flex items-center">
                  <div className="bg-pink-500 p-2 rounded-lg mr-3">
                    <FiTrendingUp className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Trending Now</p>
                    <p className="text-sm text-gray-600">Summer Pastels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 mb-6">Trusted by top fashion retailers</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <img src="https://logo.clearbit.com/myntra.com" alt="Myntra" className="h-8 opacity-70 hover:opacity-100 transition" />
            <img src="https://logo.clearbit.com/amazon.in" alt="Amazon" className="h-8 opacity-70 hover:opacity-100 transition" />
            <img src="https://logo.clearbit.com/flipkart.com" alt="Flipkart" className="h-8 opacity-70 hover:opacity-100 transition" />
            <img src="https://logo.clearbit.com/ajio.com" alt="Ajio" className="h-8 opacity-70 hover:opacity-100 transition" />
            <img src="https://logo.clearbit.com/nykaa.com" alt="Nykaa" className="h-6 opacity-70 hover:opacity-100 transition" />
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium mb-4">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Your Personal Fashion Assistant</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We combine AI with fashion expertise to help you look your best</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                  alt="About StyleWow" 
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover md:h-[500px] relative z-10"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-md hidden md:block">
                  <div className="flex items-center">
                    <div className="bg-pink-500 p-3 rounded-lg mr-4">
                      <FiFilter className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-xl">5,000+</p>
                      <p className="text-gray-600">Products analyzed daily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-pink-100 p-3 rounded-lg inline-block">
                      <FiUser className="text-pink-600 text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Recommendations</h3>
                    <p className="text-gray-600">
                      Our algorithm learns your style preferences, body shape, and color palette to suggest outfits you'll love.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-pink-100 p-3 rounded-lg inline-block">
                      <FiCalendar className="text-pink-600 text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Occasion-Specific</h3>
                    <p className="text-gray-600">
                      Whether it's a wedding, interview, or casual outing, we find the perfect outfit for every event.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-pink-100 p-3 rounded-lg inline-block">
                      <FiTrendingUp className="text-pink-600 text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Trend Analysis</h3>
                    <p className="text-gray-600">
                      We monitor fashion trends across multiple platforms to bring you the most current styles.
                    </p>
                  </div>
                </div>
              </div>
              
              <button className="mt-8 border-2 border-pink-500 text-pink-500 hover:bg-pink-50 px-6 py-2 rounded-lg font-medium transition">
                Learn More About Our Technology
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium mb-4">FEATURES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How StyleWow Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Simple steps to your perfect outfit</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-pink-100 p-4 rounded-xl inline-block mb-6">
                <span className="text-pink-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Complete Your Style Profile</h3>
              <p className="text-gray-600 mb-4">
                Tell us about your body type, measurements, color preferences, and personal style through our quick quiz.
              </p>
              {/* <div className="flex items-center text-pink-500 font-medium">
                <span>Take Style Quiz</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div> */}
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-pink-100 p-4 rounded-xl inline-block mb-6">
                <span className="text-pink-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Set Your Preferences</h3>
              <p className="text-gray-600 mb-4">
                Choose your budget, preferred retailers, and any specific needs (like sustainable materials or petite sizes).
              </p>
              {/* <div className="flex items-center text-pink-500 font-medium">
                <span>See Preferences</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div> */}
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-pink-100 p-4 rounded-xl inline-block mb-6">
                <span className="text-pink-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Get Daily Recommendations</h3>
              <p className="text-gray-600 mb-4">
                Receive curated outfit suggestions tailored just for you, updated daily with the latest trends and deals.
              </p>
              {/* <div className="flex items-center text-pink-500 font-medium">
                <span>View Example</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium mb-4">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Hear from people who transformed their style with StyleWow</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "StyleWow completely changed how I shop. I used to spend hours searching and still end up with clothes that didn't fit right. Now I get perfect recommendations every time!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/32.jpg" 
                  alt="User" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-800">Priya Sharma</p>
                  <p className="text-gray-600 text-sm">Mumbai, Premium Member</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "As a busy professional, I don't have time to keep up with fashion trends. StyleWow does all the work for me and I always look put-together at meetings."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/45.jpg" 
                  alt="User" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-800">Rahul Mehta</p>
                  <p className="text-gray-600 text-sm">Delhi, Annual Member</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "I've always struggled to find clothes that fit my petite frame. StyleWow finds options I would never have discovered on my own. Worth every rupee!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  alt="User" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-800">Ananya Patel</p>
                  <p className="text-gray-600 text-sm">Bangalore, Basic Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium mb-4">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">The StyleWow Difference</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-pink-100 p-3 rounded-lg inline-block mb-4">
                <FiTrendingUp className="text-pink-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Algorithms</h3>
              <p className="text-gray-600">
                Our AI analyzes thousands of data points to find clothes that match your unique profile.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-pink-100 p-3 rounded-lg inline-block mb-4">
                <FiShoppingBag className="text-pink-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Multi-Retailer</h3>
              <p className="text-gray-600">
                We search across all major fashion sites so you don't have to visit them individually.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-pink-100 p-3 rounded-lg inline-block mb-4">
                <FiAward className="text-pink-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality First</h3>
              <p className="text-gray-600">
                We prioritize well-reviewed items with good fabric quality and stitching.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-pink-100 p-3 rounded-lg inline-block mb-4">
                <FiHeart className="text-pink-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Body Positive</h3>
              <p className="text-gray-600">
                Celebrating all body types with recommendations that make you feel confident.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Model Section */}
      <section id="subscription" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium mb-4">PRICING</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Choose the plan that works best for you</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:border-pink-300 transition duration-300">
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Basic</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-800">₹299</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Daily outfit recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>3 retailer sources</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Basic body type matching</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Email support</span>
                </li>
              </ul>
              <button className="w-full bg-white border-2 border-pink-500 text-pink-500 hover:bg-pink-50 py-3 rounded-lg font-medium transition">
                Start 7-Day Trial
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-2xl border-2 border-pink-400 relative transform md:scale-105 z-10">
              <div className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Premium</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-800">₹599</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>All major retailers</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Advanced body analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Personal stylist notes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Exclusive deals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-medium transition shadow-lg">
                Start 14-Day Trial
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:border-pink-300 transition duration-300">
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Annual</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-800">₹4999</span>
                <span className="text-gray-600">/year</span>
                <div className="text-sm text-pink-500 mt-1 font-medium">Save ₹1189 (20%)</div>
                                <div className="text-sm text-pink-500 mt-1 font-medium">Save ₹1189 (20%)</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>All Premium features</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Annual style report</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>VIP customer status</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Exclusive masterclasses</span>
                </li>
              </ul>
              <button className="w-full bg-white border-2 border-pink-500 text-pink-500 hover:bg-pink-50 py-3 rounded-lg font-medium transition">
                Get Annual Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Find answers to common questions about StyleWow</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-medium text-gray-800">How does the style quiz work?</h3>
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="mt-4 text-gray-600">
                <p>Our style quiz takes about 5 minutes to complete. You'll answer questions about your body shape, preferred colors, style preferences, and occasions you dress for. Our algorithm uses this information to create your personalized style profile.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-medium text-gray-800">Can I change my preferences later?</h3>
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="mt-4 text-gray-600">
                <p>Absolutely! You can update your style profile, budget preferences, and preferred retailers at any time in your account settings. The more information you provide, the better our recommendations become.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-medium text-gray-800">How often are recommendations updated?</h3>
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="mt-4 text-gray-600">
                <p>We update recommendations daily based on new inventory from retailers and emerging fashion trends. Premium members receive real-time updates when new items matching their profile become available.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-medium text-gray-800">Is there a money-back guarantee?</h3>
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="mt-4 text-gray-600">
                <p>Yes! We offer a 30-day money-back guarantee for all annual plans and a 7-day guarantee for monthly subscriptions. If you're not satisfied with our service, we'll refund your payment.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Wardrobe?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Join thousands of happy customers who discovered their perfect style with StyleWow</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition shadow-lg transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-lg font-medium transition">
              Take Style Quiz
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium mb-4">CONTACT US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Have questions? We're here to help!</p>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-pink-100 p-3 rounded-lg mr-4">
                      <FiMail className="text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Email Us</h4>
                      <p className="text-gray-600">support@stylewow.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-100 p-3 rounded-lg mr-4">
                      <FiPhone className="text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Call Us</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-100 p-3 rounded-lg mr-4">
                      <FiMapPin className="text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Visit Us</h4>
                      <p className="text-gray-600">123 Fashion Street, Bangalore, India - 560001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <form className="bg-gray-50 p-8 rounded-xl">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-medium transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
        >
          <FiArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Homepage;