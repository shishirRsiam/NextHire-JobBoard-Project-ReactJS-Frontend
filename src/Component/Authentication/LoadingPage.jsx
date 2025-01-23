import React from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
    return (
        <>
            <div className="flex items-center justify-center h-[70vh] bg-gray-100 rounded-xl">
                <motion.div className="flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}>
                    {/* Bouncing Loader */}
                    <motion.div className="rounded-full h-16 w-16 bg-blue-500 mb-8"
                        animate={{
                            y: [0, -20, 0], // Bounce effect
                        }}
                        transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    ></motion.div>

                    {/* Pulsating Dots */}
                    <div className="flex gap-2">
                        {[0, 1, 2].map((dot) => (
                            <motion.div
                                key={dot}
                                className="rounded-full h-4 w-4 bg-blue-500"
                                animate={{
                                    scale: [1, 1.5, 1],
                                }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    delay: dot * 0.2, // Staggered animation
                                }}
                            ></motion.div>
                        ))}
                    </div>

                    {/* Loading Text with Scale and Color Change */}
                    <motion.h1 className="text-3xl font-semibold text-gray-800 mt-8"
                        animate={{
                            scale: [1, 1.1, 1],
                            color: ["#000000", "#007bff", "#000000"], // Color cycle
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}>
                        Loading...
                    </motion.h1>
                </motion.div>
            </div>
        </>
    );
};

export default LoadingPage;
