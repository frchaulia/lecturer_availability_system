import React from 'react';

interface ProfileCardItemProps {
  label: string;
  value: string;
}

const ProfileCardItem: React.FC<ProfileCardItemProps> = ({ label, value }) => (
  <div className="flex justify-between mb-2">
    <div className="text-gray-600">{label}</div>
    <div>{value}</div>
  </div>
);

export default ProfileCardItem;