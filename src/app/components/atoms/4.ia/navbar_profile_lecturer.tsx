import React from 'react';

const Navbar: React.FC = () => (
  <nav className="bg-gray-800 text-white py-4 px-6">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-xl font-bold">LECTURER AVAILABILITY SYSTEM</div>
      <ul className="flex space-x-6">
        <li><a href="#">HOME</a></li>
        <li><a href="#">DASHBOARD</a></li>
        <li><a href="#">ROOM LAYOUT</a></li>
        <li><a href="#">MY PROFILE</a></li>
        <li><a href="#">MY STATISTIC</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;