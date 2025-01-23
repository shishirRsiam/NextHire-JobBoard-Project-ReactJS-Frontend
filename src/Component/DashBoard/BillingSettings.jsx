import React from 'react';
import { motion } from 'framer-motion';


const BillingSettings = () => (
    <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold mb-2">Billing (ShowCase)</h2>
        <p className="mb-4">Current Plan: <p className="font-bold text-xl inline">Free</p></p>
        <button className="bg-green-500 text-white py-3 px-6 rounded-lg">Upgrade Plan</button>
    </motion.div>
);

export default BillingSettings;  