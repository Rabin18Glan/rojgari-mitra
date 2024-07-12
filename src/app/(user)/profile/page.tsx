"use client"
import React from 'react'


function page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-700">
      <div className="flex bg-gray-900 rounded-lg overflow-hidden shadow-lg max-w-4xl w-full">
        <div className="flex-1 p-10 text-white flex flex-col justify-center">
          <h1 className="text-4xl mb-4">Subscribe Now</h1>
          <h2 className="text-3xl text-blue-500 mb-4">to Our Newsletter</h2>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              required
              className="p-2 rounded-md text-black"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="p-2 rounded-md text-black"
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 rounded-md text-white hover:bg-blue-600"
            >
              Send
            </button>
          </form>
          <a href="https://www.graphicsfamily.com" className="mt-4 text-blue-400">
            www.graphicsfamily.com
          </a>
        </div>
        <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-gray-900 to-blue-700">
          <img src="bg-3.jpeg" alt="Man sitting on a couch" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  )
}

export default page