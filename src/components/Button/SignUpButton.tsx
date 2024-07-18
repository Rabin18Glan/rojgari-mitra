"use client";

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { logout } from '@/store/slices/authSlice';
import axios from 'axios'
import React from 'react'
import { useRouter } from 'next/navigation';
import { FaPowerOff } from 'react-icons/fa';
import Link from 'next/link';
// import Cookies from 'js-cookie';

interface UserData {
  user_id: string | null;
  name: string | null;
  email: string | null;
  role:string | null;

}
function SignUpButton() {
    const {loggedIn,userData} = useAppSelector(state=>state.auth);
    const dispatch = useAppDispatch();
    const handleLogout = async()=>{
      const response = await axios.get('/api/users/logout');
      if(response.status === 200)
      {
        localStorage.removeItem('auth');
        dispatch(logout())
        console.log("Login successful");
      }
      }



  return (
    loggedIn?<button onClick={handleLogout} className='bg-red-400 hover:bg-red-500 text-white rounded-lg font-bold px-4 py-2'><FaPowerOff /></button>:
    <div className='flex gap-3'>
      <Link href={'/login'} className="border-2 hover:border-blue-700 border-blue-500 text-blue-500 hover:text-blue-700 rounded-lg font-bold px-4 py-2 ">Log In</Link>
      <Link href={'/signup'} className="hidden lg:block hover:bg-blue-700 bg-blue-500 text-white rounded-lg font-bold px-4 py-2 ">Sign Up</Link>
    </div>
  )
}

export default SignUpButton