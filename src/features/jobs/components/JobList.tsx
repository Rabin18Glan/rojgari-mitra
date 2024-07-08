import React from 'react';
import JobPost from './JobPost'; // Adjust the path as per your project structure

interface Job {
    title: string;
    company: string;
    location: string;
    description: string;
    requirements: string[];
    salary: string;
  }
const JobPostList: React.FC = () => {
  // Example job data
  const jobs: Job[] = [
    {
      title: 'Frontend Developer',
      company: 'Tech Solutions Ltd.',
      location: 'New York, NY',
      description: 'We are looking for a skilled frontend developer to join our team...',
      requirements: ['Experience with React.js', 'Proficiency in HTML, CSS, JavaScript', 'Good communication skills'],
      salary: '$60,000 - $80,000 per year',
    },
    {
      title: 'UX/UI Designer',
      company: 'Creative Designs Inc.',
      location: 'San Francisco, CA',
      description: 'Join our design team to create stunning user interfaces for our clients...',
      requirements: ['Experience with Adobe XD or Sketch', 'Understanding of user-centered design principles'],
      salary: '$70,000 - $90,000 per year',
    },
    // Add more job posts as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Featured Jobs</h1>
      {jobs.map((job, index) => (
        <JobPost key={index} job={job} />
      ))}
    </div>
  );
};

export default JobPostList;
