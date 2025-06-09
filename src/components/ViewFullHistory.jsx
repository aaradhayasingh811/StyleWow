import { FiClock, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ViewFullHistory = ({ browsingHistory, onClose }) => {
  // Group history by date
  const groupedHistory = browsingHistory.reduce((acc, session) => {
    const date = new Date(session.timestamp).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(session);
    return acc;
  }, {});

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="border-b border-gray-200 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <FiClock className="text-gray-700 mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Your Browsing History</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition"
          >
            <FiX className="text-gray-500" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {Object.entries(groupedHistory).map(([date, sessions]) => (
            <div key={date} className="mb-8">
              {/* <h3 className="text-lg font-semibold text-gray-700 mb-4">{sessions.date}</h3> */}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sessions.map((session, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex items-start mb-3">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">
                          {session.query || 'Style Exploration'}
                        </h4>
                        {/* <p className="text-xs text-gray-500">
                          {new Date(session.timestamp).toLocaleTimeString()}
                        </p> */}
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {session.recommendations.length} items
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2">
                      {session.recommendations.slice(0, 3).map((item, itemIndex) => (
                        <div key={itemIndex} className="aspect-square overflow-hidden rounded">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://via.placeholder.com/150?text=No+Image";
                            }}
                          />
                        </div>
                      ))}
                      {session.recommendations.length > 3 && (
                        <div className="aspect-square bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500">
                          +{session.recommendations.length - 3} more
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="border-t border-gray-200 p-4 flex justify-between items-center">
          <button className="flex items-center text-sm text-gray-600 hover:text-gray-800">
            <FiChevronLeft className="mr-1" /> Previous
          </button>
          <span className="text-sm text-gray-500">Showing last 30 days</span>
          <button className="flex items-center text-sm text-gray-600 hover:text-gray-800">
            Next <FiChevronRight className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewFullHistory;