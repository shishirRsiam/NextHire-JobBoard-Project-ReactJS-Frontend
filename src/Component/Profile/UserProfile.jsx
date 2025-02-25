import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import EditProfileModal from "./EditProfileModal";
import LoadingPage from "../Authentication/LoadingPage";

const UserProfile = ({ loading, user }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen((prev) => !prev);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (loading) return <LoadingPage />;

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>

            {/* Profile Section */}
            <div className="flex justify-center content-center">
                {/* Profile Picture */}
                <div className="flex-shrink-0">
                    <div className="relative inline-block">
                        {user.profilePic ? (
                            <img src={user.profilePic} alt="Profile"
                                className="w-40 h-40 rounded-full shadow-lg border-4 border-blue-500"/>
                        ) : (
                            <div className="w-60 h-60 flex items-center justify-center rounded-full shadow-lg border-4 border-blue-500 bg-gray-200 text-gray-700 text-8xl  font-bold"
                                style={{ backgroundColor: "#E5E7EB" }}>
                                {`${user.user.first_name[0]}${user.user.last_name[0]}`.toUpperCase()}
                            </div>
                        )}
                        <span className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                </div>

                {/* User Details */}
                <motion.div className="ml-10 flex-grow">
                    <h1 className="text-3xl font-extrabold text-gray-800">
                        {user.user.first_name} {user.user.last_name}
                    </h1>
                    <p className="text-md font-medium text-gray-500 italic">{user.role}</p>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">{user.bio}</p>
                    <div className="mt-4 flex flex-col sm:flex-row gap-4 text-sm">
                        <p className="flex text-lg items-center gap-2">
                            <span className="font-semibold text-gray-700">Username:</span>
                            <span className="text-gray-600">{user.user.username}</span>
                        </p>
                        <p className="flex text-lg items-center gap-2">
                            <span className="font-semibold text-gray-700">Email:</span>
                            <span className="text-blue-600 underline">{user.user.email}</span>
                        </p>
                    </div>
                    <p className="flex items-center gap-2 mt-2">
                        <span className="font-semibold text-gray-700">Joined:</span>
                        <span className="text-gray-600">{new Date(user.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })} - {new Date(user.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
                    </p>
                    {user.resume && (
                        <p className="flex items-center gap-2 mt-2">
                            <span className="font-semibold text-gray-700">Click to:</span>
                            <a target="_blank" href={user.resume} className="text-blue-600 underline">View Resume</a>
                        </p>
                    )}
                    {/* Skills and Interests Section */}
                    <motion.div className="mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.6 }}>
                        {user.skill.length > 0 && <h2 className="text-xl font-bold text-gray-800 mb-4">Skills and Interests</h2>}
                        <div className="flex flex-wrap gap-3">
                            {user.skill.map((skill) => (
                                <span key={skill.id}
                                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                    <div className="mt-6">
                        <button onClick={toggleModal} className="px-6 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all">
                            Update Resume, Bio, Skills and Interests
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Edit Profile Modal */}
            <EditProfileModal isOpen={isModalOpen} toggleModal={toggleModal} user={user} />

        </motion.div>
    );
};

export default UserProfile;
