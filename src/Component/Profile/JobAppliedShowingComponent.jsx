import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";

const JobAppliedShowingComponent = ({ jobs, reason }) => {
    return (
        <>
            <motion.div className="mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}>
                <motion.div
                    className="mb-4 flex justify-between items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}>
                    <h2 className="text-xl font-bold text-gray-800">Jobs {reason}</h2>
                    <h2 className="text-xl font-bold text-gray-800">Total Jobs {reason}: {jobs.length}</h2>
                </motion.div>

                {jobs.length > 0 ? (
                    <div className="space-y-4">
                        {jobs.map((job) => (
                            <motion.div
                                key={job.job.id}
                                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                initial={{ x: -100 }}
                                animate={{ x: 0 }}
                                transition={{ type: "spring", stiffness: 100 }}>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{job.job.title}</h3>
                                    <p className="text-sm text-gray-600">Salary: {job.job.salary} </p>
                                    <p className="text-sm text-gray-600">Company: {job.job.company} </p>
                                    <p className="text-sm text-gray-600"> Location: {job.job.location} </p>
                                    <p className="text-xs text-gray-500 mt-1">Applied on: {new Date(job.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })} - {new Date(job.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                                </div>
                                <div className="flex gap-4">
                                    <Link to={`/job/${job.job.id + 1552004}/`} className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
                                        View Details
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">No jobs '{reason}' yet.</p>
                )}
            </motion.div>
        </>
    );
};

export default JobAppliedShowingComponent;