'use client'

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const JobSearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e:any) => {
    e.preventDefault();
    // Implement your search logic here
    console.log(query);
  };

  return (

      <form onSubmit={handleSearch} className="flex  rounded-lg">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search jobs..."
          className="flex-grow p-2 text-gray-700 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="p-2 px-4 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
        <FaSearch className=''/>
        </button>
      </form>
  
  );
};

export default JobSearchBar;
