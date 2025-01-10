import React from 'react';

const ViewJobsApplication = ({ jobPost, applications }) => {
    return (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
            {/* Job Post Details */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{jobPost.title}</h2>
                <p className="text-lg text-gray-600">{jobPost.company}</p>
                <p className="mt-4 text-gray-700">{jobPost.description}</p>
                <div className="mt-4 text-gray-600">
                    <p><strong>Location:</strong> {jobPost.location}</p>
                    <p><strong>Salary:</strong> {jobPost.salary}</p>
                    <p><strong>Type:</strong> {jobPost.type}</p>
                    <p><strong>Deadline:</strong> {jobPost.deadline}</p>
                </div>
            </div>

            {/* Applicants Section */}
            <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Applications</h3>
                {applications.length === 0 ? (
                    <p>No applications yet.</p>
                ) : (
                    <div className="space-y-4">
                        {applications.map(application => (
                            <div key={application.id} className="p-4 border border-gray-200 rounded-md shadow-sm">
                                <h4 className="text-lg font-bold text-gray-800">Applicant: User {application.user}</h4>
                                <p className="text-sm text-gray-600">Applied on: {new Date(application.created_at).toLocaleDateString()}</p>
                                <div className="mt-2">
                                    <p><strong>Job ID:</strong> {application.job.id}</p>
                                    <p><strong>Application ID:</strong> {application.id}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewJobsApplication;
