import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Placeholder function for sending email (replace it with actual integration like EmailJS, SendGrid, etc.)
const sendEmailNotification = (email, action) => {
    // Here you can integrate with an email service like EmailJS, SendGrid, etc.
    console.log(`Email notification for ${action} sent to: ${email}`);
    alert(`Notification for ${action} has been sent to: ${email}`);
};

const AccountSettings = () => {
    const [email, setEmail] = useState('user@example.com'); // Example email, replace with actual user data

    const handleDeleteAccount = () => {
        const confirmed = window.confirm('Are you sure you want to delete your account?');
        if (confirmed) {
            sendEmailNotification(email, 'account deletion');
        }
    };

    const handleForgetPassword = () => {
        const confirmed = window.confirm('Do you want to reset your password?');
        if (confirmed) {
            sendEmailNotification(email, 'password reset');
        }
    };

    const handleChangePassword = () => {
        const confirmed = window.confirm('Do you want to change your password?');
        if (confirmed) {
            sendEmailNotification(email, 'password change');
        }
    };

    return (
        <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold">Account Settings</h2>

            <div className="space-x-4 flex">
                {/* Forget Password Button */}
                <div className="mt-6">
                    <button
                        className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        onClick={handleForgetPassword}
                    >
                        Forgot Password
                    </button>
                </div>

                {/* Change Password Button */}
                <div className="mt-6">
                    <button
                        className="bg-yellow-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        onClick={handleChangePassword}
                    >
                        Change Password
                    </button>
                </div>

                {/* Delete Account Button */}
                <div className="mt-6">
                    <button
                        className="bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        onClick={handleDeleteAccount}
                    >
                        Delete Account
                    </button>
                </div>
            </div>


        </motion.div>
    );
};

export default AccountSettings;
