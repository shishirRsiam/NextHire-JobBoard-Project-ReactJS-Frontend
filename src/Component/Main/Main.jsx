import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';  // Import motion from framer-motion

const HomePage = () => {
    return (
        <div className="">
            {/* Hero Section */}
            <motion.section
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-20"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="container mx-auto px-4 text-center mt-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Welcome to NextHire
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        Your ultimate platform to simplify hiring and job searching with cutting-edge tools.
                    </p>
                    <Link to="/login/" className="bg-yellow-400 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition">
                        Login
                    </Link>
                </div>
            </motion.section>

            {/* Features Section */}
            <motion.section
                id="features"
                className="py-16 bg-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Our Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="bg-white shadow-lg rounded-lg p-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <h3 className="text-xl font-bold mb-4">Smart Matching</h3>
                            <p>
                                Use AI-driven tools to match candidates with the best job opportunities.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white shadow-lg rounded-lg p-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            <h3 className="text-xl font-bold mb-4">Collaborative Hiring</h3>
                            <p>
                                Streamline team hiring decisions with real-time collaboration tools.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white shadow-lg rounded-lg p-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            <h3 className="text-xl font-bold mb-4">Analytics</h3>
                            <p>
                                Gain valuable insights with comprehensive analytics for hiring trends.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Testimonials Section */}
            <motion.section
                className="py-16 bg-blue-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            className="bg-white shadow-lg rounded-lg p-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <p className="italic">
                                "NextHire made our hiring process 10x faster and more efficient!"
                            </p>
                            <h4 className="font-bold mt-4">- John Doe, CEO</h4>
                        </motion.div>

                        <motion.div
                            className="bg-white shadow-lg rounded-lg p-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <p className="italic">
                                "The analytics feature provided us with game-changing insights."
                            </p>
                            <h4 className="font-bold mt-4">- Jane Smith, HR Manager</h4>
                        </motion.div>

                        <motion.div
                            className="bg-white shadow-lg rounded-lg p-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                        >
                            <p className="italic">
                                "The analytics feature provided us with game-changing insights."
                            </p>
                            <h4 className="font-bold mt-4">- Jane Smith, HR Manager</h4>
                        </motion.div>

                        <motion.div
                            className="bg-white shadow-lg rounded-lg p-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                        >
                            <p className="italic">
                                "The analytics feature provided us with game-changing insights."
                            </p>
                            <h4 className="font-bold mt-4">- Jane Smith, HR Manager</h4>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Call to Action */}
            <motion.section
                className="bg-indigo-500 text-white py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-lg mb-8">
                        Join thousands of businesses and professionals using NextHire today.
                    </p>
                    <Link to="register/" className="bg-yellow-400 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition">
                        Sign Up Now
                    </Link>
                </div>
            </motion.section>
        </div>
    );
};

export default HomePage;
