import Link from 'next/link';
import React from 'react'

interface MainLogoProps{
  textStyle?:string;
  imageStyle?:string
}

function MainLogo({textStyle,imageStyle}:MainLogoProps) {
  return (
    <Link href={'/'} className="px-5 py-2 flex items-center gap-5">
            <img src="/Designer.png" alt="" className={`h-20 w-20 hidden md:block ${imageStyle}`}/>
            <h1 className={`text-3xl font-bold text-blue-600 ${textStyle}`}> Rojgari Mitra</h1>
        </Link>
  )
}

export default MainLogo