import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const WishlistContent = ({ wishlist, onRemove }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Your Wishlist</h2>
        <span className="text-sm text-gray-500">{wishlist.length} items</span>
      </div>
      {wishlist.length === 0 ? (
        <div className="text-center py-16">
          <FiHeart className="mx-auto text-5xl text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg">Your wishlist is empty</p>
          <button className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition" onClick={()=>{
            navigate('/quiz');
          }}>
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map(item => (
            <div key={item._id} className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <button 
                  onClick={() => onRemove(item._id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  aria-label="Remove from wishlist"
                >
                  <FaHeart className="text-pink-500 text-lg" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                <p className="text-pink-500 font-bold mt-2">Rs. {item.price.toFixed(2)}</p>
                <div className="flex gap-2 mt-4">
                  <a href={item.link} target='_blank' className="flex-1 py-2 items-center text-center bg-pink-500 text-white rounded hover:bg-pink-600 transition">
                   View
                  </a>
                  {/* <button className="p-2 border border-gray-200 rounded hover:bg-gray-50 transition">
                    <FiShoppingCart className="text-gray-600" />
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistContent;