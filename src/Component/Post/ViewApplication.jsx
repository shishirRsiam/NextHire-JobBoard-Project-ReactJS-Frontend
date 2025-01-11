import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../Authentication/LoadingPage";
import API from "../Authentication/API";

import ViewJobsApplication from "./ViewJobApplication";


const ViewApplication = () => {
    const { jobId } = useParams();
    const [loading, setLoading] = useState(true);
    const [jobPost, setJobPost] = useState(null);
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await fetch(`${API.AddPostAPI}${jobId - 1552004}/?is_application=1`);
                const data = await response.json();
                console.log('fetchApplications ->', data);
                setJobPost(data.job_post);
                setApplications(data.application);
                // setApplications(data.applications);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchApplications();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        console.log(jobId);
    }, [jobId])

    if (loading) return <LoadingPage />

    return (
        <>
            <ViewJobsApplication jobPost={jobPost} applications={applications} />
        </>
    )
}

export default ViewApplication;