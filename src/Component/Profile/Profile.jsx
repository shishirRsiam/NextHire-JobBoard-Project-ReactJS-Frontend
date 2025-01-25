import React, { useState, useEffect } from "react";
import LoadingPage from "../Authentication/LoadingPage";
import API from "../Authentication/API";
import UserProfile from "./UserProfile";

const ProfilePage = ({loading, user, jobsApplied, postedData}) => {

    const fetchUser = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/auth/", {
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

            console.log('User Profile Data ->', data);
        
            setUser(data.userData);
            setJobsApplied(data.appliedData);
            setJobsPosted(data.postedData);
            setLoading(false);
        } catch (error) {
            console.log("Error fetching user:", error);
        }
    };

    return (
        <>
            {loading ? (
                <LoadingPage />
            ) : (
                null
            )}
        </>
    );
};

export default ProfilePage;