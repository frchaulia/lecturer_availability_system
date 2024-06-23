// import React from 'react';
// import { Availability, Lecturer } from '@/app/components/interfaces/schema'; // Assuming Availability interface is defined in this file

// interface Props {
//   availabilityRecords: Availability[];
//   lecture: Lecturer; // Assuming Lecturer interface is defined
// }

// const TableLectureRecord = ({ availabilityRecords, lecture }: Props): JSX.Element => {
//   return (
//     <div className="mt-10">
//       <div className="text-2xl text-yellow-400 font-semibold mb-4">
//         Availability Records
//       </div>
//       <table className="w-full border-collapse">
//         <thead>
//           <tr>
//             <th className="border-b border-gray-700 p-2 text-left">Date</th>
//             <th className="border-b border-gray-700 p-2 text-left">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {availabilityRecords.map((record) => (
//             <tr key={record.id_availability}>
//               <td className="border-b border-gray-700 p-2">{record.timetaken}</td>
//               <td className="border-b border-gray-700 p-2">{record.lecturer_status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableLectureRecord;

// import React from 'react';
// import { Availability, Lecturer } from '@/app/components/interfaces/schema'; // Assuming Availability interface is defined in this file

// interface Props {
//   availabilityRecords: Availability[];
//   lecture: Lecturer; // Assuming Lecturer interface is defined
// }

// const TableLectureRecord = ({ availabilityRecords, lecture }: Props): JSX.Element => {
//   return (
//     <div className="mt-10">
//       <div className="text-2xl text-yellow-400 font-semibold mb-4">
//         Availability Records
//       </div>
//       <table className="w-full border-collapse">
//         <thead>
//           <tr>
//             <th className="border-b border-gray-700 p-2 text-left">Date</th>
//             <th className="border-b border-gray-700 p-2 text-left">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {availabilityRecords.map((record) => (
//             <tr key={record.id_availability}>
//               <td className="border-b border-gray-700 p-2">{record.timetaken}</td>
//               <td className="border-b border-gray-700 p-2">{record.lecturer_status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableLectureRecord;

import React from 'react';
import { Availability, Lecturer } from '../../../interfaces/schema'; // Adjust the path based on your project structure

interface Props {
  availabilityRecords: Availability[];
  lecturer: Lecturer; // Assuming Lecturer interface is defined
}

const TableLectureRecord = ({ availabilityRecords = [], lecturer }: Props): JSX.Element => {
  return (
    <div className="mt-10">
      <div className="text-2xl text-yellow-400 font-semibold mb-4">
        Availability Records
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b border-gray-700 p-2 text-left">Date</th>
            <th className="border-b border-gray-700 p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {availabilityRecords.length > 0 ? (
            availabilityRecords.map((record) => (
              <tr key={record.id_availability}>
                <td className="border-b border-gray-700 p-2">{record.timetaken}</td>
                <td className="border-b border-gray-700 p-2">{record.lecturer_status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} className="border-b border-gray-700 p-2 text-center">No records available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableLectureRecord;