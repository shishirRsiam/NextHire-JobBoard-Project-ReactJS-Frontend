import React, { useState, useEffect } from "react";
import LoadingPage from "../Authentication/LoadingPage";
import API from "../Authentication/API";
import UserProfile from "./UserProfile";

const ProfilePage = (props) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);
    const [jobsApplied, setJobsApplied] = useState([]);
    const [jobsPosted, setJobsPosted] = useState([]);

    const fetchUser = async () => {
        try {
            const response = await fetch("https://next-hire-api.vercel.app/api/auth/", {
                method: "POST",
                headers: {
                    "Authorization": `${localStorage.getItem("authToken")}`, // Fixed header
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({}),
            });
        
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        
            const data = await response.json();
        
            setUser(data.userData);
            setJobsApplied(data.appliedData);
            setJobsPosted(data.postedData);
            setLoading(false);
        } catch (error) {
            console.log("Error fetching user:", error);
        }
    };

    useEffect(() => {
        console.log("Token:", localStorage.getItem("authToken"));
        // setUser(props.user);
        // setLoading(false);
        // console.log('User:', user);
        
        fetchUser();
    }, []);

    return (
        <>
            {loading ? (
                <LoadingPage />
            ) : (
                <UserProfile user={user} jobsApplied={jobsApplied} postedData={jobsPosted}/>
            )}
        </>
    );
};

export default ProfilePage;