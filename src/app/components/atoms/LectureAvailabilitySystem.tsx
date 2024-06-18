// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import TableLectureRecord from './table/TableLectureRecord'; // Import the TableLectureRecord component
// // import { Availability, Lecturer } from '../interfaces/schema'; // Assuming you have defined interfaces for Availability and Lecturer

// // interface Props {
// //   availabilityRecords: Availability[];
// // }

// // const LecturerAvailabilitySystem: React.FC<Props> = ({ availabilityRecords }: Props): JSX.Element => {
// //     const [loading, setLoading] = useState<boolean>(true);
// //     const [error, setError] = useState<string | null>(null);
// //     const [lecture, setLecture] = useState<Lecturer | null>(null); // State for storing lecture data

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             try {
// //                 // Assuming you have access to the user's NIDN from session or context
// //                 const userNIDN = ''; // Replace with the user's NIDN
// //                 const response = await axios.get('/api/fetchLecturer', {
// //                     params: { NIDN: userNIDN }, // Fetch lecture data based on user's NIDN
// //                 });
// //                 setLecture(response.data); // Set lecture data received from the API response
// //             } catch (error: any) {
// //                 setError(error.message);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchData();
// //     }, []);

// //     if (loading) {
// //         return <p>Loading...</p>;
// //     }

// //     if (error) {
// //         return <p>Error: {error}</p>;
// //     }

// //     return (
// //       <div className="flex flex-col justify-center bg-slate-900 min-h-screen">
// //         <div className="flex overflow-hidden relative flex-col items-start w-full mix-blend-color-dodge min-h-screen">
// //           <div className="flex relative gap-5 justify-between self-stretch px-5 md:px-20 py-8 w-full bg-slate-900 flex-wrap">
// //             {/* Header Content */}
// //           </div>
// //           <div className="flex relative flex-col mt-10 md:mt-32 ml-5 md:ml-20 max-w-full text-white leading-tight">
// //             {/* Title */}
// //             <div className="text-4xl md:text-5xl leading-tight">
// //               <div>Welcome to</div>
// //               <div className="mt-5 md:mt-7 font-extrabold text-yellow-400">
// //                 LECTURER AVAILABILITY SYSTEM
// //               </div>
// //               <div className="mt-5 text-2xl leading-10">
// //                 Department of Information Technology
// //                 <br />
// //                 State Polytechnic of Malang
// //               </div>
// //             </div>
// //             {/* Lecture Card */}
// //             <div className="flex flex-col bg-gray-800 p-8 mt-10 rounded-lg">
// //               <div className="text-2xl text-yellow-400 font-semibold mb-4">
// //                 Lecture Information
// //               </div>
// //               <div className="flex flex-col">
// //                 <div className="flex justify-between mb-2">
// //                   <div className="font-semibold">NIDN:</div>
// //                   <div>{lecture?.NIDN}</div> {/* Display lecture NIDN */}
// //                 </div>
// //                 <div className="flex justify-between mb-2">
// //                   <div className="font-semibold">Name:</div>
// //                   <div>{lecture?.name_lecturer}</div> {/* Display lecture name */}
// //                 </div>
// //                 <div className="flex justify-between mb-2">
// //                   <div className="font-semibold">Room:</div>
// //                   <div>{lecture?.room_lecturer}</div> {/* Display lecture room */}
// //                 </div>
// //                 <div className="flex justify-between mb-2">
// //                   <div className="font-semibold">MAC Address:</div>
// //                   <div>{lecture?.mac_address_lecturer}</div> {/* Display lecture MAC address */}
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <div className="font-semibold">Course:</div>
// //                   <div>{lecture?.course_lecture}</div> {/* Display lecture course */}
// //                 </div>
// //               </div>
// //             </div>
// //             {/* Availability Records Table */}
// //             <TableLectureRecord availabilityRecords={availabilityRecords} />
// //           </div>
// //         </div>
// //       </div>
// //     );
// // }

// // export default LecturerAvailabilitySystem;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TableLectureRecord from './table/TableLectureRecord'; // Import the TableLectureRecord component
// import { Availability, Lecturer } from '../interfaces/schema'; // Assuming you have defined interfaces for Availability and Lecturer

// interface Props {
//   availabilityRecords: Availability[];
// }

// const LecturerAvailabilitySystem: React.FC<Props> = ({ availabilityRecords }: Props): JSX.Element => {
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);
//     const [lecture, setLecture] = useState<Lecturer | null>(null); // State for storing lecture data

//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         try {
//     //             // Fetch the user's NIDN from session or context
//     //             const response = await axios.get('/api/fetchLecturer', {
//     //                 params: { NIDN: '199110142019032020' }, // Replace with the actual NIDN
//     //             });
//     //             setLecture(response.data); // Set lecture data received from the API response
//     //         } catch (error: any) {
//     //             setError(error.message);
//     //         } finally {
//     //             setLoading(false);
//     //         }
//     //     };

//     //     fetchData();
//     // }, []);

//     // if (loading) {
//     //     return <p>Loading...</p>;
//     // }

//     // if (error) {
//     //     return <p>Error: {error}</p>;
//     // }

//     return (
//       <div className="flex flex-col justify-center bg-slate-900 min-h-screen">
//         <div className="flex overflow-hidden relative flex-col items-start w-full mix-blend-color-dodge min-h-screen">
//           <div className="flex relative gap-5 justify-between self-stretch px-5 md:px-20 py-8 w-full bg-slate-900 flex-wrap">
//             {/* Header Content */}
//           </div>
//           <div className="flex relative flex-col mt-10 md:mt-32 ml-5 md:ml-20 max-w-full text-white leading-tight">
//             {/* Title */}
//             <div className="text-4xl md:text-5xl leading-tight">
//               <div>Welcome to</div>
//               <div className="mt-5 md:mt-7 font-extrabold text-yellow-400">
//                 LECTURER AVAILABILITY SYSTEM
//               </div>
//               <div className="mt-5 text-2xl leading-10">
//                 Department of Information Technology
//                 <br />
//                 State Polytechnic of Malang
//               </div>
//             </div>
//             {/* Lecture Card */}
//             <div className="flex flex-col bg-gray-800 p-8 mt-10 rounded-lg">
//               <div className="text-2xl text-yellow-400 font-semibold mb-4">
//                 Lecture Information
//               </div>
//               <div className="flex flex-col">
//                 <div className="flex justify-between mb-2">
//                   <div className="font-semibold">NIDN:</div>
//                   <div>{lecture?.NIDN}</div> {/* Display lecture NIDN */}
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <div className="font-semibold">Name:</div>
//                   <div>{lecture?.name_lecturer}</div> {/* Display lecture name */}
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <div className="font-semibold">Room:</div>
//                   <div>{lecture?.room_lecturer}</div> {/* Display lecture room */}
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <div className="font-semibold">MAC Address:</div>
//                   <div>{lecture?.mac_address_lecturer}</div> {/* Display lecture MAC address */}
//                 </div>
//                 <div className="flex justify-between">
//                   <div className="font-semibold">Course:</div>
//                   <div>{lecture?.course_lecture}</div> {/* Display lecture course */}
//                 </div>
//               </div>
//             </div>
//             {/* Availability Records Table */}
//             <TableLectureRecord availabilityRecords={availabilityRecords} lecturer={{
//               id_lecturer: 0,
//               NIDN: 0,
//               name_lecturer: '',
//               room_lecturer: 0,
//               mac_address_lecturer: '',
//               course_lecture: ''
//             }} />
//           </div>
//         </div>
//       </div>
//     );
// }

// export default LecturerAvailabilitySystem;

import { useEffect, useState } from 'react';
import '../styles/statistic_style.css'; // Import your CSS file
import Image from 'next/image';

interface Record {
  _id: string;
  date: string;
  time: string;
  NIDN: string;
  status: string;
  course: string;
}

interface LecturerAvailabilitySystemProps {
  availabilityData: Record[];
}

const LecturerAvailabilitySystem = ({ availabilityData }: LecturerAvailabilitySystemProps) => {
  useEffect(() => {
    const fetchLectures = async (data?: any) => {
        try {
            const response = await fetch('/api/lectures'); // Ensure this matches your backend route
            if (!response.ok) {
                throw new Error(`Error fetching lectures: ${response.statusText}`);
            }
            const data = await response.json();
            fetchLectures(data);
        } catch (error) {
            console.error('Error fetching lectures:', error);
        }
    };

    fetchLectures();
}, []);
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="header flex gap-5 text-xl text-yellow-400 max-md:flex-wrap">
        <h1>LECTURER AVAILABILITY SYSTEM</h1>
        <ul>
          <li>HOME</li>
          <li>DASHBOARD</li>
          <li>ROOM LAYOUT</li>
          <li>MY PROFILE</li>
          <li>MY STATISTIC</li>
        </ul>
      </div>
      <div className="content">
        <div className="statistic-box ">
          <div className='statistic-box2'>
            <h2 className='text-center text-xl '>My Statistic</h2>
          </div>
          <div className="lecturer-info">
            <div className="profile-image">
              {/* Replace with actual image */}
              <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Lecturer Profile" />
            </div>
            <div className="details">
              <p>Name     : {availabilityData[0]?.course || 'N/A'}</p>
              <p>NIDN     : {availabilityData[0]?.NIDN || 'N/A'}</p>
              <p>Year In  : {availabilityData[0]?.date || 'N/A'}</p>
              <p>Room     : {availabilityData[0]?.status || 'N/A'}</p>
            </div>
          </div>
          <div className="statistic-table">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th className='expand'>Time</th>
                  <th className='expand'>NIDN</th>
                  <th>Status</th>
                  <th className='expand'>Courses</th>
                </tr>
              </thead>
              <tbody>
                {availabilityData.map((record) => (
                  <tr key={record._id}>
                    <td>{record.date}</td>
                    <td>{record.time}</td>
                    <td>{record.NIDN}</td>
                    <td>{record.status}</td>
                    <td>{record.course}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerAvailabilitySystem;