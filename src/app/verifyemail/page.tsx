"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useEffect, useState } from 'react'

function VerifyEmailPage() {
    const [token,setToken] = useState("");
    const [verified,setVerified]= useState(false);
    const [error,setError] = useState(false);
// const router = useRouter()
    const verifyEmail = async ()=>{
        try{
            const response = await  axios.post("/api/users/verifyemail",{token})
            setVerified(true);
            setError(false)
        }
        catch(error:any)
        {
            setError(error.response.data)
        }
    }

    useEffect(()=>{
        setError(false);
const urlToken  = window.location.search.split('=')[1];
setToken(urlToken||"")
// const {query} = router;
// const urlToken = query.token;
// setToken(token||"")
    },[])

    useEffect(()=>{
        setError(false)
        if(token.length>0)
        {
            verifyEmail()
        }

    },[token])
  return (
    <div className='flex  flex-col items-center justify-center min-h-screen py-2'>

        <h1 className='text-4xl'>Verify Email</h1>
        <h2 className='p-2 bg-orange-400 text-white'>token:{token||"no token"}</h2>
        
{verified&&(
    <div>
        <h2>
            Verified
        </h2>
        <Link href='auth/login'/>

    </div>
)}
{error&&(
    <div>
        <h2>
     Error
        </h2>
       

    </div>
)}

    </div>
  )
}

export default VerifyEmailPage