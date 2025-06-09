import { FiMenu, FiX } from 'react-icons/fi';

const MobileHeader = ({ isScrolled, onMenuToggle, mobileMenuOpen }) => {
  return (
    <header className={`lg:hidden fixed top-0 left-0 right-0 bg-white shadow-sm z-20 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button 
          onClick={onMenuToggle}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <h1 className="text-xl font-bold text-gray-800">My Account</h1>
        <div className="w-8"></div>
      </div>
    </header>
  );
};

export default MobileHeader;