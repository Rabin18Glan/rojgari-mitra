"use client"

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { logout } from '@/store/slices/authSlice';
import axios from 'axios'
import React from 'react'
import { useRouter } from 'next/navigation';
import { FaPowerOff } from 'react-icons/fa';
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
    const router = useRouter();

const handleClick = async ()=>{

    
    
    if(loggedIn)
    {
//        const response =  await axios.get('/api/users/logout');
//        if(response.status == 200)
//        {
// dispatch(logout());
router.push('/profile');

       }
    // }
    else{
        router.push('/signup')
        }
  
}


  return (
    <button onClick={handleClick} className="bg-blue-500 text-white rounded-lg font-bold px-4 py-2 ">{loggedIn?userData.name?.charAt(0):'Signup'}</button>
  )
}

export default SignUpButton