import { SessionProvider, useSession } from 'next-auth/react';

interface SessionProps {
  children: React.ReactNode;
}

export default function Session({ children }: SessionProps) {
  const { data: session } = useSession();

  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
