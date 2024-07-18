"use client";

import React, { useState, useRef, useEffect } from 'react';
import Navigations from '../Navigations';
import { useAppSelector } from '@/store/hooks';
import Profile from '@/components/Profile';

const Drawer = () => {

  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
    <button onClick={toggleDrawer} className="text-gray-800 block lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <button
            onClick={toggleDrawer}
            className="text-gray-400 hover:text-white"
          >
            Close
          </button>
        </div>
        <Profile />
        <div className="p-4 text-gray-400">
          <h2 className="text-lg font-semibold text-gray-100 ">Navigations</h2>
        <Navigations />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
