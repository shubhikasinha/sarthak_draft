import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#030e29] text-white rounded-full px-10 py-4 shadow-lg mb-12">
      <ul className="flex items-center gap-8 text-sm font-bold tracking-wide">
        <li className="cursor-pointer hover:text-gray-300 transition-colors">Dashboard</li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors">Alumni</li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors">Jobs</li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors">Events</li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors">Campaigns</li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors">Success Stories</li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors">Surveys</li>
      </ul>
    </nav>
  );
};

export default Navbar;
