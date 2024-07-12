"use client"

import { useAppDispatch } from '@/store/hooks';
import { setRole } from '@/store/slices/userFormSlice';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaLaptop } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleRoleChange = (role:string) => {
    setSelectedRole(role);
   
  };

  const handleCreateAccount = ()=>{
    dispatch(setRole({role:selectedRole}))
    if(selectedRole == 'freelancer')
        {
            router.push('/signup/set-skills');
            
        }
        else{
            router.push('/signup/set-title');

        }
      

  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6 sm:py-12">
      <h2 className="text-2xl font-bold mb-6">Join as a client or freelancer</h2>
      <div className="flex space-x-4">
        <div
          className={`border-2 rounded-lg p-6 cursor-pointer ${
            selectedRole === 'client' ? 'border-blue-500' : 'border-gray-300'
          }`}
          onClick={() => handleRoleChange('client')}
        >
          <input
            type="radio"
            id="client"
            name="role"
            value="client"
            className="hidden"
            checked={selectedRole === 'client'}
            onChange={() => handleRoleChange('client')}
          />
          <label htmlFor="client" className="flex flex-col items-center">
            <svg
              className="w-10 h-10 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 7l5-5-5-5-5 5 5 5z"
              />
            </svg>
            <p className="font-semibold">I'm a client, hiring for a project</p>
          </label>
        </div>

        <div
          className={`border-2 rounded-lg p-6 cursor-pointer ${
            selectedRole === 'freelancer' ? 'border-blue-500' : 'border-gray-300'
          }`}
          onClick={() => handleRoleChange('freelancer')}
        >
          <input
            type="radio"
            id="freelancer"
            name="role"
            value="freelancer"
            className="hidden"
            checked={selectedRole === 'freelancer'}
            onChange={() => handleRoleChange('freelancer')}
          />
          <label htmlFor="freelancer" className="flex flex-col items-center">
           <FaLaptop  className="mb-4 text-4xl"/>
            <p className="font-semibold">I'm a freelancer, looking for work</p>
          </label>
        </div>
      </div>
      <button
        className={`mt-6 px-4 py-2 rounded-lg text-white ${
          selectedRole ? 'bg-blue-500' : 'bg-gray-300 cursor-not-allowed'
        }`}
        disabled={!selectedRole}
        onClick={handleCreateAccount}
      >
        Create Account
      </button>
      <p className="mt-4">
        Already have an account? <a href="/login" className="text-blue-500">Log In</a>
      </p>
    </div>
  );
};

export default RoleSelection;
