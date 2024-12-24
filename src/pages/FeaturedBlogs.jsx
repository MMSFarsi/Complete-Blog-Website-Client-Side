import React, { useEffect, useState } from "react";
import axios from "axios";

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/blogs");
      const sortedBlogs = data.map((blog) => ({...blog,wordCount: blog.longDescription.split(" ").length, })).sort((a, b) => b.wordCount - a.wordCount).slice(0, 10);
      setBlogs(sortedBlogs);

    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Featured Blogs</h1>

      {blogs.length > 0 ? (
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Serial Number</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Author</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{blog.title}</td>
                <td className="border border-gray-300 px-4 py-2">{blog.postAuther}</td>
                <td className="border border-gray-300 px-4 py-2">{blog.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">No blogs found.</p>
      )}
    </div>
  );
};

export default FeaturedBlogs;
