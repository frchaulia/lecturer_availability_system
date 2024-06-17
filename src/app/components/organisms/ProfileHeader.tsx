import React from 'react';

const ProfileHeader: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <img src="/path-to-image-placeholder.png" alt="Profile" className="w-24 h-24 rounded-full" />
      <button className="px-4 py-2 bg-gray-500 text-white rounded">Change My Picture</button>
    </div>
  );
};

export default ProfileHeader;
