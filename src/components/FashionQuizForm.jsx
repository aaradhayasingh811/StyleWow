// import { useState, useEffect } from 'react';
// import { FiSun, FiMoon, FiDroplet, FiGift, FiBriefcase, FiHeart } from 'react-icons/fi';
// import { Range } from 'react-range';
// import Navbar from './Navbar';
// import NavDash from './NavDash';
// import Footer from './Footer';

// const FashionQuizForm = () => {
//   // Form state
//   const [formData, setFormData] = useState({
//     bodyShape: '',
//     skinTone: '',
//     occasion: '',
//     priceRange: [50, 200],
//     preferences: []
//   });

//   // UI state
//   const [currentStep, setCurrentStep] = useState(1);
//   const [recommendations, setRecommendations] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Body shape options with icons
//   const bodyShapes = [
//     { id: 'hourglass', name: 'Hourglass', description: 'Balanced bust and hips with defined waist' },
//     { id: 'pear', name: 'Pear', description: 'Hips wider than bust with defined waist' },
//     { id: 'apple', name: 'Apple', description: 'Bust wider than hips with less defined waist' },
//     { id: 'rectangle', name: 'Rectangle', description: 'Balanced bust and hips with minimal waist definition' },
//     { id: 'inverted', name: 'Inverted Triangle', description: 'Bust wider than hips with straight waist' },
//   ];

//   // Skin tone options
//   const skinTones = [
//     { id: 'fair', name: 'Fair', color: '#FFDBB4' },
//     { id: 'light', name: 'Light', color: '#E5B887' },
//     { id: 'medium', name: 'Medium', color: '#C68642' },
//     { id: 'olive', name: 'Olive', color: '#8D5524' },
//     { id: 'tan', name: 'Tan', color: '#6E3B1E' },
//     { id: 'dark', name: 'Dark', color: '#3D2314' },
//   ];

//   // Occasion options
//   const occasions = [
//     { id: 'casual', name: 'Casual', icon: <FiSun /> },
//     { id: 'formal', name: 'Formal', icon: <FiBriefcase /> },
//     { id: 'party', name: 'Party', icon: <FiGift /> },
//     { id: 'date', name: 'Date Night', icon: <FiHeart /> },
//     { id: 'beach', name: 'Beach', icon: <FiDroplet /> },
//   ];

//   // Style preferences
//   const stylePreferences = [
//     { id: 'minimalist', name: 'Minimalist' },
//     { id: 'bohemian', name: 'Bohemian' },
//     { id: 'classic', name: 'Classic' },
//     { id: 'edgy', name: 'Edgy' },
//     { id: 'romantic', name: 'Romantic' },
//     { id: 'sporty', name: 'Sporty' },
//   ];

//   // Handle form changes
//   const handleChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   // Handle price range change
//   const handlePriceChange = (values) => {
//     setFormData(prev => ({
//       ...prev,
//       priceRange: values
//     }));
//   };

//   // Toggle preference selection
//   const togglePreference = (prefId) => {
//     setFormData(prev => {
//       const newPrefs = prev.preferences.includes(prefId)
//         ? prev.preferences.filter(id => id !== prefId)
//         : [...prev.preferences, prefId];
//       return { ...prev, preferences: newPrefs };
//     });
//   };

//   const generateRecommendations = () => {
//     console.log(formData)
//     setIsLoading(true);
//     // Simulate API call
//     setTimeout(() => {
//       const mockRecommendations = [
//         {
//           id: 1,
//           name: 'Wrap Dress',
//           brand: 'Reformation',
//           price: 178,
//           image: 'https://example.com/dress1.jpg',
//           matchScore: 92,
//           why: 'Perfect for your hourglass figure and complements your medium skin tone'
//         },
//         {
//           id: 2,
//           name: 'High-Waisted Trousers',
//           brand: 'Everlane',
//           price: 120,
//           image: 'https://example.com/pants1.jpg',
//           matchScore: 88,
//           why: 'Balances your proportions and fits your classic style preference'
//         },
//         {
//           id: 3,
//           name: 'Silk Blouse',
//           brand: 'Theory',
//           price: 195,
//           image: 'https://example.com/top1.jpg',
//           matchScore: 85,
//           why: 'Elegant for formal occasions with colors that suit your complexion'
//         }
//       ];
//       setRecommendations(mockRecommendations);
//       setIsLoading(false);
//       setCurrentStep(4); // Move to results
//     }, 2000);
//   };

//   // Progress through form steps
//   const nextStep = () => {
//     if (currentStep < 4) setCurrentStep(prev => prev + 1);
//     if (currentStep === 3) generateRecommendations();
//   };

//   const prevStep = () => {
//     if (currentStep > 1) setCurrentStep(prev => prev - 1);
//   };

//   // Responsive grid columns
//   const getGridColumns = () => {
//     if (windowWidth < 640) return 'grid-cols-1';
//     if (windowWidth < 768) return 'grid-cols-2';
//     return 'grid-cols-3';
//   };

//   return (
//     <>
//     {/* <Navbar/> */}
//     {/* <NavDash/> */}
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         {/* Progress bar */}
//         <div className="mb-6 sm:mb-8">
//           <div className="flex justify-between mb-2">
//             {[1, 2, 3, 4].map(step => (
//               <div key={step} className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center
//                 ${currentStep >= step ? 'bg-pink-600 text-white' : 'bg-white border-2 border-pink-200 text-pink-400'}`}>
//                 {step}
//               </div>
//             ))}
//           </div>
//           <div className="relative h-1 sm:h-2 bg-pink-100 rounded-full">
//             <div
//               className="absolute top-0 left-0 h-full bg-pink-600 rounded-full transition-all duration-500"
//               style={{ width: `${(currentStep - 1) * 33.33}%` }}
//             ></div>
//           </div>
//         </div>

//         {/* Form container */}
//         <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-xl overflow-hidden">
//           {/* Step 1: Body Shape */}
//           {currentStep === 1 && (
//             <div className="p-4 sm:p-6 md:p-8">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">What's your body shape?</h2>
//               <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Select the option that best describes your figure</p>

//               <div className={`grid ${windowWidth < 640 ? 'grid-cols-1' : 'grid-cols-2'} gap-3 sm:gap-4`}>
//                 {bodyShapes.map(shape => (
//                   <button
//                     key={shape.id}
//                     onClick={() => handleChange('bodyShape', shape.id)}
//                     className={`p-3 sm:p-4 border-2 rounded-lg sm:rounded-xl transition-all ${formData.bodyShape === shape.id
//                       ? 'border-pink-500 bg-pink-50 shadow-md'
//                       : 'border-gray-200 hover:border-pink-300'}`}
//                   >
//                     <div className="flex items-center">
//                       <div className={`w-12 h-16 sm:w-16 sm:h-24 mr-3 sm:mr-4 ${shape.id}-shape`}></div>
//                       <div className="text-left">
//                         <h3 className="text-sm sm:text-base font-medium text-gray-900">{shape.name}</h3>
//                         <p className="text-xs sm:text-sm text-gray-600">{shape.description}</p>
//                       </div>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Step 2: Skin Tone & Preferences */}
//           {currentStep === 2 && (
//             <div className="p-4 sm:p-6 md:p-8">
//               <div className="mb-6 sm:mb-8">
//                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">What's your skin tone?</h2>
//                 <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Select the shade closest to your complexion</p>

//                 <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
//                   {skinTones.map(tone => (
//                     <button
//                       key={tone.id}
//                       onClick={() => handleChange('skinTone', tone.id)}
//                       className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 transition-transform ${formData.skinTone === tone.id
//                         ? 'border-pink-500 scale-110 shadow-lg'
//                         : 'border-gray-200 hover:scale-105'}`}
//                       style={{ backgroundColor: tone.color }}
//                       aria-label={tone.name}
//                     >
//                       {formData.skinTone === tone.id && (
//                         <div className="w-full h-full rounded-full flex items-center justify-center bg-black bg-opacity-20">
//                           <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                           </svg>
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Your Style Preferences</h2>
//                 <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Select all that apply</p>

//                 <div className={`grid ${windowWidth < 640 ? 'grid-cols-2' : 'grid-cols-3'} gap-2 sm:gap-3`}>
//                   {stylePreferences.map(pref => (
//                     <button
//                       key={pref.id}
//                       onClick={() => togglePreference(pref.id)}
//                       className={`py-2 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm rounded-lg border transition-all ${formData.preferences.includes(pref.id)
//                         ? 'bg-pink-100 border-pink-500 text-pink-700'
//                         : 'bg-white border-gray-200 text-gray-700 hover:border-pink-300'}`}
//                     >
//                       {pref.name}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Step 3: Occasion & Price */}
//           {currentStep === 3 && (
//             <div className="p-4 sm:p-6 md:p-8">
//               <div className="mb-6 sm:mb-8">
//                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">What's the occasion?</h2>
//                 <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Select the event you're shopping for</p>

//                 <div className={`grid ${windowWidth < 640 ? 'grid-cols-2' : 'grid-cols-3'} gap-3 sm:gap-4`}>
//                   {occasions.map(occasion => (
//                     <button
//                       key={occasion.id}
//                       onClick={() => handleChange('occasion', occasion.id)}
//                       className={`flex flex-col items-center p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all ${formData.occasion === occasion.id
//                         ? 'border-pink-500 bg-pink-50'
//                         : 'border-gray-200 hover:border-pink-300'}`}
//                     >
//                       <div className="text-xl sm:text-2xl mb-1 sm:mb-2 text-pink-600">{occasion.icon}</div>
//                       <span className="text-sm sm:text-base font-medium">{occasion.name}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Price Range</h2>
//                 <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Set your budget preferences</p>

//                 <div className="px-2 sm:px-4 mb-6 sm:mb-8">
//                   <Range
//                     step={10}
//                     min={0}
//                     max={500}
//                     values={formData.priceRange}
//                     onChange={handlePriceChange}
//                     renderTrack={({ props, children }) => (
//                       <div
//                         {...props}
//                         className="h-2 bg-gray-200 rounded-full"
//                       >
//                         <div
//                           className="h-2 bg-pink-500 rounded-full"
//                           style={{
//                             left: `${props.style.left}`,
//                             width: `${props.style.width}`
//                           }}
//                         />
//                         {children}
//                       </div>
//                     )}
//                     renderThumb={({ props }) => (
//                       <div
//                         {...props}
//                         className="w-4 h-4 sm:w-5 sm:h-5 bg-pink-600 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400"
//                       />
//                     )}
//                   />

//                   <div className="flex justify-between mt-3 sm:mt-4">
//                     <div className="px-2 py-1 sm:px-3 sm:py-1 border border-pink-300 rounded-lg text-xs sm:text-sm">
//                       ₹{formData.priceRange[0]}
//                     </div>
//                     <div className="px-2 py-1 sm:px-3 sm:py-1 border border-pink-300 rounded-lg text-xs sm:text-sm">
//                       ₹{formData.priceRange[1]}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Step 4: Results */}
//           {currentStep === 4 && (
//             <div className="p-4 sm:p-6 md:p-8">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Your Personalized Recommendations</h2>
//               <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Based on your unique style profile</p>

//               {isLoading ? (
//                 <div className="flex flex-col items-center justify-center py-8 sm:py-12">
//                   <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin mb-3 sm:mb-4"></div>
//                   <p className="text-sm sm:text-base text-gray-600">Analyzing your preferences...</p>
//                 </div>
//               ) : (
//                 <div className="space-y-4 sm:space-y-6">
//                   {recommendations.map(item => (
//                     <div key={item.id} className="flex flex-col sm:flex-row border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden">
//                       <div className="bg-gray-100 w-full sm:w-32 md:w-40 h-32 sm:h-auto flex-shrink-0">
//                         {/* Image placeholder */}
//                         <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
//                           <FiHeart className="text-pink-400 text-2xl sm:text-3xl" />
//                         </div>
//                       </div>
//                       <div className="p-3 sm:p-4 flex-1">
//                         <div className="flex justify-between items-start">
//                           <div>
//                             <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">{item.name}</h3>
//                             <p className="text-xs sm:text-sm text-gray-600">{item.brand}</p>
//                           </div>
//                           <div className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs font-bold">
//                             {item.matchScore}% Match
//                           </div>
//                         </div>
//                         <p className="text-pink-600 font-bold my-1 sm:my-2 text-sm sm:text-base">₹{item.price}</p>
//                         <p className="text-gray-700 text-xs sm:text-sm">{item.why}</p>
//                         <button className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-pink-600 hover:text-pink-700">
//                           View Details →
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Navigation buttons */}
//           <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 flex justify-between">
//             {currentStep > 1 && (
//               <button
//                 onClick={prevStep}
//                 className="px-4 sm:px-6 py-1 sm:py-2 border border-gray-300 rounded-md text-sm sm:text-base text-gray-700 hover:bg-gray-100"
//               >
//                 Back
//               </button>
//             )}
//             {currentStep < 4 ? (
//               <button
//                 onClick={nextStep}
//                 disabled={
//                   (currentStep === 1 && !formData.bodyShape) ||
//                   (currentStep === 2 && (!formData.skinTone || formData.preferences.length === 0)) ||
//                   (currentStep === 3 && !formData.occasion)
//                 }
//                 className={`px-4 sm:px-6 py-1 sm:py-2 rounded-md text-sm sm:text-base text-white ${
//                   (currentStep === 1 && !formData.bodyShape) ||
//                   (currentStep === 2 && (!formData.skinTone || formData.preferences.length === 0)) ||
//                   (currentStep === 3 && !formData.occasion)
//                     ? 'bg-pink-300 cursor-not-allowed'
//                     : 'bg-pink-600 hover:bg-pink-700'
//                 }`}
//               >
//                 {currentStep === 3 ? 'Get Recommendations' : 'Continue'}
//               </button>
//             ) : (
//               <button
//                 onClick={() => setCurrentStep(1)}
//                 className="px-4 sm:px-6 py-1 sm:py-2 bg-pink-600 rounded-md text-sm sm:text-base text-white hover:bg-pink-700"
//               >
//                 More Items
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for body shape visuals */}
//       <style jsx>{`
//         .hourglass-shape {
//           background: linear-gradient(to right, transparent 45%, #f9a8d4 45%, #f9a8d4 55%, transparent 55%),
//                       linear-gradient(to bottom, transparent 20%, #f9a8d4 20%, #f9a8d4 80%, transparent 80%);
//           border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
//         }
//         .pear-shape {
//           background: linear-gradient(to right, transparent 40%, #f9a8d4 40%, #f9a8d4 60%, transparent 60%),
//                       linear-gradient(to bottom, transparent 30%, #f9a8d4 30%, #f9a8d4 80%, transparent 80%);
//           border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
//         }
//         .apple-shape {
//           background: linear-gradient(to right, transparent 35%, #f9a8d4 35%, #f9a8d4 65%, transparent 65%),
//                       linear-gradient(to bottom, transparent 20%, #f9a8d4 20%, #f9a8d4 70%, transparent 70%);
//           border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
//         }
//         .rectangle-shape {
//           background: linear-gradient(to right, transparent 40%, #f9a8d4 40%, #f9a8d4 60%, transparent 60%),
//                       linear-gradient(to bottom, transparent 30%, #f9a8d4 30%, #f9a8d4 70%, transparent 70%);
//         }
//         .inverted-shape {
//           background: linear-gradient(to right, transparent 30%, #f9a8d4 30%, #f9a8d4 70%, transparent 70%),
//                       linear-gradient(to bottom, transparent 30%, #f9a8d4 30%, #f9a8d4 70%, transparent 70%);
//           border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
//         }
//       `}</style>

//     </div>
//     {/* <Footer/> */}
//     </>
//   );
// };

// export default FashionQuizForm;

import { useState, useEffect } from "react";
import {
  FiSun,
  FiMoon,
  FiDroplet,
  FiGift,
  FiBriefcase,
  FiHeart,
} from "react-icons/fi";
import { Range } from "react-range";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FashionQuizForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    bodyShape: "",
    skinTone: "",
    occasion: "",
    priceRange: [50, 200],
    preferences: [],
  });

  // UI state
  const [currentStep, setCurrentStep] = useState(1);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Body shape options with icons
  const bodyShapes = [
    {
      id: "hourglass",
      name: "Hourglass",
      description: "Balanced bust and hips with defined waist",
    },
    {
      id: "pear",
      name: "Pear",
      description: "Hips wider than bust with defined waist",
    },
    {
      id: "apple",
      name: "Apple",
      description: "Bust wider than hips with less defined waist",
    },
    {
      id: "rectangle",
      name: "Rectangle",
      description: "Balanced bust and hips with minimal waist definition",
    },
    {
      id: "inverted",
      name: "Inverted Triangle",
      description: "Bust wider than hips with straight waist",
    },
  ];

  const ProductCard = ({ item }) => {
    const addToWishlist = async()=>{
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/wishlist`,{
        title:item.title,
        image: item.image,
        description:item.description,
        brand : item.brand,
        link:item.link,
        price:item.price
      },{
        withCredentials:true
      })
      if(res.data.success == true){
        toast.success("Added to the WishList!")
      }
      else{
        toast.error("Error in Adding to the WishList!")
      }

    }
  return (
    <>
    <ToastContainer/>
    <div
      key={item.id}
      className="flex flex-col sm:flex-row border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 bg-white"
    >
      {/* Image Container - Fixed Aspect Ratio */}
      <div className="relative w-full sm:w-32 md:w-40 aspect-[3/4] flex-shrink-0 group overflow-hidden">
        {/* Main Product Image */}
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlNWU1ZTUiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHBhdGggZD0iTTI1IDI1bDUwIDUwTTc1IDI1TDI1IDc1Ii8+PC9zdmc+';
            e.currentTarget.className = 'absolute inset-0 w-full h-full object-contain p-4 bg-gray-50';
          }}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 to-purple-50/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors shadow-sm" onClick={addToWishlist}>
            <FiHeart className="text-pink-500 text-xl hover:text-pink-600 transition-colors" />
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div className="min-w-0">
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 hover:text-pink-600 transition-colors truncate">
              {item.title}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5 truncate">
              {item.brand}
            </p>
          </div>
          
          <p className="text-pink-600 font-bold text-sm sm:text-base whitespace-nowrap ml-2">
            ₹{item.price.toLocaleString()}
          </p>
        </div>
        
        <p className="text-gray-600 text-xs sm:text-sm mt-2 line-clamp-2">
          {item.description}
        </p>
        
        <div className="mt-auto pt-3 border-t border-gray-100 flex justify-end">
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs sm:text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors group"
          >
            View Details
            <span className="ml-1 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

  // Skin tone options
  const skinTones = [
    { id: "fair", name: "Fair", color: "#FFDBB4" },
    { id: "light", name: "Light", color: "#E5B887" },
    { id: "medium", name: "Medium", color: "#C68642" },
    { id: "olive", name: "Olive", color: "#8D5524" },
    { id: "tan", name: "Tan", color: "#6E3B1E" },
    { id: "dark", name: "Dark", color: "#3D2314" },
  ];

  // Occasion options
  const occasions = [
    { id: "casual", name: "Casual", icon: <FiSun /> },
    { id: "formal", name: "Formal", icon: <FiBriefcase /> },
    { id: "party", name: "Party", icon: <FiGift /> },
    { id: "date", name: "Date Night", icon: <FiHeart /> },
    { id: "beach", name: "Beach", icon: <FiDroplet /> },
  ];

  // Style preferences
  const stylePreferences = [
    { id: "minimalist", name: "Minimalist" },
    { id: "bohemian", name: "Bohemian" },
    { id: "classic", name: "Classic" },
    { id: "edgy", name: "Edgy" },
    { id: "romantic", name: "Romantic" },
    { id: "sporty", name: "Sporty" },
  ];

  // Handle form changes
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle price range change
  const handlePriceChange = (values) => {
    setFormData((prev) => ({
      ...prev,
      priceRange: values,
    }));
  };

  // Toggle preference selection
  const togglePreference = (prefId) => {
    setFormData((prev) => {
      const newPrefs = prev.preferences.includes(prefId)
        ? prev.preferences.filter((id) => id !== prefId)
        : [...prev.preferences, prefId];
      return { ...prev, preferences: newPrefs };
    });
  };

  const generateRecommendations = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/recommendations`,
        {
          bodyShape: formData.bodyShape,
          skinTone: formData.skinTone,
          occasion: formData.occasion,
          priceRange: formData.priceRange,
          preferences: formData.preferences,
        },
        {
          withCredentials: true, // Send cookies with request
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.success == false) {
        throw new Error("Failed to get recommendations");
      }

      console.log(response.data);
      setRecommendations(response.data.data);
      setCurrentStep(4);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching recommendations:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Progress through form steps
  const nextStep = () => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
    if (currentStep === 3) generateRecommendations();
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  // Responsive grid columns
  const getGridColumns = () => {
    if (windowWidth < 640) return "grid-cols-1";
    if (windowWidth < 768) return "grid-cols-2";
    return "grid-cols-3";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center 
                ${
                  currentStep >= step
                    ? "bg-pink-600 text-white"
                    : "bg-white border-2 border-pink-200 text-pink-400"
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="relative h-1 sm:h-2 bg-pink-100 rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-pink-600 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep - 1) * 33.33}%` }}
            ></div>
          </div>
        </div>

        {/* Form container */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-xl overflow-hidden">
          {/* Step 1: Body Shape */}
          {currentStep === 1 && (
            <div className="p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                What's your body shape?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Select the option that best describes your figure
              </p>

              <div
                className={`grid ${
                  windowWidth < 640 ? "grid-cols-1" : "grid-cols-2"
                } gap-3 sm:gap-4`}
              >
                {bodyShapes.map((shape) => (
                  <button
                    key={shape.id}
                    onClick={() => handleChange("bodyShape", shape.id)}
                    className={`p-3 sm:p-4 border-2 rounded-lg sm:rounded-xl transition-all ${
                      formData.bodyShape === shape.id
                        ? "border-pink-500 bg-pink-50 shadow-md"
                        : "border-gray-200 hover:border-pink-300"
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-12 h-16 sm:w-16 sm:h-24 mr-3 sm:mr-4 ${shape.id}-shape`}
                      ></div>
                      <div className="text-left">
                        <h3 className="text-sm sm:text-base font-medium text-gray-900">
                          {shape.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {shape.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Skin Tone & Preferences */}
          {currentStep === 2 && (
            <div className="p-4 sm:p-6 md:p-8">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  What's your skin tone?
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Select the shade closest to your complexion
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
                  {skinTones.map((tone) => (
                    <button
                      key={tone.id}
                      onClick={() => handleChange("skinTone", tone.id)}
                      className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 transition-transform ${
                        formData.skinTone === tone.id
                          ? "border-pink-500 scale-110 shadow-lg"
                          : "border-gray-200 hover:scale-105"
                      }`}
                      style={{ backgroundColor: tone.color }}
                      aria-label={tone.name}
                    >
                      {formData.skinTone === tone.id && (
                        <div className="w-full h-full rounded-full flex items-center justify-center bg-black bg-opacity-20">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Your Style Preferences
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Select all that apply
                </p>

                <div
                  className={`grid ${
                    windowWidth < 640 ? "grid-cols-2" : "grid-cols-3"
                  } gap-2 sm:gap-3`}
                >
                  {stylePreferences.map((pref) => (
                    <button
                      key={pref.id}
                      onClick={() => togglePreference(pref.id)}
                      className={`py-2 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm rounded-lg border transition-all ${
                        formData.preferences.includes(pref.id)
                          ? "bg-pink-100 border-pink-500 text-pink-700"
                          : "bg-white border-gray-200 text-gray-700 hover:border-pink-300"
                      }`}
                    >
                      {pref.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Occasion & Price */}
          {currentStep === 3 && (
            <div className="p-4 sm:p-6 md:p-8">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  What's the occasion?
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Select the event you're shopping for
                </p>

                <div
                  className={`grid ${
                    windowWidth < 640 ? "grid-cols-2" : "grid-cols-3"
                  } gap-3 sm:gap-4`}
                >
                  {occasions.map((occasion) => (
                    <button
                      key={occasion.id}
                      onClick={() => handleChange("occasion", occasion.id)}
                      className={`flex flex-col items-center p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all ${
                        formData.occasion === occasion.id
                          ? "border-pink-500 bg-pink-50"
                          : "border-gray-200 hover:border-pink-300"
                      }`}
                    >
                      <div className="text-xl sm:text-2xl mb-1 sm:mb-2 text-pink-600">
                        {occasion.icon}
                      </div>
                      <span className="text-sm sm:text-base font-medium">
                        {occasion.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Price Range
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Set your budget preferences
                </p>

                <div className="px-2 sm:px-4 mb-6 sm:mb-8">
                  <Range
                    step={100}
                    min={10}
                    max={10000}
                    values={formData.priceRange}
                    onChange={handlePriceChange}
                    renderTrack={({ props, children }) => (
                      <div {...props} className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-pink-500 rounded-full"
                          style={{
                            left: `${props.style.left}`,
                            width: `${props.style.width}`,
                          }}
                        />
                        {children}
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div
                        {...props}
                        className="w-4 h-4 sm:w-5 sm:h-5 bg-pink-600 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                      />
                    )}
                  />

                  <div className="flex justify-between mt-3 sm:mt-4">
                    <div className="px-2 py-1 sm:px-3 sm:py-1 border border-pink-300 rounded-lg text-xs sm:text-sm">
                      ₹{formData.priceRange[0]}
                    </div>
                    <div className="px-2 py-1 sm:px-3 sm:py-1 border border-pink-300 rounded-lg text-xs sm:text-sm">
                      ₹{formData.priceRange[1]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Results */}
          {currentStep === 4 && (
            <div className="p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Your Personalized Recommendations
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Based on your unique style profile
              </p>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                  {error} - Please try again later
                </div>
              )}

              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-8 sm:py-12">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin mb-3 sm:mb-4"></div>
                  <p className="text-sm sm:text-base text-gray-600">
                    Analyzing your preferences...
                  </p>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  {recommendations.length > 0
                    ? recommendations.map((item) => (
                        <ProductCard key={item.id} item={item} />
                      ))
                    : !error && (
                        <p className="text-gray-600 text-center py-8">
                          No recommendations found. Please try adjusting your
                          preferences.
                        </p>
                      )}
                </div>
              )}
            </div>
          )}

          {/* Navigation buttons */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 flex justify-between">
            {currentStep > 1 && (
              <button
                onClick={prevStep}
                className="px-4 sm:px-6 py-1 sm:py-2 border border-gray-300 rounded-md text-sm sm:text-base text-gray-700 hover:bg-gray-100"
              >
                Back
              </button>
            )}
            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !formData.bodyShape) ||
                  (currentStep === 2 &&
                    (!formData.skinTone ||
                      formData.preferences.length === 0)) ||
                  (currentStep === 3 && !formData.occasion)
                }
                className={`px-4 sm:px-6 py-1 sm:py-2 rounded-md text-sm sm:text-base text-white ${
                  (currentStep === 1 && !formData.bodyShape) ||
                  (currentStep === 2 &&
                    (!formData.skinTone ||
                      formData.preferences.length === 0)) ||
                  (currentStep === 3 && !formData.occasion)
                    ? "bg-pink-300 cursor-not-allowed"
                    : "bg-pink-600 hover:bg-pink-700"
                }`}
              >
                {currentStep === 3 ? "Get Recommendations" : "Continue"}
              </button>
            ) : (
              <button
                onClick={() => setCurrentStep(1)}
                className="px-4 sm:px-6 py-1 sm:py-2 bg-pink-600 rounded-md text-sm sm:text-base text-white hover:bg-pink-700"
              >
                Start Over
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Custom CSS for body shape visuals */}
      <style jsx>{`
        .hourglass-shape {
          background: linear-gradient(
              to right,
              transparent 45%,
              #f9a8d4 45%,
              #f9a8d4 55%,
              transparent 55%
            ),
            linear-gradient(
              to bottom,
              transparent 20%,
              #f9a8d4 20%,
              #f9a8d4 80%,
              transparent 80%
            );
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        }
        .pear-shape {
          background: linear-gradient(
              to right,
              transparent 40%,
              #f9a8d4 40%,
              #f9a8d4 60%,
              transparent 60%
            ),
            linear-gradient(
              to bottom,
              transparent 30%,
              #f9a8d4 30%,
              #f9a8d4 80%,
              transparent 80%
            );
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        }
        .apple-shape {
          background: linear-gradient(
              to right,
              transparent 35%,
              #f9a8d4 35%,
              #f9a8d4 65%,
              transparent 65%
            ),
            linear-gradient(
              to bottom,
              transparent 20%,
              #f9a8d4 20%,
              #f9a8d4 70%,
              transparent 70%
            );
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        }
        .rectangle-shape {
          background: linear-gradient(
              to right,
              transparent 40%,
              #f9a8d4 40%,
              #f9a8d4 60%,
              transparent 60%
            ),
            linear-gradient(
              to bottom,
              transparent 30%,
              #f9a8d4 30%,
              #f9a8d4 70%,
              transparent 70%
            );
        }
        .inverted-shape {
          background: linear-gradient(
              to right,
              transparent 30%,
              #f9a8d4 30%,
              #f9a8d4 70%,
              transparent 70%
            ),
            linear-gradient(
              to bottom,
              transparent 30%,
              #f9a8d4 30%,
              #f9a8d4 70%,
              transparent 70%
            );
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        }
      `}</style>
    </div>
  );
};

export default FashionQuizForm;
