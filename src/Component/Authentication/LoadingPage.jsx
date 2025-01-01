import React from "react";

const LoadingPage = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-[70vh] bg-gray-100">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-opacity-75"></div>
                <h1 className="text-3xl font-semibold text-gray-800 mt-8">Loading...</h1>
            </div>
            </div>
        </div>
    );
};
export default LoadingPage;