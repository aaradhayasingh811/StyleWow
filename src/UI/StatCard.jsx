const StatCard = ({ icon, title, value, color = 'pink' }) => {
  const colorClasses = {
    pink: 'from-pink-50 to-pink-100 border-pink-100',
    blue: 'from-blue-50 to-blue-100 border-blue-100',
    green: 'from-green-50 to-green-100 border-green-100',
    purple: 'from-purple-50 to-purple-100 border-purple-100',
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} p-6 rounded-xl border`}>
      <div className="flex items-center gap-4">
        <div className="p-3 bg-white rounded-full shadow-sm">
          {icon}
        </div>
        <div>
          <p className="text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;