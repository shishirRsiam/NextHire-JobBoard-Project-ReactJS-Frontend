import React, { useState, useEffect, StrictMode } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './Component/Navbar/Navbar';
import FooterComponent from './Component/Footer/Footer';

import HomePage from './Component/Main/Main';
import LoginPage from './Component/Authentication/Login';
import RegisterPage from './Component/Authentication/Register';
import NotFoundPage from './Component/Authentication/NotFoundPage';
import ActivationPage from './Component/Authentication/AccountActivation';
import ProfilePage from './Component/Profile/Profile';
import LoadingPage from './Component/Authentication/LoadingPage';
import JobFeed from './Component/Post/JobFeed';
import JobDetails from './Component/Post/JobDetails';
import AddPostForm from './Component/Post/AddPostForm';
import ViewApplication from './Component/Post/ViewApplication';
import EditPostForm from './Component/Post/EditPostForm';
import DashBoardPage from './Component/DashBoard/DashBoardPage';
import ResetPassword from './Component/Password/ResetPassword';
import ForgotPassword from './Component/Password/ForgotPassword';
import BlogPage from './Component/Blog/BlogPage';
import BlogDetails from './Component/Blog/BlogDetails';
import ContactUs from './Component/Main/ContactUs';
import About from './Component/Main/About';


function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [jobsPosted, setJobsPosted] = useState([]);
  const [jobsApplied, setJobsApplied] = useState([]);
  const [activeTab, setActiveTab] = useState('profile');
  const [authenticated, setAuthenticated] = useState(false);

  const fetchUser = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/", {
        method: "POST",
        headers: {
          Authorization: `${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // setLoading(false);
      setAuthenticated(true);
      setUser(data.userData);
      setJobsPosted(data.postedData);
      setJobsApplied(data.appliedData);
    } catch (error) {
      console.error("Fetch error:", error);
      setAuthenticated(false);
    } finally {
      // setLoading(false);
      useAuth(setLoading, setUser);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <StrictMode >
      <div>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forgot/password/" element={<ForgotPassword />} />
        <Route path="/accounts/password/update/:uid/:token/" element={<ResetPassword />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/job/:jobId/applications" element={<ViewApplication />} />
        <Route path="/login/" element={<LoginPage />} />
        <Route path="/register/" element={<RegisterPage />} />
        <Route path="/feed/" element={<JobFeed />} />
        <Route path="/job/:jobId/" element={<JobDetails />} />
        <Route path="/dashboard/" element={<DashBoardPage />} />
        <Route path="/about/" element={<About />} />
        <Route path="/contact/us/" element={<ContactUs />} />
        <Route path="/blog/:link/" element={<BlogDetails />} />
        <Route path="/blogs/" element={<BlogPage />} />
        <Route path="/profile/" element={<ProfilePage />} />
        <Route path="/add/post/" element={<AddPostForm />} />
        <Route path="/edit/job/" element={<EditPostForm />} />
        <Route path="/accounts/activate/:id/:token" element={<ActivationPage />} />
      </Routes>
      <FooterComponent />
    </StrictMode>
  );
}

export default App;