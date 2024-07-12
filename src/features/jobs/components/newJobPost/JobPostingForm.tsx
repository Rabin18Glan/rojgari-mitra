"use client"
import React from "react";
import JobFormFields from "./JobFormFields";
import { useJobForm } from "../../hooks/useJobForm";

const JobPostingForm: React.FC = () => {
  const { formData, handleChange, handleSubmit } = useJobForm();

  return (
    <div className="bg-white min-h-screen p-5">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-black mb-6">Post a Job</h1>
        <form onSubmit={handleSubmit} className="bg-blue-50 p-6 rounded-lg shadow-lg">
          <JobFormFields formData={formData} handleChange={handleChange} />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobPostingForm;
