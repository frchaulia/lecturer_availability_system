'use client'
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// function MyApp ({ Component, pageProps }:{ Component:any, pageProps:any }) {
//     return <Component {...pageProps} />;
// }
// export default MyApp;
// _app.tsx
import { SessionProvider } from "next-auth/react"
import Session from '@/app/api/auth/session';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Session>
        <Component {...pageProps} />
      </Session>
    </SessionProvider>
  );
}

export default MyApp;