import React, { useState, useEffect } from 'react';
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
import SettingsPage from './Component/Settings/SettingPage';
import ResetPassword from './Component/Password/ResetPassword';
import ForgotPassword from './Component/Password/ForgotPassword';
import BlogPage from './Component/Blog/BlogPage';
import BlogDetails from './Component/Blog/BlogDetails';


function App() {
  return (
    <>
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
        <Route path="/settings/" element={<SettingsPage />} />
        <Route path="/blog/:link/" element={<BlogDetails />} />
        <Route path="/blogs/" element={<BlogPage />} />
        <Route path="/profile/" element={<ProfilePage />} />
        <Route path="/add/post/" element={<AddPostForm />} />
        <Route path="/edit/job/" element={<EditPostForm />} />
        <Route path="/accounts/activate/:id/:token" element={<ActivationPage />} />
      </Routes>
      <FooterComponent />

    </>
  );
}

export default App;
