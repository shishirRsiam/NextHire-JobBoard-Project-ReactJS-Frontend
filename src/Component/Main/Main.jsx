import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';


const HomePage = () => {
    const navigate = useNavigate();
    console.log('HomePage');
    console.log(localStorage.getItem('authToken'));

    useEffect(() => {
        console.log('HomePage');
        console.log(localStorage.getItem('authToken'));

        // Check auth token and navigate
        if (localStorage.getItem('authToken')) {
            navigate('/feed/'); // Navigate programmatically without refresh
        }
    }, [navigate]);

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

            {/* How It Works Section */}
            <motion.section
                id="how-it-works"
                className="py-16 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="p-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <img src="/images/register.svg" alt="Register" className="mb-4 mx-auto" />
                            <h3 className="text-xl font-bold mb-4">Register</h3>
                            <p>Create an account and set up your profile to get started.</p>
                        </motion.div>

                        <motion.div
                            className="p-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <img src="/images/search.svg" alt="Search" className="mb-4 mx-auto" />
                            <h3 className="text-xl font-bold mb-4">Search</h3>
                            <p>Browse through curated job opportunities or candidate profiles.</p>
                        </motion.div>

                        <motion.div
                            className="p-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <img src="/images/hire.svg" alt="Hire" className="mb-4 mx-auto" />
                            <h3 className="text-xl font-bold mb-4">Hire</h3>
                            <p>Connect, collaborate, and hire the right talent with ease.</p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Blog Highlights Section */}
            <motion.section
                id="blog"
                className="py-16 bg-gray-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Blog Highlights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="bg-white shadow-lg rounded-lg p-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <h3 className="text-xl font-bold mb-4">5 Tips for Writing a Winning Resume</h3>
                            <p>Learn how to create a resume that stands out and gets noticed.</p>
                            <Link to="/blog/resume-tips" className="text-blue-500 hover:underline">Read More</Link>
                        </motion.div>

                        <motion.div
                            className="bg-white shadow-lg rounded-lg p-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                        >
                            <h3 className="text-xl font-bold mb-4">Top Interview Questions in 2025</h3>
                            <p>Prepare for your next interview with our expert tips and questions.</p>
                            <Link to="/blog/interview-questions" className="text-blue-500 hover:underline">Read More</Link>
                        </motion.div>

                        <motion.div
                            className="bg-white shadow-lg rounded-lg p-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                        >
                            <h3 className="text-xl font-bold mb-4">The Future of Remote Work</h3>
                            <p>Explore how remote work is evolving and what it means for you.</p>
                            <Link to="/blog/remote-work" className="text-blue-500 hover:underline">Read More</Link>
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
