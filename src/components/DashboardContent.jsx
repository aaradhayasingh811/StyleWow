// import { FiHeart, FiTrendingUp, FiStar, FiClock, FiSearch } from 'react-icons/fi';
// import StatCard from '../UI/StatCard';

// const DashboardContent = ({ wishlistCount, recentlyViewed, recommendedItems }) => {
//   console.log("Hisorty", recentlyViewed)
//   return (
//     <div className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Style Dashboard</h2>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         <StatCard 
//           icon={<FiHeart className="text-pink-500 text-xl" />}
//           title="Saved Favorites"
//           value={wishlistCount}
//           color="pink"
//           description="Items you love"
//         />
        
//         <StatCard 
//           icon={<FiTrendingUp className="text-blue-500 text-xl" />}
//           title="Trending Now"
//           value="12+"
//           color="blue"
//           description="Hot picks this week"
//         />
        
//         <StatCard 
//           icon={<FiStar className="text-yellow-500 text-xl" />}
//           title="Your Top Style"
//           value="Casual"
//           color="yellow"
//           description="Based on preferences"
//         />
        
//         <StatCard 
//           icon={<FiSearch className="text-purple-500 text-xl" />}
//           title="New Matches"
//           value="8"
//           color="purple"
//           description="Just for you"
//         />
//       </div>
      
//       <div className="mb-8">
//         <div className="border border-gray-100 rounded-lg p-6">
//           <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
//             <FiClock className="mr-2" /> Recently Viewed
//           </h3>
//           {recentlyViewed && recentlyViewed.length > 0 ? (
//             <div className="grid grid-cols-2 gap-4">
//               {recentlyViewed.slice(0,4).map((item, index) => (
//                 <div key={index} className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition cursor-pointer">
//                   <img 
//                     src={item.recommendations.image} 
//                     alt={item.name} 
//                     className="w-full h-24 object-cover rounded mb-2"
//                   />
//                   <p className="text-sm font-medium truncate">{item.name}</p>
//                   <p className="text-xs text-gray-500">${item.price}</p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500 text-center py-4">No recently viewed items</p>
//           )}
//           <button className="mt-4 w-full py-2 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-100 transition">
//             View Browsing History
//           </button>
//         </div>
        
//         {/* <div className="border border-gray-100 rounded-lg p-6">
//           <h3 className="text-lg font-semibold mb-4 text-gray-800">Personalized Recommendations</h3>
//           {recommendedItems && recommendedItems.length > 0 ? (
//             <div className="grid grid-cols-2 gap-4">
//               {recommendedItems.slice(0,4).map((item, index) => (
//                 <div key={index} className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition cursor-pointer">
//                   <img 
//                     src={item.image} 
//                     alt={item.name} 
//                     className="w-full h-24 object-cover rounded mb-2"
//                   />
//                   <p className="text-sm font-medium truncate">{item.name}</p>
//                   <div className="flex justify-between items-center">
//                     <p className="text-xs text-gray-500">${item.price}</p>
//                     <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
//                       {item.discount}% off
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500 text-center py-4">Loading recommendations...</p>
//           )}
//           <button className="mt-4 w-full py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition">
//             See All Recommendations
//           </button>
//         </div> */}
//       </div>
      
//       <div className="border-t border-gray-100 pt-6">
//         <h3 className="text-lg font-semibold mb-4 text-gray-800">Style Insights</h3>
//         <div className="bg-gray-50 rounded-lg p-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="p-4 bg-white rounded-lg shadow-xs">
//               <h4 className="font-medium text-gray-700 mb-2">Price Alert</h4>
//               <p className="text-sm text-gray-600">3 items in your wishlist have dropped in price!</p>
//             </div>
//             <div className="p-4 bg-white rounded-lg shadow-xs">
//               <h4 className="font-medium text-gray-700 mb-2">New Arrivals</h4>
//               <p className="text-sm text-gray-600">12 new items match your style preferences</p>
//             </div>
//             <div className="p-4 bg-white rounded-lg shadow-xs">
//               <h4 className="font-medium text-gray-700 mb-2">Seasonal Trends</h4>
//               <p className="text-sm text-gray-600">Summer styles are trending with 30% more options</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardContent;

import { FiHeart, FiTrendingUp, FiStar, FiClock, FiSearch } from 'react-icons/fi';
import StatCard from '../UI/StatCard';
import { useState } from 'react';
import ViewFullHistory from './ViewFullHistory';

const DashboardContent = ({ wishlistCount, recentlyViewed, recommendedItems }) => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Style Dashboard</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={<FiHeart className="text-pink-500 text-xl" />}
          title="Saved Favorites"
          value={wishlistCount}
          color="pink"
          description="Items you love"
        />
        
        <StatCard 
          icon={<FiTrendingUp className="text-blue-500 text-xl" />}
          title="Trending Now"
          value="12+"
          color="blue"
          description="Hot picks this week"
        />
        
        <StatCard 
          icon={<FiStar className="text-yellow-500 text-xl" />}
          title="Your Top Style"
          value="Casual"
          color="yellow"
          description="Based on preferences"
        />
        
        <StatCard 
          icon={<FiSearch className="text-purple-500 text-xl" />}
          title="New Matches"
          value="8"
          color="purple"
          description="Just for you"
        />
      </div>
      
      <div className="mb-8">
        <div className="border border-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
            <FiClock className="mr-2" /> Recently Viewed
          </h3>
          {recentlyViewed && recentlyViewed.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {recentlyViewed.slice(0,4).map((session, index) => (
                // Display the first recommendation from each session
                session.recommendations && session.recommendations.length > 0 && (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                    <img 
                      src={session.recommendations[0].image} 
                      alt={session.recommendations[0].title} 
                      className="w-full h-24 object-cover rounded mb-2"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://via.placeholder.com/150?text=No+Image";
                      }}
                    />
                    <p className="text-sm font-medium truncate">{session.recommendations[0].title}</p>
                    <p className="text-xs text-gray-500">Rs. {session.recommendations[0].price}</p>
                  </div>
                )
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">No recently viewed items</p>
          )}
          <button   onClick={() => setShowHistory(true)}
 className="mt-4 w-full py-2 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-100 transition">
            View Browsing History
          </button>
        </div>
        
        {/* Uncomment if you want to show recommendations */}
        {/* <div className="border border-gray-100 rounded-lg p-6 mt-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Personalized Recommendations</h3>
          {recommendedItems && recommendedItems.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {recommendedItems.slice(0,4).map((item, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-24 object-cover rounded mb-2"
                  />
                  <p className="text-sm font-medium truncate">{item.name}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-500">${item.price}</p>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      {item.discount}% off
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">Loading recommendations...</p>
          )}
          <button className="mt-4 w-full py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition">
            See All Recommendations
          </button>
        </div> */}
      </div>
      
      <div className="border-t border-gray-100 pt-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Style Insights</h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-xs">
              <h4 className="font-medium text-gray-700 mb-2">Price Alert</h4>
              <p className="text-sm text-gray-600">3 items in your wishlist have dropped in price!</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-xs">
              <h4 className="font-medium text-gray-700 mb-2">New Arrivals</h4>
              <p className="text-sm text-gray-600">12 new items match your style preferences</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-xs">
              <h4 className="font-medium text-gray-700 mb-2">Seasonal Trends</h4>
              <p className="text-sm text-gray-600">Summer styles are trending with 30% more options</p>
            </div>
          </div>
        </div>
      </div>

      {showHistory && (
  <ViewFullHistory 
    browsingHistory={recentlyViewed} 
    onClose={() => setShowHistory(false)} 
  />
)}
    </div>
  );
};

export default DashboardContent;