import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-gray-50 text-gray-700">
      <div className="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg">
        <div className="text-8xl">😿</div>
        <h1 className="text-5xl font-bold mt-6">Oops 404!</h1>
        <p className="text-lg mt-2 text-gray-500">
          We can’t seem to find the page you’re looking for.
        </p>
        <a href="/" className="mt-6 px-8 py-3 bg-pink-400 text-white text-lg font-medium rounded-full shadow hover:bg-pink-500 transition-all">
          Take Me Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
