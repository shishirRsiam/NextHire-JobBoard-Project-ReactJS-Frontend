import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import SuccessSwalAlert from "../SwalAlert/SuccessSwalAlert";
import ErrorSwalAlert from "../SwalAlert/ErrorSwalAlert";
import ProccessingSwalAlert from "../SwalAlert/ProccessigSwalAlert";


const ApplicationForm = ({ handleCloseModal, isModalOpen, jobId }) => {
    const fetchApply = async (event) => {
        try {

            const response = await fetch(`http://localhost:8000/api/post/apply/${jobId - 1552004}/`, {
                method: "POST",
                headers: {
                    Authorization: `${localStorage.getItem("authToken")}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    job_id: jobId - 1552004,
                    is_apply: true,
                    description: event.description.value
                }),
            });


            if (!response.ok) {
                throw new Error(await response.text());
            }

            const data = await response.json();
            SuccessSwalAlert({
                title: data.title,
                text: data.message,
                next_url: '/profile/',
            });

        } catch (error) {
            console.error('Fetch Apply Error:', error);
            ErrorSwalAlert({
                icon: "warning",
                title: "Resume Required",
                text: "Please upload your resume in your profile before applying for jobs.",
            });
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure to apply for this job?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, Apply",
            cancelButtonText: "No, Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                handleCloseModal(false)
                ProccessingSwalAlert();
                fetchApply(event.target);
                event.target.reset();
            }
        });
    };
    return (
        <AnimatePresence>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
                    {/* Motion wrapper for modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-8 rounded-lg shadow-xl max-w-4xl w-full">
                        <h1 className="text-3xl font-bold mb-4">Apply for this Job</h1>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Description Field */}
                            <div className="flex flex-col">
                                <label htmlFor="description" className="font-semibold mb-1">Description</label>
                                <textarea required id="description" className="border border-gray-300 rounded-md p-2" rows="4"
                                    placeholder="Tell us about yourself or describe your experience"></textarea>
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
                                    Submit Application
                                </button>

                                <button onClick={handleCloseModal} className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200">
                                    Close
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ApplicationForm;
