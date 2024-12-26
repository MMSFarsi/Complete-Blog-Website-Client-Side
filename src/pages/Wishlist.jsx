import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; // Import toast
import useAxiosSecure from "../hooks/useAxiosSecure";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    function fetchWishlist() {
      if (user?.email) {
        axiosSecure.get(`/wishlist/${user?.email}`)
          .then(({ data }) => setWishlist(data));
      }
    }

    fetchWishlist();
  }, [user?.email]);

  const handleDelete = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/wishlist/${id}`);
      if (data.deletedCount > 0) {
        toast.success("Post removed from wishlist successfully!");
        setWishlist((prev) => prev.filter((item) => item._id !== id));
      }
    } catch (err) {
      toast.error("Failed to remove wishlist. Please try again.");
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
    <div className="min-h-screen p-0 lg:p-6">
      <h2 className="text-xl lg:text-3xl font-bold mb-8 text-white bg-[#484848] w-fit mx-auto px-4 py-3 text-center">
        Wishlist
      </h2>
      <div className="w-full">
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md text-sm md:text-base">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item) => (
              <tr key={item._id} className="border-t border-gray-200 hover:bg-gray-50">
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
                      onClick={() => toastDelete(item._id)} // Trigger the toast delete confirmation
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
      </div>
    </div>
  );
};

export default Wishlist;
