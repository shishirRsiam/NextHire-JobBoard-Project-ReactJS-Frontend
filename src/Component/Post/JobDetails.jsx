import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../Authentication/LoadingPage";
import NotFoundPage from "../Authentication/NotFoundPage";
import API from "../Authentication/API";
import { motion } from "framer-motion";
import ApplicationForm from "./ApplicationForm";

const JobDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [buttonName, setButtonName] = useState('Apply');
  const [loading, setLoading] = useState(true);
  const [canApply, setCanApply] = useState(true);
  const [error, setError] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchApply = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/post/apply/${jobId - 1552004}/`, {
          method: "POST",
          headers: {
            Authorization: `${localStorage.getItem("authToken")}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            job_id: jobId - 1552004,
            is_apply: false
          }),
        });


        if (!response.ok) {
          throw new Error(await response.text()); // Log error response
        }

        const data = await response.json();
        console.log('Fetch Successful:', data);

        setButtonName(data.button_name);
        setCanApply(data.can_apply);
      } catch (error) {
        console.error('Fetch Apply Error:', error);
        setError(true);
      }
    };
    const fetchJob = async () => {
      try {
        const response = await fetch(`${API.AddPostAPI}${jobId - 1552004}/`);
        const data = await response.json();
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        setLoading(false);
        setJob(data.job_post);
        setFetchedData(data);
      } catch (error) {
        setError(true);
        console.error("Error fetching job:", error);
      }
    };
    fetchJob();
    fetchApply();
  }, [jobId]);


  if (error) {
    return <NotFoundPage />;
  }

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <motion.div
      className="bg-gradient-to-b from-gray-50 to-gray-200 py-12"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}>
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-pink-500 to-pink-600 p-6 text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}>
          <h1 className="text-3xl font-extrabold">{job.title}</h1>
          <p className="text-sm mt-2">{job.company} • {job.location}</p>
          <p className="text-xs mt-1">Posted Date: {new Date(job.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })} - {new Date(job.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} • Deadline: {job.deadline}</p>
        </motion.div>

        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
            <span className="text-lg font-bold text-black-500">Salary: <span className="text-lg font-semibold text-pink-500">{job.salary}</span></span>
          </div>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }} >
            <h3 className="text-lg font-semibold text-gray-800">Description</h3>
            <p className="text-gray-600 mt-3 whitespace-pre-line">{job.description}</p>
          </motion.div>

          <motion.div
            className="flex justify-between sm:flex-row items-center gap-4 bg-white rounded-lg "
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}>
            <button className={`w-3xl sm:w-auto py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 ${canApply
                  ? "bg-gradient-to-r from-pink-500 to-red-500 text-white hover:scale-105 hover:shadow-xl"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"} flex items-center justify-center gap-2`}
              onClick={() => canApply && handleOpenModal()}
              disabled={!canApply}>
              {buttonName}
            </button>
            {isModalOpen && <ApplicationForm  handleCloseModal={handleCloseModal} isModalOpen={isModalOpen} jobId={jobId} />}
            <p
              className="text-sm sm:mt-1 text-gray-600 font-medium transition-opacity duration-500"
              style={{ opacity: fetchedData.total_applicants ? 1 : 0.7 }}>
              <span className="text-lg font-bold text-pink-500">
                {fetchedData.total_applicants}
              </span>{" "}
              Applicants
            </p>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default JobDetails;
