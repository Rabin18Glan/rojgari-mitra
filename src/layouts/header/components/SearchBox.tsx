"use client";

import React, { useState, useRef, useEffect, RefCallback } from 'react';

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const searchBarRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center">
      
        <div
          ref={searchBarRef}
          className={`flex items-center justify-between border border-gray-300 rounded-full p-2 shadow-md bg-white`}
        >
          <span onClick={handleFocus} className="text-gray-500 cursor-pointer ">&#128269;</span>
          <input
            type="text"
            placeholder="Search"
            className={`${isFocused?'block':'hidden md:block'} outline-none focus:border-none focus:outline-none text-gray-700 w-20 md:w-auto`}
          />
          <select className={`${isFocused?'block':'hidden md:block'}`} name="targetOption" id="">
        
            <option value="">Talent</option>
            <option value="">Jobs</option>
          </select>
        </div>
    </div>
  );
};

export default SearchBar;
