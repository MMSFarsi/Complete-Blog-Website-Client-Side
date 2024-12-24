import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

const RecentBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/blogs'); // API for fetching recent blogs
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching recent blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Recent Blogs
        </h2>
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">
            No recent blogs available. Please check back later!
          </p>
        )}
      </div>
    </div>
  );
};

export default RecentBlog;
