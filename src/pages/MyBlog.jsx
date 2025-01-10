import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyBlog = () => {
    const {user}=useContext(AuthContext)
    const [blog, setBlog] = useState([]);
    const navigate=useNavigate()
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        if (user?.email) {
          fetch(`https://assignment-11-server-zeta-liart.vercel.app/blog/user/${user.email}`)
            .then((res) => res.json())
            .then((data) => setBlog(data))
            .catch((error) => console.error('Error fetching Blog:', error));
        }
      }, [user?.email]);

      const handleDelete = async (id) => {
        try {
          const { data } = await axiosSecure.delete(`/blog/${id}`);
          if (data.deletedCount > 0) {
            toast.success("Post removed  successfully!");
            setBlog((prev) => prev.filter((item) => item._id !== id));
          }
        } catch (err) {
          toast.error("Failed to remove Post. Please try again.");
        }
      };
    
      const toastDelete = (id) => {
        toast(
          (t) => (
            <div className="flex gap-3 items-start">
              <div>Are You Sure?</div>
              <div>
                <button
                  className="bg-red-400 text-white px-3 py-1 rounded-md mr-1"
                  onClick={() => {
                    handleDelete(id);
                    toast.dismiss(t.id); 
                  }}
                >
                  Yes
                </button>
                <button
                  className="bg-green-400 text-white px-3 py-1 rounded-md"
                  onClick={() => toast.dismiss(t.id)} 
                >
                  Cancel
                </button>
              </div>
            </div>
          )
        );
      };


      const handleViewDetails = (id) => {
        navigate(`/blog/${id}`);
      };


    
  return (
    <div className=" p-0 min-h-screen lg:p-6">
      <h2 className="text-xl lg:text-3xl font-bold mb-8 text-white bg-[#484848] w-fit mx-auto px-4 py-3 text-center">
        My Posted Blog
      </h2>
    {blog.length>0?
      <div className="w-full p-2 lg:px-0">
      <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md text-sm md:text-base">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left">Category</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blog.map((item) => (
            <tr key={item._id} className="border-t text-[10px] lg:text-sm border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-3 text-gray-800 font-medium">{item.title}</td>
              <td className="px-4 py-3 text-blue-500">{item.category}</td>
              <td className="px-4 py-3">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleViewDetails(item.blogId || item._id)}
                    className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-xs md:text-sm"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => toastDelete(item._id)} 
                    className="px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition text-xs md:text-sm"
                  >
                    Remove
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> :
    <>
      <p className="text-gray-600 text-center">No Blog found.</p>
    </>
    }
    </div>
  )
}

export default MyBlog