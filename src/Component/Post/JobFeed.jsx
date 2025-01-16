import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from "framer-motion";
import API from "../Authentication/API";
import JobComponent from "./JobComponent";
import LoadingPage from "../Authentication/LoadingPage";
import DropdownFilter from "../SearchFilter/DropdownFilter";

const JobFeed = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [searchByApplied, setSearchByApplied] = useState('All');
  const [searchByProfile, setSearchByProfile] = useState('All');
  const [feedName, setFeedName] = useState('All Posts');

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API.AddPostAPI}`);
      const data = await response.json();
      setJobs(data.job_posts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchFilteredPosts = async () => {
    const api = `${API.AddPostAPI}?searchByApplied=${searchByApplied}&searchByProfile=${searchByProfile}`;
    try {
      const response = await fetch(api, {
        method: 'GET',
        headers: {
          'Authorization': ` ${localStorage.getItem('authToken')}`, 
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setJobs(data.job_posts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  useEffect(() => {
    fetchFilteredPosts();
  }, [searchByApplied, searchByProfile]);

  useEffect(() => {
    fetchPosts();
  }, []);


  return (

    <div className="bg-gray-100 my-5">
      {localStorage.getItem('authToken') &&
        <DropdownFilter
          setFeedName={setFeedName}
          searchByApplied={searchByApplied}
          setSearchByApplied={setSearchByApplied}
          setSearchByProfile={setSearchByProfile}
        />
      }
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 mb-8">{feedName} : {jobs.length}</h1>

        {loading && <LoadingPage />}

        {jobs.length > 0 && <div className="space-y-8">
          {jobs.map((job) => (
            <JobComponent key={job.id} job={job} />
          ))}
        </div>}
      </div>
    </div>
  );
};

export default JobFeed;
