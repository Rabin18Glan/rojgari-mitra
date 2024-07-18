"use client"
import Link from 'next/link'
import React from 'react'

function Navigations() {
    const navItems = [
        
        {
            page:'/find-work',
            name:'Find Work'
        },
        {
            page:'/find-internship',
            name:'Find Internship'
        },
        {
            page:'/find-talents',
            name:'Find Talents'
        }
    ]
  return (
    <div className='flex gap-5 lg:flex-row flex-col'>{navItems.map((navItem)=>{
return <Link className='font-semibold hover:text-blue-700  border-b  md:border-none' href={navItem.page}>{navItem.name}</Link>
    })}</div>
  )
}

export default Navigations