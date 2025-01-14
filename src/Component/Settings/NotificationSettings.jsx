import React from 'react';
import { motion } from 'framer-motion';


const NotificationSettings = () => (
    <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold mb-6">Notification Settings (ShowCase)</h2>
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

export default NotificationSettings;