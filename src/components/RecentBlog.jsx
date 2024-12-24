import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Blogs</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
     {
        blogs.map(blog=> <BlogCard blog={blog}></BlogCard>)
      }
     </div>
  
    </div>
  );
};

export default RecentBlog;
