
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
  name:'My Project Dashboard',
  href:'/project-dashboard'
}
]
  
  return (
   <Root>
    <div>
{userWorkInfo.map((info)=>{
  return   <Link key={info.id}  className='flex justify-between p-5 text-md font-semibold border-b hover:bg-gray-100' href={info.href!} >{info.name} <FontAwesomeIcon height={25} width={25} icon={faArrowAltCircleRight}  /></Link>
})}
   </div>
   <div className='mt-5'>
   
    <JobList />
   </div>
   </Root>
  )
}

export default FindWorkLayout