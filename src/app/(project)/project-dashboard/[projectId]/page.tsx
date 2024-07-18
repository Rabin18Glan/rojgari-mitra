
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Dashboard = ({params}) => {

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className='text-4xl font-bold p-5 '>Project {params.projectId} DashBoard </h1> 
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Planning</h2>
            <div className="flex items-center">
              <span className="bg-green-500 text-white px-2 py-1 rounded-lg">Completed</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Design</h2>
            <div className="flex items-center">
              <span className="bg-green-500 text-white px-2 py-1 rounded-lg">Completed</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Development</h2>
            <div className="flex items-center">
              <div className="relative w-full">
                <div className="w-full bg-gray-200 rounded-lg h-4">
                  <div className="bg-green-500 h-4 rounded-lg" style={{ width: '67%' }}></div>
                </div>
                <span className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-white font-bold">67%</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Testing</h2>
            <div className="flex items-center">
              <span className="bg-yellow-500 text-white px-2 py-1 rounded-lg">Waiting</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow col-span-2">
            <h2 className="text-xl font-bold mb-4">Projected Launch Date</h2>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">107 Days</span>
              <span className="text-xl text-gray-500">Friday, December 15</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow col-span-2">
            <h2 className="text-xl font-bold mb-4">Project Budget</h2>
            <div className="flex items-center justify-between">
              <div className="w-1/3">
                <div className="h-4 bg-gray-200 rounded-lg mb-2">
                  <div className="bg-green-500 h-4 rounded-lg" style={{ width: '60%' }}></div>
                </div>
                <div className="h-4 bg-gray-200 rounded-lg mb-2">
                  <div className="bg-black h-4 rounded-lg" style={{ width: '52%' }}></div>
                </div>
                <div className="h-4 bg-gray-200 rounded-lg">
                  <div className="bg-gray-400 h-4 rounded-lg" style={{ width: '48%' }}></div>
                </div>
              </div>
              <div className="w-2/3 text-right">
                <p className="text-xl font-bold">Total Budget: $52,000</p>
                <p className="text-lg text-gray-500">Remaining: $8,770</p>
                <p className="text-lg text-red-500">Currently: 8.1% Over Target</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow col-span-2 md:col-span-1">
            <h2 className="text-xl font-bold mb-4">Overdue Tasks</h2>
            <div className="space-y-2">
              {[
                { overdue: '1 Day', task: 'Update facebook profile', deadline: '2017-08-15', employee: 'Paula' },
                { overdue: '4 Days', task: 'Update testing plan', deadline: '2017-08-06', employee: 'Kate' },
                { overdue: '10 Days', task: 'Configure desktop', deadline: '2017-08-01', employee: 'Nancy' },
                { overdue: '24 Days', task: 'Set up new database', deadline: '2017-07-18', employee: 'Georg' },
              ].map(({ overdue, task, deadline, employee }) => (
                <div key={task} className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded-lg ${overdue === '1 Day' ? 'bg-red-500 text-white' : overdue === '4 Days' ? 'bg-yellow-500 text-white' : overdue === '10 Days' ? 'bg-red-700 text-white' : 'bg-red-900 text-white'}`}>{overdue}</span>
                  <span className="text-gray-700">{task}</span>
                  <span className="text-gray-500">{deadline}</span>
                  <span className="text-gray-700 font-bold">{employee}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow col-span-2 md:col-span-1">
            <h2 className="text-xl font-bold mb-4">Workload</h2>
            <div className="grid grid-cols-5 gap-2">
              {[
                { employee: 'Georg', workload: '67%' },
                { employee: 'Nancy', workload: '55%' },
                { employee: 'Richard', workload: '48%' },
                { employee: 'Kate', workload: '45%' },
                { employee: 'Paula', workload: '30%' },
              ].map(({ employee, workload }) => (
                <div key={employee} className="text-center">
                  <div className="h-4 bg-gray-200 rounded-lg mb-2">
                    <div className="bg-green-500 h-4 rounded-lg" style={{ width: workload }}></div>
                  </div>
                  <span className="text-gray-700 font-bold">{employee}</span>
                  <span className="block text-gray-500">{workload}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow col-span-2">
            <h2 className="text-xl font-bold mb-4">Upcoming Deadlines</h2>
            <div className="space-y-2">
              {[
                { employee: 'Kate', task: 'Update twitter profile', deadline: '2017-08-15', workload: '34%' },
                { employee: 'Georg', task: 'E-Commerce Dashboard', deadline: '2017-08-06', workload: '56%' },
                { employee: 'Nancy', task: 'Set up dev environment', deadline: '2017-08-01', workload: '15%' },
                { employee: 'Paula', task: 'Hire Data Scientist', deadline: '2017-07-18', workload: '11%' },
              ].map(({ employee, task, deadline, workload }) => (
                <div key={task} className="flex justify-between items-center">
                  <span className="text-gray-700 font-bold">{employee}</span>
                  <span className="text-gray-500">{task}</span>
                  <span className="text-gray-500">{deadline}</span>
                  <span className="text-gray-700 font-bold">{workload}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
