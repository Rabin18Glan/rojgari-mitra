import React from "react";
import { FaThumbsUp } from "react-icons/fa6";
import { FaStar, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
interface JobCardProps {
  title: string;
  description: string;
  budget: string;
  postedDate: string;
  deadline: string;
  salaryType: string;
}


const JobCard = ({ title, description, budget, postedDate, deadline, salaryType }:JobCardProps) => {
  return (
  <div className="flex max-w-sm mx-auto   shadow-lg rounded-lg overflow-hidden my-4 p-5 ">
      <div className="flex flex-col gap-3  ">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className=" flex flex-col px-6 pt-4 pb-2 gap-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Budget: ${budget}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Posted: 
          {/* {new Date(postedDate).toLocaleDateString()} */}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Deadline:
           {/* {new Date(deadline).toLocaleDateString()} */}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Salary Type: {salaryType}
        </span>
      </div>
      <button className="bg-blue-600 text-white font-semibold py-2 rounded-md">Apply</button>
    </div>
    <button className=" opacity-50 text-gray-100 hover:opacity-100"><FaRegThumbsUp className="text-blue-500 cursor-pointer text-3xl" />save</button>
   
  </div>
  );
};

export default JobCard;
