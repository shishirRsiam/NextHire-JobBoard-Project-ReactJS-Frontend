import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-16 px-6">
            <div className="container mx-auto text-center">
                {/* Animated Title */}
                <motion.h2
                    className="text-4xl font-bold text-gray-800 mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    About NextHire
                </motion.h2>

                {/* Animated Paragraph */}
                <motion.p
                    className="text-lg text-gray-600 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    **NextHire** is an innovative job board platform designed to streamline the hiring process for both companies and job seekers. Whether you're looking to fill a role or searching for your next opportunity, NextHire offers a user-friendly, efficient, and dynamic environment to connect talent with top employers.
                </motion.p>

                {/* Animated Mission Title and Text */}
                <motion.h3
                    className="text-3xl font-semibold text-gray-800 mb-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Mission
                </motion.h3>
                <motion.p
                    className="text-lg text-gray-600 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    At NextHire, our mission is to simplify the hiring experience by providing a platform where companies can find the right candidates quickly and efficiently. We aim to bridge the gap between employers and job seekers, making the recruitment process faster, smarter, and more transparent.
                </motion.p>

                {/* Key Features Section with Cards Animation */}
                <motion.h3
                    className="text-3xl font-semibold text-gray-800 mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Key Features
                </motion.h3>
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    {/* Animated Card 1 */}
                    <motion.div className="w-64 p-6 bg-white rounded-lg shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}>
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Job Listings</h4>
                        <p className="text-gray-600">
                            Browse through an extensive list of job opportunities across various industries. Each listing provides detailed information to help you make informed decisions.
                        </p>
                    </motion.div>

                    {/* Animated Card 2 */}
                    <motion.div
                        className="w-64 p-6 bg-white rounded-lg shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Company Profiles</h4>
                        <p className="text-gray-600">
                            Employers can create detailed profiles to showcase their company culture, values, and available job openings.
                        </p>
                    </motion.div>

                    {/* Animated Card 3 */}
                    <motion.div
                        className="w-64 p-6 bg-white rounded-lg shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">User-Friendly Interface</h4>
                        <p className="text-gray-600">
                            A clean, responsive design ensures that job seekers and employers can navigate the platform effortlessly, whether they are using a mobile device or desktop.
                        </p>
                    </motion.div>
                </div>

                {/* Animated Section for Why Choose */}
                <motion.h3
                    className="text-3xl font-semibold text-gray-800 mb-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Why Choose NextHire?
                </motion.h3>
                <motion.p
                    className="text-lg text-gray-600 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    NextHire is designed to bring together the best employers and the brightest talent. Whether you're a small startup looking for the next key team member or a job seeker aiming to land your dream job, NextHire provides a robust and supportive environment for all your hiring needs.
                </motion.p>

                {/* Final Outro Text */}
                <motion.p
                    className="text-lg text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    With a growing list of companies and job seekers, NextHire is more than just a job board—it's a community focused on professional growth, opportunity, and connection.
                </motion.p>
            </div>
        </div>
    );
};

export default About;
