import { FiChevronDown } from 'react-icons/fi';

const ProfileContent = ({ profileData, onChange, onSubmit }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Profile Settings</h2>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          <div className="flex-1">
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Profile Picture</label>
              <div className="flex items-center gap-4">
                <img 
                  src={profileData.avatar} 
                  alt="Profile" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-pink-100 shadow-sm"
                />
                {/* <button 
                  type="button"
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors"
                >
                  Change Photo
                </button> */}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={onChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={onChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={profileData.phone}
                onChange={onChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Body Shape</label>
              <div className="relative">
                <select
                  name="bodyShape"
                  value={profileData.bodyShape || ''}
                  onChange={onChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                >
                  <option value="">Select your body shape</option>
                  <option value="hourglass">Hourglass</option>
                  <option value="pear">Pear</option>
                  <option value="apple">Apple</option>
                  <option value="rectangle">Rectangle</option>
                  <option value="inverted-triangle">Inverted Triangle</option>
                </select>
                <FiChevronDown className="absolute right-4 top-4 text-gray-400" />
              </div>
              <p className="text-sm text-gray-500 mt-1">This helps us recommend better fitting clothes</p>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Skin Tone</label>
              <div className="flex items-center gap-3 mb-2">
                {['#F5D0B9', '#E6BC9A', '#D2A079', '#BA8665', '#9A5C4A', '#6B3D30'].map((color) => (
                  <button
                    type="button"
                    key={color}
                    onClick={() => onChange({ target: { name: 'skinTone', value: color } })}
                    className={`w-8 h-8 rounded-full border-2 ${profileData.skinTone === color ? 'border-pink-500' : 'border-transparent'}`}
                    style={{ backgroundColor: color }}
                    aria-label={`Skin tone ${color}`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500">Select the closest match to your skin tone</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all shadow-md hover:shadow-lg"
          >
            Save Changes
          </button>
          {/* <button
            type="button"
            className="text-pink-600 hover:text-pink-700 font-medium"
          >
            Skip for now
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default ProfileContent;