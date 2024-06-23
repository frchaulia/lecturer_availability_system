import React from 'react';
import ProfileCard from './profile_card';
import ProfileCardItem from './profile_card_item';
import ProfileCardTitle from './profile_card_title';

interface ProfileInfoProps {
  name: string;
  nidn: string;
  yearIn: string;
  room: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ name, nidn, yearIn, room }) => (
  <ProfileCard title="My Profile">
    <ProfileCardTitle title="Information" />
    <ProfileCardItem label="Name" value={name} />
    <ProfileCardItem label="NIDN" value={nidn} />
    <ProfileCardItem label="Year in" value={yearIn} />
    <ProfileCardItem label="Room" value={room} />
  </ProfileCard>
);

export default ProfileInfo;