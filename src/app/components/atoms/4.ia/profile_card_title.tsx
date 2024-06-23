import React from 'react';

interface ProfileCardTitleProps {
  title: string;
}

const ProfileCardTitle: React.FC<ProfileCardTitleProps> = ({ title }) => (
  <div className="font-bold text-lg mb-2">{title}</div>
);

export default ProfileCardTitle;