import React from 'react';

interface Job {
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  salary: string;
}

interface JobPostProps {
  job: Job;
}

const JobPost: React.FC<JobPostProps> = ({ job }) => {
  const { title, company, location, description, requirements, salary } = job;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600">{company} - {location}</p>
        </div>
        <div className="text-gray-600">
          {salary}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Requirements</h3>
        <ul className="list-disc list-inside text-gray-700">
          {requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobPost;
