import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Routes, Route, Link } from 'react-router-dom';
import JobAppliedShowingComponent from "./JobAppliedShowingComponent";
import JobPostedShowingComponent from "./JobPostedShowingComponent";
const JobAppliedComponent = (props) => {
    const user = props.user;
    const postedData = props.postedData;
    const jobsApplied = props.jobsApplied;
    const Data = (user.role === "Employer" ? postedData : jobsApplied);
    useEffect(() => {
        
    }, []);
    return (
        <>
            {user.role == 'Employer' && < JobPostedShowingComponent jobsPosted={postedData} />}
            {user.role != 'Employer' && < JobAppliedShowingComponent jobsApplied={jobsApplied} />}
        </>
    )
};

export default JobAppliedComponent;