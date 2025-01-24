import React from "react";
import { Link } from "react-router-dom";

const SuggestComponent = (props) => {
    const job = props.job;

    // Helper to format the deadline date
    const formatDate = (date) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    return (
        <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2 text-gray-800">{job.title}</h2>
                {/* <p className="text-gray-600 mb-4">{job.description}</p> */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>📍 {job.location}</span>
                    <span>💼 {job.company}</span>
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="text-sm text-gray-700">
                    <p><strong>Salary:</strong> {job.salary}</p>
                    <p><strong>Type:</strong> {job.type}</p>
                    <p><strong>Deadline:</strong> {formatDate(job.deadline)}</p>
                </div>
            </div>
            <div className="px-6 py-4 border-t">    
                <Link to={`/job/${job.id + 1552004}`} className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 transform hover:translate-y-1 hover:scale-110">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default SuggestComponent;
