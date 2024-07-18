"use client"

import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import axios from "axios";
import { LoaderIcon } from "react-hot-toast";
import JobLoading from "./JobLoading";
import JobSearchBar from "../JobSearchBar";

interface Job {
  _id: string;
  title: string;
  description: string;
  budget: string;
  postedDate: string;
  deadline: string;
  salaryType: string;
}

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading,setLoading]= useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("/api/jobs");
        console.log(response.data.data)

        setLoading(false)
       setJobs(response.data.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center gap-4"><h1 className="text-4xl font-bold text-black ">Jobs</h1>
      <JobSearchBar />
      </div>
{ !loading?jobs?
jobs.map((job) => (
      <JobCard
          key={job._id}
          title={job.title}
          description={job.description}
          budget={job.budget}
          postedDate={"job.postedDate"}
          deadline={"job.deadline"}
          salaryType={job.salaryType}
        />
   
      )):<div className="text-xl flext justify-center">No Job Available</div>:
      <JobLoading />
}
    </div>
  );
};

export default JobList;
