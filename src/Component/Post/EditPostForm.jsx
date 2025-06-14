import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import API from "../Authentication/API";
import { motion } from "framer-motion";
import LoadingPage from "../Authentication/LoadingPage";
import NotFoundPage from "../Authentication/NotFoundPage";
import ProccessingSwalAlert from "../SwalAlert/ProccessigSwalAlert";
import SuccessSwalAlert from "../SwalAlert/SuccessSwalAlert";
import ErrorSwalAlert from "../SwalAlert/ErrorSwalAlert";


const EditPostForm = () => {
  const location = useLocation();
  const { existingJob } = location.state || {};
  const [formData, setFormData] = useState(existingJob);

  const [loading, setLoading] = useState(true);
  const [newSkill, setNewSkill] = useState("");
  const [allSkills, setAllSkills] = useState([]);
  const [skills, setSkills] = useState(existingJob.category);
  const [suggestions, setSuggestions] = useState([]);

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
    // formData.category = skills.map((skill) => skill.id);
    formData.category = skills.map((skill) => skill.id)
    const api = `${API.AddPostAPI}${existingJob.id}/`;
    ProccessingSwalAlert();
    try {
      const response = await fetch(`${api}`, {
        method: "PUT",
        headers: {
          "Authorization": `${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        ErrorSwalAlert({ title: 'Error', text: 'Failed to submit the form' });
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      SuccessSwalAlert({ title: 'Success', text: 'Job updated successfully.', next_url: '/dashboard/' });
    } catch (error) {
      console.error("Error submitting form:", error);
      ErrorSwalAlert({ title: 'Error', text: 'Failed to submit the form' });
      alert("Failed to update the job. Please try again.");
    }
  };

  const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchskills = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/categories/");
        const data = await response.json();
        setLoading(false);
        setAllSkills(data);
      } catch (error) {
        setNotFound(true);
        console.error("Error fetching categories:", error);
      }
    };
    fetchskills();
  }, []);

  const fetchAddNewSkills = async (skill) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/categories/", {
        method: "POST",
        headers: {
          Authorization: `${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: skill,
        }),
      });
      if (!response.ok) {
        console.error("Failed to create new skill:", skill);
      }
      const data = await response.json();
      setAllSkills([...allSkills, data]);
      setSkills([...skills, data]);
      setNewSkill("");
      setSuggestions([]);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleSkillChange = (e) => {
    const value = e.target.value;
    setNewSkill(value);


    if (value.trim()) {
      const filteredSuggestions = allSkills.filter((skill) => {
        return skill.name.toLowerCase().includes(value);
      });
      // Uncomment this to set suggestions dynamically
      setSuggestions(filteredSuggestions);
    } else {
      // Uncomment this to clear suggestions when input is empty
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };


  const selectSuggestion = (suggestedSkill) => {
    if (!skills.some(skill => skill.id === suggestedSkill.id)) {
      // If it's not already added, add it to the skills array
      setSkills([...skills, suggestedSkill]);
    }
  };

  const handleCheckAllReadyAdded = (suggestion) => {
    return skills.some((skill) => skill.name === suggestion.name);
  }
  const handleCreateButton = () => {
    return !allSkills.some((skill) => skill.name === newSkill);
  }

  if (loading) {
    return < LoadingPage />
  }
  if (!existingJob) {
    return <NotFoundPage />
  }

  return (
    <div className="bg-gray-50 py-12">
      <motion.div
        className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} >
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          {existingJob ? "Edit Job" : "Add New Job"}
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <motion.div className="mb-4" variants={formFieldVariants}
            initial="hidden" animate="visible" >
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
            <motion.div className="w-full sm:w-1/2 mb-4"
              variants={formFieldVariants} initial="hidden" animate="visible" >
              <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
                Company
              </label>
              <input type="text"
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
            <motion.div className="w-full mb-4"
              variants={formFieldVariants}
              initial="hidden" animate="visible" >
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

          <div>
            <h3 className="text-lg font-bold mb-2">Categories</h3>
            <div className="relative mb-4">
              <input type="text" value={newSkill} onChange={handleSkillChange}
                onKeyDown={handleKeyDown} placeholder="Add some Categories..."
                className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500" />
              {suggestions.length > 0 || (newSkill.trim() && !skills.includes(newSkill)) ? (
                <ul className="absolute bg-white border rounded-lg shadow-lg mt-1 w-full z-10">
                  {handleCreateButton() && newSkill.trim() && !skills.includes(newSkill) && (
                    <li onClick={() => fetchAddNewSkills(newSkill)} className="p-2 cursor-pointer bg-green-200 hover:bg-green-300 text-green-800 font-bold">
                      Create and Add: "{newSkill}"
                    </li>
                  )}
                  {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => selectSuggestion(suggestion)}
                      className="p-2 cursor-pointer hover:bg-gray-200">
                      {suggestion.name} {handleCheckAllReadyAdded(suggestion) && <span className="text-green-500 font-extrabold">✓</span>}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-2 mb-5 flex flex-wrap">
              {skills.map((skill, index) => (
                <div key={index} className=" bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">
                  <input type="text" value={skill.name} readOnly className="border-none bg-transparent focus:outline-none" />
                  <button
                    onClick={() => removeSkill(skill)}
                    className="text-red-500 font-bold ml-2 hover:text-red-700">
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>

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

export default EditPostForm;