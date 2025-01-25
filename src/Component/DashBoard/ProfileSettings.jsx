import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SuccessSwalAlert from '../SwalAlert/SuccessSwalAlert';
import { toast } from 'react-toastify';
import AccountSettings from './AccountSettings';

const ProfileSettings = ({ user, fetchUser }) => {
    const [formData, setFormData] = useState({
        username: user?.user?.username || '',
        first_name: user?.user?.first_name || '',
        last_name: user?.user?.last_name || '',
    });

    const [isEditable, setIsEditable] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Toggle readonly state
    const toggleEditable = () => {
        setIsEditable((prev) => !prev);
        if (!isEditable) {
            toast.success('You can now Edit Your information');
        } else {
            toast.error('You are in View Mode');
        }
    };


    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated User Data:', formData);
        const fetchUpdatedUserData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/update/profile/", {
                    method: "POST",
                    headers: {
                        Authorization: `${localStorage.getItem("authToken")}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        resone: 'user',
                        username: formData.username,
                        first_name: formData.first_name,
                        last_name: formData.last_name,
                    }),
                });
                if (!response.ok) {
                    console.error("Failed to update user data");
                }
                fetchUser();
                SuccessSwalAlert({ text: 'Profile updated successfully.', no_next_url: true });
            } catch (error) {
                console.error("Error updating user data:", error);
            }
        };
        fetchUpdatedUserData();
    };

    return (
        <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Account Settings</h2>
                <button onClick={toggleEditable} className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
                    {!isEditable ? 'Want to Edit Your Profile?' : 'Cancel'}
                </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Username</label>
                    <input
                        required
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        type="text"
                        readOnly={!isEditable}
                        className={`w-full border p-3 rounded-lg ${isEditable ? 'bg-white' : 'bg-gray-100'}`}
                        placeholder="Enter your username"
                    />
                </div>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block mb-1 font-medium">First Name</label>
                        <input
                            required
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            type="text"
                            readOnly={!isEditable}
                            className={`w-full border p-3 rounded-lg ${isEditable ? 'bg-white' : 'bg-gray-100'}`}
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block mb-1 font-medium">Last Name</label>
                        <input
                            required
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            type="text"
                            readOnly={!isEditable}
                            className={`w-full border p-3 rounded-lg ${isEditable ? 'bg-white' : 'bg-gray-100'}`}
                            placeholder="Enter your last name"
                        />
                    </div>
                </div>
                <button type="submit"
                    className={`bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 ${!isEditable && 'opacity-50 pointer-events-none'
                        }`}
                    disabled={!isEditable}>
                    Update Profile
                </button>
            </form>
            <AccountSettings />
        </motion.div>
    );
};

export default ProfileSettings;
