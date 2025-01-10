import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

const PopularBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get('https://assignment-11-server-zeta-liart.vercel.app/blogs'); 
        const sortedBlogs = data.sort((a, b) => b.longDescription.length - a.longDescription.length);
        const topBlogs = sortedBlogs.slice(0, 6);
        setBlogs(topBlogs);
      } catch (error) {
        console.error('Error fetching popular blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-xl lg:text-3xl mb-12 font-bold text-white bg-[#484848] w-fit mx-auto px-4 py-3 text-center">
          Popular Blogs
        </h2>
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">
            No popular blogs available. Please check back later!
          </p>
        )}
      </div>
    </div>
  );
};

export default PopularBlogs;
