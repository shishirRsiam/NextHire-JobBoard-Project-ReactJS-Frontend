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
                const response = await fetch(`${API.AddPostAPI}${jobId - 1552004}/?is_application=1`, {
                    method: "GET",
                    headers: {
                        Authorization: `${localStorage.getItem("authToken")}`,
                        "Content-Type": "application/json",
                    }
                });
                const data = await response.json();
                setJobPost(data.job_post);
                setApplications(data.application);
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
    }, [])

    if (loading) return <LoadingPage />

    return (
        <>
            <ViewJobsApplication jobPost={jobPost} applications={applications} setApplications={setApplications} />
        </>
    )
}

export default ViewApplication;