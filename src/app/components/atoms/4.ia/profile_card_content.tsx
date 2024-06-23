import React from 'react';

interface ProfileCardContentProps {
  children: React.ReactNode;
}

const ProfileCardContent: React.FC<ProfileCardContentProps> = ({ children }) => (
  <div className="p-4">{children}</div>
);

export default ProfileCardContent;