import React from 'react';
import Layout from '../layout/Layout';
import ProfileHeader from '../organisms/ProfileHeader';
import ProfileInfo from '../molecules/ProfileInfo';
import ProfileForm from '../organisms/ProfileForm';

const ProfileTemplate: React.FC = () => {
  return (
    <Layout>
      {/* <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <ProfileHeader />
        <ProfileInfo />
        <ProfileForm />
      </div> */}
    </Layout>
  );
};

export default ProfileTemplate;
