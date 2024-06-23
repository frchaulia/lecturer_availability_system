import React from 'react';
import LecturerProfileTemplate from '@/app/components/templates/lecturer_profile_temp'

const LecturerProfile: React.FC = () => {
  const name = 'Budianto Wijoyo';
  const nidn = '1273659265347';
  const yearIn = '2012 - now';
  const room = 'Lecturer Room 2 (6th floor)';
  const photoSrc = '/path/to/lecturer/photo.jpg'; // Replace with your actual photo path

  return (
    <LecturerProfileTemplate
      name={name}
      nidn={nidn}
      yearIn={yearIn}
      room={room}
      photoSrc={photoSrc}
    />
  );
};

export default LecturerProfile;