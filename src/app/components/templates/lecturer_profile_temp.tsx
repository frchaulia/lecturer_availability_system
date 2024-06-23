import React from 'react';
import Navbar from '../atoms/4.ia/navbar_profile_lecturer';
import ProfileContent from '../atoms/4.ia/profile_content';

interface LecturerProfileTemplateProps {
  name: string;
  nidn: string;
  yearIn: string;
  room: string;
  photoSrc: string;
}

const LecturerProfileTemplate: React.FC<LecturerProfileTemplateProps> = ({
  name,
  nidn,
  yearIn,
  room,
  photoSrc,
}) => (
  <div>
    <Navbar />
    <ProfileContent
      name={name}
      nidn={nidn}
      yearIn={yearIn}
      room={room}
      photoSrc={photoSrc}
    />
  </div>
);

export default LecturerProfileTemplate;