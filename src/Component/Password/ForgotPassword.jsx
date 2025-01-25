import React, { useState } from "react";
import { motion } from "framer-motion";
import ProccessingSwalAlert from "../SwalAlert/ProccessigSwalAlert";
import SuccessSwalAlert from "../SwalAlert/SuccessSwalAlert";
import ErrorSwalAlert from "../SwalAlert/ErrorSwalAlert";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            ProccessingSwalAlert('');

            const api = `http://127.0.0.1:8000/api/email/sent/?email_sent=forget_password&&email=${email}`;
            console.log('api ->', api);
            const response = await fetch(api, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(),
            });

            if (!response.ok) {
                const errorData = await response.json();
                ErrorSwalAlert({ text: errorData.error });
                return;
            }

            SuccessSwalAlert({ text: "Forget Password request has been successfully sent to your email address. Check your email for the Password reset link.", next_url: "/" });
        } catch (err) {
            console.error("Error during password reset:", err);
            ErrorSwalAlert({ text: "An error occurred. Please try again later." });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        >
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="bg-white my-14 p-8 rounded-lg shadow-lg w-full max-w-xl transform transition-all duration-300 hover:scale-105"
            >
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Forgot Password
                </h2>

                {error && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mb-4 text-red-600 bg-red-100 px-4 py-2 rounded border border-red-400"
                    >
                        {error}
                    </motion.div>
                )}

                <form onSubmit={handleSubmit}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-6"
                    >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            required
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your account email address"
                            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-400 focus:outline-none"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-6"
                    >
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:ring focus:ring-purple-400 focus:outline-none transform transition-all duration-300 hover:scale-105"
                        >
                            Send Reset Link
                        </button>
                    </motion.div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default ForgotPassword;
