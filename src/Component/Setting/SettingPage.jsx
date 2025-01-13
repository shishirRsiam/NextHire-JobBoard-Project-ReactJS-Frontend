import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingPage from '../Authentication/LoadingPage';
import NotFoundPage from '../Authentication/NotFoundPage';

const SettingsPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <LoadingPage />;

  if (!user) return <NotFoundPage />;


  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'account', label: 'Account' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'preferences', label: 'Preferences' },
    { id: 'billing', label: 'Billing' },
    { id: 'privacy', label: 'Privacy' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'account':
        return <AccountSettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'preferences':
        return <PreferencesSettings />;
      case 'billing':
        return <BillingSettings />;
      case 'privacy':
        return <PrivacySettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="settings-page  flex bg-gray-50 min-auto-screen">
      {/* Sidebar Navigation */}
      <motion.aside
        className="pb-10 w-1/4 bg-white shadow-lg p-4"
        initial={{ x: -10 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <motion.li
              key={tab.id}
              className={`p-3 rounded-lg cursor-pointer text-center font-medium relative ${activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                transition: { type: "spring", stiffness: 200 }
              }}
            >
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

// Individual Tab Components
const ProfileSettings = () => (
  <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
    <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
    <form className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input type="text" className="w-full border p-3 rounded-lg" placeholder="Enter your name" />
      </div>
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input type="email" className="w-full border p-3 rounded-lg" placeholder="Enter your email" />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-lg">Save</button>
    </form>
  </motion.div>
);

const AccountSettings = () => (
  <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
    <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
    <button className="bg-red-500 text-white py-3 px-6 rounded-lg">Delete Account</button>
  </motion.div>
);

const NotificationSettings = () => (
  <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
    <h2 className="text-2xl font-bold mb-6">Notification Settings</h2>
    <div className="space-y-3">
      <label className="flex items-center">
        <input type="checkbox" className="mr-3" /> Enable Email Notifications
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-3" /> Enable Push Notifications
      </label>
    </div>
  </motion.div>
);

const PreferencesSettings = () => (
  <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
    <h2 className="text-2xl font-bold mb-6">Preferences</h2>
    <div className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Theme</label>
        <select className="w-full border p-3 rounded-lg">
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>
      <div>
        <label className="block mb-1 font-medium">Language</label>
        <select className="w-full border p-3 rounded-lg">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>
    </div>
  </motion.div>
);

const BillingSettings = () => (
  <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
    <h2 className="text-2xl font-bold mb-6">Billing</h2>
    <p className="mb-4">Current Plan: Free</p>
    <button className="bg-green-500 text-white py-3 px-6 rounded-lg">Upgrade Plan</button>
  </motion.div>
);

const PrivacySettings = () => (
  <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
    <h2 className="text-2xl font-bold mb-6">Privacy Settings</h2>
    <div className="space-y-3">
      <label className="flex items-center">
        <input type="checkbox" className="mr-3" /> Share my data with third parties
      </label>
    </div>
  </motion.div>
);

export default SettingsPage;
