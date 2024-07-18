
import Profile from '@/components/Profile'
import { JobList } from '@/features/jobs'
import Root from '@/layouts/root/RootLayout'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleDown'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleRight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { ReactNode } from 'react'

function FindWorkLayout() {
  
  const options =[
    'Best Matches',
    'Most Recent',
    'Saved Jobs'
  ];

const userWorkInfo =[ 
  {
    id:1,
    name:'My Proposals',
    href:'/proposals',

  },
{
  id:2,
  name:'My Profile',
  href:'/profile',

},
{
  id:3,
  name:'My Projects',
  href:'/project-list'
}
]
  
  return (
   <Root>
<div className='lg:grid  lg:grid-cols-6'>    <div className=' lg:hidden'>
{userWorkInfo.map((info)=>{
  return   <Link key={info.id}  className='flex justify-between p-5 text-md font-semibold border-b hover:bg-gray-100' href={info.href!} >{info.name} <FontAwesomeIcon height={25} width={25} icon={faArrowAltCircleRight}  /></Link>
})}
   </div>
   <div className='mt-5 lg:col-span-4'>
   
    <JobList />
   </div>
   <div className=' lg:col-span-2 border-l'>
    <Profile />
{userWorkInfo.map((info)=>{
  return   <Link key={info.id}  className='flex justify-between p-5 text-md font-semibold border-b hover:bg-blue-100 duration-500 hover:shadow-lg' href={info.href!} >{info.name} <FontAwesomeIcon height={25} width={25} icon={faArrowAltCircleRight}  /></Link>
})}
   </div></div>
   </Root>
  )
}

export default FindWorkLayout