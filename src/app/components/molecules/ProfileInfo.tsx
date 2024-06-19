import React from 'react';
import Text from '../atoms/4.ia/text/Text';

const ProfileInfo: React.FC = () => {
  return (
    <div className="space-y-2">
      <Text>Name: Budianto Wijoyo</Text>
      <Text>NIDN: 1273659265347</Text>
      <Text>Year in: 2012 - now</Text>
      <Text>Room: Lecturer Room 2 (6th floor)</Text>
    </div>
  );
};

export default ProfileInfo;
