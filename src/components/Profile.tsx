"use client";
import { useAppSelector } from '@/store/hooks';
import React from 'react';

const Profile = () => {
    const {name,role} = useAppSelector(state=>state.auth.userData)
  return (
    <div className="flex items-center space-x-4 p-4 rounded-lg shadow-md">
      <h1
        className="w-12 h-12 rounded-full flex justify-center text-gray-700 text-3xl font-bold items-center bg-white"
      >{name&&name[0]}</h1>
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default Profile;
