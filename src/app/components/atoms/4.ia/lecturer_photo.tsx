'use client'; // Add this directive at the top of the file

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
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-24 h-24">
        <Image 
          src={src} 
          alt="Lecturer Photo" 
          layout="fill" 
          className="rounded-full object-cover" 
        />
      </div>
      <button 
        onClick={onChange} 
        className="px-4 py-2 bg-gray-500 text-white rounded"
      >
        Change Photo
      </button>
    </div>
  );
};

export default LecturerPhoto;