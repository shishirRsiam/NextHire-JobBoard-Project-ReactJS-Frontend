import React, { useState } from "react";
import API from "../Authentication/API";
import { motion } from "framer-motion";

const JobPostForm = ({ existingJob, onSubmit }) => {
  const [formData, setFormData] = useState(
    existingJob || {
      title: "Frontend Developer",
      description: "Looking for a frontend developer with experience in React.js and CSS.",
      company: "JS Company",
      location: "Lalmonirhat, Bangladesh",
      deadline: "2024-12-31",
      salary: "50000",
      type: "Full Time",
    }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      return updatedData;
    });

  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      return updatedData;
    });

    const api = API.AddPostAPI;

    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Authorization": `${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),

      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      if (onSubmit) onSubmit(formData);
      alert("Job saved successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to save the job. Please try again.");
    }
  };


  const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-50 py-12">
      <motion.div
        className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          {existingJob ? "Edit Job" : "Add New Job"}
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <motion.div
            className="mb-4"
            variants={formFieldVariants}
            initial="hidden"
            animate="visible"
          >
            <label htmlFor="title" className="block text-gray-700 font-semibold">
              Job Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 mt-2"
              placeholder="Enter job title"
            />
          </motion.div>

          {/* Description */}
          <motion.div
            className="mb-4"
            variants={formFieldVariants}
            initial="hidden"
            animate="visible"
          >
            <label htmlFor="description" className="block text-gray-700 font-semibold">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 mt-2"
              rows="4"
              placeholder="Enter job description"
            ></textarea>
          </motion.div>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8 justify-between">
            {/* Company */}
            <motion.div
              className="w-full sm:w-1/2 mb-4"
              variants={formFieldVariants}
              initial="hidden"
              animate="visible"
            >
              <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter company name"
              />
            </motion.div>

            {/* Location */}
            <motion.div
              className="w-full sm:w-1/2 mb-4"
              variants={formFieldVariants}
              initial="hidden"
              animate="visible" >
              <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter job location (e.g. Remote, City, State)"
              />
            </motion.div>
          </div>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8 justify-between">
          {/* Salary */}
          <motion.div
            className="w-full mb-4"
            variants={formFieldVariants}
            initial="hidden"
            animate="visible"
          >
            <label htmlFor="salary" className="block text-gray-700 font-semibold">
              Salary
            </label>
            <input
              type="text"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 mt-2"
              placeholder="Enter salary (e.g. $70,000 - $90,000 per year or Negotiable)"
            />
          </motion.div>

          {/* Job Type */}
          <motion.div className="w-full mb-6"
            variants={formFieldVariants}
            initial="hidden"
            animate="visible" >
            <label htmlFor="type" className="block text-gray-700 font-semibold">
              Job Type
            </label>
            <select id="type" name="type" value={formData.type}
              onChange={handleChange} required
              className="w-full border border-gray-300 rounded-md p-3 mt-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>
          </motion.div>
          </div>

          {/* Deadline */}
          <motion.div
            className="mb-4"
            variants={formFieldVariants}
            initial="hidden"
            animate="visible"
          >
            <label htmlFor="deadline" className="block text-gray-700 font-semibold">
              Deadline
            </label>
            <input type="date" id="deadline" name="deadline"
              value={formData.deadline} onChange={handleChange} required
              className="w-full border border-gray-300 rounded-md p-3 mt-2"
              placeholder="Enter application deadline" />
          </motion.div>

          {/* Submit Button */}
          <motion.button type="submit" className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-200"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
            {existingJob ? "Update Job" : "Add Job"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default JobPostForm;
