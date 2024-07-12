"use client"

import React, { FormEventHandler, useState } from 'react'
import { skillList } from '@/const/const'; 
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/hooks';
import { setUserSkills } from '@/store/slices/userFormSlice';

const SetSkills = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [skill, setSkill] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const dispatch =  useAppDispatch();
const router = useRouter()
  const addSkill = () => {
    console.log(skills);
    if (skill.trim() !== '' && !skills.includes(skill.trim())) {
      setSkills([...skills, skill.trim()]);
     
      setSkill('');
      setSuggestions([]);
    }
  };

  const handleNext =()=>{
    dispatch(setUserSkills({skills}));
    router.push('/signup/set-title');

  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSkill(value);
    if (value) {
      const filteredSuggestions = skillList.filter((s) =>
        s.toLowerCase().includes(value.toLowerCase()) && !skills.includes(s)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const selectSuggestion = (suggestion:string) => {
    setSkill(suggestion);
    setSuggestions([]);
  };

  const removeSkill = (skillToRemove:string) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  return (
    <div className="flex flex-col items-center justify-center h-auto bg-gray-100 py-6 sm:py-12">
      <h2 className="text-2xl font-bold mb-6">Set Your Skills</h2>
      <div className="flex items-center mb-4">
        <div className="relative w-80">
          <input
            type="text"
            value={skill}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            placeholder="Enter a skill"
          />
          {suggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => selectSuggestion(suggestion)}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          onClick={addSkill}
          className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add Skill
        </button>
      </div>
      <div className="w-full max-w-md">
        {skills.length > 0 && (
          <ul className="bg-white rounded-lg shadow divide-y divide-gray-200">
            {skills.map((skill, index) => (
              <li key={index} className="flex justify-between items-center p-4">
                <span>{skill}</span>
                <button
                  onClick={() => removeSkill(skill)}
                  className="px-2 py-1 text-red-500 rounded-lg shadow-sm hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    {!skills.length?<button onClick={handleNext} className='fixed top-80 bg-red-500 text-white p-2 px-3 rounded-lg shadow-lg'>I will do it later</button>:<button onClick={handleNext} className='shadow-lg bg-blue-500 text-white p-2 px-3 rounded-lg mt-5 font-bold'>next</button>}
    </div>
  );
};

export default SetSkills;
