import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from "sweetalert2";
import ProccessingSwalAlert from '../SwalAlert/ProccessigSwalAlert';
import { a } from 'framer-motion/client';
import SuccessSwalAlert from '../SwalAlert/SuccessSwalAlert';

const sendEmailNotification = async (email, action) => {
    ProccessingSwalAlert();
    // Send email notification
    const api = 'https://next-hire-api.vercel.app/api/email/sent/?email_sent=reset_password'
    const response = await fetch(`${api}`, {
        method: 'GET',
        headers: {
            'Authorization': `${localStorage.getItem('authToken')}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify()
    });
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    SuccessSwalAlert({
        title: "Notification Sent",
        text: `An email notification regarding "Password Reset" has been successfully sent to: ${data.user.email}`,
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#4CAF50",
    });
};

const AccountSettings = () => {
    const [email, setEmail] = useState('user@example.com');

    const handleDeleteAccount = () => {
        Swal.fire({
            title: "Are you sure to delete your account?",
            text: "Once you delete your account, it cannot be recovered.",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, Delete",
            cancelButtonText: "No, Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Important Information",
                    text: "Please note that once an account is created, it cannot be deleted. We recommend proceeding with this understanding.",
                    icon: "info",
                    confirmButtonText: "Got It!",
                    confirmButtonColor: "#3085d6", 
                    iconColor: "#3498db", 
                    background: "#f4f6f9", 
                });
            }
        });
    };

    const handleResetPassword = () => {
        Swal.fire({
            title: "Are you sure to reset your password?",
            text: "You will receive an email to reset your password.",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, Send Reset Link",
            cancelButtonText: "No, Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                sendEmailNotification(email, 'password reset');
            }
        });
    };

    return (
        <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold mt-12">Account Settings</h2>

            <div className="space-x-8 flex">
                {/* Reset Password Button */}
                <div className="mt-6">
                    <button className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        onClick={handleResetPassword}>
                        Reset Password
                    </button>
                </div>

                {/* Delete Account Button */}
                <div className="mt-6">
                    <button className="bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        onClick={handleDeleteAccount}>
                        Delete Account
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default AccountSettings;
