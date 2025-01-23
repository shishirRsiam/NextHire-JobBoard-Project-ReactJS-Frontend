import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingPage from '../Authentication/LoadingPage';
import NotFoundPage from '../Authentication/NotFoundPage';
import AccountSettings from './AccountSettings';
import useAuth from '../Authentication/useAuth';
import ProfileSettings from './ProfileSettings';
import PrivacySettings from './PrivacySettings';
import NotificationSettings from './NotificationSettings';
import PreferencesSettings from './PreferencesSettings';
import BillingSettings from './BillingSettings';



const SettingsPage = () => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');

  const fetchUser = async () => {
    try {
      const response = await fetch("https://next-hire-api.vercel.app/api/auth/", {
        method: "GET",
        headers: {
          Authorization: `${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Fetched user ->', data.userData); // Log fetched user
      setUser(data.userData); // Update user state
      setAuthenticated(true);
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


  if (loading) return <LoadingPage />;
  if (!authenticated) return <NotFoundPage />;

  const tabs = [
    { id: 'profile', label: 'Profile & Account' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'preferences', label: 'Preferences' },
    { id: 'billing', label: 'Billing' },
    { id: 'privacy', label: 'Privacy' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings user={user} fetchUser={fetchUser} />;
      case 'notifications':
        return <NotificationSettings />;
      case 'preferences':
        return <PreferencesSettings />;
      case 'billing':
        return <BillingSettings />;
      case 'privacy':
        return <PrivacySettings />;
      default:
        return <ProfileSettings user={user} fetchUser={fetchUser} />;
    }
  };

  return (
    <div className="settings-page  flex bg-gray-50 min-auto-screen">
      <motion.aside className="ps-5 pb-10 w-1/4 bg-white shadow-lg p-4"
        initial={{ x: -10 }} animate={{ x: 0 }} transition={{ duration: 2 }} >
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
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
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {renderTabContent()}
        </motion.div>
      </motion.main>
    </div>
  );
};


export default SettingsPage;
