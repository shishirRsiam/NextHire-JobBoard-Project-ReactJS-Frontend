import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import mockBlogs from './BlogDataBase';

const BlogPage = () => {

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6 md:px-10">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Latest Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
              whileHover={{ scale: 1.05, rotate: 3 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src={blog.img}
                  alt="Blog"
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h2 className="text-2xl font-semibold text-white">{blog.title}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-3">
                  By {blog.author} | {new Date(blog.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700 text-base mb-4">{blog.excerpt}</p>
                <Link
                  to={{
                    pathname: `/blog/${blog.link}`,
                    state: { blog },
                  }}
                  className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
