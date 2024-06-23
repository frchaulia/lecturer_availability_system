// src/app/components/organisms/profile_content.tsx
import React from 'react';
import ProfileInfo from './profile_info';
import LecturerPhoto from './lecturer_photo';
import AvailabilityStatus from './availability_status';

interface ProfileContentProps {
  name: string;
  nidn: string;
  yearIn: string;
  room: string;
  photoSrc: string;
}

const ProfileContent: React.FC<ProfileContentProps> = ({
  name,
  nidn,
  yearIn,
  room,
  photoSrc,
}) => (
  <div className="container mx-auto mt-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <LecturerPhoto src={photoSrc} /> {/* Hapus prop onChange */}
      </div>
      <div>
        <ProfileInfo name={name} nidn={nidn} yearIn={yearIn} room={room} />
        <AvailabilityStatus />
      </div>
    </div>
  </div>
);

export default ProfileContent;