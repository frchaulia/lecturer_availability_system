import React from 'react';

interface ProfileCardProps {
  title: string;
  children: React.ReactNode;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-md mb-4">
    <div className="px-4 py-3 bg-gray-100 rounded-t-lg">
      <h2 className="font-bold text-lg">{title}</h2>
    </div>
    <div>{children}</div>
  </div>
);

export default ProfileCard;
