import React, { useState, useEffect, StrictMode } from 'react';
import { motion } from 'framer-motion';
import LoadingPage from '../Authentication/LoadingPage';
import NotFoundPage from '../Authentication/NotFoundPage';
import AccountSettings from './AccountSettings';
import ProfileSettings from './ProfileSettings';
import PrivacySettings from './PrivacySettings';
import NotificationSettings from './NotificationSettings';
import PreferencesSettings from './PreferencesSettings';
import BillingSettings from './BillingSettings';
import ProfilePage from '../Profile/Profile';
import UserProfile from '../Profile/UserProfile';
import JobPostedShowingComponent from '../Profile/JobPostedShowingComponent';
import JobAppliedShowingComponent from '../Profile/JobAppliedShowingComponent';
import useAuth from '../Authentication/useAuth';
import { use } from 'react';

const SettingsPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [jobsPosted, setJobsPosted] = useState([]);
  const [jobsApplied, setJobsApplied] = useState([]);
  const [activeTab, setActiveTab] = useState('profile');
  const [authenticated, setAuthenticated] = useState(false);
  const [tabs , setTabs] = useState([
    { id: 'profile', label: 'Profile' },
    { id: 'appliedjobs', label: 'Applied Jobs' },
    { id: 'approvedjobs', label: 'Approved Jobs' },
    { id: 'accountsetting', label: 'Account Settings' },
  ]);

  const fetchUser = async () => {
    try {
      const response = await fetch("https://next-hire-api.vercel.app/api/auth/", {
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

      setLoading(false);
      setAuthenticated(true);
      setUser(data.userData);
      setJobsPosted(data.postedData);
      setJobsApplied(data.appliedData);
      console.log('User Data ->', data);

      setTabs([
        { id: 'profile', label: 'Profile' },
        ...(data.userData.role === "Employer" ? [{ id: 'postedjobs', label: 'Posted Jobs' }] : []),
        { id: 'appliedjobs', label: 'Applied Jobs' },
        { id: 'approvedjobs', label: 'Approved Jobs' },
        { id: 'accountsetting', label: 'Account Settings' },
      ]);
    } catch (error) {
      console.error("Fetch error:", error);
      setAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
    
  }, []);


  if (!localStorage.getItem("authToken")) return <NotFoundPage />;


  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <UserProfile loading={loading} user={user} />;
      case 'accountsetting':
        return <ProfileSettings user={user} fetchUser={fetchUser} />;
      case 'postedjobs':
        return <JobPostedShowingComponent jobsPosted={jobsPosted} />;
      case 'appliedjobs':
        return <JobAppliedShowingComponent jobsApplied={jobsApplied} />;
      case 'notifications':
        return <NotificationSettings />;
      case 'preferences':
        return <PreferencesSettings />;
      case 'billing':
        return <BillingSettings />;
      case 'privacy':
        return <PrivacySettings />;
      default:
        return <UserProfile loading={loading} user={user} />;
    }
  };

  {/* Jobs Applied Section */ }
  {/* <JobAppliedComponent jobsApplied={jobsApplied} user={user} postedData={jobsPosted}/> */ }


  return (
    <div className="settings-page flex bg-gray-50 min-auto-screen">
      <motion.aside className="ps-5 pb-10 w-1/5 bg-white shadow-lg p-4"
        initial={{ x: -10 }} animate={{ x: 0 }} transition={{ duration: 2 }} >
        <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <motion.li key={tab.id}
              className={`p-3 rounded-lg cursor-pointer text-center font-medium relative ${activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                transition: { type: "spring", stiffness: 200 }
              }}>
              {tab.label}
            </motion.li>
          ))}
        </ul>
      </motion.aside>

      {/* Main Content Area */}
      <motion.main className="w-3/4 p-6"
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}>
        <motion.div className="bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}>
          {renderTabContent()}
        </motion.div>
      </motion.main>
    </div>
  );
};


export default SettingsPage;
