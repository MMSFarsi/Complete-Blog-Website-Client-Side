import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';

const AllBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  const fetchAllBlogs = async () => {
    try {
      const { data } = await axios.get('http://localhost:4000/blogs');
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleAddToWishlist = (blog) => {
    console.log('Added to wishlist:', blog);

  };

 

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">All Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard    key={blog.id} blog={blog}></BlogCard> )
        ) : (
          <p className="text-gray-500">No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default AllBlog;
