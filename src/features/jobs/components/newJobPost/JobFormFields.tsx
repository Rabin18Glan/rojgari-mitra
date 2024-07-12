import React from "react";

interface FormData {
  title: string;
  description: string;
  budget: string;
  postedDate: string;
  deadline: string;
  salaryType: string;
}

interface JobFormFieldsProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const JobFormFields: React.FC<JobFormFieldsProps> = ({ formData, handleChange }) => (
  <>
    <div className="mb-4">
      <label className="block text-black mb-2" htmlFor="title">Job Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-black mb-2" htmlFor="description">Job Description</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-black mb-2" htmlFor="budget">Budget</label>
      <input
        type="text"
        id="budget"
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-black mb-2" htmlFor="postedDate">Posted Date</label>
      <input
        type="date"
        id="postedDate"
        name="postedDate"
        value={formData.postedDate}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-black mb-2" htmlFor="deadline">Deadline</label>
      <input
        type="date"
        id="deadline"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-black mb-2" htmlFor="salaryType">Salary Type</label>
      <select
        id="salaryType"
        name="salaryType"
        value={formData.salaryType}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      >
        <option value="fixed">Fixed</option>
        <option value="hourly">Hourly</option>
      </select>
    </div>
  </>
);

export default JobFormFields;
