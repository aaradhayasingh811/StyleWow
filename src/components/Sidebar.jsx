import { FiGrid, FiUser, FiHeart, FiShoppingBag, FiBell, FiLogOut } from 'react-icons/fi';

const Sidebar = ({ 
  activeTab, 
  setActiveTab, 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  profileData, 
  wishlistCount ,
  onLogout
}) => {
  const navItems = [
    { id: 'dashboard', icon: <FiGrid />, label: 'Dashboard' },
    { id: 'profile', icon: <FiUser />, label: 'Profile Settings' },
    { 
      id: 'wishlist', 
      icon: <FiHeart />, 
      label: 'Wishlist',
      badge: wishlistCount > 0 ? wishlistCount : null
    },
    {
        id:'quiz',
        icon: <FiShoppingBag />,
        label: 'Fashion Quiz',
        
    }
  ];

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  console.log(profileData)

  return (
    <div 
      className={`fixed lg:sticky top-0 left-0 w-72 h-[95vh] bg-white shadow-lg z-40 lg:z-0 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:relative lg:top-8 lg:h-[95vh]`}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-8">
          <img 
            src={profileData.avatar} 
            alt="Profile" 
            className="w-14 h-14 rounded-full object-cover border-2 border-pink-200 shadow-sm"
          />
          <div>
            <p className="font-semibold text-gray-800">{profileData.name}</p>
          </div>
        </div>
        
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === item.id ? 'bg-pink-100 text-pink-600' : 'hover:bg-gray-100 text-gray-700'}`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
        
        <button
          onClick={onLogout}
          className="w-full mt-auto flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-red-500 transition-colors"
        >
          <FiLogOut className="text-lg" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;