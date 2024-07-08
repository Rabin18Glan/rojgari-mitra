import MainLogo from '@/components/MainLogo';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white h-[20vh] p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <button className="text-gray-800 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
    <MainLogo  imageStyle='hidden' textStyle='text-xl'/>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-500 text-gray-800 font-bold px-4 py-2 rounded">Sign Up</button>
        <button className="text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4h13M8 20h13M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
