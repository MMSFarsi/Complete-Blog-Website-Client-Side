import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

const RecentBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/blogs'); // Fetch all blogs
        // Sort blogs by createdAt in descending order
        const sortedBlogs = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        // Limit the results to the first 6 blogs
        const latestBlogs = sortedBlogs.slice(0, 6);
        setBlogs(latestBlogs);
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
              <BlogCard key={blog._id} blog={blog} />
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
