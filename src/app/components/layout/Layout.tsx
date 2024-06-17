import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">LECTURER AVAILABILITY SYSTEM</header>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
