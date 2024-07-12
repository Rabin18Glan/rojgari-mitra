
import MainLogo from '@/components/MainLogo'
import { LoginForm, LoginOptions } from '@/features/auth'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='h-[100vh] bg-white flex flex-col '>
        <MainLogo />
      <div className=' w-full h-full grid grid-cols-2 p-5 '>
     <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center gap-5">
        <LoginForm />
       
        or continue with
       <LoginOptions />
        <div>
            
        </div>
        <hr className='w-[80%] mt-3 h-3' />
        <div className='flex flex-col justify-center items-center'>
            <h1>Don't have an acount</h1>
            <Link className=' text-blue-500 p-2 px-5 font-semibold rounded-xl' href='/signup'>Sign Up</Link>
        </div>
     </div>
     <div className="md:col-span-1 ">
        <div className="w-full h-full flex items-center bg-transparent rounded-lg  md:bg-[url('/Designer.jpeg')] md:bg-cover md:bg-center md:bg-no-repeat">

        </div>
     </div>

      </div>
    </div>
  )
}

export default page