import React, { useState } from "react";
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
        
            const api = `http://localhost:8000/api/email/sent/?email_sent=forget_password&&email=${email}`;
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
        <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="bg-white my-12 p-8 rounded-lg shadow-lg w-full max-w-xl transform transition-all duration-300 hover:scale-105">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Forgot Password
                </h2>

                {error && (
                    <div className="mb-4 text-red-600 bg-red-100 px-4 py-2 rounded border border-red-400">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input required type="email"
                            id="email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your account email address"
                            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-400 focus:outline-none"
                        />
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:ring focus:ring-purple-400 focus:outline-none transform transition-all duration-300 hover:scale-105">
                            Send Reset Link
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;