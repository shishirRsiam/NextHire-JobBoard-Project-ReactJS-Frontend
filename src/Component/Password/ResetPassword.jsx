import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProccessingSwalAlert from "../SwalAlert/ProccessigSwalAlert";
import SuccessSwalAlert from "../SwalAlert/SuccessSwalAlert";
import ErrorSwalAlert from "../SwalAlert/ErrorSwalAlert";

const ResetPassword = () => {
    const { uid, token } = useParams();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            setSuccess("");
            return;
        }
        // if (password.length < 6) {
        //     setError("Password must be at least 6 characters!");
        //     setSuccess("");
        //     return;
        // }

        const updatePassword = async () => {
            try {
                ProccessingSwalAlert();

                const api = 'http://127.0.0.1:8000/api/update/password/';
                const response = await fetch(api, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        password: password,
                        uid: uid,
                        token: token,
                    }),
                });

                if (!response.ok) {
                    const errorData = await response.json();  
                    ErrorSwalAlert({text:errorData.error});
                    return;
                }
                SuccessSwalAlert({text:'Password updated successfully!', next_url: '/'});
            } catch (error) {
                console.error('Error during password update:', error);
                ErrorSwalAlert({text:'An error occurred during password update. Please try again later.'});
            }
        };

        // Call the function
        updatePassword();


        setError("");
        console.log("New password submitted:", password);
    };

    return (
        <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="bg-white my-12 p-8 rounded-lg shadow-lg w-full max-w-xl transform transition-all duration-300 hover:scale-105">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Update Password
                </h2>

                {error && (
                    <div className="mb-4 text-red-600 bg-red-100 px-4 py-2 rounded border border-red-400">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="mb-4 text-green-600 bg-green-100 px-4 py-2 rounded border border-green-400">
                        {success}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {/* New Password Field */}
                    <div className="mb-6">
                        <label htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            New Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your new password"
                            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mb-6">
                        <label htmlFor="confirm-password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <input type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                        <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:ring focus:ring-purple-400 focus:outline-none transform transition-all duration-300 hover:scale-105">
                            Update Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;