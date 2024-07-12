"use client"
import Root from '@/layouts/root/RootLayout'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Cookie from 'js-cookie';
import axios from 'axios'

function Home() {
useEffect(()=>{
  console.log(Cookie.get('token'))
})

const handleLogout = async()=>{
const response = await axios.get('/api/users/logout');
if(response.status === 200)
{
  localStorage.removeItem('auth');
  console.log("Login successful");
}
}
  return (
   <Root>
     <div className="bg-white h-[70vh] flex flex-col items-center">
      <main className="flex items-center ">
        <div className=" p-8  text-center mt-8 max-w-xl flex flex-col items-start justify-center gap-5">
<h1 className='text-4xl font-bold text-start'>Join our community and start</h1>
          <p className=" text-start text-xl text-gray-600">
             exploring a variety of job opportunities tailored for you.
          </p>
     
            <Link href={'./signup/set-role'} className="bg-blue-600 w-max text-white py-2 px-4 rounded-xl font-semibold hover:bg-blue-700 transition duration-300">
              Get Started
            </Link>
     
        </div>
        <div className='hidden  w-96 md:flex md:justify-center'>
          <img src="bg-3.jpeg" alt="" className='  h-fit w-fit' />
        </div>

        <button onClick={handleLogout}>LogOut</button>
      </main>

     
    </div>
    
   </Root>
  )
}

export default Home