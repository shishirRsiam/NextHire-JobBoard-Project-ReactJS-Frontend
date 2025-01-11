import React from 'react';
import { motion } from 'framer-motion';

const ViewJobsApplication = ({ jobPost, applications }) => {
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
                <p className="text-sm mt-4">{jobPost.description}</p>
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
                        No applications yet.
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
                                <p className="text-sm text-gray-600 mt-2">
                                    Applied on: {new Date(application.created_at).toLocaleDateString()}
                                </p>
                                <div className="mt-4 text-sm">
                                    <p>{application.description}</p>
                                    <a target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mt-2 block"
                                        href={application.resume} >
                                        View Resume
                                    </a>
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
