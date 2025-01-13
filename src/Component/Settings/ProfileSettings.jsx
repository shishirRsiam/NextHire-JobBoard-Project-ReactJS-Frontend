import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProfileSettings = ({ user }) => {
    const [formData, setFormData] = useState({
        username: user?.user?.username || '',
        first_name: user?.user?.first_name || '',
        last_name: user?.user?.last_name || '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated User Data:', formData);
        // Add your save logic here (e.g., send data to an API)
    };

    return (
        <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Username</label>
                    <input
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        type="text"
                        className="w-full border p-3 rounded-lg"
                        placeholder="Enter your username"
                    />
                </div>
                {/* Flex container for First Name and Last Name */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block mb-1 font-medium">First Name</label>
                        <input
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            type="text"
                            className="w-full border p-3 rounded-lg"
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block mb-1 font-medium">Last Name</label>
                        <input
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            type="text"
                            className="w-full border p-3 rounded-lg"
                            placeholder="Enter your last name"
                        />
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-lg">
                    Save
                </button>
            </form>
        </motion.div>
    );
};

export default ProfileSettings;
