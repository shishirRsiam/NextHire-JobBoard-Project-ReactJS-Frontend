import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';


const JobComponent = (props) => {
    const job = props.job;
    return (
        <div>
            <motion.div
                key={job.id}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
                initial={{ opacity: 0, y: 20 }} // Initial state (invisible and below)
                animate={{ opacity: 1, y: 0 }}   // Animate to full opacity and normal position
                transition={{ duration: 0.6 }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    <h2 className="text-xl font-semibold text-gray-800">{job.title} : {job.id}</h2>
                    <p className="text-sm text-gray-500">{job.company}  • {job.location}</p>
                    <p className="text-sm text-gray-500">Salary: {job.salary}</p>
                  </div>
                  <p className="text-xs text-gray-400">
                    <strong className="font-semibold text-gray-700">Posted Date: </strong> 
                    {new Date(job.created_at).toLocaleDateString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})} - {new Date(job.created_at).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true })}
                  </p>

                </div>

                <p className="text-gray-600 mb-4">{job.description.slice(0, 250)}.....</p>

                <div className="flex justify-between items-center">
                  <Link to={`/job/${job.id + 1552004}`} className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
                    View Details
                  </Link>
                  <p className="text-xs text-gray-500"><strong className="font-semibold text-gray-700">Deadline:</strong> {new Date(job.deadline).toLocaleDateString('en-US', { 
                    day: 'numeric', month: 'long', year: 'numeric' 
                  })}</p>
                </div>
              </motion.div>
        </div>
    );
}

export default JobComponent