import { useState } from "react";
import Profile from "@/app/components/organisms/profile";
import getAvailabilityStatus from "@/app/components/molecules/availability_status"
const MyProfile: React.FC = () => {
  const [availabilityStatus, setAvailabilityStatus] = useState<
    "Available" | "Unavailable" | "Available, but outside the lecturer's room*" | "Urgent only, must have an appointment.*"
  >("Available");

  const handleAvailabilityChange = async (status: any) => {
    setAvailabilityStatus(status);
    await getAvailabilityStatus(status);
  };

  return (
    <Profile
      name="Budianto Wijoyo"
      nidn="1273659265347"
      yearIn="2012 - now"
      room="Lecturer Room 2 (6th floor)"
      teachingAt="LPY 7"
      changePicture={() => {}}
      notes="Type here to enter notes"
      availabilityStatus={availabilityStatus}
      onChange={handleAvailabilityChange}
    />
  );
};

export default MyProfile;
