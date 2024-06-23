'use client';

import React, { useState } from 'react';
import ProfileCard from './profile_card';
import ProfileCardTitle from './profile_card_title';
import ProfileCardContent from './profile_card_content';

const AvailabilityStatus: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
  };

  const handleSave = () => {
    // Implement logic to save availability status
    console.log('Save Availability Status:', selectedStatus);
    // Tambahkan logika lain yang diperlukan di sini
  };

  return (
    <ProfileCard title="Change Availability Status">
      <ProfileCardContent>
        <ProfileCardTitle title="Status" />
        <div className="grid grid-cols-2 gap-4">
          <button
            className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ${
              selectedStatus === 'available' ? 'border-2 border-green-500' : ''
            }`}
            onClick={() => handleStatusChange('available')}
          >
            Available
          </button>
          <button
            className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ${
              selectedStatus === 'unavailable' ? 'border-2 border-red-500' : ''
            }`}
            onClick={() => handleStatusChange('unavailable')}
          >
            Unavailable
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${
              selectedStatus === 'outside' ? 'border-2 border-blue-500' : ''
            }`}
            onClick={() => handleStatusChange('outside')}
          >
            Available, but outside the lecturer's room
          </button>
          <button
            className={`bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ${
              selectedStatus === 'urgent' ? 'border-2 border-yellow-500' : ''
            }`}
            onClick={() => handleStatusChange('urgent')}
          >
            Urgent only, must have an appointment
          </button>
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleSave}>
            Save and Update
          </button>
        </div>
      </ProfileCardContent>
    </ProfileCard>
  );
};

export default AvailabilityStatus;