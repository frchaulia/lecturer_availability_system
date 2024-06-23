// import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';

// export default NextAuth({
//   providers: [
//     Providers.Google({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     // Add other providers as needed
//   ],
//   // Optional SQL or MongoDB database to persist users
//   database: process.env.DATABASE_URL,
// });

// pages/api/auth/[...nextauth].ts

// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { BigQuery } from '@google-cloud/bigquery';

// const bigquery = new BigQuery();

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         identifier: { label: 'NIDN/NIM', type: 'text' },
//         password: { label: 'Password', type: 'password' },
//         type: { label: 'Type', type: 'text' }
//       },
//       async authorize(credentials) {
//         const { identifier, password, type } = credentials;

//         let query = '';
//         if (type === 'NIDN') {
//           query = `SELECT * FROM vertical-tuner-423007-m8.dataset_new_lectureattendance.login WHERE NIDN = @identifier AND password = @password`;
//         } else if (type === 'NIM') {
//           query = `SELECT * FROM vertical-tuner-423007-m8.dataset_new_lectureattendance.login WHERE NIM = @identifier AND password = @password`;
//         }

//         const options = {
//           query,
//           params: { identifier, password }
//         };

//         const [rows] = await bigquery.query(options);

//         if (rows.length === 1) {
//           return { id: rows[0].id_login, email: rows[0].email };
//         }

//         return null;
//       }
//     })
//   ],
//   pages: {
//     signIn: '/login'
//   }
// });
// import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';
// import { BigQuery } from '@google-cloud/bigquery';

// export default NextAuth({
//   providers: [
//     Providers.Credentials({
//       name: 'Credentials',
//       credentials: {
//         identifier: { label: "NIDN/NIM", type: "text" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         const { identifier, password } = credentials;

//         // Fetch user credentials from BigQuery
//         const bigquery = new BigQuery();
//         const query = `
//           SELECT *
//           FROM \`vertical-tuner-423007-m8.dataset_new_lectureattendance.login\`
//           WHERE NIDN = @identifier OR NIM = @identifier
//         `;
//         const options = {
//           query: query,
//           params: {
//             identifier: identifier,
//           },
//         };
//         const [rows] = await bigquery.query(options);

//         // Check if user exists and password matches
//         if (rows.length > 0 && rows[0].password === password) {
//           const user = {
//             id_login: rows[0].id_login,
//             email: rows[0].email,
//             password: rows[0].password,
//             NIM: rows[0].NIM,
//             NIDN: rows[0].NIDN,
//           };
//           // Return user object
//           return { id: user.NIDN || user.NIM, name: rows[0].name };
//         } else {
//           // Authentication failed
//           return null;
//         }
//       }
//     })
//   ],
//   callbacks: {
//     async session(session, user) {
//       session.user.id = user.id;
//       return session;
//     }
//   },
//   pages: {
//     signIn: '/auth/signin',
//   }
// });