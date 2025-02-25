import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://assignment-11-server-zeta-liart.vercel.app/blogs");

      const sortedBlogs = data
        .map((blog, index) => ({
          id: blog._id,
          serialNumber: index + 1,
          title: blog.title,
          category: blog.category,
          longDescription: blog.longDescription,
        }))
        .sort((a, b) => b.longDescription.length - a.longDescription.length) 
        .slice(0, 10); 
      setBlogs(sortedBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      name: "Post No",
      selector: (row) => row.serialNumber,
      width: "25%",
      center: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      wrap: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      wrap: true,
    },
  ];

  return (
    <div className="max-w-screen-lg min-h-screen mx-auto p-6">
      <h1 className="text-xl lg:text-3xl mb-12 font-bold text-white bg-[#484848] w-fit mx-auto px-4 py-3 text-center rounded-tl-lg rounded-br-lg">
        Featured Blogs
      </h1>
      {blogs.length > 0 ? (
        <DataTable
          columns={columns}
          data={blogs}
          progressPending={loading}
          highlightOnHover
          striped
          responsive
          persistTableHead
        />
      ) : (
        <p className="text-gray-600 text-center">No blogs found.</p>
      )}
    </div>
  );
};

export default FeaturedBlogs;
