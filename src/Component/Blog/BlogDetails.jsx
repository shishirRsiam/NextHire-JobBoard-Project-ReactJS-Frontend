import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; // Import the markdown renderer
import { motion } from 'framer-motion'; // Import framer-motion for animations
import mockBlogs from './BlogDataBase';

const BlogDetails = () => {
  const { link } = useParams();
  const blog = mockBlogs.find((b) => b.link === link);

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  if (!blog) {
    return <div className="text-center text-xl font-bold text-red-500">Blog not found</div>;
  }

  return (
    <div className="break-words blog-details-container max-w-7xl mx-auto p-8 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-2xl rounded-2xl my-10">
      <motion.h1
        className="text-5xl font-extrabold text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {blog.title}
      </motion.h1>
      <motion.p
        className="text-xl text-white text-center mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        By {blog.author}
      </motion.p>
      <motion.p
        className="text-sm text-white opacity-70 text-center mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Published on {new Date(blog.date).toLocaleDateString()}
      </motion.p>

      <div className="mt-8">
        {/* Blog Excerpt Section */}
        <motion.div
          className="blog-excerpt bg-white bg-opacity-70 p-6 rounded-3xl shadow-md mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-gray-800">Excerpt</h2>
          <p className="text-base text-gray-700">{blog.excerpt}</p>
        </motion.div>

        {/* Full Content Section */}
        <motion.div
          className="blog-content bg-white bg-opacity-70 p-6 rounded-3xl shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Full Content</h2>
          {/* Render markdown content */}
          {/* <div className="w-full max-w-4xl mx-auto break-words p-4"> */}
            <ReactMarkdown className="text-base text-gray-700">
              {blog.content}
            </ReactMarkdown>
          {/* </div> */}

        </motion.div>
      </div>

      {/* Back to Blog List Button */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Link
          to="/blogs/"
          className="inline-block px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-full transform transition-all duration-300 hover:bg-indigo-700 hover:scale-105"
        >
          Back to Blog List
        </Link>
      </motion.div>
    </div>
  );
};

export default BlogDetails;
