import Root from '@/layouts/root/RootLayout'
import Link from 'next/link'
import React from 'react'


function Home() {
  return (
   <Root>
     <div className="bg-gray-100 h-[70vh] flex flex-col items-center">
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <section className=" p-8  text-center mt-8 max-w-xl flex flex-col items-start justify-center gap-5">
<h1 className='text-4xl font-bold text-start'>Join our community and start</h1>
          <p className=" text-start text-xl text-gray-600">
             exploring a variety of job opportunities tailored for you.
          </p>
     
            <Link href={'./signup'} className="bg-blue-600 w-max text-white py-2 px-4 rounded-xl font-semibold hover:bg-blue-700 transition duration-300">
              Get Started
            </Link>
     
        </section>

        
      </main>

     
    </div>
   </Root>
  )
}

export default Home