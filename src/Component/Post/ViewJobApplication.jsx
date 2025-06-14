import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import ProccessingSwalAlert from '../SwalAlert/ProccessigSwalAlert';
import SuccessSwalAlert from '../SwalAlert/SuccessSwalAlert';


const ViewJobsApplication = ({ jobPost, applications, setApplications }) => {
    const acceptApplication = async (applicationId) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/post/${jobPost.id}/?is_accept=${applicationId}`);
            const data = await response.json();
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setApplications((prevApplications) =>
            prevApplications.map((application) => {
                if (application.id === applicationId) {
                    return { ...application, is_accepted: true };
                }
                return application;
            })
        );
    };

    const handleAcceptApplication = (applicationId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure to accept this application.",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, Accept",
            cancelButtonText: "No, Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                SuccessSwalAlert({ title: `Application Accepted`, text: 'You have accepted the application.', });
                acceptApplication(applicationId);
            }
        });
    }
    return (

        <motion.div
            className="my-5 max-w-7xl mx-auto bg-gradient-to-b from-gray-50 to-gray-200 py-12 px-6 rounded-3xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            {/* Job Post Details */}
            <motion.div
                className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white rounded-lg shadow-md"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}>
                <h2 className="text-3xl font-extrabold">{jobPost.title}</h2>
                <p className="text-lg mt-2">{jobPost.company}</p>
                {/* <p className="text-sm mt-4">{jobPost.description}</p> */}
                <div className="mt-4 text-sm">
                    <p><strong>Location:</strong> {jobPost.location}</p>
                    <p><strong>Salary:</strong> {jobPost.salary}</p>
                    <p><strong>Type:</strong> {jobPost.type}</p>
                    <p><strong>Deadline:</strong> {jobPost.deadline}</p>
                </div>
            </motion.div>

            {/* Applicants Section */}
            <div className="mt-8">
                <motion.h3
                    className="text-2xl font-semibold text-gray-800 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}>
                    Applications
                </motion.h3>
                {applications.length === 0 ? (
                    <motion.p
                        className="text-gray-600 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}>
                        No new applications yet.
                    </motion.p>
                ) : (
                    <motion.div
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}>
                        {applications.map(application => (
                            <motion.div
                                key={application.id}
                                className="p-6 bg-white rounded-lg shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.5 }}>
                                <h4 className="text-xl font-bold text-gray-800">
                                    Applicant: {application.user.first_name} {application.user.last_name}
                                </h4>
                                <p className="text-sm text-gray-600 mt-2 ">
                                    Applicant email: <p className="text-blue-600 underline inline font-bold">{application.user.email}</p>
                                </p>
                                <p className="text-sm text-gray-600 mt-2">
                                    Applied on: {new Date(application.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })} - {new Date(application.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}

                                </p>
                                <div className="mt-4 text-sm">
                                    <p>{application.description}</p>
                                    <div className="flex justify-between items-center">
                                        <a target="_blank" rel="noopener noreferrer"
                                            className="text-blue-500 font-bold hover:text-blue-700 mt-2 block rounded-lg border border-blue-500 px-4 py-2"
                                            href={application.resume}>
                                            View Resume
                                        </a>
                                        {application.is_accepted ? (
                                            <div className="text-green-600 font-bold bg-green-100 border border-green-400 rounded-lg px-4 py-2">
                                                Approved
                                            </div>
                                        ) : (
                                            <button className="text-black font-bold hover:text-blue-700 mt-2 bg-green-300 rounded-lg block border border-blue-500 px-4 py-2"
                                                onClick={() => handleAcceptApplication(application.id)}
                                            >
                                                Approve Application
                                            </button>
                                        )}
                                    </div>
                                </div>

                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default ViewJobsApplication;
