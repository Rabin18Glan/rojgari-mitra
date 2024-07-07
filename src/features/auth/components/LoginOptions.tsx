import Link from 'next/link'
import React from 'react'

function LoginOptions() {
    const options =[
        {
        name:'google',
        logo:'/google.png',
        href:''
        },
        {
            name:'facebook',
            logo:'/facebook.png',
            href:''
            },
            {
                name:'github',
                logo:'/github.png',
                href:''
                },
                {
                    name:'linkedin',
                    logo:'/linkedin.png',
                    href:''
                    }
    ]
  return (
  <div className=' flex  items-center justify-center gap-5'>
  { options.map((option)=>{
    return <Link href={option.href}>
        <img src={option.logo} alt="" className=' h-10 w-10' />
    </Link>
   })}</div>
  )
}

export default LoginOptions