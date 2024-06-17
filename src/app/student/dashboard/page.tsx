"use client";
import Student_dashboard_page from "@/app/components/templates/Student_dashboard_page";
export default function Home(){
return<Student_dashboard_page></Student_dashboard_page>
};
// import Student_Dashboard_Page from '@/app/components/templates/Student_dashboard_page';
// import App from '@/app/lecturer/lecturercard/page';
// import React from 'react';

// function MyComponent() {
//     // Your component logic and JSX here
//     return (
//         <div className="flex flex-col justify-center bg-slate-900">
//       <div className="flex overflow-hidden relative flex-col items-center w-full mix-blend-color-dodge min-h-[1024px] max-md:max-w-full">
//         <img
//           loading="lazy"
//           srcSet="..."
//           className="object-cover absolute inset-0 size-full"
//         />
//         <div className="flex relative gap-5 self-stretch px-14 py-16 w-full bg-slate-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
//           <div className="flex-auto self-start text-3xl font-extrabold text-white leading-[75.02px] max-md:max-w-full">
//             LECTURER AVAILABILITY SYSTEM
//           </div>
//           <div className="flex flex-1 gap-5 items-center text-xl text-yellow-400 max-md:flex-wrap">
//             <div className="self-stretch my-auto font-bold">HOME</div>
//             <div className="flex-auto self-stretch my-auto">DASHBOARD</div>
//             <div className="flex-auto self-stretch my-auto">ROOM LAYOUT</div>
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/e760ac0834d83fde146ab0f99a8cfb2dcd574a33d353b6f7e77fe09fbc99f10e?"
//               className="shrink-0 self-stretch aspect-square w-[45px]"
//             />
//           </div>
//         </div>
//         <div className="flex relative gap-0 mt-12 max-w-full w-[462px] max-md:flex-wrap max-md:mt-10">
//           <div className="grow justify-center items-start px-3 py-3 text-xs bg-white text-neutral-400 w-fit max-md:pr-5">
//             Type the lecturer's name here
//           </div>
//           <div className="justify-center items-start px-5 py-2.5 text-base font-bold text-white whitespace-nowrap bg-yellow-400 max-md:pr-5">
//             SEARCH
//           </div>
//         </div>
//         <div className="relative px-5 mt-10 w-full max-w-[1285px] max-md:mt-10 max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//             <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
//               <div className="flex relative flex-col grow py-3 w-full text-xs font-semibold text-black rounded-md shadow-lg max-md:mt-10">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a6be1e191429191911723b6516080a5f364502dda0aae65bafecb6124d73823?"
//                   className="self-end w-7 aspect-[1.12] fill-orange-600 max-md:mr-2.5"
//                 />
//                 <img
//                   loading="lazy"
//                   srcSet="..."
//                   className="self-center mt-2 max-w-full aspect-[0.96] w-[147px]"
//                 />
//                 <div className="justify-center items-start px-4 py-3.5 mt-6 bg-white max-md:pr-5">
//                   Name : Budianto Wijaya
//                   <br />
//                   Lecturer Room : 2 <br />
//                   Availability Status : Teaching{" "}
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
//               <img
//                 loading="lazy"
//                 srcSet="..."
//                 className="grow w-full rounded-md shadow-lg aspect-[1.61] max-md:mt-10 max-md:max-w-full"
//               />
//             </div>
//             <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
//               <div className="flex relative flex-col grow pt-11 pb-3 w-full text-xs font-semibold text-black rounded-md shadow-lg max-md:mt-10">
//                 <img
//                   loading="lazy"
//                   srcSet="..."
//                   className="self-center max-w-full aspect-[0.97] w-[148px]"
//                 />
//                 <div className="justify-center items-start px-4 py-3.5 mt-6 bg-white max-md:pr-5">
//                   Name : Anindya Reizana <br />
//                   Lecturer Room : 4<br />
//                   Availability Status : Available
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
//               <div className="flex relative flex-col grow pt-11 pb-3 w-full text-xs font-semibold text-black rounded-md shadow-lg max-md:mt-10">
//                 <img
//                   loading="lazy"
//                   srcSet="..."
//                   className="self-center max-w-full aspect-[0.96] w-[147px]"
//                 />
//                 <div className="justify-center items-start px-4 py-3.5 mt-6 bg-white max-md:pr-5">
//                   Name : Soeswahyuni
//                   <br />
//                   Lecturer Room : 6<br />
//                   Availability Status : Not Available
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex relative z-10 gap-5 px-5 mt-10 w-full max-w-[1284px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
//           <div className="flex flex-col flex-1 items-center px-9 pt-11 pb-20 rounded-md shadow-lg max-md:px-5">
//             <img
//               loading="lazy"
//               srcSet="..."
//               className="aspect-[0.96] w-[147px]"
//             />
//           </div>
//           <div className="flex flex-col flex-1 pt-11 pb-3 text-xs font-semibold text-black rounded-md shadow-lg">
//             <img
//               loading="lazy"
//               srcSet="..."
//               className="self-center max-w-full aspect-[0.96] w-[147px]"
//             />
//             <div className="justify-center items-start p-3.5 mt-6 bg-white max-md:pr-5">
//               Name : Soeswahyuni
//               <br />
//               Lecturer Room : 6<br />
//               Availability Status : Not Available
//             </div>
//           </div>
//           <div className="flex flex-col flex-1 pt-11 pb-3 text-xs font-semibold text-black rounded-md shadow-lg">
//             <img
//               loading="lazy"
//               srcSet="..."
//               className="self-center max-w-full aspect-[0.97] w-[148px]"
//             />
//             <div className="justify-center items-start px-4 py-3.5 mt-6 bg-white max-md:pr-5">
//               Name : Anindya Reizana <br />
//               Lecturer Room : 4<br />
//               Availability Status : Available
//             </div>
//           </div>
//           <div className="flex flex-col flex-1 pt-11 pb-3 text-xs font-semibold text-black rounded-md shadow-lg">
//             <img
//               loading="lazy"
//               srcSet="..."
//               className="self-center max-w-full aspect-[0.97] w-[148px]"
//             />
//             <div className="justify-center px-3 py-3.5 mt-6 bg-white max-md:pr-5">
//               Name : Ahmad Rivaldi
//               <br />
//               Lecturer Room : 1<br />
//               Availability Status : Thesis guidance
//             </div>
//           </div>
//           <div className="flex flex-col flex-1 items-center px-9 pt-11 pb-20 rounded-md shadow-lg max-md:px-5">
//             <img
//               loading="lazy"
//               srcSet="..."
//               className="aspect-[0.96] w-[147px]"
//             />
//           </div>
//         </div>
//         <div className="flex relative gap-5 justify-between items-start self-stretch px-20 pt-9 pb-20 w-full text-xs font-semibold text-black max-md:flex-wrap max-md:px-5 max-md:max-w-full">
//           <div className="justify-center items-start px-4 py-3.5 bg-white max-md:pr-5">
//             Name : Anindya Reizana <br />
//             Lecturer Room : 4<br />
//             Availability Status : Available
//           </div>
//           <div className="justify-center items-start px-4 py-3.5 bg-white max-md:pr-5">
//             Name : Anindya Reizana <br />
//             Lecturer Room : 4<br />
//             Availability Status : Available
//           </div>
//         </div>
//       </div>
//     </div>
//     );
// }

// export default Student_Dashboard_Page;
