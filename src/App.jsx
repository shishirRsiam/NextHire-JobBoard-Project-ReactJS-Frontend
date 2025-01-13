import { useState, useEffect } from 'react';

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


function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/job/:jobId/applications" element={<ViewApplication />} />
        <Route path="/login/" element={<LoginPage />} />
        <Route path="/register/" element={<RegisterPage />} />
        <Route path="/feed/" element={<JobFeed />} />
        <Route path="/job/:jobId/" element={<JobDetails />} />
        <Route path="/settings/" element={<SettingsPage />} />
        {/* <Route path="/settings/" element={<LoadingPage />} /> */}
        <Route path="/about/" element={<LoadingPage />} />
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
