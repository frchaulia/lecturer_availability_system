// import React from 'react';
// import ProfileTemplate from '../../components/templates/ProfileTemplate';

// const MyProfile: React.FC = () => {
//   return (
//     <ProfileTemplate />
//   );
// };

// export default MyProfile;
"use client";

import { useState } from "react";
import {  getAvailabilityStatus } from "@/app/components/molecules/availability_status";

export default function MyProfile() {
  const [availabilityStatus, setAvailabilityStatus] = useState<
    "Available" | "Unavailable" | "Available, but outside the lecturer's room*" | "Urgent only, must have an appointment.*"
  >("Available");

  const handleAvailabilityChange = async (
    status:
      | "Available"
      | "Unavailable"
      | "Available, but outside the lecturer's room*"
      | "Urgent only, must have an appointment.*"
  ) => {
    setAvailabilityStatus(status);
    // Save the updated status to the backend
    await getAvailabilityStatus();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">My Profile</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save and Update
          </button>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <div>
              <span className="font-bold">Name</span>
              : Budianto Wijoyo
            </div>
            <div>
              <span className="font-bold">NIDN</span>
              : 1273659265347
            </div>
            <div>
              <span className="font-bold">Year in</span>
              : 2012 - now
            </div>
            <div>
              <span className="font-bold">Room</span>
              : Lecturer Room 2 (6th floor)
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-yellow-400 rounded-md p-4">
              <span className="font-bold text-lg">Current Status</span>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-blue-500 text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 5 5 0 014 0z"
                    />
                  </svg>
                </span>
                <span className="text-lg">{availabilityStatus}</span>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                    availabilityStatus === "Available"? "bg-green-500" : ""
                  }`}
                  onClick={() => handleAvailabilityChange("Available")}
                >
                  Available
                </button>
                <button
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                    availabilityStatus === "Unavailable"? "bg-red-500" : ""
                  }`}
                  onClick={() => handleAvailabilityChange("Unavailable")}
                >
                  Unavailable
                </button>
                <button
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                    availabilityStatus === "Available, but outside the lecturer's room*"? "bg-orange-500" : ""
                  }`}
                  onClick={() => handleAvailabilityChange("Available, but outside the lecturer's room*")}
                >
                  Available, but outside the lecturer's room*
                </button>
                <button
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                    availabilityStatus === "Urgent only, must have an appointment.*"? "bg-red-500" : ""
                  }`}
                  onClick={() => handleAvailabilityChange("Urgent only, must have an appointment.*")}
                >
                  Urgent only, must have an appointment.*
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <span className="font-bold">Teaching at</span>
          : LPY 7
        </div>
        <div>
          <span className="font-bold">Change My Picture</span>
        </div>
        <div>
          <span className="font-bold">Notes</span>
          : Type here to enter notes
        </div>
      </div>
    </div>
  );
}

// export default MyProfile;
