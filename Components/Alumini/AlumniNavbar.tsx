'use client';

import React from 'react';

export default function AlumniNavbar() {
  const navItems = [
    { name: 'Alumni', href: '#' },
    { name: 'Messages', href: '#' },
    { name: 'Feed', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Donations', href: '#' },
    { name: 'Profile', href: '#' },
  ];

  return (
    // Outer container with white background
    <div className="w-full bg-white font-sans">
      
      {/* Inner container to center content and provide max-width */}
      <header className="max-w-[1440px] mx-auto w-full py-6 px-10 flex items-center justify-between">
        
        {/* --- Left Side: Logo --- */}
        <div className="flex-shrink-0">
          <img 
            src="sarthak.png" 
            alt="Sarthak Logo" 
            className="h-22 md:h-24 w-auto object-contain" 
          />
        </div>

        <nav className="hidden md:block bg-[#001339] text-white rounded-full px-16 py-3 shadow-2xl shadow-[#001145]/20 mt-2">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="text-[17px] font-bold tracking-wide hover:text-[#a5bcdc] transition-all duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Icon (Hidden on Desktop) */}
        <button className="md:hidden text-[#001145]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </header>
    </div>
  );
}