import { NextPage } from 'next';
import { useRouter } from 'next/navigation'; // corrected import path
import { useState, ChangeEvent, FormEvent } from 'react';

const LoginForm: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    if (email.trim() === '' || password.trim() === '') {
      setError('Please fill in both email and password fields.');
      return;
    }

    try {
      const res = await fetch('@/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        await router.push('/lecture/statistic'); // Redirect to dashboard after successful login
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Error logging in. Please try again.');
    }
  };

  // const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === 'Enter') {
  //     handleSubmit(event); // Pass event to handleSubmit
  //   }
  // };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          // onKeyDown={handleKeyDown} // Handle Enter key press
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
// cara rheno 1
// import axios from 'axios';

// import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
// import { useCallback, useState, ChangeEvent } from "react";

// interface LoginFormProps {
//   onSubmit: (identifier: string, password: string, type: string) => Promise<void>;
// }

// const LoginForm: NextPage = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState<string>('');

//    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setPassword(event.target.value);
//   };
//   const handleSubmit = async () => {
//     try {
//       if (email.trim() === '' || password.trim() === '') {
//         alert('Please fill in both username and password fields.');
//         return;
    
//   };

//   try {
//     const res = await fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     })
//   }
//   catch (error) {
//       console.error('Error logging in:', error);
//       alert('Error logging in. Please try again.');
//     }
//   };
//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={handleEmailChange}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={handlePasswordChange}
//           required
//         />
//         <button type="submit" onClick={handleSubmit}>Login</button>
//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// };


// export default LoginForm;
// // import React, { useState, ChangeEvent, FormEvent } from 'react';
// // import Card from '../atoms/loginform/card';
// // import Form from '../atoms/loginform/Form';
// // import TextInput from '../atoms/loginform/TextInput';
// // import Button from '../atoms/loginform/Button';

// // interface LoginFormProps {
// //   onSubmit: (identifier: string, password: string, type: string) => void;
// // }

// // const LoginForm = ({ onSubmit }: LoginFormProps): JSX.Element => {
// //   const [identifierType, setIdentifierType] = useState('NIDN');
// //   const [identifier, setIdentifier] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleIdentifierChange = (e: ChangeEvent<HTMLInputElement>) => setIdentifier(e.target.value);
// //   const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
// //   const handleIdentifierTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
// //     setIdentifierType(e.target.value);
// //     setIdentifier(''); // Clear the identifier input when type changes
// //   };

// //   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
// //     event.preventDefault();
// //     onSubmit(identifier, password, identifierType);
// //   };

// //   return (
// // <div className="margin-flex justify-center items-center min-h-screen bg-gray-200">
// //   <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 flex justify-center">
// //     <Card className="w-full max-w-md">
// //       <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
// //       <Form onSubmit={handleSubmit}>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium text-gray-700">Login as</label>
// //           <select className="border rounded-lg px-3 py-2 w-full mt-1" value={identifierType} onChange={handleIdentifierTypeChange}>
// //             <option value="NIDN">Lecturer (NIDN)</option>
// //             <option value="NIM">Student (NIM)</option>
// //           </select>
// //         </div>
// //         <div className="mb-4">
// //           <TextInput label={identifierType} value={identifier} onChange={handleIdentifierChange} required />
// //         </div>
// //         <div className="mb-6">
// //           <TextInput type="password" label="Password" value={password} onChange={handlePasswordChange} required />
// //         </div>
// //         <div className="flex justify-center">
// //           <Button type="submit">Sign In</Button>
// //         </div>
// //       </Form>
// //     </Card>
// //   </div>
// // </div>
// //   );
// // };

// // export default LoginForm;

// import React, { useState } from "react";

// interface LoginFormProps {
//   onSubmit: (identifier: string, password: string, type: string) => void;
// }

// const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
//   const [identifier, setIdentifier] = useState('');
//   const [password, setPassword] = useState('');
//   const [type, setType] = useState('nidn');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit(identifier, password, type);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="identifier">NIDN/NIM</label>
//         <input
//           id="identifier"
//           type="text"
//           value={identifier}
//           onChange={(e) => setIdentifier(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="type">Login Type</label>
//         <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
//           <option value="nidn">NIDN</option>
//           <option value="nim">NIM</option>
//         </select>
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default LoginForm;