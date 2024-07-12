"use client"

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setUserTitle } from '@/store/slices/userFormSlice';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function page() {
    const isfreelancer = useAppSelector(state=>state.userForm.role)=='freelancer';
    const [title,setTitle] = useState('')
    const dispatch = useAppDispatch();
    const router = useRouter();
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setTitle(e.target.value);


        
    }


    const handleNext = ()=>{
       if(title)
       {
        dispatch(setUserTitle({title}))
        router.push('/signup')
       }
        
    }
  return (
    <div className='h-[100vh] w-full flex justify-center items-center'>
       <div className=' h-60 w-96  rounded-lg flex flex-col justify-center items-center gap-10'>
        <label className='text-3xl font-bold text-gray-800 '>{isfreelancer?'Title':'Business Title'} </label>
        <input placeholder={`Enter ${isfreelancer?'Title':'Business Title'}`} className= 'p-3 px-5 rounded-md bg-blue-50 border focus:bg-white focus:outline-none focus:border focus:border-blue-500' type="text" onChange={(event)=>handleChange(event)}/>
        <button onClick={handleNext} className='px-3 py-2 text-bold text-white bg-blue-500 rounded-lg'>Next</button>

       </div>
    
    </div>
  )
}

export default page