'use client'; // Tambahkan directive ini di awal file

import React from 'react';
import Image from 'next/image';

interface LecturerPhotoProps {
  src: string;
}

const LecturerPhoto: React.FC<LecturerPhotoProps> = ({ src }) => {
  const onChange = () => {
    console.log('Change Photo');
  };

  return (
    <div>
      <Image src="/assets/aradea1.png" alt="Lecturer Photo" />
      <button onClick={onChange}>Change Photo</button>
    </div>
  );
};

export default LecturerPhoto;