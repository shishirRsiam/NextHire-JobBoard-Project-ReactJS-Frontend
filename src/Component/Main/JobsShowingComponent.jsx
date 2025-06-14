import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const JobsShowingComponent = ({ jobs }) => {
    if (!jobs || jobs.length === 0) return null;

    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     });
    // }, []);

    return (
        <motion.div
            className="bg-gradient-to-b from-gray-50 to-gray-100 px-10 pt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Header Section */}
            <motion.div
                className="text-center mb-8"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <h1 className="text-4xl font-extrabold text-gray-800">
                    Featured Jobs
                </h1>
                <p className="text-lg text-gray-600">
                    Know your worth and find the job that qualifies your life.
                </p>
                <p className="text-2xl text-left font-semibold text-indigo-600 mt-6">
                    There Are {jobs?.length || 0} Postings Here For You!
                </p>
            </motion.div>

            {/* Jobs Listing */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}>
                {jobs?.slice(0, Math.min(20, jobs.length)).map((job) => (
                    <motion.div
                        key={job.id}
                        className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition-shadow"
                        whileHover={{ scale: 1.05 }}
                        variants={{
                            hidden: { y: 20, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}
                    >
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            {job.title}
                        </h3>
                        <p className="text-gray-500 text-sm">{job.company}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-indigo-600 font-medium">{job.location}</span>
                            <Link to={`/job/${job.id + 1552004}/`} className="text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                Details
                            </Link>
                        </div>
                    </motion.div>
                ))}


            </motion.div>
                <div className="text-center my-8">
                    <motion.div whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        <Link to="/feed/" className="text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg">
                            View All Jobs
                        </Link>
                    </motion.div>
                </div>
        </motion.div>
    );
};

export default JobsShowingComponent;
