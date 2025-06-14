import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

import SuccessSwalAlert from "../SwalAlert/SuccessSwalAlert";


const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        SuccessSwalAlert({ title: "Success", text: "Message sent successfully." });
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-10">
            <motion.div
                className="bg-white rounded-lg shadow-lg p-8 md:p-12 w-full max-w-6xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Header Section */}
                <motion.h1
                    className="text-3xl text-center font-bold text-gray-800 mb-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Contact Us
                </motion.h1>


                {/* Static Info Section */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <div className="flex items-center space-x-4">
                        <FiMapPin className="text-blue-500 text-2xl" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Our Location</h3>
                            <p className="text-gray-600">Lalmonirhat Sadar, Bangladesh</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FiPhone className="text-blue-500 text-2xl" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                            <p className="text-gray-600">+880 13171-29349</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FiMail className="text-blue-500 text-2xl" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                            <p className="text-gray-600">shishir.siam01@gmail.com</p>
                        </div>
                    </div>
                </motion.div>


                <motion.p
                    className="text-gray-600 text-center mb-8 text-xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    Have questions or need help? Drop us a message and we’ll get back to you as soon as possible.
                </motion.p>

                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Write your message"
                            required
                        ></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </motion.div>
        </div>
    );
};

export default ContactUs;
