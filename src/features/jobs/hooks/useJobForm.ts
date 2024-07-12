"use client"

import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface FormData {
  title: string;
  description: string;
  budget: string;
  postedDate: string;
  deadline: string;
  salaryType: string;
}

export const useJobForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    budget: "",
    postedDate: "",
    deadline: "",
    salaryType: "fixed",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/jobs", formData);
      console.log(response.data.success);
      alert("Job posted successfully!");
      setFormData({
        title: "",
        description: "",
        budget: "",
        postedDate: "",
        deadline: "",
        salaryType: "fixed",
      });
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Failed to post job. Please try again.");
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};
