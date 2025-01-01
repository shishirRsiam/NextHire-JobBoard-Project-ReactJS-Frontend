import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ResumeAndBioComponent from "./ResumeAndBioComponent";
import SuccessSwalAlert from "../SwalAlert/SuccessSwalAlert";
import ProccessingSwalAlert from "../SwalAlert/ProccessigSwalAlert";
import { text } from "framer-motion/client";

const EditProfileModal = ({ isOpen, toggleModal, user }) => {
  if (!isOpen) return null;

  const [bio, setBio] = useState(user.bio);
  const [newSkill, setNewSkill] = useState("");
  const [allSkills, setAllSkills] = useState([]);
  const [skills, setSkills] = useState(user.skill);
  const [resume, setResume] = useState(user.resume);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchskills = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/categories/");
        const data = await response.json();
        setAllSkills(data);
        console.log('All Skills data ->', data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchskills();
  }, []);

  const fetchUpdatedUserData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/update/profile/", {
        method: "POST",
        headers: {
          Authorization: `${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          skill: skills.map((skill) => skill.id),
          resume: resume,
          bio: bio,
        }),
      });
      if (!response.ok) {
        console.error("Failed to update user data");
      }
      SuccessSwalAlert({ text: 'Profile updated successfully.' });
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const fetchAddNewSkills = async (skill) => {
    try {
      const response = await fetch("http://localhost:8000/api/categories/", {
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

    console.log('value ->', value);

    if (value.trim()) {
      const filteredSuggestions = allSkills.filter((skill) => {
        console.log('skill ->', skill.name, 'value ->', value);
        return skill.name.toLowerCase().includes(value);
      });
      console.log('filteredSuggestions ->', filteredSuggestions);
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
      console.log('newSkill ->', newSkill);
    }
  };

  const handleSave = () => {
    ProccessingSwalAlert();
    console.log({ skills, resume, bio });
    fetchUpdatedUserData();
  };

  const selectSuggestion = (suggestedSkill) => {
    console.log('suggestedSkill ->', suggestedSkill);
    if (!skills.some(skill => skill.id === suggestedSkill.id)) {
      // If it's not already added, add it to the skills array
      setSkills([...skills, suggestedSkill]);
    }
    setNewSkill("");
    setSuggestions([]);
  };

  const handleCheckAllReadyAdded = (suggestion) => {
    console.log('suggestion ->', suggestion);
    return skills.some((skill) => skill.name === suggestion.name);
  }
  const handleCreateButton = () => {
    return !allSkills.some((skill) => skill.name === newSkill);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Profile</h2>
          <button onClick={toggleModal}
            className="text-gray-500 font-bold text-2xl hover:text-gray-700 focus:outline-none">
            &times;
          </button>
        </div>

        {/* Skills Section */}
        <div className="mb-4">
          <ResumeAndBioComponent resume={resume} setResume={setResume} bio={bio} setBio={setBio} />

          <h3 className="text-lg font-bold mb-2">Skills</h3>
          <div className="relative mb-4">
            <input type="text" value={newSkill} onChange={handleSkillChange}
              onKeyDown={handleKeyDown} placeholder="Add a skill"
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

        <div className="flex justify-between gap-4">
          <button onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400">
            Save
          </button>
          <button onClick={toggleModal}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-gray-400">
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EditProfileModal;