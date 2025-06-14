import React from 'react';
import { Link } from 'react-router-dom';
import blog from './BlogDataBase';
import { motion } from 'framer-motion';

const BlogComponent = ({ blog }) => {
    return (
        <div>
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
        </div>
    );
};

export default BlogComponent;