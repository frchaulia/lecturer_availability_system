// // 'use client'
// // import '../styles/globals.css';
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import Search_Bar from '../3.fahmi/search_bar';

// // // function MyApp ({ Component, pageProps }:{ Component:any, pageProps:any }) {
// // //     return <Component {...pageProps} />;
// // // }
// // // export default MyApp;
// // // _app.tsx
// // import { SessionProvider } from "next-auth/react"
// // import Session from '@/app/api/auth/session';
// // import { AppProps } from 'next/app';

// // function MyApp({ Component, pageProps }: AppProps) {
// //   const [lecturers, setLecturers] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [filteredLecturers, setFilteredLecturers] = useState([]);

// //   useEffect(() => {
// //     const fetchLecturers = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:3001/api/lecturers');
// //         setLecturers(response.data);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchLecturers();
// //   }, []);

// //   useEffect(() => {
// //     setFilteredLecturers(
// //       lecturers.filter((lecturer) =>
// //         lecturer.name_lecturer.toLowerCase().includes(searchQuery.toLowerCase())
// //       )
// //     );
// //   }, [searchQuery, lecturers]);

// //   return (
// //     <SessionProvider session={pageProps.session}>
// //       <Session>
// //         <Component {...pageProps} />
// //       </Session>
// //     </SessionProvider>
// //   );
  
// // }
// // // return (
// // //   <div className="App">
// // //     <SearchBar setSearchQuery={setSearchQuery} />
// // //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
// // //       {filteredLecturers.map((lecturer) => (
// // //         <div key={lecturer.id_lecturer} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
// // //           <div className="p-5">
// // //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
// // //               {lecturer.name_lecturer}
// // //             </h5>
// // //             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
// // //               Room: {lecturer.room_lecturer}
// // //             </p>
// // //             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
// // //               Course: {lecturer.course_lecture}
// // //             </p>
// // //             <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
// // //               Read more
// // //               <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
// // //                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
// // //               </svg>
// // //             </a>
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   </div>
// // // );


// // export default MyApp;


// 'use client'
// import '../styles/globals.css';
// import { SessionProvider } from "next-auth/react";
// // import Session from '../../../api/auth/session';
// import { AppProps } from 'next/app';
// import React, { useState, useEffect } from 'react';
// import SearchBar from '@/app/components/3.fahmi/search_bar';
// import LecturerCard from '@/components/0.main/LecturerCard';
// import { fetchLecturers } from '@/services/lecturerService';

// function MyApp({ Component, pageProps }: AppProps) {
//   const [lecturers, setLecturers] = useState<any[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredLecturers, setFilteredLecturers] = useState<any[]>([]);

//   useEffect(() => {
//     const getLecturers = async () => {
//       try {
//         const data = await fetchLecturers();
//         setLecturers(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     getLecturers();
//   }, []);

//   useEffect(() => {
//     setFilteredLecturers(
//       lecturers.filter((lecturer: any) =>
//         lecturer.name_lecturer.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     );
//   }, [searchQuery, lecturers]);

//   return (
//     <SessionProvider session={pageProps.session}>
//       <Session>
//         <SearchBar setSearchQuery={setSearchQuery} />
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//           {filteredLecturers.length === 0 ? (
//             <LecturerCard lecturer={null} />
//           ) : (
//             filteredLecturers.map((lecturer: any) => (
//               <LecturerCard key={lecturer.id_lecturer} lecturer={lecturer} />
//             ))
//           )}
//         </div>
//         <Component {...pageProps} />
//       </Session>
//     </SessionProvider>
//   );
// }

// export default MyApp;
