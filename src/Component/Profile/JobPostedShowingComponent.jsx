import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ProccessingSwalAlert from "../SwalAlert/ProccessigSwalAlert";
import SuccessSwalAlert from "../SwalAlert/SuccessSwalAlert";
import API from "../Authentication/API";

const JobPostedShowingComponent = ({ jobsPosted }) => {
    const fetchDelete = async (job) => {
        try {
            const response = await fetch(`${API.AddPostAPI}${job.id}/?is_delete=1`);
            const data = await response.json();
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            SuccessSwalAlert({ title: data.title, text: data.message, next_url: '/profile/' });
        } catch (error) {
            console.error("Error fetching job:", error);
        }
    }

    const handleDeleteJob = (job) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Are you sure to Detete '${job.title}' job?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, Delete",
            cancelButtonText: "No, Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                ProccessingSwalAlert();
                fetchDelete(job);
            }
        });
    };


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
                    <h2 className="text-xl font-bold text-gray-800">Jobs Posted</h2>
                    <h2 className="text-xl font-bold text-gray-800">Total Jobs Posted: {jobsPosted.length}</h2>
                </motion.div>

                {jobsPosted.length > 0 ? (
                    <div className="space-y-4">
                        {jobsPosted.map((job) => (
                            <motion.div
                                key={job.id}
                                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                initial={{ x: -100 }}
                                animate={{ x: 0 }}
                                transition={{ type: "spring", stiffness: 100 }}>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                                    <p className="text-sm text-gray-600">Salary: {job.salary} </p>
                                    <p className="text-sm text-gray-600">Company: {job.company} </p>
                                    <p className="text-sm text-gray-600"> Location: {job.location} </p>
                                    <p className="text-xs text-gray-500 mt-1">Applied on: {new Date(job.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })} - {new Date(job.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                                </div>
                                <div className="flex gap-4">
                                    <Link to={{
                                        pathname: "/edit/job/", }} state={{ existingJob: job }}
                                        className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-200">
                                        Edit Post
                                    </Link>
                                    <button onClick={() => handleDeleteJob(job)}
                                        className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-200">
                                        Delete Post
                                    </button>
                                    <Link to={`/job/${job.id + 1552004}/applications`}
                                        className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition duration-200">
                                        View Application
                                    </Link>

                                    <Link to={`/job/${job.id + 1552004}/`} className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
                                        View Details
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">No jobs posted yet.</p>
                )}
            </motion.div>
        </>
    );
};

export default JobPostedShowingComponent;