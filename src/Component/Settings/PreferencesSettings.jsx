import React from 'react';
import { motion } from 'framer-motion';

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

export default PreferencesSettings;