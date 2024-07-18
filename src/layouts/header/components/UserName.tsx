"use client"


import { useAppSelector } from '@/store/hooks'
import React from 'react'

function UserName() {
    const {name} = useAppSelector(state=>state.auth.userData);
  return (
    name&&<div className='shadow-xl hidden lg:block bg-blue-600 font-bold text-gray-100 rounded-full px-3 p-1'>{name[0]}</div>
  )
}

export default UserName